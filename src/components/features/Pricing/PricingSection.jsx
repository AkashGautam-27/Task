import React, { memo } from 'react';
import { pricingMatrix } from '../../../data/pricingMatrix';
import { PricingSwitcher } from './PricingSwitcher';
import { PriceDisplay } from './PriceDisplay';
import { Button } from '../../ui/Button';
import { Icon } from '../../ui/Icon';

export const PricingSection = memo(function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 px-4 overflow-hidden border-t border-brand-mint/5 bg-gradient-to-b from-brand-oceanic via-[#182f3c] to-brand-oceanic scroll-mt-28">
      {/* Visual Accent Backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-glow-radial -z-10 pointer-events-none opacity-40" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-glow-saffron -z-10 pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16 max-w-2xl mx-auto animate-slide-up">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-nocturnal/40 border border-brand-mint/10 text-brand-mint text-[11px] font-semibold tracking-wider uppercase mb-4">
            <Icon name="chart-pie" className="w-3.5 h-3.5" />
            Transparent Licensing
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-mono-custom tracking-tight text-brand-arctic mb-4">
            Flexible Plan Architecture
          </h2>
          <p className="text-sm md:text-base text-brand-mint/70">
            Scale throughput, nodes, and compliance guidelines dynamically. Upgrade, downgrade, or switch billing cycles instantly.
          </p>
        </div>

        {/* Pricing Switcher */}
        <PricingSwitcher />

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {pricingMatrix.map((tier) => (
            <div 
              key={tier.id}
              className={`relative flex flex-col justify-between p-8 rounded-3xl transition-all duration-300 ${
                tier.popular 
                  ? 'bg-[#1b3446] border-2 border-brand-forsythia shadow-[0_0_45px_rgba(255,200,1,0.35)] md:scale-[1.08] md:-mt-4 md:hover:scale-[1.10] hover:scale-[1.02] z-20' 
                  : 'bg-brand-oceanic border border-brand-mint/10 hover:border-brand-mint/30 shadow-md hover:scale-[1.02] z-0'
              }`}
            >
              {/* Popular / Featured Badge */}
              {tier.popular && (
                <div 
                  className="absolute -top-3.5 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-forsythia text-brand-oceanic text-[10px] font-bold uppercase tracking-wider shadow"
                  style={{ left: '50%', transform: 'translateX(-50%)' }}
                >
                  <Icon name="arrow-trending-up" className="w-3 h-3 text-brand-oceanic" />
                  Most Popular
                </div>
              )}

              {/* Card Top */}
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-brand-arctic">{tier.name}</h3>
                  <div className="p-2 bg-brand-nocturnal/60 rounded-xl flex items-center justify-center border border-brand-mint/15 text-brand-forsythia shadow flex-shrink-0">
                    <Icon name={tier.id === 'starter' ? 'cube-16-solid' : tier.id === 'pro' ? 'arrow-trending-up' : 'cog-8-tooth'} className="w-10 h-10 text-brand-forsythia" />
                  </div>
                </div>
                <p className="text-xs text-brand-mint/60 leading-relaxed mb-6 min-h-[36px]">
                  {tier.description}
                </p>

                {/* Price String container - strictly isolated updates */}
                <div className="mb-6 flex flex-col justify-center min-h-[72px] border-b border-brand-mint/5 pb-6">
                  <div className="flex items-baseline select-none">
                    <PriceDisplay tier={tier} type="currency-symbol" />
                    <PriceDisplay tier={tier} type="monthly-price" />
                    <span className="text-brand-mint/55 text-sm ml-1.5 font-sans font-medium">/mo</span>
                  </div>
                  {/* Billed annually indicator */}
                  <PriceDisplay tier={tier} type="annual-total" />
                </div>

                {/* Feature List */}
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs text-brand-arctic/85">
                      <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-brand-nocturnal/30 flex items-center justify-center border border-brand-mint/10 text-brand-mint">
                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Action */}
              <Button 
                variant={tier.popular ? 'primary' : 'secondary'} 
                className="w-full text-xs font-semibold py-3"
              >
                {tier.ctaText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

