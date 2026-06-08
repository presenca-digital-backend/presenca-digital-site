export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import crypto from 'crypto';

export async function GET(request: NextRequest) {
  try {
    const sessionId = request?.nextUrl?.searchParams?.get('session_id');
    if (!sessionId) {
      return NextResponse.json({ error: 'session_id required' }, { status: 400 });
    }

    // First check if purchase exists from webhook
    let purchase = await prisma.purchase.findUnique({
      where: { stripeSessionId: sessionId },
    });

    if (purchase) {
      return NextResponse.json({
        downloadToken: purchase?.downloadToken,
        email: purchase?.email,
        status: purchase?.status,
      });
    }

    // If no purchase from webhook yet, verify with Stripe directly
    const stripeKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeKey) {
      return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 });
    }

    const Stripe = (await import('stripe')).default;
    const stripe = new Stripe(stripeKey, { apiVersion: '2023-10-16' as any });

    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if (session?.payment_status !== 'paid') {
      return NextResponse.json({ error: 'Payment not completed', status: 'pending' }, { status: 402 });
    }

    const email = session?.customer_details?.email ?? session?.customer_email ?? 'unknown';
    const token = crypto.randomUUID();

    purchase = await prisma.purchase.create({
      data: {
        email,
        stripeSessionId: sessionId,
        downloadToken: token,
        amount: Number(session?.amount_total ?? 1990),
        currency: (session?.currency ?? 'brl') as string,
        status: 'completed',
      },
    });

    return NextResponse.json({
      downloadToken: purchase?.downloadToken,
      email: purchase?.email,
      status: purchase?.status,
    });
  } catch (err: any) {
    console.error('Purchase lookup error:', err);
    return NextResponse.json({ error: 'Erro ao verificar compra' }, { status: 500 });
  }
}
