"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Index", short: "Index" },
  { href: "/work", label: "Work", short: "Work" },
  { href: "/about", label: "About", short: "About" },
  { href: "/experience", label: "Experience", short: "XP" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "Asia/Bangkok",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Skip link — keyboard/screen-reader navigation */}
      <a
        href="#main-content"
        className="font-mono"
        style={{
          position: "fixed",
          top: "-100px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 200,
          padding: "8px 20px",
          background: "var(--accent)",
          color: "#fff",
          fontSize: "12px",
          borderRadius: "2px",
          transition: "top 0.2s",
        }}
        onFocus={(e) => { (e.currentTarget as HTMLElement).style.top = "16px"; }}
        onBlur={(e) => { (e.currentTarget as HTMLElement).style.top = "-100px"; }}
      >
        Skip to main content
      </a>

      {/* Scroll progress spine — pure CSS, no scroll listeners */}
      <div className="scroll-progress" aria-hidden="true" />

      {/* Back to top — href="#" needs no JavaScript */}
      <a
        href="#"
        className="back-to-top hud-frame"
        aria-label="Back to top"
        style={{ "--hud-c": "var(--accent-2)", "--hs": "8px" } as React.CSSProperties}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
          <path d="M8 13V3M8 3L3 8M8 3L13 8" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>

      {/* Desktop: fixed left rail */}
      <aside
        className="fixed left-0 top-0 h-full z-50 hidden lg:flex flex-col justify-between"
        style={{ width: "72px", padding: "32px 0" }}
      >
        {/* Logo mark */}
        <div className="flex flex-col items-center gap-2">
          <Link
            href="/"
            className="group hud-frame flex items-center justify-center w-9 h-9 rounded-sm transition-all duration-200"
            style={{
              background: "var(--accent-dim)",
              border: "1px solid var(--border-2)",
              "--hud-c": "var(--accent)",
              "--hs": "8px",
            } as React.CSSProperties}
            aria-label="Home"
          >
            <span
              className="font-mono text-xs font-medium group-hover:text-white transition-colors"
              style={{ color: "var(--accent)", fontSize: "11px" }}
            >
              B
            </span>
          </Link>
        </div>

        {/* Vertical nav dots */}
        <nav className="flex flex-col items-center gap-5" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className="group relative flex items-center justify-center"
                aria-label={link.label}
                aria-current={isActive ? "page" : undefined}
                title={link.label}
              >
                {/* Active page bar — thin vertical line left of dot */}
                {isActive && (
                  <span className="absolute"
                    style={{
                      left: "-8px",
                      width: "2px",
                      height: "12px",
                      background: "var(--accent-2)",
                      borderRadius: "1px",
                    }}
                  />
                )}
                <span
                  className="block w-1.5 h-1.5 rounded-full transition-all duration-300"
                  style={{
                    background: isActive ? "var(--accent)" : "var(--text-tertiary)",
                    transform: isActive ? "scale(1.4)" : "scale(1)",
                    boxShadow: isActive ? `0 0 6px var(--accent)` : "none",
                  }}
                />
                {/* Tooltip */}
                <span
                  className="absolute left-7 opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-mono pointer-events-none whitespace-nowrap"
                  style={{
                    color: isActive ? "var(--accent)" : "var(--text-secondary)",
                    fontSize: "10px",
                  }}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Bangkok time */}
        <div className="flex flex-col items-center gap-1.5">
          <span
            className="font-mono text-xs writing-mode-vertical"
            style={{
              color: "var(--text-tertiary)",
              fontSize: "9px",
              letterSpacing: "0.08em",
              writingMode: "vertical-lr",
              transform: "rotate(180deg)",
            }}
          >
            BKK {time}
          </span>
        </div>
      </aside>

      {/* Mobile header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 lg:hidden flex items-center justify-between"
        style={{
          padding: "16px 24px",
          background: scrolled ? "rgba(10, 10, 15, 0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <Link
          href="/"
          className="font-mono text-sm font-medium"
          style={{ color: "var(--accent)" }}
        >
          B
        </Link>
        <nav className="flex items-center gap-4">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-xs transition-colors"
                aria-current={isActive ? "page" : undefined}
                style={{
                  color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
                  fontSize: "10px",
                  letterSpacing: "0.06em",
                }}
              >
                {link.short}
              </Link>
            );
          })}
        </nav>
      </header>
    </>
  );
}
