import { pricingMatrix, currencyRates, discountMultiplier } from '../data/pricingMatrix';

/**
 * Calculates pricing details for a tier, currency, and billing cycle.
 * Performs dynamic calculations without any hardcoding of values.
 * 
 * @param {object|string} tierOrId - The tier object or tier ID (e.g. 'starter')
 * @param {string} currencyCode - The ISO currency code (USD, EUR, INR)
 * @param {string} billingCycleId - The billing cycle ID ('monthly', 'annual')
 * @returns {object} Calculated prices and symbols
 */
export function calculateTierPrice(tierOrId, currencyCode, billingCycleId) {
  const currency = currencyRates[currencyCode];
  const discount = discountMultiplier[billingCycleId];
  
  if (!currency) {
    throw new Error(`Invalid currency code: ${currencyCode}`);
  }
  if (discount === undefined) {
    throw new Error(`Invalid billing cycle ID: ${billingCycleId}`);
  }
  
  // Find tier dynamically from pricingMatrix
  const tierId = typeof tierOrId === 'string' ? tierOrId : tierOrId?.id;
  const tier = pricingMatrix.find(t => t.id.toLowerCase() === tierId?.toLowerCase());
  
  if (!tier) {
    throw new Error(`Tier not found: ${tierId}`);
  }
  
  const base = tier.baseMonthlyPriceUSD;
  const rate = currency.exchangeRate;
  const tariff = currency.regionalTariff;
  
  // Dynamic formula: Base Price * Exchange Rate * Regional Tariff Adjustment * Discount
  const rawPrice = base * rate * tariff * discount;
  
  // Round according to configuration
  const factor = Math.pow(10, currency.roundToDecimals);
  const monthlyPrice = Math.round(rawPrice * factor) / factor;
  
  // Annualized price total
  const annualBilledTotal = Math.round(monthlyPrice * 12);
  
  return {
    monthlyPrice,
    annualBilledTotal,
    symbol: currency.symbol,
    formattedPrice: `${currency.symbol}${monthlyPrice}`
  };
}

