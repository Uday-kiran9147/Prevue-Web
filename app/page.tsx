'use client';

import React, { useState } from 'react';
import { Hero } from '@/components/Hero';
import { LogoCloud } from '@/components/LogoCloud';
import { EditorialStatement } from '@/components/EditorialStatement';
import { TestimonialBanner } from '@/components/TestimonialBanner';
import { MetricsGrid } from '@/components/MetricsGrid';
import { FeatureShowcase } from '@/components/FeatureShowcase';
import { MassiveStatSection } from '@/components/MassiveStatSection';
import { SimulatorDemo } from '@/components/SimulatorDemo';
import { HowItWorks } from '@/components/HowItWorks';
import { ChannelGraph } from '@/components/ChannelGraph';
import { DailyBriefings } from '@/components/DailyBriefings';
import { Pricing } from '@/components/Pricing';
import { Testimonials } from '@/components/Testimonials';
import { FaqSection } from '@/components/FaqSection';
import { DownloadModal } from '@/components/DownloadModal';

export default function Home() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  return (
    <main className="bg-white">
      {/* 1. Hero with Organic Mesh Banner & Floating Prompt Widget */}
      <Hero onOpenDownload={() => setDownloadModalOpen(true)} />

      {/* 2. Monochrome Brand Logos */}
      <LogoCloud />

      {/* 3. Editorial Two-Tone Statement Section with Avatar Stack Pill */}
      <EditorialStatement onOpenDownload={() => setDownloadModalOpen(true)} />

      {/* 4. Organic Silk Testimonial Banner */}
      <TestimonialBanner onOpenCaseStudy={() => setDownloadModalOpen(true)} />

      {/* 5. 3-Stat Metrics Section ("Bring Existing Customers") */}
      <MetricsGrid />

      {/* 6. Feature Showcase Split Layout with Interactive Accordion & Mobile Mockup */}
      <FeatureShowcase onOpenDownload={() => setDownloadModalOpen(true)} />

      {/* 7. Massive Display Number Section ("Don't take our word for it") */}
      <MassiveStatSection />

      {/* 8. Interactive Retention Simulator Studio */}
      <div id="platform">
        <SimulatorDemo />
      </div>

      {/* 9. 3-Stage Pre-Flight Protocol */}
      <HowItWorks />

      {/* 10. Channel Baseline Intelligence */}
      <ChannelGraph />

      {/* 11. Daily Hook Blueprints */}
      <DailyBriefings />

      {/* 12. Creator Pro Pricing */}
      <Pricing onOpenDownload={() => setDownloadModalOpen(true)} />

      {/* 13. Testimonials & Case Studies */}
      <Testimonials />

      {/* 14. Frequently Asked Questions */}
      <FaqSection />

      {/* 15. Mobile App Download Modal */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />
    </main>
  );
}


