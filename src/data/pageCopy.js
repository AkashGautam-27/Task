export const PAGE_COPY = {
  hero: {
    badge: 'Now Live: Core Engine v4.0.0',
    title: 'The Advanced AI Data Automation Engine',
    subtitle: 'Extract, transform, and synchronize massive data flows in real-time. Designed for modern engineering teams demanding hardware-accelerated processing and infinite scale.',
    primaryCta: 'Start Deploying Free',
    secondaryCta: 'Read the Docs',
    countdownLabel: 'Limited launch pricing ends in:',
    stats: [
      { value: '450K+', label: 'Pipelines Deployed' },
      { value: '1.2ms', label: 'Median Execution Latency' },
      { value: '99.99%', label: 'Guaranteed API Uptime' }
    ]
  },
  bento: {
    sectionTitle: 'Next-Generation Features',
    sectionSubtitle: 'Explore our multi-layered automation environment. Hover over any node to inspect detailed execution parameters.',
    items: [
      {
        id: 0,
        title: 'Cognitive Webhook Pipeline',
        metric: '250ms avg response',
        description: 'Dynamically parse inbound webhooks using local, zero-latency LLM models. Map payloads to databases automatically without drafting schema rules.',
        bgAccent: 'rgba(255, 200, 1, 0.05)',
        iconName: 'arrow-trending-up.svg'
      },
      {
        id: 1,
        title: 'Distributed Compute Clusters',
        metric: '99.98% reliability',
        description: 'Distribute data extraction tasks across multi-region server arrays. Run large workflows with automatic failover recovery systems.',
        bgAccent: 'rgba(255, 153, 50, 0.05)',
        iconName: 'cog-8-tooth.svg'
      },
      {
        id: 2,
        title: 'Neural Schema Inference',
        metric: '0.001% anomaly rate',
        description: 'Auto-detect formatting anomalies, missing datatypes, and integrity shifts in real-time before data reaches production tables.',
        bgAccent: 'rgba(217, 232, 226, 0.05)',
        iconName: 'chart-pie.svg'
      },
      {
        id: 3,
        title: 'Intelligent Rate Limiter',
        metric: 'Adaptive scaling',
        description: 'Automatically throttle API requests based on target servers capability, avoiding rate limits and endpoint bans without manual delay timers.',
        bgAccent: 'rgba(17, 76, 90, 0.2)',
        iconName: 'arrow-path.svg'
      }
    ]
  },
  testimonials: {
    sectionTitle: 'Engineered for Performance',
    list: [
      {
        quote: 'This engine has refactored our entire data stack. Our pipelines deploy in seconds and run with microsecond execution speeds.',
        author: 'Sarah Jenkins',
        role: 'VP of Engineering, Velo Systems'
      },
      {
        quote: 'The level of performance isolation is incredible. We run multi-gigabyte queries hourly with zero CPU throttle.',
        author: 'David Chen',
        role: 'Lead Infrastructure Architect, HexaFlow'
      }
    ]
  },
  faq: {
    sectionTitle: 'Frequently Asked Questions',
    items: [
      {
        question: 'How do you guarantee isolated performance pricing updates?',
        answer: 'Our pricing interface utilizes custom pub-sub refs to update DOM elements directly. Changing settings will not re-evaluate or re-render surrounding components.'
      },
      {
        question: 'Are there any API throughput constraints on Starter accounts?',
        answer: 'Starter accounts permit up to 10,000 monthly executions and 3 active pipelines. Throughput scales dynamically to meet Pro or Enterprise demands.'
      }
    ]
  }
};
