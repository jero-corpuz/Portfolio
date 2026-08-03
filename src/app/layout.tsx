import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#05050a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: 'Jero OS - Virtual Operating System Portfolio',
  description:
    'Interactive Virtual Operating System Portfolio of Jero Corpuz (Web Developer & Architecture Lead). Built with Next.js, TypeScript, and Aceternity UI.',
  keywords: [
    'Jero Corpuz',
    'Jero OS',
    'Web Developer Portfolio',
    'Shopify Developer',
    'WordPress Architect',
    'Next.js OS Portfolio',
    'Aceternity UI',
    'Virtual Desktop Portfolio',
  ],
  authors: [{ name: 'Jero Corpuz', url: 'https://jero-portfolio.netlify.app/' }],
  creator: 'Jero Corpuz',
  openGraph: {
    title: 'Jero OS - Virtual Operating System Portfolio',
    description:
      'Explore Jero Corpuz\'s web development portfolio in an interactive virtual operating system environment.',
    url: 'https://jero-portfolio.netlify.app/',
    siteName: 'Jero OS Portfolio',
    images: [
      {
        url: '/images/avatar/avatar.jpg',
        width: 1200,
        height: 630,
        alt: 'Jero OS Virtual Operating System Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jero OS - Virtual Operating System Portfolio',
    description:
      'Interactive Virtual Operating System Portfolio of Jero Corpuz built with Next.js & Aceternity UI.',
    images: ['/images/avatar/avatar.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://jero-portfolio.netlify.app" />
      </head>
      <body className="antialiased bg-[#05050a] text-[#e5e2e1] select-none overflow-hidden h-screen w-screen transform-gpu">
        {children}
      </body>
    </html>
  );
}
