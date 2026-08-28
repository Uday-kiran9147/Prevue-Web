import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { ClientLayoutWrapper } from '@/components/ClientLayoutWrapper';

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Prevue — YouTube Creator Intelligence & Pre-Flight Simulator',
  description: 'Simulate YouTube retention before you film. Detect 0:00–0:30 drop-off hazards, calculate your Hook Score (0–10), and get 1-click prescriptive script fixes.',
  keywords: ['YouTube retention simulator', 'hook score', 'YouTube creator intelligence', 'script retention', 'Prevue app'],
  openGraph: {
    title: 'Prevue — YouTube Creator Intelligence & Pre-Flight Simulator',
    description: 'Stop guessing your first 30 seconds. Run your YouTube script through Prevue’s retention hazard simulator.',
    url: 'https://prevue.app',
    siteName: 'Prevue',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${roboto.variable}`}>
      <body className={`${roboto.className} bg-studio-bg text-slate-800 antialiased selection:bg-red-100 selection:text-red-900 min-h-screen flex flex-col font-sans`}>
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
