import React, { useState, useCallback, memo } from 'react';
import { Icon } from '../ui/Icon';

export const Footer = memo(function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = useCallback((e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  }, [email]);

  const handleEmailChange = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  return (
    <footer className="bg-brand-oceanic border-t border-brand-mint/5 pt-16 pb-12 px-4 text-xs font-sans text-brand-mint/60 relative overflow-hidden" aria-label="DataPilot AI SaaS Footer">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Top Section - Grid of links and newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 border-b border-brand-mint/5 pb-12">
          
          {/* Column 1 - Brand Info & Socials */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 select-none">
              <div className="w-11 h-11 rounded-xl bg-brand-nocturnal flex items-center justify-center border border-brand-mint/10 flex-shrink-0">
                <Icon name="cube-16-solid" className="w-6.5 h-6.5 text-brand-forsythia" />
              </div>
              <span className="font-mono text-sm font-bold tracking-wider text-brand-arctic">
                DATAPILOT<span className="text-brand-saffron">.AI</span>
              </span>
            </div>
            <p className="text-brand-mint/50 leading-relaxed max-w-xs text-[11px]">
              Next-generation data automation clusters. Hardware-accelerated cognitive mapping pipelines built for infinite scale and zero overhead.
            </p>
            
            {/* Social Icons using uploaded SVGs */}
            <div className="flex items-center gap-3 mt-2">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-11 h-11 rounded-xl flex items-center justify-center border border-brand-mint/10 hover:border-brand-forsythia/50 hover:bg-brand-nocturnal/20 transition-all text-brand-mint/70 hover:text-brand-forsythia flex-shrink-0"
                aria-label="GitHub Repository"
              >
                <Icon name="link-solid" className="w-6.5 h-6.5" />
              </a>
              <a 
                href="https://slack.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-11 h-11 rounded-xl flex items-center justify-center border border-brand-mint/10 hover:border-brand-forsythia/50 hover:bg-brand-nocturnal/20 transition-all text-brand-mint/70 hover:text-brand-forsythia flex-shrink-0"
                aria-label="Slack Community"
              >
                <Icon name="arrow-path" className="w-6.5 h-6.5" />
              </a>
              <a 
                href="https://gitlab.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-11 h-11 rounded-xl flex items-center justify-center border border-brand-mint/10 hover:border-brand-forsythia/50 hover:bg-brand-nocturnal/20 transition-all text-brand-mint/70 hover:text-brand-forsythia flex-shrink-0"
                aria-label="GitLab Repository"
              >
                <Icon name="cog-8-tooth" className="w-6.5 h-6.5" />
              </a>
              <a 
                href="/status" 
                className="w-11 h-11 rounded-xl flex items-center justify-center border border-brand-mint/10 hover:border-brand-forsythia/50 hover:bg-brand-nocturnal/20 transition-all text-brand-mint/70 hover:text-brand-forsythia flex-shrink-0"
                aria-label="System Performance Analytics"
              >
                <Icon name="chart-pie" className="w-6.5 h-6.5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Company */}
          <div className="flex flex-col gap-3.5">
            <h4 className="font-mono text-brand-arctic text-[11px] font-bold uppercase tracking-wider">Company</h4>
            <ul className="flex flex-col gap-2.5 font-medium">
              <li><a href="#about" className="hover:text-brand-forsythia transition-colors">About Us</a></li>
              <li><a href="#careers" className="hover:text-brand-forsythia transition-colors flex items-center gap-1.5">Careers <span className="px-1.5 py-0.2 text-[8px] bg-brand-nocturnal border border-brand-mint/15 rounded text-brand-mint">Hiring</span></a></li>
              <li><a href="#blog" className="hover:text-brand-forsythia transition-colors">Engineering Blog</a></li>
              <li><a href="#press" className="hover:text-brand-forsythia transition-colors">Press Room</a></li>
            </ul>
          </div>

          {/* Column 3 - Resources */}
          <div className="flex flex-col gap-3.5">
            <h4 className="font-mono text-brand-arctic text-[11px] font-bold uppercase tracking-wider">Resources</h4>
            <ul className="flex flex-col gap-2.5 font-medium">
              <li><a href="#community" className="hover:text-brand-forsythia transition-colors">Community Forum</a></li>
              <li><a href="#guides" className="hover:text-brand-forsythia transition-colors">Architectural Guides</a></li>
              <li><a href="#status" className="hover:text-brand-forsythia transition-colors flex items-center gap-1.5">System Status <span className="w-1.5 h-1.5 rounded-full bg-brand-forsythia animate-pulse" /></a></li>
              <li><a href="#contact" className="hover:text-brand-forsythia transition-colors">Security Program</a></li>
            </ul>
          </div>

          {/* Column 4 - Documentation */}
          <div className="flex flex-col gap-3.5">
            <h4 className="font-mono text-brand-arctic text-[11px] font-bold uppercase tracking-wider">Documentation</h4>
            <ul className="flex flex-col gap-2.5 font-medium">
              <li><a href="#api" className="hover:text-brand-forsythia transition-colors">API Reference</a></li>
              <li><a href="#sdks" className="hover:text-brand-forsythia transition-colors">Platform SDKs</a></li>
              <li><a href="#quickstart" className="hover:text-brand-forsythia transition-colors">Quickstart Guide</a></li>
              <li><a href="#changelog" className="hover:text-brand-forsythia transition-colors">System Changelog</a></li>
            </ul>
          </div>

          {/* Column 5 - Newsletter */}
          <div className="flex flex-col gap-3.5 lg:max-w-xs">
            <h4 className="font-mono text-brand-arctic text-[11px] font-bold uppercase tracking-wider">Stay Updated</h4>
            <p className="text-brand-mint/50 leading-relaxed text-[11px] mb-1">
              Subscribe to get release updates, system changelogs, and deep architectural deep dives.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch gap-2" aria-label="Newsletter Subscription Form">
              <div className="relative flex-grow">
                <input 
                  type="email" 
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="name@company.com"
                  required
                  className="w-full h-9 px-3 rounded-lg bg-brand-nocturnal/20 border border-brand-mint/10 text-brand-arctic placeholder-brand-mint/35 text-[11px] focus:outline-none focus:border-brand-forsythia/60 transition-all font-sans"
                  aria-label="Email address for newsletter"
                />
              </div>
              <button 
                type="submit" 
                className="h-9 px-4 rounded-lg bg-brand-forsythia hover:bg-brand-saffron text-brand-oceanic font-bold text-[11px] flex items-center justify-center gap-1.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-forsythia active:scale-[0.98] select-none cursor-pointer"
                aria-label="Subscribe to newsletter"
              >
                <span>Subscribe</span>
                <Icon name="chevron-right" className="w-3 h-3 text-brand-oceanic" />
              </button>
            </form>

            {subscribed && (
              <span className="text-[10px] text-brand-forsythia font-semibold animate-fade-in" role="status">
                🎉 Subscription active. Welcome to DataPilot AI core!
              </span>
            )}
          </div>
          
        </div>

        {/* Bottom Section - Copyright & Legal links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 font-medium text-brand-mint/50">
          <div>
            &copy; {new Date().getFullYear()} DataPilot AI Inc. All rights reserved.
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6">
            <a href="#privacy" className="hover:text-brand-forsythia transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-brand-forsythia transition-colors">Terms of Service</a>
            <a href="#security" className="hover:text-brand-forsythia transition-colors flex items-center gap-1">
              Trust & Safety
              <Icon name="link" className="w-2.5 h-2.5 opacity-60" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
});
