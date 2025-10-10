import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const sessionCookie = request.cookies.get('session');
    
    if (!sessionCookie) {
      return NextResponse.json(
        { authenticated: false },
        { status: 401 }
      );
    }

    const session = await getSession(sessionCookie.value);
    
    if (!session) {
      return NextResponse.json(
        { authenticated: false },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { authenticated: true, session },
      { status: 200 }
    );
  } catch (error) {
    console.error('Session verification error:', error);
    return NextResponse.json(
      { authenticated: false },
      { status: 500 }
    );
  }
}
