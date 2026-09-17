import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://acmillinoistech.org'
  
  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/team`, lastModified: new Date() },
    { url: `${baseUrl}/events`, lastModified: new Date() },
    { url: `${baseUrl}/merch`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/sigs`, lastModified: new Date() },
    { url: `${baseUrl}/get-involved`, lastModified: new Date() },
  ]
}
