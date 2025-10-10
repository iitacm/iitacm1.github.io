import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';

export async function middleware(request: NextRequest) {
  // Only protect the add-events route
  if (request.nextUrl.pathname.startsWith('/add-events')) {
    const sessionCookie = request.cookies.get('session');
    
    if (!sessionCookie) {
      // Redirect to login page
      return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
      const session = await getSession(sessionCookie.value);
      
      if (!session) {
        // Session expired or invalid, redirect to login
        return NextResponse.redirect(new URL('/login', request.url));
      }
      
      // Session is valid, allow access
      return NextResponse.next();
    } catch (error) {
      console.error('Middleware authentication error:', error);
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/add-events/:path*']
};
