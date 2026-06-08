'use client';

import { Brain } from 'lucide-react';

export function SiteFooter() {
  const year = 2026;

  return (
    <footer className="border-t border-border bg-white py-8">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg gradient-bg flex items-center justify-center shadow-sm">
              <Brain className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-display font-bold text-sm gradient-text">PresençaDigital Pro</span>
          </div>
          <p className="text-xs text-muted-foreground">
            © {year} PresençaDigital Pro. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
