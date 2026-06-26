import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/layout/Hero';
import { TrustedCompanies } from './components/layout/TrustedCompanies';
import { Icon } from './components/ui/Icon';

// Code splitting / lazy loading for below-the-fold components to reduce initial JS payload (TTI < 500ms)
const BentoAccordionSection = lazy(() => import('./components/features/BentoAccordion/BentoAccordionSection').then(m => ({ default: m.BentoAccordionSection })));
const PricingSection = lazy(() => import('./components/features/Pricing/PricingSection').then(m => ({ default: m.PricingSection })));
const SocialProof = lazy(() => import('./components/layout/SocialProof').then(m => ({ default: m.SocialProof })));
const FAQSection = lazy(() => import('./components/layout/FAQSection').then(m => ({ default: m.FAQSection })));
const CTASection = lazy(() => import('./components/layout/CTASection').then(m => ({ default: m.CTASection })));
const Footer = lazy(() => import('./components/layout/Footer').then(m => ({ default: m.Footer })));

export default function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Schedule loader fade-out at 350ms (well under the 500ms limit to ensure fast TTI)
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 350);

    // Completely unmount the loader node shortly after fade-out completes
    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 650);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  // Monitor page scroll coordinates to show/hide "Back to Top" button
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans antialiased text-brand-arctic bg-brand-oceanic selection:bg-brand-forsythia/35 selection:text-brand-arctic">
      {/* 500ms Initial Entrance Loader */}
      {loading && (
        <div 
          className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-oceanic transition-opacity duration-300 ${
            fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          {/* Logo animation using cube-16-solid */}
          <div className="relative flex flex-col items-center gap-4 select-none">
            <div className="w-12 h-12 rounded-2xl bg-brand-nocturnal flex items-center justify-center border-2 border-brand-forsythia shadow-2xl animate-spin [animation-duration:3s]">
              <Icon name="cube-16-solid" className="w-6.5 h-6.5 text-brand-forsythia" />
            </div>
            <span className="font-mono text-sm tracking-[0.3em] font-bold text-brand-arctic/80">
              DATAPILOT<span className="text-brand-saffron">.AI</span>
            </span>
          </div>
        </div>
      )}

      {/* Main Page Layout */}
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <TrustedCompanies />
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <BentoAccordionSection />
        </Suspense>
        <Suspense fallback={<div className="min-h-[500px]" />}>
          <PricingSection />
        </Suspense>
        <Suspense fallback={<div className="min-h-[300px]" />}>
          <SocialProof />
        </Suspense>
        <Suspense fallback={<div className="min-h-[350px]" />}>
          <FAQSection />
        </Suspense>
        <Suspense fallback={<div className="min-h-[250px]" />}>
          <CTASection />
        </Suspense>
      </main>

      <Suspense fallback={<div className="min-h-[150px]" />}>
        <Footer />
      </Suspense>

      {/* Back to Top Floating Action Button using chevron-up-solid */}
      <button
        type="button"
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 w-10 h-10 rounded-xl glass-panel border border-brand-mint/15 shadow-2xl flex items-center justify-center text-brand-forsythia transition-all duration-350 transform ${
          showScrollTop ? 'translate-y-0 opacity-100 hover:scale-105 active:scale-95' : 'translate-y-12 opacity-0 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <Icon name="chevron-up-solid" className="w-4.5 h-4.5 text-brand-forsythia" />
      </button>
    </div>
  );
}
