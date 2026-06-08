'use client';

import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  { num: 1, title: 'Escolha um prompt', desc: 'Navegue pela galeria e encontre o prompt ideal para você.' },
  { num: 2, title: 'Copie o prompt', desc: 'Clique em "Copiar Prompt" para copiar o texto completo.' },
  { num: 3, title: 'Cole na ferramenta de IA', desc: 'Use no Midjourney, DALL·E, Leonardo AI ou Stable Diffusion.' },
  { num: 4, title: 'Faça ajustes se necessário', desc: 'Personalize detalhes como cores, estilo ou cenário.' },
  { num: 5, title: 'Use onde quiser', desc: 'Perfeito para redes sociais, anúncios, sites e conteúdos.' },
];

export function HowToUseModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-lg bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 z-10 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">⚙️</span>
              <h3 className="font-display text-xl font-bold text-foreground">Como usar os prompts</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Siga o passo a passo para gerar imagens incríveis com IA.
            </p>

            <div className="space-y-1">
              {steps?.map((s: any) => (
                <div
                  key={s?.num}
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center flex-shrink-0 text-white text-sm font-bold shadow-sm">
                    {s?.num}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">{s?.title}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{s?.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-indigo-50 border border-indigo-100">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold px-2 py-0.5 rounded gradient-bg text-white">PREMIUM</span>
                <span className="font-semibold text-sm text-foreground">Plataforma Presença Digital</span>
              </div>
              <p className="text-xs text-muted-foreground">
                +15.000 prompts, ferramentas de IA, treinamentos e assistentes GPTs.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <a
                href="#ebook"
                onClick={onClose}
                className="py-3 rounded-xl text-sm font-bold gradient-bg text-white text-center hover:opacity-90 transition-opacity shadow-sm shadow-indigo-500/20"
              >
                Ver pack premium
              </a>
              <button
                onClick={onClose}
                className="py-3 rounded-xl text-sm font-bold border border-gray-200 text-foreground hover:bg-gray-50 transition-colors"
              >
                Começar a explorar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
