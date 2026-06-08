'use client';

import { useState } from 'react';
import { X, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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

export function PromptModal({ prompt, onClose }: { prompt: PromptData | null; onClose: () => void }) {
  const [copied, setCopied] = useState(false);

  if (!prompt) return null;

  const handleCopy = async () => {
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
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white border border-gray-200 rounded-2xl shadow-2xl z-10"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-md hover:bg-gray-100 text-gray-500 hover:text-gray-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image */}
          <div className="relative aspect-video bg-gray-100 rounded-t-2xl overflow-hidden">
            <Image
              src={prompt?.image}
              alt={`Exemplo: ${prompt?.title ?? 'prompt'}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${colorClass}`}>
                {prompt?.category}
              </span>
            </div>

            <h3 className="font-display text-xl font-bold mb-2 text-foreground">{prompt?.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{prompt?.description}</p>

            {/* Prompt text */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4">
              <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">{prompt?.prompt}</p>
            </div>

            <button
              onClick={handleCopy}
              className={`w-full py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-sm ${
                copied
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  : 'gradient-bg text-white hover:opacity-90 shadow-indigo-500/20'
              }`}
            >
              {copied ? (
                <><Check className="w-4 h-4" /> Prompt Copiado!</>
              ) : (
                <><Copy className="w-4 h-4" /> Copiar Prompt Completo</>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
