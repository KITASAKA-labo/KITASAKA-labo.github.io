import { NextResponse } from 'next/server';
import prisma from '../../../lib/prismaClient'

export async function GET(req: Request){
    const allPosts = await prisma.news.findMany();
    return NextResponse.json(allPosts);
};