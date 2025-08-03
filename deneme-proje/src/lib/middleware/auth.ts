import { NextRequest, NextResponse } from 'next/server';

export function withAuth(handler: Function) {
  return async (request: NextRequest, context: any) => {
    const token = request.headers.get('authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return NextResponse.json(
        { message: 'Token required' },
        { status: 401 }
      );
    }
    
    // Token'ı request'e ekle
    (request as any).user = { id: '123', email: 'user@example.com' };
    
    return handler(request, context);
  };
}

export function withRateLimit(handler: Function, limit: number = 10) {
  return async (request: NextRequest, context: any) => {
    return handler(request, context);
  };
}