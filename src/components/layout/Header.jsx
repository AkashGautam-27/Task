import React, { useState, memo } from 'react';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { useActiveSection } from '../../hooks/useActiveSection';

export const Header = memo(function Header() {
  const [bannerOpen, setBannerOpen] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // Monitor active scroll sections dynamically
  const activeSection = useActiveSection(['hero', 'features', 'pricing', 'faq'], 'hero');

  const navLinks = [
    { id: 'hero', label: 'Home', href: '#hero' },
    { id: 'features', label: 'Features', href: '#features' },
    { id: 'pricing', label: 'Pricing', href: '#pricing' },
    { id: 'faq', label: 'FAQ', href: '#faq' }
  ];

  return (
    <div className="sticky top-0 z-50 flex flex-col w-full">
      {/* Promo Banner */}
      {bannerOpen && (
        <div className="bg-gradient-to-r from-brand-nocturnal to-brand-oceanic border-b border-brand-mint/10 px-4 py-2 flex items-center justify-between text-xs text-brand-mint relative z-50">
          <div className="flex-grow text-center font-sans font-medium flex items-center justify-center gap-1.5">
            <span className="inline-block w-2 h-2 rounded-full bg-brand-forsythia animate-pulse" />
            <span>DataPilot AI Core Engine v4.0.0 is officially live.</span>
            <a href="#pricing" className="underline hover:text-brand-forsythia font-bold ml-1 flex items-center gap-0.5">
              Read the Changelog
              <Icon name="chevron-right" className="w-3 h-3 inline" />
            </a>
          </div>
          <button 
            type="button"
            onClick={() => setBannerOpen(false)}
            className="text-brand-mint/60 hover:text-brand-mint transition-colors p-1"
            aria-label="Dismiss banner"
          >
            <Icon name="x-mark" className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Main Navbar */}
      <header className="glass-panel border-b border-brand-mint/5 backdrop-blur-md bg-[#172B36]/80 relative z-40">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Brand Logo using cube-16-solid */}
          <a href="#" className="flex items-center gap-2 font-mono text-sm font-bold tracking-tight text-brand-forsythia select-none">
            <div className="w-11 h-11 rounded-xl bg-brand-nocturnal flex items-center justify-center border border-brand-mint/15 shadow-md text-brand-forsythia flex-shrink-0">
              <Icon name="cube-16-solid" className="w-6.5 h-6.5 text-brand-forsythia" />
            </div>
            <span>DATAPILOT<span className="text-brand-saffron">.AI</span></span>
          </a>

          {/* Semantic Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-brand-arctic/75 font-sans">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a 
                    href={link.href} 
                    className={`nav-link-indicator py-1 transition-colors hover:text-brand-forsythia ${
                      activeSection === link.id ? 'text-brand-forsythia active font-bold' : ''
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a 
              href="https://github.com/AkashGautam-27/Task" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl flex items-center justify-center border border-brand-mint/10 hover:border-brand-mint/30 hover:bg-brand-nocturnal/20 transition-all text-brand-mint/80 hover:text-brand-mint flex-shrink-0"
              aria-label="Github Repository"
            >
              <Icon name="link-solid" className="w-6 h-6 text-brand-mint/80" />
            </a>
            <Button variant="primary" size="sm" className="text-[11px] font-bold tracking-wide">
              Launch Console
            </Button>
          </div>

          {/* Mobile Navigation Toggle Button (Burger Icon) */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative flex items-center justify-center w-12 h-12 border border-brand-mint/10 hover:border-brand-mint/35 hover:bg-brand-nocturnal/20 hover:scale-105 active:scale-95 rounded-xl md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-forsythia/70 transition-all duration-200 group"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {/* Morphing Hamburger lines using absolute positioning */}
            <div className="relative w-8 h-6">
              <span className={`absolute left-0 w-full h-[3px] bg-brand-forsythia rounded-full transition-all duration-300 ease-in-out ${
                menuOpen ? 'top-[10px] rotate-45' : 'top-0'
              }`} />
              <span className={`absolute left-0 w-full h-[3px] bg-brand-forsythia rounded-full transition-all duration-300 ease-in-out ${
                menuOpen ? 'opacity-0 scale-x-0' : 'top-[10px]'
              }`} />
              <span className={`absolute left-0 w-full h-[3px] bg-brand-forsythia rounded-full transition-all duration-300 ease-in-out ${
                menuOpen ? 'top-[10px] -rotate-45' : 'top-[20px]'
              }`} />
            </div>
          </button>
        </div>

        {/* Collapsible Mobile Navigation Dropdown using pure CSS grid-template-rows transition */}
        <div 
          id="mobile-menu" 
          className={`grid transition-all duration-300 ease-in-out md:hidden overflow-hidden ${
            menuOpen ? 'grid-rows-[1fr] opacity-100 border-t border-brand-mint/5 bg-[#172B36]/95 backdrop-blur-xl' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
          }`}
        >
          <div className="overflow-hidden">
            <nav className="flex flex-col p-6 gap-5 font-sans font-medium text-xs text-brand-arctic/85">
              <ul className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a 
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`hover:text-brand-forsythia transition-colors flex items-center justify-between py-1 ${
                        activeSection === link.id ? 'text-brand-forsythia font-bold' : ''
                      }`}
                    >
                      <span>{link.label}</span>
                      {activeSection === link.id && (
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-forsythia" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="border-t border-brand-mint/5 pt-5 mt-2 flex flex-col gap-4">
                <a 
                  href="https://github.com/AkashGautam-27/Task" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-brand-mint hover:text-brand-forsythia font-semibold transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  <Icon name="link-solid" className="w-6 h-6" />
                  <span>GitHub Repository</span>
                </a>
                <Button variant="primary" size="md" className="w-full font-bold text-xs tracking-wide">
                  Launch Console
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
});

