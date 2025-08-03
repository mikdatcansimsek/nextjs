import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const userId = params.id;
  
  const user = { 
    id: userId, 
    name: 'John Doe', 
    email: 'john@example.com' 
  };
  
  if (!user) {
    return NextResponse.json(
      { success: false, message: 'User not found' },
      { status: 404 }
    );
  }
  
  return NextResponse.json({ 
    success: true, 
    data: user 
  });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const userId = params.id;
  const body = await request.json();
  const { name, email } = body;
  
  const updatedUser = {
    id: userId,
    name,
    email,
    updatedAt: new Date().toISOString()
  };
  
  return NextResponse.json({
    success: true,
    data: updatedUser,
    message: 'User updated successfully'
  });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const userId = params.id;
  
  return NextResponse.json({
    success: true,
    message: 'User deleted successfully'
  });
}