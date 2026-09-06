import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ClientLayoutWrapper } from '@/components/ClientLayoutWrapper';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Prevue — YouTube Creator Intelligence & Pre-Flight Simulator',
  description: 'Simulate YouTube retention before you film. Detect 0:00–0:30 drop-off hazards, calculate your Hook Score (0–10), and get prescriptive script fixes.',
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
    <html lang="en" className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#FAFAFA] text-slate-900 antialiased selection:bg-slate-900 selection:text-white min-h-screen flex flex-col font-sans">
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}

