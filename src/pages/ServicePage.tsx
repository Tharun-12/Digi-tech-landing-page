import { useState } from 'react';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import FloatingButtons from '../components/FloatingButtons';
import GetStartedTab from '../components/GetStartedTab';
import LeadModal from '../components/LeadModal';
import MobileCtaBar from '../sections/MobileCtaBar';
import Services from '../sections/Services';
import MidCta from '../sections/MidCta';

export default function ServicePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  return (
    <div className="overflow-x-clip pb-14 md:pb-0">
      <Header onRequestCall={openModal} />
      <main className="pt-6">
        <Services />
        <div className="h-10" />
        <MidCta onRequestCall={openModal} />
      </main>
      <Footer onRequestCall={openModal} />
      <FloatingButtons />
      <GetStartedTab onRequestCall={openModal} />
      <MobileCtaBar />
      <LeadModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}