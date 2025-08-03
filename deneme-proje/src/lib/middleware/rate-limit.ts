import { NextRequest, NextResponse } from 'next/server';

const requests = new Map();

export function withRateLimit(handler: Function, limit: number = 10) {
  return async (request: NextRequest, context: any) => {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';
    const count = requests.get(ip) || 0;
    
    if (count >= limit) {
      return NextResponse.json(
        { message: 'Too many requests' },
        { status: 429 }
      );
    }
    
    requests.set(ip, count + 1);
    
    return handler(request, context);
  };
}