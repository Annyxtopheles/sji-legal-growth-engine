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
import { ReviewModal } from './components/ReviewModal';
import { BookingModal } from './components/BookingModal';
import { InteractiveDemoModal } from './components/InteractiveDemoModal';
import { NotificationToast } from './components/NotificationToast';
import type { ModalType, ToastState } from './types';

export const App: React.FC = () => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [selectedPackage, setSelectedPackage] = useState<string>('');
  const [toast, setToast] = useState<ToastState>({ show: false, message: '', type: 'success' });

  const showToast = (message: string, type: 'success' | 'info' | 'warning' = 'success') => {
    setToast({ show: true, message, type });
  };

  const dismissToast = () => {
    setToast(prev => ({ ...prev, show: false }));
  };

  const handleOpenReview = (packageName?: string) => {
    if (packageName) {
      setSelectedPackage(packageName);
    }
    setActiveModal('reviewModal');
  };

  const handleOpenBooking = () => {
    setActiveModal('bookingModal');
  };

  const handleOpenDemo = () => {
    setActiveModal('demoModal');
  };

  const handleSelectPackage = (packageName: string) => {
    setSelectedPackage(packageName);
    showToast(`Selected ${packageName}! Opening review request...`, 'info');
    setTimeout(() => {
      setActiveModal('reviewModal');
    }, 600);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col font-sans selection:bg-goldAccent-500 selection:text-navy-950">
      {/* Fixed Header */}
      <Navbar
        onOpenReview={() => handleOpenReview()}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Page Content */}
      <main className="flex-1 pt-20">
        <Hero onOpenReview={() => handleOpenReview()} />
        <ConversionGap />
        <Packages onSelectPackage={handleSelectPackage} />
        <AiReceptionistWorkflow onOpenDemo={handleOpenDemo} />
        <SeoVsAeo />
        <WebsiteRedesign onOpenReview={() => handleOpenReview()} />
        <ReviewSection
          selectedPackage={selectedPackage}
          onLeadSuccess={msg => showToast(msg, 'success')}
        />
        <PartnershipStats />
        <FaqSection />
        <FinalCta
          onOpenReview={() => handleOpenReview()}
          onOpenBooking={handleOpenBooking}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ReviewModal
        isOpen={activeModal === 'reviewModal'}
        onClose={handleCloseModal}
        selectedPackage={selectedPackage}
        onSuccess={msg => showToast(msg, 'success')}
      />

      <BookingModal
        isOpen={activeModal === 'bookingModal'}
        onClose={handleCloseModal}
        onSuccess={msg => showToast(msg, 'success')}
      />

      <InteractiveDemoModal
        isOpen={activeModal === 'demoModal'}
        onClose={handleCloseModal}
        onBookCall={handleOpenBooking}
      />

      {/* Bottom Right Toast Feedback */}
      <NotificationToast
        toast={toast}
        onDismiss={dismissToast}
      />
    </div>
  );
};

export default App;
