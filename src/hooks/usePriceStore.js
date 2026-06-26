import { PRICING_CONFIG } from '../data/pricingMatrix';

// Singleton store instance kept outside React component lifecycle
let currentCurrency = 'USD';
let currentBillingCycle = 'monthly';
const subscribers = new Set();

export const PriceStore = {
  getCurrency: () => currentCurrency,
  getBillingCycle: () => currentBillingCycle,
  
  setCurrency: (currency) => {
    if (!PRICING_CONFIG.currencies[currency]) return;
    if (currentCurrency === currency) return;
    currentCurrency = currency;
    PriceStore.notify();
  },
  
  setBillingCycle: (cycle) => {
    if (!PRICING_CONFIG.billingCycles[cycle]) return;
    if (currentBillingCycle === cycle) return;
    currentBillingCycle = cycle;
    PriceStore.notify();
  },
  
  subscribe: (callback) => {
    subscribers.add(callback);
    // Return unsubscribe handler
    return () => {
      subscribers.delete(callback);
    };
  },
  
  notify: () => {
    subscribers.forEach((callback) => {
      try {
        callback(currentCurrency, currentBillingCycle);
      } catch (err) {
        console.error('PriceStore notification failed: ', err);
      }
    });
  }
};
