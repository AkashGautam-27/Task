import React, { useState, useCallback, useMemo, memo } from 'react';
import { PriceStore } from '../../../hooks/usePriceStore';
import { currencyRates } from '../../../data/pricingMatrix';
import { Icon } from '../../ui/Icon';

export const PricingSwitcher = memo(function PricingSwitcher() {
  const [activeCycle, setActiveCycle] = useState(PriceStore.getBillingCycle());
  const [activeCurrency, setActiveCurrency] = useState(PriceStore.getCurrency());
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleCycleChange = useCallback((cycle) => {
    setActiveCycle(cycle);
    PriceStore.setBillingCycle(cycle);
  }, []);

  const handleCurrencyChange = useCallback((currencyCode) => {
    setActiveCurrency(currencyCode);
    PriceStore.setCurrency(currencyCode);
    setDropdownOpen(false);
  }, []);

  const currencies = useMemo(() => Object.values(currencyRates), []);
  const selectedCurrencyObj = useMemo(() => currencyRates[activeCurrency], [activeCurrency]);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up">
      {/* Billing Cycle Toggle */}
      <div className="relative flex items-center p-1 rounded-full bg-brand-oceanic border border-brand-mint/10 h-11 w-64 shadow-inner">
        {/* Sliding background */}
        <div 
          className={`absolute top-1 bottom-1 rounded-full bg-brand-nocturnal transition-all duration-300 ease-out ${
            activeCycle === 'annual' ? 'left-[calc(50%)] right-1' : 'left-1 right-[calc(50%)]'
          }`}
        />
        
        <button
          type="button"
          onClick={() => handleCycleChange('monthly')}
          aria-pressed={activeCycle === 'monthly'}
          className={`relative z-10 w-1/2 text-center text-xs font-semibold font-sans tracking-wide transition-colors duration-200 ${
            activeCycle === 'monthly' ? 'text-brand-forsythia' : 'text-brand-arctic/60 hover:text-brand-arctic'
          }`}
        >
          Monthly
        </button>
        <button
          type="button"
          onClick={() => handleCycleChange('annual')}
          aria-pressed={activeCycle === 'annual'}
          className={`relative z-10 w-1/2 flex items-center justify-center gap-1.5 text-center text-xs font-semibold font-sans tracking-wide transition-colors duration-200 ${
            activeCycle === 'annual' ? 'text-brand-forsythia' : 'text-brand-arctic/60 hover:text-brand-arctic'
          }`}
        >
          Annual
          <span className="px-1.5 py-0.5 text-[9px] font-bold rounded bg-brand-saffron/20 text-brand-saffron animate-pulse">
            -20%
          </span>
        </button>
      </div>

      {/* Custom Currency Selector Dropdown */}
      <div className="relative w-44">
        <button
          type="button"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          aria-haspopup="listbox"
          aria-expanded={dropdownOpen}
          aria-label="Select pricing currency"
          className="flex items-center justify-between w-full h-11 px-4 rounded-full bg-brand-oceanic border border-brand-mint/10 hover:border-brand-mint/30 text-xs font-semibold text-brand-arctic/85 transition-all focus:outline-none"
        >
          <span className="flex items-center gap-2">
            <span className="text-brand-forsythia font-mono text-sm">{selectedCurrencyObj.symbol}</span>
            <span>{selectedCurrencyObj.code}</span>
          </span>
          <Icon name="chevron-down" className={`w-3.5 h-3.5 text-brand-mint/60 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
        </button>

        {dropdownOpen && (
          <>
            {/* Overlay background to dismiss */}
            <div 
              className="fixed inset-0 z-20" 
              onClick={() => setDropdownOpen(false)}
            />
            
            <ul 
              role="listbox"
              aria-label="Pricing currency options"
              className="absolute right-0 left-0 mt-2 p-1.5 z-30 rounded-2xl glass-panel border border-brand-mint/15 shadow-2xl animate-fade-in"
            >
              {currencies.map((curr) => (
                <li key={curr.code} role="presentation">
                  <button
                    type="button"
                    role="option"
                    aria-selected={activeCurrency === curr.code}
                    onClick={() => handleCurrencyChange(curr.code)}
                    className={`flex items-center justify-between w-full px-3 py-2 text-left rounded-xl text-xs transition-colors ${
                      activeCurrency === curr.code 
                        ? 'bg-brand-nocturnal/45 text-brand-forsythia font-semibold' 
                        : 'text-brand-arctic/75 hover:bg-brand-nocturnal/20 hover:text-brand-arctic'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="font-mono text-brand-forsythia text-sm w-4">{curr.symbol}</span>
                      <span>{curr.code}</span>
                    </span>
                    {activeCurrency === curr.code && (
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-forsythia" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
});

