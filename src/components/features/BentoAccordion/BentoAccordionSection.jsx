import React, { useState, memo } from 'react';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { PAGE_COPY } from '../../../data/pageCopy';
import { Icon } from '../../ui/Icon';

export const BentoAccordionSection = memo(function BentoAccordionSection() {
  const { isMobile } = useWindowSize();
  const [activeIndex, setActiveIndex] = useState(0);

  const items = PAGE_COPY.bento.items;

  // Handles accordion toggle click
  const handleAccordionToggle = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section id="features" className="py-24 px-4 bg-brand-oceanic relative overflow-hidden scroll-mt-28">
      {/* Decorative Radial Backdrop */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-glow-radial -z-10 pointer-events-none opacity-20" />
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-glow-gold -z-10 pointer-events-none opacity-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Headers */}
        <div className="text-center mb-16 max-w-2xl mx-auto animate-slide-up">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-nocturnal/40 border border-brand-mint/10 text-brand-mint text-[11px] font-semibold tracking-wider uppercase mb-4">
            <Icon name="cog-8-tooth" className="w-3.5 h-3.5 animate-spin [animation-duration:10s]" />
            Feature Matrix
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-mono-custom tracking-tight text-brand-arctic mb-4">
            Engineered Core Capabilities
          </h2>
          <p className="text-sm md:text-base text-brand-mint/70 font-sans">
            A modular architectural stack designed to run massive data extractions and transformations with absolute performance isolation.
          </p>
        </div>

        {/* Mobile Accordion View (<1024px) */}
        {isMobile ? (
          <div className="max-w-xl mx-auto space-y-4">
            {items.map((item) => {
              const isOpen = activeIndex === item.id;
              return (
                <div 
                  key={item.id}
                  className="rounded-2xl border-premium bg-[#1b303b]/45 transition-colors duration-150"
                >
                  <button
                    type="button"
                    onClick={() => handleAccordionToggle(item.id)}
                    className="flex items-center justify-between w-full p-5 text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-14 h-14 rounded-xl bg-brand-nocturnal flex items-center justify-center border border-brand-mint/15 text-brand-forsythia shadow flex-shrink-0">
                        <Icon name={item.iconName} className="w-10 h-10" />
                      </div>
                      <div className="font-sans">
                        <h3 className="text-sm font-semibold text-brand-arctic">{item.title}</h3>
                        <span className="text-[10px] font-mono text-brand-mint/55">{item.metric}</span>
                      </div>
                    </div>
                    
                    <span className="text-brand-mint/60">
                      {isOpen ? (
                        <Icon name="chevron-up" className="w-4 h-4 transition-transform duration-150" />
                      ) : (
                        <Icon name="chevron-down" className="w-4 h-4 transition-transform duration-150" />
                      )}
                    </span>
                  </button>

                  {/* Dynamic Height CSS Transition using grid-template-rows (150ms motion duration) */}
                  <div className={`grid transition-all duration-150 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 pt-1 border-t border-brand-mint/5">
                        <p className="text-xs leading-relaxed text-brand-mint/70 mb-4 font-sans">
                          {item.description}
                        </p>
                        {/* Mobile Micro Terminal Mockup */}
                        <div className="p-3 rounded-lg bg-brand-oceanic font-mono text-[9px] text-[#A6C0C9] border border-brand-mint/10 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-forsythia animate-ping" />
                          <span>SYS_STATUS: ACTIVE // {item.metric}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Desktop Bento Grid View (>=1024px) */
          <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
            {items.map((item) => {
              const isFocused = activeIndex === item.id;
              // Responsive offset card sizing: items 0 and 3 are double-width, items 1 and 2 are single-width
              const colSpanClass = (item.id === 0 || item.id === 3) ? 'col-span-2' : 'col-span-1';

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveIndex(item.id)}
                  className={`group relative flex flex-col justify-between overflow-hidden p-8 rounded-3xl border-premium transition-all duration-150 cursor-pointer transform hover:-translate-y-1 hover:shadow-2xl ${colSpanClass} ${
                    isFocused 
                      ? 'bg-[#1c323f]/85 border-brand-mint/20 shadow-xl shadow-brand-nocturnal/20' 
                      : 'bg-[#172d38]/50 hover:bg-[#1a313d]/60 opacity-80 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: isFocused ? item.bgAccent : undefined }}
                >
                  {/* Card Background Subtle Light Glow */}
                  <div className={`absolute -right-16 -top-16 w-44 h-44 rounded-full bg-glow-radial blur-2xl transition-opacity duration-150 pointer-events-none ${
                    isFocused ? 'opacity-100' : 'opacity-0'
                  }`} />

                  {/* Header / Metric */}
                  <div className="flex items-start justify-between mb-8 relative z-10">
                    <div className="p-4 rounded-2xl bg-brand-nocturnal/80 border border-brand-mint/15 text-brand-forsythia group-hover:scale-110 transition-transform duration-150 shadow-md">
                      <Icon name={item.iconName} className="w-11 h-11" />
                    </div>
                    <span className="font-mono text-xs text-brand-mint/60 border border-brand-mint/10 rounded-full px-3 py-1 bg-brand-oceanic/50">
                      {item.metric}
                    </span>
                  </div>

                  {/* Details / Text */}
                  <div className="relative z-10 font-sans">
                    <h3 className="text-lg font-bold text-brand-arctic mb-2 group-hover:text-brand-forsythia transition-colors duration-150">
                      {item.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-brand-mint/75 mb-6 min-h-[36px]">
                      {item.description}
                    </p>

                    {/* Interactive Parameter Display - Desktop Only */}
                    <div className="mt-4 p-3.5 rounded-xl bg-[#13242e] border border-brand-mint/5 flex items-center justify-between font-mono text-[10px] text-brand-mint/80">
                      <div className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full transition-all ${
                          isFocused ? 'bg-brand-forsythia animate-pulse' : 'bg-brand-mint/30'
                        }`} />
                        <span>CLUSTER_NODE_{item.id}</span>
                      </div>
                      <span className="text-brand-saffron/90 font-medium">
                        {isFocused ? 'STREAMING_METADATA_LOADED' : 'STANDBY'}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
});

