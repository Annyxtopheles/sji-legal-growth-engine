import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ConversionGap } from './components/ConversionGap';
import { Packages } from './components/Packages';
import { AiReceptionistWorkflow } from './components/AiReceptionistWorkflow';
import { SeoVsAeo } from './components/SeoVsAeo';
import { WebsiteRedesign } from './components/WebsiteRedesign';
import { ReviewSection } from './components/ReviewSection';
import { PartnershipStats } from './components/PartnershipStats';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { InteractiveDemoModal } from './components/InteractiveDemoModal';
import { NotificationToast } from './components/NotificationToast';
import type { ModalType, ToastState } from './types';

export const App: React.FC = () => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [selectedPackage] = useState<string>('');
  const [toast, setToast] = useState<ToastState>({ show: false, message: '', type: 'success' });

  const showToast = (message: string, type: 'success' | 'info' | 'warning' = 'success') => {
    setToast({ show: true, message, type });
  };

  const dismissToast = () => {
    setToast(prev => ({ ...prev, show: false }));
  };

  const handleOpenDemo = () => {
    setActiveModal('demoModal');
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#EA7826] selection:text-white">
      {/* Fixed Header */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-1 pt-20">
        <Hero />
        <ConversionGap />
        <Packages />
        <AiReceptionistWorkflow onOpenDemo={handleOpenDemo} />
        <SeoVsAeo />
        <WebsiteRedesign />
        <ReviewSection
          selectedPackage={selectedPackage}
          onLeadSuccess={msg => showToast(msg, 'success')}
        />
        <PartnershipStats />
        <FaqSection />
        <FinalCta />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive AI Intake Demo Modal */}
      <InteractiveDemoModal
        isOpen={activeModal === 'demoModal'}
        onClose={handleCloseModal}
        onBookCall={() => {
          handleCloseModal();
          window.location.href = 'mailto:siddiqur.rahman@sjinnovation.com?subject=Inquiry:%20Restoration%20AI%20Dispatch%20Strategy%20Call';
        }}
      />

      {/* Toast Feedback */}
      <NotificationToast
        toast={toast}
        onDismiss={dismissToast}
      />
    </div>
  );
};

export default App;
