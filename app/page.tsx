'use client';

import React, { useState } from 'react';
import { Hero } from '@/components/Hero';
import { SimulatorDemo } from '@/components/SimulatorDemo';
import { ChannelGraph } from '@/components/ChannelGraph';
import { DailyBriefings } from '@/components/DailyBriefings';
import { Pricing } from '@/components/Pricing';
import { Testimonials } from '@/components/Testimonials';
import { FaqSection } from '@/components/FaqSection';
import { DownloadModal } from '@/components/DownloadModal';

export default function Home() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  return (
    <main>
      <Hero onOpenDownload={() => setDownloadModalOpen(true)} />
      <SimulatorDemo />
      <ChannelGraph />
      <DailyBriefings />
      <Pricing onOpenDownload={() => setDownloadModalOpen(true)} />
      <Testimonials />
      <FaqSection />
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />
    </main>
  );
}
