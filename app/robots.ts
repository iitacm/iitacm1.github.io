import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Block folders you don't want indexed
    },
    sitemap: 'https://acmillinoistech.org',
  }
}
