import { useEffect, useRef } from 'react';
import { PriceStore } from '../../../hooks/usePriceStore';
import { calculateTierPrice } from '../../../utils/pricing';

export function PriceDisplay({ tier, type = 'monthly-price' }) {
  const elementRef = useRef(null);

  useEffect(() => {
    function updateDOM(currency, billingCycle) {
      if (!elementRef.current) return;
      
      const { monthlyPrice, annualBilledTotal, symbol } = calculateTierPrice(tier, currency, billingCycle);
      
      if (type === 'monthly-price') {
        elementRef.current.textContent = String(monthlyPrice);
      } else if (type === 'currency-symbol') {
        elementRef.current.textContent = symbol;
      } else if (type === 'annual-total') {
        if (billingCycle === 'annual') {
          elementRef.current.textContent = `Billed annually: ${symbol}${annualBilledTotal}`;
          elementRef.current.classList.remove('opacity-0');
          elementRef.current.classList.add('opacity-100');
        } else {
          // Use non-breaking space to keep layout height stable
          elementRef.current.textContent = '\u00A0';
          elementRef.current.classList.remove('opacity-100');
          elementRef.current.classList.add('opacity-0');
        }
      }
    }

    // Set initial pricing state
    updateDOM(PriceStore.getCurrency(), PriceStore.getBillingCycle());

    // Subscribe to store updates
    const unsubscribe = PriceStore.subscribe(updateDOM);
    return () => unsubscribe();
  }, [tier, type]);

  if (type === 'annual-total') {
    return (
      <span 
        ref={elementRef} 
        className="block h-4 text-xs font-mono text-brand-mint/50 transition-opacity duration-300 ease-out opacity-0"
      />
    );
  }

  return (
    <span 
      ref={elementRef} 
      className={type === 'monthly-price' ? 'font-mono text-4xl md:text-5xl font-bold tracking-tight text-brand-arctic' : 'font-mono text-2xl font-medium text-brand-forsythia mr-1'}
    />
  );
}
