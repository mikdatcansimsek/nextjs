import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const users = [
    { id: '1', name: 'John Doe', email: 'john@example.com' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com' }
  ];
  
  return NextResponse.json({ 
    success: true, 
    data: users 
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email } = body;
  
  if (!name || !email) {
    return NextResponse.json(
      { success: false, message: 'Name and email required' },
      { status: 400 }
    );
  }
  
  const newUser = {
    id: Date.now().toString(),
    name,
    email,
    createdAt: new Date().toISOString()
  };
  
  return NextResponse.json({
    success: true,
    data: newUser,
    message: 'User created successfully'
  }, { status: 201 });
}