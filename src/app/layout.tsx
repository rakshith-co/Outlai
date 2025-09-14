import type { Metadata, Viewport } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const APP_NAME = "Outlai";
const APP_DESCRIPTION = "Outlai makes business easier — from AI-ready SEO to creative content and digital operations. What usually takes weeks, we deliver in hours.";

export const metadata: Metadata = {
  title: 'Outlai — AI-Ready Marketing for Modern Business',
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
    url: 'https://outlai.studio',
    title: 'Outlai — AI-Ready Marketing for Modern Business',
    description: APP_DESCRIPTION,
    images: {
      url: '/og-image.png',
      alt: 'Outlai Logo',
    },
  },
  twitter: {
    creator: '@outlai',
    card: 'summary_large_image',
  },
  icons: {
    icon: '/favicon.ico',
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
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
            "name": "Outlai",
            "url": "https://outlai.studio",
            "logo": "https://outlai.studio/logo.png",
            "description": "Outlai delivers landing pages in 24 hours, agent-optimized SEO, and fast-turn creative + managed social.",
            "sameAs": [],
            "potentialAction": {
              "@type": "OrderAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://outlai.studio/contact",
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
