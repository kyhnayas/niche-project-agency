import type { MetadataRoute } from 'next';

// Bu satır çözümdür.
// Next.js'e bu işlevi derleme zamanında bir kez yürütmesini
// ve statik bir robots.txt dosyası oluşturmasını açıkça söyler,
// böylece 'output: 'export' zorunluluğuyla uyumlu hale gelir.
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  // Döndürülen nesne, derleme zamanında process.env'den okuyabilmesi
  // anlamında hala dinamik olabilir.
  const sitemapUrl = process.env.NEXT_PUBLIC_WEBSITE_URL
  ? `${process.env.NEXT_PUBLIC_WEBSITE_URL}/sitemap.xml`
    : 'https://alanadiniz.com/sitemap.xml';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Örnek kural
    },
    sitemap: sitemapUrl,
  };
}