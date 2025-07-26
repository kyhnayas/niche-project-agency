import { MetadataRoute } from 'next';
// getPortfolioItems() fonksiyonunun tüm portföy slug'larını getirdiği varsayılıyor
import { getPortfolioItems } from '@/lib/data';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const portfolioItems = await getPortfolioItems();
  const portfolioUrls = portfolioItems.map(item => ({
    url: `https://www.nicheprojectagency.com/portfolio/${item.slug}`,
    lastModified: new Date(item.updatedAt),
  }));

  return;
}