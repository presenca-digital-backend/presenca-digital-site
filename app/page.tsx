import { SiteHeader } from '@/components/site-header';
import { PromptsGallery } from '@/components/prompts-gallery';
import { PremiumBanner } from '@/components/premium-banner';
import { SiteFooter } from '@/components/site-footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PromptsGallery />
      <PremiumBanner />
      <SiteFooter />
    </div>
  );
}
