'use client';

import { useState } from 'react';
import { Brain, HelpCircle } from 'lucide-react';
import { HowToUseModal } from '@/components/how-to-use-modal';

export function SiteHeader() {
  const [showHelp, setShowHelp] = useState(false);

  return (
    <>
      <header className="border-b border-border bg-white/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center shadow-md shadow-indigo-500/20">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-display font-bold text-lg tracking-tight gradient-text leading-tight">
                PresençaDigital Pro
              </h1>
            </div>
          </div>

          <button
            onClick={() => setShowHelp(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all border border-border"
          >
            <HelpCircle className="w-4 h-4" />
            Como usar
          </button>
        </div>
      </header>

      {/* Hero mini */}
      <div className="bg-gradient-to-b from-indigo-50/80 to-background border-b border-border/50 py-8 sm:py-10 pattern-bg">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
            <span className="gradient-text">Prompts de Imagem</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
            Explore prompts criativos para geração de imagens com IA. Copie, cole e use.
          </p>
        </div>
      </div>

      <HowToUseModal open={showHelp} onClose={() => setShowHelp(false)} />
    </>
  );
}
