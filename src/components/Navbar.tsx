"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { id: "showreel", label: "[01. Showreel]", href: "#showreel" },
  { id: "flagships", label: "[02. VFX Flagships]", href: "#flagships" },
  { id: "dop-and-color", label: "[03. DOP & Color (9:16)]", href: "#dop-and-color" },
  { id: "broadcast-vault", label: "[04. Broadcast Vault (22)]", href: "#broadcast-vault" },
  { id: "pipeline", label: "[05. Pipeline]", href: "#pipeline" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("showreel");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface-elevated/90 backdrop-blur-md border-b border-border-hairline">
      <div className="h-16 w-full px-space-md lg:px-margin-desktop flex items-center justify-between gap-space-md">
        {/* Brand / Logo */}
        <div className="flex items-center gap-space-md shrink-0">
          <Link href="#showreel" className="flex items-center gap-space-xs group">
            <Image
              src="/images/logo.png"
              alt="Dulshan Bandara Logo"
              width={1054}
              height={703}
              priority
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </Link>

          {/* Telemetry Status Strip */}
          <div className="hidden xl:flex items-center px-space-sm py-0.5 bg-surface-panel border border-border-hairline">
            <span className="font-telemetry-sm text-telemetry-sm uppercase tracking-wider text-text-muted">
              SRI LANKA — VFX &amp; COMPOSITE ARTIST · DOP · EDITOR · COLORIST
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-space-xs font-telemetry-sm text-telemetry-sm uppercase">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`px-space-sm py-1.5 transition-colors border ${
                  isActive
                    ? "bg-surface-panel text-anamorphic-amber border-border-active"
                    : "text-text-muted hover:text-text-primary hover:bg-surface-panel border-transparent"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-space-sm shrink-0">
          <a
            href="/files/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-1.5 px-2.5 sm:px-space-sm py-1.5 bg-surface-panel border border-border-hairline hover:border-chroma-cyan transition-colors"
          >
            <span className="material-symbols-outlined text-chroma-cyan text-[16px]">
              download
            </span>
            <span className="font-telemetry-sm text-[10px] sm:text-telemetry-sm uppercase text-text-primary tracking-wider sm:tracking-widest">
              <span className="sm:hidden">CV [PDF]</span>
              <span className="hidden sm:inline">Download CV [PDF]</span>
            </span>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 bg-surface-panel border border-border-hairline text-text-muted hover:text-text-primary"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[20px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-surface-elevated border-b border-border-hairline px-space-md py-space-sm flex flex-col gap-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`px-space-sm py-2 font-telemetry-sm uppercase text-xs transition-colors border ${
                activeSection === item.id
                  ? "bg-surface-panel text-anamorphic-amber border-border-active"
                  : "text-text-muted hover:text-text-primary hover:bg-surface-panel border-transparent"
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 border-t border-border-hairline flex items-center justify-between text-telemetry-sm text-text-muted">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rec-crimson rec-live"></span>
              SRI LANKA
            </span>
            <span className="text-chroma-cyan">AVAILABLE</span>
          </div>
        </div>
      )}
    </header>
  );
}
