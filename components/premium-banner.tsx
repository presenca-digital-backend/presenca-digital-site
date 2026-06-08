'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Crown, Check, ShieldCheck, Sparkles, ArrowRight, Zap } from 'lucide-react';

const PLATFORM_URL = 'https://pay.hotmart.com/C106174911L';
const benefits = [
  'Acesso vitalício a toda a plataforma',
  'Atualizações constantes de novos prompts',
  'Gerador de prompts com IA integrada',
  'Mais de 15.000 prompts organizados',
  'Suporte e comunidade exclusiva',
  'Ferramentas e assistentes prontos para usar',
];

const premiumCategories = [
  { icon: '📝', label: 'Biblioteca de Prompts de Texto', desc: '6 módulos com mais de 71 categorias' },
  { icon: '🖼️', label: 'Prompts de Imagem', desc: '6 categorias com 21 sub-módulos' },
  { icon: '🎬', label: 'Prompts de Vídeo', desc: '11 categorias otimizadas para vídeos' },
  { icon: '✨', label: 'Gerador Inteligente de Prompts', desc: 'IA que cria prompts sob medida' },
  { icon: '🔧', label: 'Diretório de Ferramentas de IA', desc: 'Curadoria das melhores ferramentas' },
  { icon: '🤖', label: 'Assistentes GPTs', desc: 'Mais de 39 assistentes especializados' },
  { icon: '🎓', label: 'Treinamentos Exclusivos', desc: 'Cursos completos para dominar IA' },
];

export function PremiumBanner() {
  const [showFloating, setShowFloating] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowFloating(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  const handleBuy = () => {
    window.open(PLATFORM_URL, '_blank');
  };

  return (
    <>
      {/* Main Premium Section */}
      <section id="ebook" className="py-16 sm:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/50 to-transparent pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-4">
              <Zap className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-bold text-indigo-600">OFERTA ESPECIAL POR TEMPO LIMITADO</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
              Domine a <span className="gradient-text">Inteligência Artificial</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Tenha acesso à plataforma mais completa de prompts, ferramentas e treinamentos de IA. <strong className="text-foreground">Tudo pronto para você usar</strong> e transformar seus resultados.
            </p>
          </div>

          {/* Comparison: Free vs Premium */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {/* Free */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 relative opacity-80">
              <div className="text-sm font-bold text-muted-foreground uppercase tracking-wide mb-3">Gratuito</div>
              <div className="text-2xl font-extrabold mb-4 text-foreground">R$ 0</div>
              <ul className="space-y-2.5">
                {['30 prompts de exemplo', 'Categorias limitadas', 'Sem gerador de prompts', 'Sem treinamentos', 'Sem assistentes GPTs']?.map((item: string, i: number) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 text-gray-400" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 py-3 rounded-xl text-sm font-medium border border-gray-200 text-center text-muted-foreground">
                Você já tem acesso
              </div>
            </div>

            {/* Premium */}
            <div className="rounded-2xl border-2 border-indigo-300 bg-white p-6 relative ring-1 ring-indigo-200 shadow-lg shadow-indigo-500/10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1 rounded-full gradient-bg text-white text-xs font-bold shadow-lg shadow-indigo-500/30">
                  ⭐ ACESSO VITALÍCIO
                </span>
              </div>
              <div className="text-sm font-bold text-indigo-600 uppercase tracking-wide mb-3">Plataforma Completa</div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl font-extrabold text-foreground">Investimento único</span>
              </div>
              <p className="text-xs text-muted-foreground mb-4">pagamento seguro • acesso imediato após confirmação</p>
              <ul className="space-y-2.5">
                {benefits?.map((item: string, i: number) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-4 h-4 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 text-white" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={handleBuy}
                className="mt-6 w-full py-3.5 rounded-xl text-sm font-bold bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 text-white hover:from-indigo-600 hover:via-violet-600 hover:to-purple-600 transition-all shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" /> Garantir Meu Acesso <ArrowRight className="w-4 h-4" />
              </button>
              <div className="flex items-center justify-center gap-4 mt-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Pagamento seguro
                </div>
                <div className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5" />
                  Acesso imediato
                </div>
              </div>
            </div>
          </div>

          {/* What's inside - categories grid */}
          <div className="max-w-4xl mx-auto">
            <h3 className="font-display text-lg font-bold text-center mb-2 text-foreground">Tudo que você precisa em um só lugar</h3>
            <p className="text-sm text-muted-foreground text-center mb-6">Uma plataforma completa para impulsionar sua presença digital</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {premiumCategories?.map((cat: any, i: number) => (
                <div key={i} className="flex flex-col gap-1.5 p-4 rounded-xl bg-white border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all">
                  <span className="text-2xl">{cat?.icon}</span>
                  <div className="text-sm font-semibold text-foreground">{cat?.label}</div>
                  <div className="text-xs text-muted-foreground">{cat?.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Floating Banner (appears after scroll) */}
      <AnimatePresence>
        {showFloating && !dismissed && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50"
          >
            <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-2xl shadow-black/10">
              <button
                onClick={() => setDismissed(true)}
                className="absolute top-2 right-2 p-1 rounded-lg hover:bg-gray-100 text-gray-400"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0 shadow-md shadow-indigo-500/20">
                  <Crown className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-2 py-0.5 rounded gradient-bg text-white">PREMIUM</span>
                    <span className="font-bold text-sm truncate text-foreground">Plataforma Presença Digital</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    +15.000 prompts, ferramentas de IA, treinamentos e assistentes GPTs.
                  </p>
                </div>
              </div>
              <div className="flex gap-2 mt-3">
                <a
                  href={PLATFORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setDismissed(true)}
                  className="flex-1 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 text-white text-center hover:from-indigo-600 hover:via-violet-600 hover:to-purple-600 transition-colors shadow-sm"
                >
                  Garantir Meu Acesso →
                </a>
                <button
                  onClick={() => setDismissed(true)}
                  className="px-4 py-2.5 rounded-xl text-xs font-medium border border-gray-200 text-muted-foreground hover:bg-gray-50 transition-colors"
                >
                  Agora não
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
