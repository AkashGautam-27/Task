import React, { memo } from 'react';
import { Icon } from '../ui/Icon';

export const TrustedCompanies = memo(function TrustedCompanies() {
  const companies = [
    { name: 'Vercel', icon: 'cube-16-solid' },
    { name: 'Stripe', icon: 'link' },
    { name: 'Linear', icon: 'arrow-trending-up' },
    { name: 'Raycast', icon: 'search' },
    { name: 'GitLab', icon: 'cog-8-tooth' },
    { name: 'Slack', icon: 'arrow-path' },
    { name: 'Netlify', icon: 'link-solid' }
  ];

  // Double the list to support seamless infinite looping in CSS marquee
  const marqueeItems = [...companies, ...companies];

  return (
    <section className="py-10 bg-brand-oceanic relative overflow-hidden border-b border-brand-mint/5 select-none z-10">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Faded edges marquee viewport wrap */}
        <div className="relative w-full overflow-hidden py-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:z-10 before:w-24 before:bg-gradient-to-r before:from-brand-oceanic before:to-transparent after:absolute after:right-0 after:top-0 after:bottom-0 after:z-10 after:w-24 after:bg-gradient-to-l after:from-brand-oceanic after:to-transparent">
          
          <div className="animate-marquee gap-12 md:gap-20">
            {marqueeItems.map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-2.5 text-brand-mint/45 hover:text-brand-forsythia hover:scale-105 transition-all duration-150 cursor-pointer"
              >
                <Icon name={item.icon} className="w-5 h-5 text-current" />
                <span className="font-mono text-[11px] font-bold tracking-[0.25em] uppercase">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
          
        </div>

      </div>
    </section>
  );
});

