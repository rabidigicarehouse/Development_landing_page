import './globals.css';

export const metadata = {
  title: 'The Tech Synidicate | DigiCareHouse Development Agency',
  description:
    'The Tech Synidicate by DigiCareHouse builds full-stack products, web platforms, mobile apps, backend systems, DevOps pipelines, and scalable engineering delivery.',
  keywords: [
    'The Tech Synidicate',
    'DigiCareHouse',
    'development agency',
    'full stack development',
    'web development',
    'mobile app development',
    'backend development',
    'DevOps',
    'SaaS engineering',
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'DigiCareHouse' }],
  openGraph: {
    type: 'website',
    siteName: 'The Tech Synidicate',
    title: 'The Tech Synidicate | DigiCareHouse Development Agency',
    description:
      'Full-stack product builds, platforms, backend systems, and engineering delivery by The Tech Synidicate.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200',
      },
    ],
    url: 'https://development.digicarehouse.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Tech Synidicate | DigiCareHouse Development Agency',
    description:
      'Full-stack apps, platforms, backend systems, and product engineering by The Tech Synidicate.',
    images: [
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200',
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=8" />
        <link rel="icon" type="image/png" href="/favicon.png?v=8" />
        <link rel="apple-touch-icon" href="/favicon.png?v=8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning className="bg-slate-50 overflow-x-hidden font-sans antialiased text-slate-900 selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
