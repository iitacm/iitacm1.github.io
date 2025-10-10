import { NextRequest, NextResponse } from 'next/server';
import { deleteSession, clearSessionCookie } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const sessionCookie = request.cookies.get('session');
    
    if (sessionCookie) {
      await deleteSession(sessionCookie.value);
    }

    const response = NextResponse.json(
      { message: 'Logout successful' },
      { status: 200 }
    );
    
    response.headers.set('Set-Cookie', clearSessionCookie());
    
    return response;
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
