'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DownloadModal } from '@/components/DownloadModal';

export const ClientLayoutWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [downloadOpen, setDownloadOpen] = useState(false);

  return (
    <>
      <Header onOpenDownload={() => setDownloadOpen(true)} />
      <div className="flex-grow">
        {children}
      </div>
      <Footer onOpenDownload={() => setDownloadOpen(true)} />
      <DownloadModal isOpen={downloadOpen} onClose={() => setDownloadOpen(false)} />
    </>
  );
};
