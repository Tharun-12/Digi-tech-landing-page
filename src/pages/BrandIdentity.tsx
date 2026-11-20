import { useState } from 'react';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import FloatingButtons from '../components/FloatingButtons';
import GetStartedTab from '../components/GetStartedTab';
import LeadModal from '../components/LeadModal';
import MobileCtaBar from '../sections/MobileCtaBar';
import BrandIdentitySection from '../sections/BrandIdentitySection';
import MidCta from '../sections/MidCta';

export default function BrandIdentityPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  return (
    <div className="overflow-x-clip pb-14 md:pb-0">
      <Header onRequestCall={openModal} />
      <main>
        <BrandIdentitySection onRequestCall={openModal} />
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