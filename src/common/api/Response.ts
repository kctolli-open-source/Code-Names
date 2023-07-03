import { NextResponse } from 'next/server';

export const response = (data: any) => (NextResponse.json(data));
