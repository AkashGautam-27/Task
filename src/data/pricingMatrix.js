export const PRICING_CONFIG = {
  currencies: {
    USD: {
      code: 'USD',
      symbol: '$',
      exchangeRate: 1.0,      // base currency
      regionalTariff: 1.0,    // no tariff surcharge
      roundToDecimals: 0      // USD looks clean with whole numbers
    },
    EUR: {
      code: 'EUR',
      symbol: '€',
      exchangeRate: 0.92,     // exchange rate USD to EUR
      regionalTariff: 1.08,    // 8% regional regulatory tariff
      roundToDecimals: 0
    },
    INR: {
      code: 'INR',
      symbol: '₹',
      exchangeRate: 83.50,    // exchange rate USD to INR
      regionalTariff: 0.90,    // 10% purchasing power parity discount tariff
      roundToDecimals: 0
    }
  },
  billingCycles: {
    monthly: {
      id: 'monthly',
      label: 'Monthly',
      discountMultiplier: 1.0
    },
    annual: {
      id: 'annual',
      label: 'Annual',
      discountMultiplier: 0.8 // 20% annual discount
    }
  },
  tiers: [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Ideal for early-stage teams automating basic workflow triggers.',
      baseMonthlyPriceUSD: 19,
      features: [
        '3 Active Automations',
        '10,000 monthly executions',
        'Standard latency thresholds',
        'Single-step webhook triggers',
        'Email-only developer support'
      ],
      ctaText: 'Get Started Now',
      popular: false
    },
    {
      id: 'pro',
      name: 'Pro',
      description: 'Built for scaling startups needing high throughput pipeline automation.',
      baseMonthlyPriceUSD: 49,
      features: [
        'Unlimited Automations',
        '150,000 monthly executions',
        'Priority execution nodes',
        'Multi-step logic & custom variables',
        '24/7 Slack support channel',
        'Advanced visual data builder'
      ],
      ctaText: 'Upgrade to Pro',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Custom throughput, dedicated pipelines, and strict compliance controls.',
      baseMonthlyPriceUSD: 129,
      features: [
        'Dedicated compute nodes',
        'Unlimited executions & bandwidth',
        'Custom SSO/SAML integration',
        'Dedicated account manager',
        '99.9% uptime SLA guarantee',
        'Advanced system analytics'
      ],
      ctaText: 'Contact Sales',
      popular: false
    }
  ]
};

// Derived spec-compliant exports for pricing engine usage
export const currencyRates = PRICING_CONFIG.currencies;
export const discountMultiplier = {
  monthly: PRICING_CONFIG.billingCycles.monthly.discountMultiplier,
  annual: PRICING_CONFIG.billingCycles.annual.discountMultiplier
};
export const pricingMatrix = PRICING_CONFIG.tiers;

