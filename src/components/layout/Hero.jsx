import React, { useState, useEffect, memo } from 'react';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { PAGE_COPY } from '../../data/pageCopy';

// Live Ticking Countdown Timer (JetBrains Mono)
const CountdownTimer = memo(function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(8099); // 2h 14m 59s

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 8099));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = String(Math.floor(timeLeft / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, '0');
  const seconds = String(timeLeft % 60).padStart(2, '0');

  return (
    <div className="flex items-center gap-1.5 font-mono text-sm md:text-base font-bold tracking-widest text-brand-forsythia select-none">
      <span className="bg-[#12232c]/90 px-3 py-1 rounded-xl border border-brand-mint/10 shadow">{hours}</span>
      <span className="text-brand-mint/40 animate-pulse">:</span>
      <span className="bg-[#12232c]/90 px-3 py-1 rounded-xl border border-brand-mint/10 shadow">{minutes}</span>
      <span className="text-brand-mint/40 animate-pulse">:</span>
      <span className="bg-[#12232c]/90 px-3 py-1 rounded-xl border border-brand-mint/10 shadow">{seconds}</span>
    </div>
  );
});

export const Hero = memo(function Hero() {
  const { badge, subtitle, primaryCta, secondaryCta, countdownLabel, stats } = PAGE_COPY.hero;

  const statIcons = ['cube-16-solid', 'arrow-path', 'chart-pie'];

  return (
    <section id="hero" className="relative pt-32 pb-24 px-4 overflow-hidden bg-grid-pattern bg-[#172B36] z-10 scroll-mt-28">
      
      {/* 1. Animated Background & Floating Particles (CSS Only, GPU Accelerated) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-glow-radial opacity-30 blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-glow-gold opacity-15 blur-3xl" />
        
        {/* Floating Particles */}
        <div className="absolute top-[15%] left-[10%] w-3 h-3 rounded-full bg-brand-forsythia/30 blur-[1px] animate-float-1" />
        <div className="absolute top-[45%] left-[8%] w-5 h-5 rounded-full bg-brand-nocturnal/40 border border-brand-mint/10 animate-float-2" />
        <div className="absolute top-[25%] right-[12%] w-4 h-4 rounded-full bg-brand-saffron/20 blur-[1px] animate-float-3" />
        <div className="absolute top-[60%] right-[15%] w-6 h-6 rounded-full bg-brand-mint/10 border border-brand-mint/5 animate-float-1" />
        <div className="absolute bottom-[10%] left-[20%] w-4 h-4 rounded-full bg-brand-forsythia/20 animate-float-3" />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        
        {/* Release Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-panel border-premium text-xs text-brand-mint/90 mb-8 select-none animate-fade-in">
          <Icon name="arrow-path" className="w-3.5 h-3.5 text-brand-forsythia animate-spin [animation-duration:8s]" />
          <span className="font-semibold tracking-wide font-sans">{badge}</span>
        </div>

        {/* Hero Headline (Inter Font) */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-brand-arctic leading-[1.08] mb-6 max-w-4xl mx-auto animate-slide-up font-sans">
          Automate Data Pipelines <br className="hidden md:inline" />
          With <span className="font-mono animate-brand-hero select-none">DataPilot AI</span>
        </h1>

        {/* Subheading (Inter Font) */}
        <p className="text-sm sm:text-base md:text-lg text-brand-mint/70 font-sans font-light max-w-2xl mx-auto leading-relaxed mb-10 animate-slide-up">
          {subtitle}
        </p>

        {/* Call to Actions (CTA with 150ms hover duration) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 animate-slide-up">
          <Button 
            variant="primary" 
            size="lg" 
            className="w-full sm:w-auto flex items-center justify-center gap-2 duration-150 transition-all"
          >
            {primaryCta}
            <Icon name="chevron-right" className="w-4 h-4 text-brand-oceanic stroke-[3]" />
          </Button>
          <Button 
            variant="secondary" 
            size="lg" 
            className="w-full sm:w-auto flex items-center justify-center gap-2 duration-150 transition-all"
          >
            <Icon name="search" className="w-4 h-4 text-brand-mint/80" />
            {secondaryCta}
          </Button>
        </div>

        {/* Launch Countdown Container (JetBrains Mono for digits) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-24 p-4 rounded-2xl glass-panel border-premium max-w-md mx-auto shadow-2xl animate-fade-in select-none">
          <span className="text-xs font-sans text-brand-arctic/85 font-medium flex items-center gap-1.5">
            <Icon name="cog-8-tooth" className="w-3.5 h-3.5 text-brand-mint/60" />
            {countdownLabel}
          </span>
          <CountdownTimer />
        </div>

        {/* 2. Premium Interactive Mockup Dashboard Illustration */}
        <div className="max-w-4xl mx-auto mb-24 relative select-none animate-slide-up group">
          {/* Subtle Outer Neon Ring */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-brand-forsythia/10 via-brand-saffron/10 to-brand-nocturnal/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
          
          <div className="glass-panel border-premium bg-[#172B36]/60 rounded-3xl p-5 md:p-6 shadow-2xl relative">
            
            {/* Dashboard Window Header Bar */}
            <div className="flex items-center justify-between border-b border-brand-mint/10 pb-4 mb-6">
              
              {/* Vercel-style color dots */}
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]/80" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]/80" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]/80" />
              </div>

              {/* Glassmorphic Mock Search Input (uses search.svg) */}
              <div className="w-64 sm:w-80 h-8 rounded-lg bg-brand-oceanic border border-brand-mint/10 flex items-center px-3 gap-2">
                <Icon name="search" className="w-3.5 h-3.5 text-brand-mint/50" />
                <span className="text-[10px] text-brand-mint/40 font-mono tracking-wide">
                  search active pipelines...
                </span>
                <span className="ml-auto text-[8px] font-mono bg-brand-nocturnal/60 border border-brand-mint/10 px-1.5 py-0.5 rounded text-brand-mint/50">
                  ⌘K
                </span>
              </div>

              {/* Connected node status (uses link.svg) */}
              <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-brand-mint/70 border border-brand-mint/5 bg-brand-nocturnal/40 px-2.5 py-1 rounded-lg">
                <Icon name="link" className="w-3.5 h-3.5 text-brand-forsythia" />
                <span>SYS_STATUS: <span className="text-brand-forsythia font-bold">CONNECTED</span></span>
              </div>
            </div>

            {/* Dashboard Interactive Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              
              {/* Card 1: Node Health Monitor (uses cog-8-tooth.svg & arrow-trending-up.svg) */}
              <div className="p-4 rounded-2xl bg-brand-oceanic/40 border border-brand-mint/5 hover:border-brand-mint/20 duration-150 transition-all text-left flex flex-col justify-between min-h-[140px] relative overflow-hidden">
                <div className="flex items-start justify-between relative z-10">
                  <span className="font-mono text-[9px] font-bold text-brand-forsythia flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-forsythia animate-ping" />
                    HEALTH_STABLE
                  </span>
                </div>
                <Icon name="cog-8-tooth" className="w-14 h-14 text-brand-mint/20 animate-spin [animation-duration:20s] absolute right-4 top-4 pointer-events-none" />
                <div>
                  <div className="font-mono text-xl font-bold text-brand-arctic leading-none mb-1">
                    99.98%
                  </div>
                  <div className="text-[9px] font-sans text-brand-mint/50 flex items-center gap-1">
                    <Icon name="arrow-trending-up" className="w-3 h-3 text-brand-forsythia" />
                    Real-time execution latency stable
                  </div>
                </div>
              </div>

              {/* Card 2: Active Schema Inference (uses cube-16-solid.svg & chart-pie.svg) */}
              <div className="p-4 rounded-2xl bg-brand-oceanic/40 border border-brand-mint/5 hover:border-brand-mint/20 duration-150 transition-all text-left flex flex-col justify-between min-h-[140px] relative overflow-hidden">
                <div className="flex items-start justify-between relative z-10">
                  <span className="font-mono text-[9px] font-bold text-brand-saffron">
                    SCHEMA_INFERENCE_ACTIVE
                  </span>
                </div>
                <Icon name="cube-16-solid" className="w-14 h-14 text-brand-mint/20 absolute right-4 top-4 pointer-events-none" />
                <div>
                  <div className="font-mono text-xl font-bold text-brand-arctic leading-none mb-1">
                    12,854/s
                  </div>
                  <div className="text-[9px] font-sans text-brand-mint/50 flex items-center gap-1">
                    <Icon name="chart-pie" className="w-3.5 h-3.5 text-brand-mint/60" />
                    Neural extraction parsing active
                  </div>
                </div>
              </div>

              {/* Card 3: Interactive Sync Flow (uses arrow-path.svg & link-solid.svg) */}
              <div className="p-4 rounded-2xl bg-[#1b3445]/20 border border-brand-forsythia/20 hover:border-brand-forsythia/50 duration-150 transition-all text-left flex flex-col justify-between min-h-[140px] relative overflow-hidden">
                <div className="flex items-center justify-between relative z-10">
                  <span className="font-mono text-[9px] font-bold text-brand-mint">
                    FLOW_PIPELINE
                  </span>
                </div>
                <Icon name="arrow-path" className="w-14 h-14 text-brand-forsythia/25 absolute right-4 top-4 animate-spin [animation-duration:15s] pointer-events-none" />
                <div className="flex items-center justify-between border-premium bg-[#12232c] p-2.5 rounded-xl">
                  <div className="flex flex-col items-center">
                    <span className="w-3 h-3 rounded-full bg-brand-forsythia animate-pulse" />
                    <span className="text-[7px] font-mono text-brand-mint/40 mt-1">HOOK</span>
                  </div>
                  <Icon name="link-solid" className="w-3.5 h-3.5 text-brand-mint/30 animate-pulse" />
                  <div className="flex flex-col items-center">
                    <span className="w-3.5 h-3.5 rounded bg-brand-nocturnal flex items-center justify-center border border-brand-mint/10 text-brand-forsythia">
                      <Icon name="cog-8-tooth" className="w-2.5 h-2.5 text-brand-forsythia animate-spin" />
                    </span>
                    <span className="text-[7px] font-mono text-brand-mint/40 mt-1">PROC</span>
                  </div>
                  <Icon name="chevron-right" className="w-3 h-3 text-brand-mint/30" />
                  <div className="flex flex-col items-center">
                    <span className="w-3 h-3 rounded-full bg-brand-saffron" />
                    <span className="text-[7px] font-mono text-brand-mint/40 mt-1">LOAD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Semantic Statistics Cards (JetBrains Mono for numeric values, Inter for text labels) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto border-t border-brand-mint/10 pt-12">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="p-6 rounded-2xl bg-brand-oceanic border border-brand-mint/10 hover:border-brand-mint/30 duration-150 transition-all text-center flex flex-col items-center shadow-lg"
            >
              <div className="font-mono text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-arctic mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs text-brand-mint/55 uppercase font-bold tracking-wider font-sans flex items-center gap-1.5">
                <Icon name={statIcons[idx]} className="w-3.5 h-3.5 text-brand-mint/50" />
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

