import React, { memo } from 'react';
import { PAGE_COPY } from '../../data/pageCopy';
import { Icon } from '../ui/Icon';

/**
 * Premium SVG Avatar component for testimonials.
 * Generates custom abstract vector graphics matching the Oceanic Noir palette.
 */
const TestimonialAvatar = memo(function TestimonialAvatar({ index }) {
  const gradId = `avatar-grad-${index}`;
  return (
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          {index === 0 ? (
            <>
              <stop offset="0%" stopColor="#114C5A" />
              <stop offset="100%" stopColor="#FFC801" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="#114C5A" />
              <stop offset="100%" stopColor="#FF9932" />
            </>
          )}
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="50" fill={`url(#${gradId})`} />
      {/* Decorative user silhouette shapes */}
      <circle cx="50" cy="40" r="18" fill="#F1F6F4" opacity="0.9" />
      <path d="M22 78C22 62 34 56 50 56C66 56 78 62 78 78" fill="#F1F6F4" opacity="0.9" />
      
      {/* Abstract technical accents */}
      {index === 0 ? (
        <path d="M50 14L54 26H46L50 14Z" fill="#FFC801" opacity="0.85" />
      ) : (
        <circle cx="50" cy="50" r="28" stroke="#D9E8E2" strokeWidth="1.5" opacity="0.45" strokeDasharray="3 3" />
      )}
    </svg>
  );
});

export const SocialProof = memo(function SocialProof() {
  const { sectionTitle, list } = PAGE_COPY.testimonials;

  const partners = [
    { name: 'Vercel', icon: 'cube-16-solid' },
    { name: 'Stripe', icon: 'link' },
    { name: 'Linear', icon: 'arrow-trending-up' },
    { name: 'Raycast', icon: 'search' }
  ];

  return (
    <section className="py-24 px-4 bg-brand-oceanic relative overflow-hidden border-t border-brand-mint/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Partner Brand Logos Row */}
        <div className="text-center mb-20 select-none">
          <p className="text-[10px] uppercase tracking-widest font-sans font-bold text-brand-mint/45 mb-8">
            Trusted by developers at leading platform operations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-55 hover:opacity-85 transition-opacity duration-300">
            {partners.map((partner, idx) => (
              <div key={idx} className="flex items-center gap-2 text-brand-arctic select-none">
                <Icon name={partner.icon} className="w-4.5 h-4.5 text-brand-mint/70" />
                <span className="font-mono text-xs tracking-[0.2em] font-semibold uppercase">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold font-mono-custom tracking-tight text-brand-arctic mb-4">
            {sectionTitle}
          </h2>
          <p className="text-xs sm:text-sm text-brand-mint/70">
            Hear from architectural leaders building high-throughput pipelines.
          </p>
        </div>

        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {list.map((testimonial, idx) => (
            <div 
              key={idx}
              className="group relative flex flex-col justify-between p-8 md:p-10 rounded-3xl glass-panel border-premium transition-all duration-350 hover:-translate-y-2 hover:scale-[1.01] hover:border-brand-mint/20 hover:shadow-2xl hover:shadow-brand-nocturnal/20"
            >
              {/* Inner Glowing Hover Accent */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-brand-forsythia/0 via-brand-mint/5 to-brand-saffron/0 opacity-0 group-hover:opacity-100 transition-opacity duration-350 pointer-events-none" />
              
              <div className="relative z-10">
                {/* Quotation Icon and verified status */}
                <div className="mb-6 flex justify-between items-start">
                  <span className="text-5xl text-brand-forsythia/25 font-serif select-none leading-none">
                    “
                  </span>
                  <span className="font-mono text-[9px] text-brand-mint/45 border border-brand-mint/10 rounded-full px-3 py-1 bg-brand-oceanic/50">
                    VERIFIED_INFRA_NODE
                  </span>
                </div>
                
                <p className="text-xs sm:text-sm leading-relaxed text-brand-mint/80 font-sans italic mb-10">
                  {testimonial.quote}
                </p>
              </div>

              {/* Author & Footer Block */}
              <div className="relative z-10 flex items-center justify-between border-t border-brand-mint/5 pt-6 mt-auto">
                <div className="flex items-center gap-3">
                  {/* Premium inline SVG Avatar */}
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-brand-mint/20 bg-brand-oceanic shadow-md group-hover:scale-105 transition-transform duration-250">
                    <TestimonialAvatar index={idx} />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-brand-arctic group-hover:text-brand-forsythia transition-colors duration-200">
                      {testimonial.author}
                    </h3>
                    <span className="text-[10px] text-brand-mint/55 font-sans font-light">
                      {testimonial.role}
                    </span>
                  </div>
                </div>

                {/* Case Study Link (using link-solid) */}
                <a 
                  href="#case-study" 
                  className="inline-flex items-center gap-1.5 text-[10px] font-bold text-brand-forsythia hover:text-brand-saffron transition-colors"
                >
                  <Icon name="link-solid" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-250" />
                  <span>Case Study</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
});


