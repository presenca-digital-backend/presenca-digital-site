export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import crypto from 'crypto';

export async function POST(request: NextRequest) {
  try {
    const stripeKey = process.env.STRIPE_SECRET_KEY;
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    if (!stripeKey || !webhookSecret) {
      return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 });
    }

    const Stripe = (await import('stripe')).default;
    const stripe = new Stripe(stripeKey, { apiVersion: '2023-10-16' as any });

    const body = await request?.text();
    const sig = request?.headers?.get('stripe-signature');

    if (!sig) {
      return NextResponse.json({ error: 'Missing signature' }, { status: 400 });
    }

    let event;
    try {
      event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
    } catch (err: any) {
      console.error('Webhook signature verification failed:', err?.message);
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    if (event?.type === 'checkout.session.completed') {
      const session = event?.data?.object as any;
      const email = session?.customer_details?.email ?? session?.customer_email ?? 'unknown';
      const sessionId = session?.id ?? '';
      const amount = session?.amount_total ?? 1990;

      const existing = await prisma.purchase.findUnique({
        where: { stripeSessionId: sessionId },
      });

      if (!existing) {
        await prisma.purchase.create({
          data: {
            email,
            stripeSessionId: sessionId,
            downloadToken: crypto.randomUUID(),
            amount: Number(amount),
            currency: session?.currency ?? 'brl',
            status: 'completed',
          },
        });
      }
    }

    return NextResponse.json({ received: true });
  } catch (err: any) {
    console.error('Webhook error:', err);
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 });
  }
}
