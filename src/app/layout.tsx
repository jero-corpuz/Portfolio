import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'PortfolioOS - Virtual Operating System Portfolio',
  description:
    'Interactive Virtual Operating System Portfolio built with Next.js featuring Vibrant Glassmorphic Desktop View and iPhone Grid Mobile View.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased bg-[#05050a] text-[#e5e2e1] select-none overflow-hidden h-screen w-screen">
        {children}
      </body>
    </html>
  );
}
