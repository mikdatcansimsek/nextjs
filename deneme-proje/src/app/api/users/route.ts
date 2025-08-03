import { NextRequest } from 'next/server';
import { withAuth, withRateLimit } from '@/lib/middleware/auth';

async function getUsersHandler(request: NextRequest) {
  const users = [
    { id: '1', name: 'John Doe', email: 'john@example.com' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com' }
  ];
  
  return Response.json({ 
    success: true, 
    data: users 
  });
}

async function createUserHandler(request: NextRequest) {
  const user = (request as any).user;
  const body = await request.json();
  
  const newUser = {
    id: Date.now().toString(),
    ...body,
    createdBy: user.id,
    createdAt: new Date().toISOString()
  };
  
  return Response.json({
    success: true,
    data: newUser,
    message: 'User created successfully'
  }, { status: 201 });
}

export const GET = withRateLimit(getUsersHandler, 50);
export const POST = withRateLimit(withAuth(createUserHandler), 10);