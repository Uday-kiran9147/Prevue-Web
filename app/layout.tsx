import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ClientLayoutWrapper } from '@/components/ClientLayoutWrapper';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700', '800'],
});

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
  title: 'Prevue — YouTube Script Retention Intelligence & Hook Simulator',
  description: 'Simulate 0:00–0:30 audience retention before you film. Prevue diagnoses script drop-off hazards, calibrates speech velocity, and engineers high-hold hooks.',
  keywords: ['YouTube retention simulator', 'hook score', 'YouTube creator intelligence', 'script retention', 'Prevue app', 'teleprompter pacing'],
  openGraph: {
    title: 'Prevue — YouTube Script Retention Intelligence',
    description: 'Stop guessing your first 30 seconds. Prevue simulates YouTube script retention before you press record.',
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
    <html lang="en" className={`scroll-smooth ${jakarta.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-white text-neutral-900 antialiased selection:bg-neutral-900 selection:text-white min-h-screen flex flex-col font-sans">
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}


