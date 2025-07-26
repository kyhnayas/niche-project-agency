import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin/', // Örnek olarak yönetici paneli engelleniyor
    },
    sitemap: 'https://www.nicheprojectagency.com/sitemap.xml',
  }
}
