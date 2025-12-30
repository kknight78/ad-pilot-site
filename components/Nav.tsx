"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { site } from "@/content/siteData";

export function Nav() {
  const [showLogo, setShowLogo] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Watch the hero logo element specifically
    const heroLogo = document.getElementById("hero-logo");
    if (!heroLogo) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show header logo when hero logo is NOT visible (scrolled past)
        setShowLogo(!entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: "-72px 0px 0px 0px" // Account for header height
      }
    );

    observer.observe(heroLogo);
    return () => observer.disconnect();
  }, []);

  // Close mobile menu on anchor click
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-sm">
      <div className="container-xl flex h-16 items-center justify-between">
        {/* Logo area - fixed width to prevent layout shift */}
        <a href="#" className="flex items-center" style={{ width: 120, height: 40 }}>
          {/* Logo fades in when hero logo scrolls out of view */}
          <div
            className={`transition-opacity duration-300 ${
              showLogo ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Logo variant="wordmark" tone="dark" size={36} />
          </div>
          <span className="sr-only">{site.name}</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-black/70 hover:text-black transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right side: email + mobile hamburger */}
        <div className="flex items-center gap-3">
          <a
            className="btn-ghost hidden sm:inline-flex"
            href={`mailto:${site.contactEmail}`}
            title="Email us"
          >
            Email
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 -mr-2 text-black/70 hover:text-black"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-black/10 bg-white">
          <nav className="container-xl py-4 space-y-1">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="block py-2 text-sm text-black/70 hover:text-black transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`mailto:${site.contactEmail}`}
              onClick={handleNavClick}
              className="block py-2 text-sm font-medium text-brand-navy"
            >
              Email us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
