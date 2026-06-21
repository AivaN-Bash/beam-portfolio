"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home", index: "01" },
  { href: "/about", label: "About", index: "02" },
  { href: "/work", label: "Work", index: "03" },
  { href: "/experience", label: "Experience", index: "04" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [time, setTime] = useState("");
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close mobile menu on route change (adjusted during render, not in an
  // effect, to avoid an extra cascading render pass on every navigation)
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
  }

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

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Allow keyboard users to dismiss the mobile menu with Escape
  useEffect(() => {
    if (!mobileOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  // Explicit smooth scroll for the back-to-top control. Previously this
  // rode on a global `html { scroll-behavior: smooth }` rule, which also
  // forced Next.js's own scrollTo(0,0) on route changes to animate instead
  // of jump instantly — causing the new page to visibly lag/fail to reach
  // the top, especially if a fast follow-up click interrupted it. That
  // global rule has been removed; this handler keeps the smooth feel for
  // this one explicit, user-initiated action only.
  const scrollToTop = () => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

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

      {/* Back to top */}
      <button
        type="button"
        onClick={scrollToTop}
        className="back-to-top hud-frame"
        aria-label="Back to top"
        style={{ "--hud-c": "var(--accent-2)", "--hs": "8px" } as React.CSSProperties}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
          <path d="M8 13V3M8 3L3 8M8 3L13 8" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* ── DESKTOP: fixed left rail ── */}
      <aside
        className="fixed left-0 top-0 h-full z-50 hidden lg:flex flex-col justify-between"
        style={{ width: "72px", padding: "32px 0" }}
        aria-label="Site navigation"
      >
        {/* Logo mark */}
        <div className="flex flex-col items-center gap-2">
          <Link
            href="/"
            className="group hud-frame flex items-center justify-center rounded-sm transition-all duration-200"
            style={{
              width: "44px",
              height: "44px",
              background: "var(--accent-dim)",
              border: "1px solid var(--border-2)",
              "--hud-c": "var(--accent)",
              "--hs": "8px",
            } as React.CSSProperties}
            aria-label="Home"
          >
            <span
              className="font-mono text-xs font-medium group-hover:text-white transition-colors"
              style={{ color: "var(--accent)", fontSize: "13px" }}
              aria-hidden="true"
            >
              B
            </span>
          </Link>
        </div>

        {/* Vertical nav — labeled links with dot + index */}
        <nav className="flex flex-col items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                aria-label={link.label}
                className="group relative flex flex-col items-center justify-center gap-1"
                style={{
                  width: "44px",
                  height: "52px",
                  padding: "4px 0",
                }}
              >
                {/* Active indicator bar */}
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "0",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "2px",
                    height: isActive ? "24px" : "0px",
                    background: "var(--accent-2)",
                    borderRadius: "0 1px 1px 0",
                    transition: "height 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />

                {/* Dot */}
                <span
                  aria-hidden="true"
                  className="block rounded-full transition-all duration-300"
                  style={{
                    width: isActive ? "7px" : "5px",
                    height: isActive ? "7px" : "5px",
                    background: isActive ? "var(--accent)" : "var(--text-tertiary)",
                    boxShadow: isActive ? "0 0 8px var(--accent)" : "none",
                  }}
                />

                {/* Index label */}
                <span
                  aria-hidden="true"
                  className="font-mono transition-all duration-200"
                  style={{
                    fontSize: "8px",
                    letterSpacing: "0.04em",
                    color: isActive ? "var(--accent)" : "var(--text-tertiary)",
                    opacity: isActive ? 1 : 0.6,
                  }}
                >
                  {link.index}
                </span>

                {/* Hover tooltip — page name */}
                <span
                  aria-hidden="true"
                  className="nav-tooltip absolute pointer-events-none font-mono whitespace-nowrap"
                  style={{
                    left: "calc(100% + 10px)",
                    top: "50%",
                    transform: "translateY(-50%)",
                    fontSize: "10px",
                    letterSpacing: "0.06em",
                    color: isActive ? "var(--accent)" : "var(--text-secondary)",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    padding: "3px 8px",
                    borderRadius: "2px",
                    opacity: 0,
                    transition: "opacity 0.15s ease",
                    pointerEvents: "none",
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
            className="font-mono"
            style={{
              color: "var(--text-tertiary)",
              fontSize: "9px",
              letterSpacing: "0.08em",
              writingMode: "vertical-lr",
              transform: "rotate(180deg)",
            }}
            aria-label={`Bangkok time: ${time}`}
          >
            BKK {time}
          </span>
        </div>
      </aside>

      {/* ── MOBILE: top header + slide-down menu ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 lg:hidden"
        style={{
          background: scrolled || mobileOpen ? "rgba(10, 10, 15, 0.97)" : "transparent",
          backdropFilter: scrolled || mobileOpen ? "blur(12px)" : "none",
          borderBottom: scrolled || mobileOpen ? "1px solid var(--border)" : "none",
          transition: "background 0.3s ease, border-color 0.3s ease",
        }}
      >
        {/* Top bar */}
        <div
          className="flex items-center justify-between"
          style={{ padding: "0 20px", height: "56px" }}
        >
          <Link
            href="/"
            className="font-mono font-medium flex items-center justify-center"
            style={{
              color: "var(--accent)",
              fontSize: "14px",
              minWidth: "44px",
              minHeight: "44px",
            }}
            aria-label="Home"
          >
            B
          </Link>

          {/* Hamburger / close toggle */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-menu"
            className="flex items-center justify-center"
            style={{
              minWidth: "44px",
              minHeight: "44px",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--text-secondary)",
            }}
          >
            {mobileOpen ? (
              /* Close icon */
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M3 3L15 15M15 3L3 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              /* Menu icon */
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M2 5h14M2 9h10M2 13h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {/* Slide-down full-screen nav menu */}
        <nav
          id="mobile-nav-menu"
          aria-label="Mobile navigation"
          style={{
            overflow: "hidden",
            maxHeight: mobileOpen ? "400px" : "0px",
            transition: "max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
            borderTop: mobileOpen ? "1px solid var(--border)" : "none",
          }}
        >
          <div style={{ padding: "8px 0 16px" }}>
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className="flex items-center gap-4"
                  style={{
                    padding: "12px 24px",
                    minHeight: "52px",
                    borderLeft: isActive ? "2px solid var(--accent-2)" : "2px solid transparent",
                    background: isActive ? "rgba(108, 99, 255, 0.05)" : "transparent",
                    transition: "background 0.2s ease, border-color 0.2s ease",
                  }}
                >
                  <span
                    className="font-mono"
                    style={{
                      color: isActive ? "var(--accent)" : "var(--text-tertiary)",
                      fontSize: "10px",
                      letterSpacing: "0.06em",
                      minWidth: "24px",
                    }}
                  >
                    {link.index}
                  </span>
                  <span
                    className="font-mono"
                    style={{
                      color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
                      fontSize: "14px",
                      letterSpacing: "0.02em",
                      fontWeight: isActive ? 500 : 400,
                    }}
                  >
                    {link.label}
                  </span>
                  {isActive && (
                    <span
                      className="ml-auto"
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        background: "var(--accent)",
                        boxShadow: "0 0 6px var(--accent)",
                        flexShrink: 0,
                      }}
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </nav>
      </header>
    </>
  );
}
