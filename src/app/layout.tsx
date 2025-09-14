import type { Metadata, Viewport } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const APP_NAME = "x Studio";
const APP_DESCRIPTION = "x Studio delivers landing pages in 24 hours, agent-optimized SEO, and fast-turn creative + managed social. Launch faster—get a staging link by tomorrow morning.";

export const metadata: Metadata = {
  title: 'x Studio — 24h Landing Pages • Agent-Ready SEO • Fast Creatives',
  description: APP_DESCRIPTION,
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    url: 'https://outlie.studio',
    title: 'x Studio — 24h Landing Pages • Agent-Ready SEO • Fast Creatives',
    description: APP_DESCRIPTION,
    images: {
      url: '/og-image.png',
      alt: 'x Studio Logo',
    },
  },
  twitter: {
    creator: '@xstudio',
    card: 'summary_large_image',
  },
  icons: {
    icon: '/favicon.ico',
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b0c0f',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "x Studio",
            "url": "https://outlie.studio",
            "logo": "https://outlie.studio/logo.png",
            "description": "x Studio delivers landing pages in 24 hours, agent-optimized SEO, and fast-turn creative + managed social.",
            "sameAs": [],
            "potentialAction": {
              "@type": "OrderAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://outlie.studio/contact",
                "actionPlatform": [
                  "http://schema.org/DesktopWebPlatform",
                  "http://schema.org/IOSPlatform",
                  "http://schema.org/AndroidPlatform"
                ]
              }
            }
          }) }}
        />
      </head>
      <body className={cn('font-body antialiased min-h-screen flex flex-col bg-background')}>
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
