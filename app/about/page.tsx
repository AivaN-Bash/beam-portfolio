"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "../components/Nav";
import { skills, timeline, CONTACT_EMAIL } from "../data/portfolio";

const focus = [
  { area: "Security Engineering", tags: ["HMAC", "JWT rotation", "CSP", "timing-safe ops"], index: "01" },
  { area: "API Design", tags: ["REST", "versioning", "error contracts", "OpenAPI"], index: "02" },
  { area: "Real-Time Infra", tags: ["SSE", "WebSockets", "pub/sub", "Redis"], index: "03" },
  { area: "Developer Experience", tags: ["CLI tooling", "VS Code ext.", "observability"], index: "04" },
];

export default function AboutPage() {
  const [hoveredYear, setHoveredYear] = useState<string | null>(null);

  return (
    <main id="main-content" className="lg:pl-[72px]" style={{ minHeight: "100vh" }}>
      <Nav />

      {/* ── SCENE 1: OPENING — identity statement, wide ── */}
      <header style={{
        position: "relative",
        isolation: "isolate",
        padding: "clamp(80px, 12vh, 120px) clamp(32px, 8vw, 120px) clamp(40px, 6vh, 60px)",
        borderBottom: "1px solid var(--border)",
      }}>
        <span className="ghost-num hidden lg:block" aria-hidden="true" style={{
          top: "-10px",
          right: "0",
          fontSize: "clamp(140px, 18vw, 260px)",
          "--ghost-c": "var(--border-2)",
        } as React.CSSProperties}>
          02
        </span>

        <div className="flex items-center gap-3 mb-6">
          <span className="inline-block w-5 h-px" style={{ background: "var(--accent)" }} />
          <span className="font-mono" style={{ color: "var(--accent)", fontSize: "11px", letterSpacing: "0.1em" }}>
            ABOUT
          </span>
        </div>

        <h1 className="font-display font-bold leading-none mb-6"
          style={{ fontSize: "clamp(44px, 8vw, 96px)", letterSpacing: "-0.04em" }}>
          <span style={{ color: "var(--text-primary)" }}>Staff Engineer.</span>
          <br />
          <span style={{ color: "var(--text-tertiary)" }}>Systems thinker.</span>
          <br />
          <span style={{ color: "var(--accent)" }}>People-first.</span>
        </h1>

        {/* Compressed identity row below the headline */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {[
            { label: "LOCATION", value: "Bangkok, Thailand · UTC+7" },
            { label: "STATUS", value: "● Available", accent: true },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className="font-mono" style={{ color: "var(--text-tertiary)", fontSize: "9px", letterSpacing: "0.08em" }}>
                {item.label}
              </span>
              <span className="font-mono" style={{
                color: item.accent ? "var(--accent)" : "var(--text-secondary)",
                fontSize: "11px",
              }}>
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </header>

      {/* ── SCENE 2: VOICE — bio as narrative, not a summary ── */}
      <section style={{
        padding: "0 clamp(32px, 8vw, 120px)",
        borderBottom: "1px solid var(--border)",
      }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-0">

          {/* Left: bio — given more room, larger type */}
          <div style={{
            padding: "clamp(32px, 5vh, 56px) 0",
            paddingRight: "clamp(24px, 4vw, 60px)",
            borderRight: "1px solid var(--border)",
          }}>
            <p style={{
              color: "var(--text-secondary)",
              fontSize: "clamp(15px, 1.8vw, 18px)",
              lineHeight: 1.8,
              marginBottom: "20px",
            }}>
              &ldquo;Systems thinker&rdquo; isn&apos;t just a tagline — it&apos;s the default lens. Understand the whole
              before touching a part. In practice, that means{" "}
              <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>security engineering</span>,{" "}
              <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>API design</span>, and{" "}
              <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>real-time infrastructure</span>{" "}
              — all at once, all the time.
            </p>
            <p style={{ color: "var(--text-secondary)", fontSize: "clamp(15px, 1.8vw, 18px)", lineHeight: 1.8, marginBottom: "20px" }}>
              I care about building systems that are trustworthy by construction — where security isn&apos;t bolted on,
              observability is default, and every API surface reflects deliberate design.
              A bad API is permanent debt. I take that seriously.
            </p>
            <p style={{ color: "var(--text-secondary)", fontSize: "clamp(15px, 1.8vw, 18px)", lineHeight: 1.8, marginBottom: "20px" }}>
              Outside engineering, I&apos;m an active day trader across NASDAQ and Thai SET. The discipline —
              cutting losses fast, staying systematic under uncertainty — shapes how I approach
              software decisions.
            </p>
            <p style={{ color: "var(--text-secondary)", fontSize: "clamp(15px, 1.8vw, 18px)", lineHeight: 1.8 }}>
              The best engineers are product thinkers. The work doesn&apos;t end at{" "}
              <code className="font-mono" style={{
                color: "var(--mono)", fontSize: "14px",
                background: "var(--surface)", padding: "1px 6px", borderRadius: "2px",
              }}>
                git push
              </code>.
            </p>
          </div>

          {/* Right: meta readout */}
          <div style={{
            paddingLeft: "clamp(24px, 4vw, 60px)",
            padding: "clamp(32px, 5vh, 56px) 0 clamp(32px, 5vh, 56px) clamp(24px, 4vw, 60px)",
          }}>
            <h2 className="font-mono mb-4" style={{ color: "var(--text-tertiary)", fontSize: "9px", letterSpacing: "0.1em", fontWeight: 500 }}>
              QUICK FACTS
            </h2>
            <div className="hud-frame" style={{ border: "1px solid var(--border)", background: "var(--surface)" }}>
              {[
                { label: "FOCUS", value: "Security · APIs · Real-time" },
                { label: "BUILDING", value: "NEXUS platform, TipBeam V2" },
                { label: "TRADING", value: "NASDAQ + Thai SET" },
                { label: "BEFORE TECH", value: "Guest services, Tennessee, USA" },
                { label: "OPEN TO", value: "Interesting problems" },
              ].map((item, i, arr) => (
                <div key={item.label} style={{
                  padding: "10px 16px",
                  borderBottom: i < arr.length - 1 ? "1px solid var(--border)" : "none",
                  display: "flex", flexDirection: "column", gap: "2px",
                }}>
                  <span className="font-mono" style={{ color: "var(--text-tertiary)", fontSize: "9px", letterSpacing: "0.08em" }}>
                    {item.label}
                  </span>
                  <span className="font-mono" style={{ color: "var(--text-primary)", fontSize: "11px" }}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SCENE 3: DEPTH — focus areas, dense grid ── */}
      <section style={{ borderBottom: "1px solid var(--border)" }}>
        <div style={{
          padding: "clamp(24px, 3vh, 36px) clamp(32px, 8vw, 120px)",
          borderBottom: "1px solid var(--border)",
        }}>
          <div className="flex items-center justify-between">
            <h2 className="font-mono" style={{ color: "var(--text-tertiary)", fontSize: "9px", letterSpacing: "0.1em", fontWeight: 500 }}>
              FOCUS AREAS
            </h2>
            <span className="font-mono" style={{ color: "var(--text-tertiary)", fontSize: "9px" }}>
              4 domains
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {focus.map((f, i) => (
            <div key={f.area} className="hud-frame" style={{
              position: "relative",
              isolation: "isolate",
              padding: "20px 24px 24px",
              borderLeft: i === 0 ? "none" : "1px solid var(--border)",
              borderRight: "none",
              borderTop: "none",
              borderBottom: "none",
            }}>
              <span className="ghost-num" aria-hidden="true" style={{
                bottom: "4px",
                right: "12px",
                fontSize: "52px",
                "--ghost-c": "var(--border-2)",
              } as React.CSSProperties}>
                {f.index}
              </span>
              <h3 className="font-display font-semibold mb-3"
                style={{ color: "var(--text-primary)", fontSize: "13px", letterSpacing: "-0.01em" }}>
                {f.area}
              </h3>
              <div className="flex flex-wrap gap-1">
                {f.tags.map((tag) => (
                  <span key={tag} className="font-mono"
                    style={{ fontSize: "9px", padding: "2px 5px", border: "1px solid var(--border)", borderRadius: "2px", color: "var(--accent)" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SCENE 4: HISTORY — timeline big on left, tools right ── */}
      <section style={{
        padding: "0 clamp(32px, 8vw, 120px)",
        borderBottom: "1px solid var(--border)",
      }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-0">

          {/* Timeline — left column */}
          <div style={{
            padding: "clamp(32px, 5vh, 56px) 0",
            paddingRight: "clamp(24px, 4vw, 56px)",
            borderRight: "1px solid var(--border)",
          }}>
            <h2 className="font-mono mb-8" style={{ color: "var(--text-tertiary)", fontSize: "9px", letterSpacing: "0.1em", fontWeight: 500 }}>
              TIMELINE
            </h2>
            {timeline.map((entry, i) => {
              const isCurrent = i === 0;
              return (
                <div
                  key={entry.year}
                  className="flex items-start gap-6 transition-all duration-200"
                  style={{
                    borderBottom: i < timeline.length - 1 ? "1px solid var(--border)" : "none",
                    padding: isCurrent ? "0 0 24px" : "16px 0",
                    cursor: "default",
                  }}
                  onMouseEnter={() => setHoveredYear(entry.year)}
                  onMouseLeave={() => setHoveredYear(null)}
                >
                  <span className="font-mono flex-shrink-0 transition-colors duration-200"
                    style={{
                      color: hoveredYear === entry.year ? "var(--accent)" : "var(--text-tertiary)",
                      fontSize: isCurrent ? "15px" : "11px",
                      fontWeight: isCurrent ? 600 : 400,
                      minWidth: "44px",
                      paddingTop: "2px",
                    }}>
                    {entry.year}
                  </span>
                  <div>
                    <p className="font-display font-semibold mb-1"
                      style={{
                        color: "var(--text-primary)",
                        fontSize: isCurrent ? "18px" : "14px",
                        letterSpacing: "-0.02em",
                      }}>
                      {entry.role}
                    </p>
                    <p style={{ color: "var(--text-secondary)", fontSize: "12px", lineHeight: 1.7 }}>
                      {entry.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tools — right column */}
          <div style={{
            paddingLeft: "clamp(24px, 4vw, 56px)",
            padding: "clamp(32px, 5vh, 56px) 0 clamp(32px, 5vh, 56px) clamp(24px, 4vw, 56px)",
          }}>
            <h2 className="font-mono mb-6" style={{ color: "var(--text-tertiary)", fontSize: "9px", letterSpacing: "0.1em", fontWeight: 500 }}>
              TOOLS & TECH
            </h2>
            <div className="space-y-5">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h3 className="font-mono block mb-2"
                    style={{ color: "var(--accent)", fontSize: "9px", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 500 }}>
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {items.map((item) => (
                      <span key={item} className="font-mono"
                        style={{
                          fontSize: "10px", padding: "2px 6px",
                          border: "1px solid var(--border)",
                          background: "var(--bg)",
                          borderRadius: "2px", color: "var(--text-secondary)",
                        }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SCENE 5: BEFORE CODE — teaser, compressed horizontal ── */}
      <section style={{ borderBottom: "1px solid var(--border)" }}>
        <Link href="/experience" className="group block" style={{
          padding: "clamp(20px, 3vh, 32px) clamp(32px, 8vw, 120px)",
        }}>
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-4 lg:gap-10 items-center">
            <div className="hud-frame flex-shrink-0" style={{ padding: "6px 14px" }}>
              <span className="font-mono" style={{ color: "var(--text-tertiary)", fontSize: "9px", letterSpacing: "0.1em" }}>
                [BEFORE THE CODE]
              </span>
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: "13px", lineHeight: 1.65 }}>
              &ldquo;People-first&rdquo; up top isn&apos;t just a phrase — it traces back to a season at Dollywood:
              wheelchairs, scooters, and guests from dozens of countries. More about communication
              and problem-solving under pressure than any classroom taught.
            </p>
            <span className="inline-flex items-center gap-2 font-mono transition-colors duration-200 group-hover:opacity-70 flex-shrink-0"
              style={{ color: "var(--accent)", fontSize: "12px", letterSpacing: "0.02em" }}>
              Read the story
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" focusable="false"
                className="transition-transform duration-200 group-hover:translate-x-1">
                <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </Link>
      </section>

      {/* ── CLOSING — expansive, room to breathe ── */}
      <section style={{ padding: "clamp(40px, 7vh, 72px) clamp(32px, 8vw, 120px)" }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-end">
          <div>
            <h2 className="font-display font-semibold mb-2"
              style={{ fontSize: "clamp(20px, 3vw, 32px)", color: "var(--text-primary)", letterSpacing: "-0.025em" }}>
              Let&apos;s build something worth building.
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "14px", maxWidth: "480px", lineHeight: 1.65 }}>
              Selective about what I take on. Always open to well-scoped engineering challenges.
            </p>
          </div>
          <a href={`mailto:${CONTACT_EMAIL}`}
            className="group inline-flex items-center gap-2 font-mono transition-all duration-200 hover:opacity-75 flex-shrink-0"
            style={{ color: "var(--accent-2)", fontSize: "14px", letterSpacing: "0.02em" }}>
            {CONTACT_EMAIL}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" focusable="false"
              className="transition-transform duration-200 group-hover:translate-x-0.5">
              <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

    </main>
  );
}
