import { NextResponse } from 'next/server';

// Handles GET requests to /api
export async function GET(request) {
  console.log(new Date().toLocaleString());
  return NextResponse.json({ message: 'Hello World' });
}
