import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();
  
  // Auth logic
  const token = 'sample-jwt-token';
  
  return Response.json({
    success: true,
    token,
    user: { id: '1', email }
  });
}