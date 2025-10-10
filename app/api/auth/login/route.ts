import { NextRequest, NextResponse } from 'next/server';
import { authenticateUser, createSession, setSessionCookie, cleanupExpiredSessions } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      );
    }

    // Clean up expired sessions
    await cleanupExpiredSessions();

    // Authenticate user
    const user = await authenticateUser(username, password);
    
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Create session
    const sessionId = await createSession(user.id);
    
    // Create response with session cookie
    const response = NextResponse.json(
      { message: 'Login successful', user: { id: user.id, username: user.username } },
      { status: 200 }
    );
    
    response.headers.set('Set-Cookie', setSessionCookie(sessionId));
    
    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
