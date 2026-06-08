'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { CheckCircle, Download, Loader2, AlertCircle, ArrowLeft } from 'lucide-react';

export function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams?.get('session_id') ?? '';
  const [state, setState] = useState<'loading' | 'success' | 'error'>('loading');
  const [downloadToken, setDownloadToken] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (!sessionId) {
      setState('error');
      setErrorMsg('Sessão inválida. Verifique o link.');
      return;
    }

    let attempts = 0;
    const maxAttempts = 5;

    const fetchPurchase = async () => {
      try {
        const res = await fetch(`/api/purchases?session_id=${encodeURIComponent(sessionId)}`);
        const data = await res?.json();

        if (data?.downloadToken) {
          setDownloadToken(data.downloadToken);
          setState('success');
          return true;
        }

        return false;
      } catch {
        return false;
      }
    };

    const tryFetch = async () => {
      const success = await fetchPurchase();
      if (!success && attempts < maxAttempts) {
        attempts++;
        setTimeout(tryFetch, 2000);
      } else if (!success) {
        setState('error');
        setErrorMsg('Não foi possível confirmar o pagamento. Se você pagou, entre em contato.');
      }
    };

    tryFetch();
  }, [sessionId]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-card border border-border/50 rounded-2xl p-8 text-center"
      >
        {state === 'loading' && (
          <>
            <Loader2 className="w-12 h-12 text-primary mx-auto animate-spin mb-4" />
            <h1 className="font-display text-xl font-bold mb-2">Confirmando pagamento...</h1>
            <p className="text-sm text-muted-foreground">Aguarde enquanto verificamos sua compra.</p>
          </>
        )}

        {state === 'success' && (
          <>
            <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h1 className="font-display text-2xl font-bold mb-2">Compra Confirmada!</h1>
            <p className="text-sm text-muted-foreground mb-6">
              Obrigado pela compra! Clique abaixo para baixar seu eBook.
            </p>

            <a
              href={`/api/download/${downloadToken}`}
              className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl text-base font-bold gradient-bg text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all mb-4"
            >
              <Download className="w-5 h-5" />
              Baixar eBook (PDF)
            </a>

            <p className="text-xs text-muted-foreground mb-6">
              Guarde este link. Você pode baixar o arquivo novamente quando precisar.
            </p>

            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para o site
            </a>
          </>
        )}

        {state === 'error' && (
          <>
            <div className="w-16 h-16 rounded-full bg-destructive/20 flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="w-8 h-8 text-destructive" />
            </div>
            <h1 className="font-display text-2xl font-bold mb-2">Oops!</h1>
            <p className="text-sm text-muted-foreground mb-6">{errorMsg}</p>
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para o site
            </a>
          </>
        )}
      </motion.div>
    </div>
  );
}
