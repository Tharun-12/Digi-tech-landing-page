import { useState } from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import QuickLinks from './sections/QuickLinks';
import WhoWeAre from './sections/WhoWeAre';
import Services from './sections/Services';
import Process from './sections/Process';
import MidCta from './sections/MidCta';
import Stats from './sections/Stats';
import Clients from './sections/Clients';
import WhyChooseUs from './sections/WhyChooseUs';
import BlogNews from './sections/BlogNews';
import Testimonials from './sections/Testimonials';
import Faq from './sections/Faq';
import Footer from './sections/Footer';
import FloatingButtons from './components/FloatingButtons';
import GetStartedTab from './components/GetStartedTab';
import LeadModal from './components/LeadModal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  return (
    <div className="overflow-x-clip">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-navy-800 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      <Header onRequestCall={openModal} />

      <main>
        <Hero onRequestCall={openModal} />
        <QuickLinks />
        <WhoWeAre />
        <Services />
        <Process />
        <MidCta />
        <Stats />
        <Clients />
        <WhyChooseUs />
        <BlogNews />
        <Testimonials />
        <Faq />
      </main>

      <Footer />

      <FloatingButtons />
      <GetStartedTab />
      <LeadModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default App;
