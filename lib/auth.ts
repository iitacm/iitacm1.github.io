import bcrypt from 'bcryptjs';
import { neon } from '@neondatabase/serverless';

// Database connection
const sql = neon(process.env.ACM_IIT_POSTGRES_DATABASE_URL!);

export interface User {
  id: number;
  username: string;
  password_hash: string;
}

export interface Session {
  id: number;
  session_id: string;
  user_id: number;
  expires_at: Date;
}

// Password hashing utilities
export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 12;
  return await bcrypt.hash(password, saltRounds);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return await bcrypt.compare(password, hash);
}

// Session management
export async function createSession(userId: number): Promise<string> {
  const sessionId = generateSessionId();
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour from now
  
  await sql`
    INSERT INTO user_sessions (session_id, user_id, expires_at)
    VALUES (${sessionId}, ${userId}, ${expiresAt.toISOString()})
  `;
  
  return sessionId;
}

export async function getSession(sessionId: string): Promise<Session | null> {
  const sessions = await sql`
    SELECT * FROM user_sessions 
    WHERE session_id = ${sessionId} AND expires_at > CURRENT_TIMESTAMP
  `;
  
  if (sessions.length === 0) return null;
  
  const session = sessions[0];
  return {
    id: session.id,
    session_id: session.session_id,
    user_id: session.user_id,
    expires_at: new Date(session.expires_at)
  };
}

export async function deleteSession(sessionId: string): Promise<void> {
  await sql`
    DELETE FROM user_sessions WHERE session_id = ${sessionId}
  `;
}

export async function cleanupExpiredSessions(): Promise<void> {
  await sql`
    DELETE FROM user_sessions WHERE expires_at < CURRENT_TIMESTAMP
  `;
}

// User authentication
export async function authenticateUser(username: string, password: string): Promise<User | null> {
  const users = await sql`
    SELECT * FROM admin_users WHERE username = ${username}
  `;
  
  if (users.length === 0) {console.log('No user found'); return null;}
  
  const user = users[0];
  const isValidPassword = await verifyPassword(password, user.password_hash);
  
  if (!isValidPassword) {console.log('Invalid password'); return null;}
  
  return {
    id: user.id,
    username: user.username,
    password_hash: user.password_hash
  };
}

// Utility function to generate secure session ID
function generateSessionId(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

// Cookie utilities
export function setSessionCookie(sessionId: string): string {
  return `session=${sessionId}; HttpOnly; Secure; SameSite=Strict; Max-Age=3600; Path=/`;
}

export function clearSessionCookie(): string {
  return `session=; HttpOnly; Secure; SameSite=Strict; Max-Age=0; Path=/`;
}
