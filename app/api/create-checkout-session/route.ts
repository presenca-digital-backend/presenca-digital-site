export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const stripeKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeKey) {
      return NextResponse.json(
        { error: 'Stripe não configurado. Configure STRIPE_SECRET_KEY nas variáveis de ambiente.' },
        { status: 500 }
      );
    }

    const Stripe = (await import('stripe')).default;
    const stripe = new Stripe(stripeKey, { apiVersion: '2023-10-16' as any });

    const origin = request?.headers?.get('origin') ?? process.env.NEXTAUTH_URL ?? 'http://localhost:3000';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'brl',
            product_data: {
              name: 'PresençaDigital Pro — eBook Premium',
              description: '46 prompts profissionais de IA + eBook PDF de 20 páginas',
            },
            unit_amount: 1990, // R$19,90 em centavos
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/#ebook`,
      metadata: {
        product: 'presencadigital-pro-ebook',
      },
    });

    return NextResponse.json({ url: session?.url });
  } catch (err: any) {
    console.error('Stripe checkout error:', err);
    return NextResponse.json({ error: err?.message ?? 'Erro ao criar checkout' }, { status: 500 });
  }
}
