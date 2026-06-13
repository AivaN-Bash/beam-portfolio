"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Nav from "./components/Nav";
import SignalBars from "./components/SignalBars";
import { projects, CONTACT_EMAIL } from "./data/portfolio";

function TypewriterText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 32);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && (
        <span className="inline-block w-0.5 h-5 ml-px animate-pulse"
          style={{ background: "var(--accent)", verticalAlign: "middle" }} />
      )}
    </span>
  );
}

const capabilities = [
  { label: "Security Architecture", detail: "HMAC · JWT · CSP · Rate limiting" },
  { label: "API Design", detail: "REST · Webhooks · Versioning · OpenAPI" },
  { label: "Real-Time Systems", detail: "SSE · WebSockets · Redis · Pub/Sub" },
  { label: "Frontend Engineering", detail: "Next.js · React · TypeScript · Tailwind" },
  { label: "Infrastructure", detail: "Docker · CI/CD · Postgres · Vercel" },
];

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <main style={{ minHeight: "100vh", position: "relative" }} className="lg:pl-[72px]">
      <Nav />

      {/* Ambient glows — fixed, behind everything */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden" style={{ zIndex: 0 }}>
        <div style={{
          position: "absolute", top: "-20%", right: "-8%",
          width: "50vw", height: "50vw",
          background: "radial-gradient(circle, rgba(108,99,255,0.07) 0%, transparent 65%)",
        }} />
        <div style={{
          position: "absolute", bottom: "0", left: "-5%",
          width: "35vw", height: "35vw",
          background: "radial-gradient(circle, rgba(167,139,250,0.04) 0%, transparent 65%)",
        }} />
      </div>

      <div className="relative" style={{ zIndex: 1 }}>

        {/* ── HERO ── two-column, natural height */}
        <section style={{
          position: "relative",
          isolation: "isolate",
          padding: "clamp(80px, 11vh, 110px) clamp(32px, 8vw, 120px) clamp(48px, 7vh, 80px)",
        }}>
          {/* Ghost numeral — site coordinate, overlaps right panel */}
          <span className="ghost-num hidden md:block" aria-hidden="true" style={{
            top: "clamp(20px, 4vh, 60px)",
            right: "clamp(16px, 6vw, 90px)",
            fontSize: "clamp(140px, 20vw, 320px)",
            "--ghost-c": "var(--border-2)",
          } as React.CSSProperties}>
            00
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-16 items-start">

            {/* Left: identity */}
            <div>
              <div className="flex items-center gap-3 mb-7 fade-in" style={{ "--fade-delay": "0ms" } as React.CSSProperties}>
                <span className="inline-block w-5 h-px" style={{ background: "var(--accent)" }} />
                <span className="font-mono" style={{ color: "var(--accent)", fontSize: "11px", letterSpacing: "0.1em" }}>
                  STAFF ENGINEER · BANGKOK
                </span>
                {/* Live indicator */}
                <span className="flex items-center gap-1.5 ml-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#22c55e" }} />
                  <span className="font-mono" style={{ color: "var(--text-tertiary)", fontSize: "9px", letterSpacing: "0.08em" }}>AVAILABLE</span>
                </span>
              </div>

              <h1 className="font-display font-bold leading-none mb-5 fade-in" style={{
                fontSize: "clamp(72px, 13vw, 168px)",
                letterSpacing: "-0.045em",
                color: "var(--text-primary)",
                "--fade-delay": "80ms",
              } as React.CSSProperties}>
                Beam
              </h1>

              <p className="font-display font-light leading-relaxed mb-3 fade-in" style={{
                fontSize: "clamp(15px, 1.9vw, 20px)",
                color: "var(--text-secondary)",
                maxWidth: "480px",
                letterSpacing: "-0.01em",
                "--fade-delay": "180ms",
              } as React.CSSProperties}>
                I build secure, high-performance systems.
              </p>
              <p className="font-display font-light leading-relaxed fade-in" style={{
                fontSize: "clamp(15px, 1.9vw, 20px)",
                color: "var(--text-tertiary)",
                maxWidth: "480px",
                letterSpacing: "-0.01em",
                marginBottom: "clamp(24px, 4vh, 36px)",
                "--fade-delay": "200ms",
              } as React.CSSProperties}>
                APIs that are contracts. Infrastructure that earns trust.
              </p>

              <div className="flex items-center gap-6 fade-in" style={{ "--fade-delay": "300ms" } as React.CSSProperties}>
                <Link href="/work" className="group inline-flex items-center gap-2.5 font-mono transition-all duration-200"
                  style={{ color: "var(--text-primary)", fontSize: "12px", letterSpacing: "0.03em" }}>
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-sm transition-all duration-200 group-hover:scale-110"
                    style={{ background: "var(--accent)" }}>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true" focusable="false">
                      <path d="M2 6.5H11M11 6.5L7.5 3M11 6.5L7.5 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  View work
                </Link>
                <Link href="/about" className="font-mono transition-colors duration-200 hover:opacity-60"
                  style={{ color: "var(--text-tertiary)", fontSize: "12px", letterSpacing: "0.03em" }}>
                  About
                </Link>
                <a href={`mailto:${CONTACT_EMAIL}`} className="font-mono transition-colors duration-200 hover:opacity-60"
                  style={{ color: "var(--text-tertiary)", fontSize: "12px", letterSpacing: "0.03em" }}>
                  Contact
                </a>
              </div>
            </div>

            {/* Right: context panel — staggered down for asymmetry */}
            <div className="hidden lg:flex flex-col gap-0 fade-in hud-frame" style={{ "--fade-delay": "320ms", marginTop: "64px" } as React.CSSProperties}>

              {/* Status block */}
              <div style={{
                padding: "16px 18px",
                border: "1px solid var(--border)",
                borderBottom: "none",
                background: "var(--surface)",
              }}>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono" style={{ color: "var(--text-tertiary)", fontSize: "9px", letterSpacing: "0.1em" }}>
                    CURRENT STATUS
                  </span>
                  <span className="font-mono" style={{ color: "var(--text-tertiary)", fontSize: "9px" }}>2025</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono" style={{ color: "var(--text-secondary)", fontSize: "11px" }}>Role</span>
                    <span className="font-mono" style={{ color: "var(--text-primary)", fontSize: "11px" }}>Staff Engineer</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono" style={{ color: "var(--text-secondary)", fontSize: "11px" }}>Location</span>
                    <span className="font-mono" style={{ color: "var(--text-primary)", fontSize: "11px" }}>Bangkok, TH</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono" style={{ color: "var(--text-secondary)", fontSize: "11px" }}>Focus</span>
                    <span className="font-mono" style={{ color: "var(--accent)", fontSize: "11px" }}>Security · APIs · RT</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono" style={{ color: "var(--text-secondary)", fontSize: "11px" }}>Projects</span>
                    <span className="font-mono" style={{ color: "var(--text-primary)", fontSize: "11px" }}>{projects.length} shipped</span>
                  </div>
                </div>
              </div>

              {/* Capabilities */}
              <div style={{
                padding: "16px 18px",
                border: "1px solid var(--border)",
                borderBottom: "none",
              }}>
                <span className="font-mono block mb-3" style={{ color: "var(--text-tertiary)", fontSize: "9px", letterSpacing: "0.1em" }}>
                  CAPABILITIES
                </span>
                <div className="space-y-2.5">
                  {capabilities.map((cap) => (
                    <div key={cap.label}>
                      <div className="font-mono" style={{ color: "var(--text-primary)", fontSize: "11px", marginBottom: "1px" }}>
                        {cap.label}
                      </div>
                      <div className="font-mono" style={{ color: "var(--text-tertiary)", fontSize: "9px", letterSpacing: "0.03em" }}>
                        {cap.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Currently building */}
              <div style={{
                padding: "14px 18px",
                border: "1px solid var(--border)",
                background: "var(--surface)",
              }}>
                <span className="font-mono block mb-2.5" style={{ color: "var(--text-tertiary)", fontSize: "9px", letterSpacing: "0.1em" }}>
                  CURRENTLY BUILDING
                </span>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--accent)" }} />
                    <span className="font-mono" style={{ color: "var(--text-secondary)", fontSize: "11px" }}>NEXUS platform</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--mono)" }} />
                    <span className="font-mono" style={{ color: "var(--text-secondary)", fontSize: "11px" }}>TipBeam V2</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="section-divider" style={{ margin: "0 clamp(32px, 8vw, 120px)" }} />

        {/* ── SELECTED WORK ── */}
        <section style={{ padding: "clamp(36px, 5vh, 56px) clamp(32px, 8vw, 120px) clamp(48px, 7vh, 72px)" }}>
          <div className="flex items-center justify-between mb-8 reveal" style={{
            borderBottom: "1px solid var(--border)", paddingBottom: "12px",
          }}>
            <h2 className="font-mono" style={{ color: "var(--text-tertiary)", fontSize: "10px", letterSpacing: "0.1em", fontWeight: 500 }}>
              SELECTED WORK
            </h2>
            <Link href="/work" className="font-mono transition-colors hover:opacity-60"
              style={{ color: "var(--text-secondary)", fontSize: "10px", letterSpacing: "0.06em" }}>
              All projects →
            </Link>
          </div>

          <div>
            {projects.map((project) => {
              const isActive = hoveredProject === project.id;
              const remainingStack = project.stack.slice(3);
              return (
                <Link
                  key={project.id}
                  href={`/work/${project.slug}`}
                  className="group block reveal"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onFocus={() => setHoveredProject(project.id)}
                  onBlur={() => setHoveredProject(null)}
                >
                  <div
                    className={`px-3 transition-all duration-300 hud-frame ${isActive ? "hud-frame--active" : ""}`}
                    style={{
                      position: "relative",
                      isolation: "isolate",
                      borderBottom: "1px solid var(--border)",
                      background: isActive ? `${project.accent}08` : "transparent",
                      opacity: hoveredProject && !isActive ? 0.28 : 1,
                      marginLeft: "-12px",
                      marginRight: "-12px",
                    }}
                  >
                    {/* Ghost index numeral — fills the dead space, brightens on hover */}
                    <span className="ghost-num hidden lg:block" aria-hidden="true" style={{
                      top: "50%",
                      right: "clamp(160px, 24vw, 260px)",
                      transform: "translateY(-50%)",
                      fontSize: "clamp(48px, 6vw, 84px)",
                      "--ghost-c": isActive ? project.accent : "var(--border-2)",
                    } as React.CSSProperties}>
                      {project.index}
                    </span>

                    {/* Primary row */}
                    <div className="flex items-baseline gap-0 pt-4 pb-1.5">
                      <span className="font-mono flex-shrink-0"
                        style={{ color: isActive ? project.accent : "var(--text-tertiary)", fontSize: "10px", width: "40px" }}>
                        [{project.index}]
                      </span>
                      <span className="font-display font-semibold flex-shrink-0 transition-colors duration-200"
                        style={{
                          color: isActive ? project.accent : "var(--text-primary)",
                          letterSpacing: "-0.025em",
                          fontSize: "clamp(17px, 2.5vw, 24px)",
                          minWidth: "clamp(130px, 18vw, 190px)",
                        }}>
                        {isActive
                          ? <TypewriterText text={project.title} />
                          : project.title}
                      </span>
                      <span className="hidden md:block flex-1 mx-4 overflow-hidden"
                        style={{ borderBottom: "1px dashed var(--border)", marginBottom: "4px", opacity: 0.35 }} />
                      <span className="hidden md:block font-mono flex-shrink-0"
                        style={{ color: "var(--text-tertiary)", fontSize: "10px", letterSpacing: "0.04em", minWidth: "150px" }}>
                        {project.category}
                      </span>
                      <span className="flex items-center gap-2 flex-shrink-0" style={{ minWidth: "70px", justifyContent: "flex-end" }}>
                        <SignalBars level={project.signal as 1 | 2 | 3} color={isActive ? project.accent : "var(--text-tertiary)"} />
                        <span className="font-mono" style={{ color: "var(--text-tertiary)", fontSize: "10px" }}>
                          {project.year}
                        </span>
                      </span>
                      <span className="ml-3 flex-shrink-0 transition-all duration-200" style={{
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? "translate(0, -2px)" : "translate(-4px, 0)",
                      }}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" focusable="false">
                          <path d="M2.5 11.5L11.5 2.5M11.5 2.5H6M11.5 2.5V8" stroke={project.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>

                    {/* Secondary row: tagline + stack preview */}
                    <div className="flex items-baseline pb-4" style={{ paddingLeft: "40px" }}>
                      <p className="font-mono transition-colors duration-200"
                        style={{
                          color: isActive ? "var(--text-secondary)" : "var(--text-tertiary)",
                          fontSize: "11px",
                          lineHeight: 1.5,
                          maxWidth: "480px",
                        }}>
                        {project.tagline}
                      </p>
                      <div className="hidden lg:flex items-center gap-1.5 ml-auto flex-shrink-0">
                        {project.stack.slice(0, 3).map((tech) => (
                          <span key={tech} className="font-mono"
                            style={{
                              fontSize: "9px", padding: "1px 5px",
                              border: "1px solid var(--border)",
                              borderRadius: "2px",
                              color: "var(--text-tertiary)",
                              background: "var(--surface)",
                            }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Hover-reveal detail layer — remaining stack, key decision, impact */}
                    <div className={`hud-expand ${isActive ? "is-open" : ""}`} style={{ paddingLeft: "40px" }}>
                      <div className="pb-4 space-y-2.5">
                        {remainingStack.length > 0 && (
                          <div className="hidden lg:flex items-center gap-1.5 flex-wrap">
                            {remainingStack.map((tech) => (
                              <span key={tech} className="font-mono"
                                style={{
                                  fontSize: "9px", padding: "1px 5px",
                                  border: "1px solid var(--border)",
                                  borderRadius: "2px",
                                  color: "var(--text-tertiary)",
                                  background: "var(--surface)",
                                }}>
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                        <div className="flex items-start gap-2">
                          <span className="font-mono flex-shrink-0" style={{ color: project.accent, fontSize: "10px" }}>
                            $ decision
                          </span>
                          <p className="font-mono" style={{ color: "var(--text-secondary)", fontSize: "11px", lineHeight: 1.6, maxWidth: "480px" }}>
                            {project.decisions[0]}
                          </p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="font-mono flex-shrink-0" style={{ color: "var(--accent-2)", fontSize: "10px" }}>
                            $ impact
                          </span>
                          <p className="font-mono" style={{ color: "var(--text-secondary)", fontSize: "11px", lineHeight: 1.6, maxWidth: "480px" }}>
                            {project.impact}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Divider */}
        <div className="section-divider" style={{ margin: "0 clamp(32px, 8vw, 120px)" }} />

        {/* ── PRINCIPLES — full width grid ── */}
        <section style={{ padding: "clamp(36px, 5vh, 56px) clamp(32px, 8vw, 120px) clamp(48px, 7vh, 72px)" }}>
          <div className="flex items-center justify-between mb-8 reveal"
            style={{ borderBottom: "1px solid var(--border)", paddingBottom: "12px" }}>
            <h2 className="font-mono" style={{ color: "var(--text-tertiary)", fontSize: "10px", letterSpacing: "0.1em", fontWeight: 500 }}>
              ENGINEERING PRINCIPLES
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {[
              {
                title: "Security is not a feature",
                body: "HMAC signatures, timing-safe comparisons, and auth boundaries go in at the start. Retrofitting breaks things.",
                index: "01",
              },
              {
                title: "APIs are contracts",
                body: "Versioning strategy, error shapes, and payload schemas deserve the same attention as the business logic they expose.",
                index: "02",
              },
              {
                title: "Observability by default",
                body: "Structured logs, correlation IDs, request tracing. These are how you understand what your system is actually doing.",
                index: "03",
              },
              {
                title: "The interface is the product",
                body: "Latency, reliability, error messages — these are product decisions. Engineering quality shows up in UX.",
                index: "04",
              },
            ].map((p, i) => (
              <div key={i} className="hud-frame reveal" style={{
                position: "relative",
                isolation: "isolate",
                padding: "24px 24px 28px",
                minHeight: "180px",
                borderLeft: i === 0 ? "1px solid var(--border)" : "none",
                borderRight: "1px solid var(--border)",
                borderTop: "1px solid var(--border)",
                borderBottom: "1px solid var(--border)",
              }}>
                <span className="ghost-num" aria-hidden="true" style={{
                  top: "8px",
                  right: "12px",
                  fontSize: "76px",
                  "--ghost-c": "var(--border-2)",
                } as React.CSSProperties}>
                  {p.index}
                </span>
                <div className="font-mono mb-3" style={{ color: "var(--accent)", fontSize: "9px", letterSpacing: "0.06em" }}>
                  [{p.index}]
                </div>
                <h3 className="font-display font-semibold mb-2" style={{
                  color: "var(--text-primary)", fontSize: "14px", letterSpacing: "-0.02em", lineHeight: 1.35,
                }}>
                  {p.title}
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "12px", lineHeight: 1.7, maxWidth: "85%" }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="section-divider" style={{ margin: "0 clamp(32px, 8vw, 120px)" }} />

        {/* ── FOOTER ── */}
        <footer style={{
          padding: "clamp(32px, 5vh, 52px) clamp(32px, 8vw, 120px)",
        }}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 reveal">
            <div>
              <p className="font-display font-semibold mb-0.5" style={{
                fontSize: "clamp(18px, 2.5vw, 24px)", color: "var(--text-primary)", letterSpacing: "-0.025em",
              }}>
                Let&apos;s build something.
              </p>
              <p style={{ color: "var(--text-tertiary)", fontSize: "13px" }}>
                Open to interesting problems.
              </p>
            </div>
            <a href={`mailto:${CONTACT_EMAIL}`}
              className="group inline-flex items-center gap-2 font-mono transition-all duration-200 hover:opacity-75"
              style={{ color: "var(--accent-2)", fontSize: "13px", letterSpacing: "0.02em" }}>
              {CONTACT_EMAIL}
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true" focusable="false"
                className="transition-transform duration-200 group-hover:translate-x-0.5">
                <path d="M2 6.5H11M11 6.5L7.5 3M11 6.5L7.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
          <div className="flex items-center justify-between mt-8"
            style={{ borderTop: "1px solid var(--border)", paddingTop: "16px" }}>
            <span className="font-mono" style={{ color: "var(--text-tertiary)", fontSize: "10px" }}>
              © 2025 Beam. Bangkok, Thailand.
            </span>
            <span className="font-mono" style={{ color: "var(--text-tertiary)", fontSize: "10px" }}>
              Next.js · TypeScript · Tailwind
            </span>
          </div>
        </footer>

      </div>
    </main>
  );
}
