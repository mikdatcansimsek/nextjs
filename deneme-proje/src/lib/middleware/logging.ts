import { NextRequest } from 'next/server';

export function withLogging(handler: Function) {
  return async (request: NextRequest, context: any) => {
    const { method, url } = request;
    
    const response = await handler(request, context);
    
    return response;
  };
}