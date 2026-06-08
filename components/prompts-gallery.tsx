'use client';

import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { prompts, categories } from '@/lib/prompts-data';
import { GalleryCard } from '@/components/gallery-card';
import { PromptModal } from '@/components/prompt-modal';
import type { PromptData } from '@/lib/prompts-data';

export function PromptsGallery() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPrompt, setSelectedPrompt] = useState<PromptData | null>(null);

  const filtered = useMemo(() => {
    return (prompts ?? [])?.filter((p: any) => {
      const matchCat = activeCategory === 'Todos' || p?.category === activeCategory;
      const matchSearch = !searchQuery ||
        (p?.title ?? '')?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        (p?.description ?? '')?.toLowerCase()?.includes(searchQuery?.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section className="py-6 sm:py-8">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Search */}
        <div className="relative max-w-md mx-auto mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar prompts..."
            value={searchQuery}
            onChange={(e: any) => setSearchQuery(e?.target?.value ?? '')}
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-all shadow-sm"
          />
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {(categories ?? [])?.map((cat: string) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'gradient-bg text-white shadow-md shadow-indigo-500/20'
                  : 'bg-white border border-gray-200 text-muted-foreground hover:text-foreground hover:border-indigo-300 hover:bg-indigo-50/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Count */}
        <p className="text-sm text-muted-foreground mb-6">
          {filtered?.length ?? 0} prompts encontrados
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {(filtered ?? [])?.map((prompt: any) => (
            <GalleryCard
              key={prompt?.id}
              prompt={prompt}
              onView={() => setSelectedPrompt(prompt)}
            />
          ))}
        </div>

        {(filtered?.length ?? 0) === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">Nenhum prompt encontrado.</p>
          </div>
        )}
      </div>

      <PromptModal
        prompt={selectedPrompt}
        onClose={() => setSelectedPrompt(null)}
      />
    </section>
  );
}
