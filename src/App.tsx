// import { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import usePageTracking from './hooks/usePageTracking';

// import Header from './sections/Header';
// import Hero from './sections/Hero';
// import QuickLinks from './sections/QuickLinks';
// import WhoWeAre from './sections/WhoWeAre';
// import Services from './sections/Services';
// import Industries from './sections/Industries';
// import Process from './sections/Process';
// import MidCta from './sections/MidCta';
// import WhyChooseUs from './sections/WhyChooseUs';
// import BrandIdentitySection from './sections/BrandIdentitySection';
// import Testimonials from './sections/Testimonials';
// import Faq from './sections/Faq';
// import Footer from './sections/Footer';

// import FloatingButtons from './components/FloatingButtons';
// import GetStartedTab from './components/GetStartedTab';
// import LeadModal from './components/LeadModal';
// import MobileCtaBar from './sections/MobileCtaBar';
// import IiiQBetsLanding from './sections/IiiQBetsLandingpage';

// import PrivacyPolicy from './sections/PrivacyPolicy';
// import TermsAndConditions from './sections/TermsAndConditions';
// import VisionApproach from './sections/VisionApproach';

// // Facebook Pixel Page Tracking
// function PageTracker() {
//   usePageTracking();
//   return null;
// }

// function HomePage() {
//   const [modalOpen, setModalOpen] = useState(false);
//   const openModal = () => setModalOpen(true);

//   return (
//     <div className="overflow-x-clip pb-14 md:pb-0">
//       <a
//         href="#home"
//         className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-navy-800 focus:px-4 focus:py-2 focus:text-white"
//       >
//         Skip to main content
//       </a>

//       <Header onRequestCall={openModal} />

//       <main>
//         <IiiQBetsLanding />
//         <WhoWeAre />
//         <Process />
//         <VisionApproach />
//         <BrandIdentitySection onRequestCall={openModal} />
//         <MidCta onRequestCall={openModal} />
//       </main>

//       <Footer onRequestCall={openModal} />

//       <FloatingButtons />
//       <GetStartedTab onRequestCall={openModal} />
//       <MobileCtaBar />

//       <LeadModal open={modalOpen} onClose={() => setModalOpen(false)} />
//     </div>
//   );
// }

// function App() {
//   return (
//     <>
//       <PageTracker />

//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//         <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
//         <Route path="/terms" element={<TermsAndConditions />} />
//       </Routes>
//     </>
//   );
// }

// export default App;


import { useState, ReactNode, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import usePageTracking from './hooks/usePageTracking';

import Header from './sections/Header';
import Footer from './sections/Footer';
import FloatingButtons from './components/FloatingButtons';
import GetStartedTab from './components/GetStartedTab';
import LeadModal from './components/LeadModal';
import MobileCtaBar from './sections/MobileCtaBar';

import IiiQBetsLanding from './sections/IiiQBetsLandingpage';
import WhoWeAre from './sections/WhoWeAre';
import Process from './sections/Process';
import VisionApproach from './sections/VisionApproach';
import BrandIdentitySection from './sections/BrandIdentitySection';
import MidCta from './sections/MidCta';

import PrivacyPolicy from './sections/PrivacyPolicy';
import TermsAndConditions from './sections/TermsAndConditions';

function PageTracker() {
  usePageTracking();
  return null;
}

interface LayoutProps {
  children: ReactNode;
  onRequestCall: () => void;
}

function Layout({ children, onRequestCall }: LayoutProps) {
  return (
    <div className="overflow-x-clip pb-14 md:pb-0">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-navy-800 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      <Header onRequestCall={onRequestCall} />

      <main id="main">{children}</main>

      <Footer onRequestCall={onRequestCall} />
      <FloatingButtons />
      <GetStartedTab onRequestCall={onRequestCall} />
      <MobileCtaBar />
    </div>
  );
}

function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  
  // This effect handles scrolling when the URL path changes
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Map paths to their section IDs
    const pathToId: Record<string, string> = {
      '/home': 'home',
      '/about-us': 'about',
      '/service': 'services',
      '/industries': 'industries',
      '/why-choose-us': 'why-choose-us',
      '/brand-identity': 'brand-identity',
    };

    const targetId = pathToId[pathname];
    if (targetId) {
      // Add a tiny delay to ensure the DOM is fully rendered before scrolling
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [pathname]);

  return (
    <>
      <Layout onRequestCall={openModal}>
        <IiiQBetsLanding />
        <WhoWeAre />
        <Process />
        <VisionApproach />
        <BrandIdentitySection onRequestCall={openModal} />
        <MidCta onRequestCall={openModal} />
      </Layout>
      <LeadModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

function App() {
  return (
    <>
      <PageTracker />
      <Routes>
        {/* All main nav paths go to HomePage */}
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about-us" element={<HomePage />} />
        <Route path="/service" element={<HomePage />} />
        <Route path="/industries" element={<HomePage />} />
        <Route path="/why-choose-us" element={<HomePage />} />
        <Route path="/brand-identity" element={<HomePage />} />
        
        {/* Separate legal pages */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/terms" element={<TermsAndConditions />} />
      </Routes>
    </>
  );
}

export default App;