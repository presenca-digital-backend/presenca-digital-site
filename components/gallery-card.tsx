'use client';

import { useState } from 'react';
import { Copy, Check, Eye, Sparkles } from 'lucide-react';
import Image from 'next/image';
import type { PromptData } from '@/lib/prompts-data';

const categoryColors: Record<string, string> = {
  Masculino: 'bg-blue-50 text-blue-700 border border-blue-200/60',
  Feminino: 'bg-pink-50 text-pink-700 border border-pink-200/60',
  'Ensaio Fotográfico': 'bg-violet-50 text-violet-700 border border-violet-200/60',
  'Crianças Heróis': 'bg-orange-50 text-orange-700 border border-orange-200/60',
  Lanches: 'bg-red-50 text-red-700 border border-red-200/60',
  'Anúncios': 'bg-amber-50 text-amber-700 border border-amber-200/60',
};

export function GalleryCard({ prompt, onView }: { prompt: PromptData; onView: () => void }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e?.stopPropagation();
    try {
      await navigator?.clipboard?.writeText?.(prompt?.prompt ?? '');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.error('Failed to copy');
    }
  };

  const colorClass = categoryColors?.[prompt?.category ?? ''] ?? 'bg-indigo-50 text-indigo-700';

  return (
    <div className="group relative rounded-2xl overflow-hidden bg-white border border-gray-200/80 hover:border-indigo-300 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/8 flex flex-col">
      {/* Sparkle icon */}
      <div className="absolute top-3 right-3 z-10">
        <div className="w-7 h-7 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center">
          <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
        </div>
      </div>

      {/* Image */}
      <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden">
        <Image
          src={prompt?.image}
          alt={`Exemplo: ${prompt?.title ?? 'prompt'}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-display font-bold text-base mb-2 tracking-tight text-foreground leading-tight">
          {prompt?.title}
        </h3>

        <span className={`self-start text-[11px] font-semibold px-2.5 py-1 rounded-full mb-2 ${colorClass}`}>
          {prompt?.category}
        </span>

        <p className="text-xs text-muted-foreground mb-4 line-clamp-2 flex-1">
          {prompt?.description}
        </p>

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            onClick={handleCopy}
            className={`flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm ${
              copied
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                : 'gradient-bg text-white hover:opacity-90 shadow-indigo-500/20'
            }`}
          >
            {copied ? (
              <><Check className="w-3.5 h-3.5" /> Copiado!</>
            ) : (
              <><Copy className="w-3.5 h-3.5" /> Copiar Prompt</>
            )}
          </button>
          <button
            onClick={onView}
            className="px-3 py-2.5 rounded-xl text-xs font-medium border border-gray-200 text-muted-foreground hover:bg-gray-50 hover:text-foreground transition-all"
            title="Ver prompt completo"
          >
            <Eye className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
