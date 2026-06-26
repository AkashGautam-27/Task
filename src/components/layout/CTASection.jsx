import React, { memo } from 'react';
import { Icon } from '../ui/Icon';

/**
 * Premium Call to Action (CTA) Section.
 * Implements a high-contrast Forsythia-to-Saffron gradient background card,
 * dynamic CSS-only animated button transitions, and full aria-accessibility markers.
 */
export const CTASection = memo(function CTASection() {
  return (
    <section id="cta" className="py-20 px-4 bg-brand-oceanic relative overflow-hidden" aria-labelledby="cta-heading">
      {/* Decorative ambient background grid and glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow-radial opacity-35 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Main CTA banner with high-contrast gradient (Forsythia to Deep Saffron) */}
        <div className="bg-gradient-to-r from-brand-forsythia to-brand-saffron rounded-3xl p-10 md:p-16 shadow-2xl text-brand-oceanic relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10 border border-white/10 group">
          
          {/* Subtle abstract glow overlay to deepen background contrast */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent opacity-70 pointer-events-none" />
          
          <div className="max-w-xl text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-oceanic/10 text-brand-oceanic text-[10px] font-bold uppercase tracking-wider mb-4 border border-brand-oceanic/5 select-none">
              <Icon name="cube-16-solid" className="w-3.5 h-3.5 text-brand-oceanic" />
              Scale Instantly
            </span>
            
            <h2 id="cta-heading" className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 font-mono-custom text-brand-oceanic leading-[1.12]">
              Ready to Accelerate Your Pipelines?
            </h2>
            
            <p className="text-xs sm:text-sm md:text-base text-brand-oceanic/80 font-medium leading-relaxed">
              Join thousands of platform operations engineering teams deploying hardware-accelerated workflows at scale. Run your first pipeline today.
            </p>
          </div>

          <div className="flex-shrink-0 w-full lg:w-auto flex flex-col sm:flex-row gap-4 items-center relative z-10">
            {/* Pulsing primary CTA button with continuous shimmer sweep */}
            <a
              href="#pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-brand-oceanic text-brand-arctic font-bold text-sm tracking-wide shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand-oceanic focus:ring-offset-2 focus:ring-offset-brand-forsythia relative overflow-hidden group/btn animate-btn-pulse"
              aria-label="Start deploying data pipelines for free on our platform"
            >
              {/* Extra shimmer sweep on hover */}
              <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
              
              {/* Continuous automated background shimmer */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer skew-x-12" />

              <span className="flex items-center gap-2 relative z-10 select-none">
                Deploy Free Now
                <Icon name="arrow-trending-up" className="w-4 h-4 text-brand-forsythia" />
              </span>
            </a>

            <a
              href="#faq"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-xl bg-brand-oceanic/10 text-brand-oceanic hover:bg-brand-oceanic/15 font-bold text-sm tracking-wide transition-all duration-200 border border-brand-oceanic/15 focus:outline-none focus:ring-2 focus:ring-brand-oceanic focus:ring-offset-2 focus:ring-offset-brand-forsythia"
              aria-label="Navigate to frequently asked questions"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});
