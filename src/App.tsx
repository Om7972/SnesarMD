import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/layout/Layout';

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Solutions = lazy(() => import('./pages/Solutions'));
const Innovation = lazy(() => import('./pages/Innovation'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const CaseStudyDetail = lazy(() => import('./pages/CaseStudyDetail'));
const Careers = lazy(() => import('./pages/Careers'));
const Contact = lazy(() => import('./pages/Contact'));
const IndustryDetail = lazy(() => import('./pages/IndustryDetail'));
const NotFound = lazy(() => import('./pages/NotFound'));

function LoadingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-electric-100 rounded-full" />
          <div className="absolute inset-0 border-4 border-transparent border-t-electric rounded-full animate-spin" />
        </div>
        <p className="text-navy-400 font-medium text-sm tracking-wide">Loading...</p>
      </div>
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<LoadingScreen />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/solutions/:slug" element={<Solutions />} />
              <Route path="/innovation" element={<Innovation />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
              <Route path="/resources" element={<CaseStudies />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/industries" element={<IndustryDetail />} />
              <Route path="/industries/:slug" element={<IndustryDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;

