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
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
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

// Admin panel
import { AuthProvider, ProtectedRoute } from './context/AuthContext';
import AdminLogin from './Login/AdminLogin';
import AdminLayout from './AdminLayout/AdminLayout';
import Dashboard from "./Admin/AdminDashboard";
import Contacts from './Admin/AdminContact';

function PageTracker() {
  const { pathname } = useLocation();
  // Don't send admin page views to analytics
  if (pathname.startsWith('/admin')) return null;
  return <Tracker />;
}

function Tracker() {
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

const pathToId: Record<string, string> = {
  '/home': 'home',
  '/about-us': 'about',
  '/service': 'services',
  '/industries': 'industries',
  '/why-choose-us': 'why-choose-us',
  '/brand-identity': 'brand-identity',
};

function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const { pathname } = useLocation();

  useEffect(() => {
    const targetId = pathToId[pathname];
    if (!targetId) return;
    const timer = setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    return () => clearTimeout(timer); // cleanup avoids scrolling after navigating away
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
    <AuthProvider>
      <PageTracker />
      <Routes>
        {/* Public site: all main nav paths render HomePage */}
        {['/', '/home', '/about-us', '/service', '/industries', '/why-choose-us', '/brand-identity'].map((p) => (
          <Route key={p} path={p} element={<HomePage />} />
        ))}

        {/* Legal pages */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/terms" element={<TermsAndConditions />} />

        {/* Admin panel */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;