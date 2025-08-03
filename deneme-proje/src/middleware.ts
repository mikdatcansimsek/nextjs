import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
//   // API routes için auth check
//   if (pathname.startsWith('/api/users') || pathname.startsWith('/api/posts')) {
//     const token = request.headers.get('authorization');
    
//     if (!token) {
//       return NextResponse.json(
//         { message: 'Unauthorized' },
//         { status: 401 }
//       );
//     }
//   }
  
//   // Dashboard sayfaları için redirect
//   if (pathname.startsWith('/dashboard')) {
//     const authToken = request.cookies.get('auth-token');
    
//     if (!authToken) {
//       return NextResponse.redirect(new URL('/login', request.url));
//     }
//   }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/api/:path*', '/dashboard/:path*']
};