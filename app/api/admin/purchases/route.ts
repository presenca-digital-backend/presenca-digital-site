export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth-options';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const purchases = await prisma.purchase.findMany({
      orderBy: { createdAt: 'desc' },
      take: 100,
      select: {
        id: true,
        email: true,
        amount: true,
        status: true,
        downloadCount: true,
        createdAt: true,
      },
    });

    return NextResponse.json({
      purchases: (purchases ?? [])?.map((p: any) => ({
        ...(p ?? {}),
        createdAt: p?.createdAt?.toISOString?.() ?? null,
      })),
    });
  } catch (err: any) {
    console.error('Admin purchases error:', err);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
