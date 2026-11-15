import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Lovizu — IT 솔루션 파트너',
    short_name: 'Lovizu',
    start_url: '/',
    display: 'browser',
    background_color: '#F8F6F2',
    theme_color: '#0D1B2A',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
