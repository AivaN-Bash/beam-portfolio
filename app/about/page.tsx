"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "../components/Nav";
import { skills, timeline, CONTACT_EMAIL } from "../data/portfolio";

const focus = [
  { area: "Security Engineering", tags: ["HMAC", "JWT rotation", "CSP", "timing-safe ops"] },
  { area: "API Design", tags: ["REST", "versioning", "error contracts", "OpenAPI"] },
  { area: "Real-Time Infra", tags: ["SSE", "WebSockets", "pub/sub", "Redis"] },
  { area: "Developer Experience", tags: ["CLI tooling", "VS Code ext.", "observability"] },
];

export default function AboutPage() {
  const [hoveredYear, setHoveredYear] = useState<string | null>(null);

  return (
    <main className="lg:pl-[72px]" style={{ minHeight: "100vh" }}>
      <Nav />

      <div style={{ padding: "clamp(72px, 10vh, 100px) clamp(32px, 8vw, 120px) clamp(60px, 8vh, 100px)" }}>

        {/* ── PAGE HEADER ── */}
        <div style={{ position: "relative", isolation: "isolate", borderBottom: "1px solid var(--border)", paddingBottom: "24px", marginBottom: "0" }}>
          <span className="ghost-num hidden lg:block" aria-hidden="true" style={{
            top: "-24px",
            right: "0px",
            fontSize: "clamp(140px, 18vw, 260px)",
            "--ghost-c": "var(--border-2)",
          } as React.CSSProperties}>
            02
          </span>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block w-5 h-px" style={{ background: "var(--accent)" }} />
            <span className="font-mono" style={{ color: "var(--accent)", fontSize: "11px", letterSpacing: "0.1em" }}>
              ABOUT
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-end">
            <h1 className="font-display font-bold leading-none" style={{
              fontSize: "clamp(40px, 7.5vw, 80px)",
              letterSpacing: "-0.04em",
              color: "var(--text-primary)",
            }}>
              Staff Engineer.{" "}
              <span style={{ color: "var(--text-tertiary)" }}>Systems thinker.</span>{" "}
              <span style={{ color: "var(--accent)" }}>People-first.</span>
            </h1>
            <div className="hidden lg:block font-mono text-right hud-frame" style={{ color: "var(--text-tertiary)", fontSize: "10px", lineHeight: 1.8, padding: "10px 16px" }}>
              <div>Bangkok, Thailand</div>
              <div style={{ color: "var(--text-tertiary)" }}>UTC+7</div>
              <div style={{ color: "var(--accent)", marginTop: "4px" }}>● Available</div>
            </div>
          </div>
        </div>

        {/* ── BIO + META — tight two-column ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 py-8 reveal"
          style={{ borderBottom: "1px solid var(--border)" }}>

          {/* Bio */}
          <div className="space-y-4">
            <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: 1.8 }}>
              I&apos;m a Staff Software Engineer based in Bangkok, Thailand. My work sits at the intersection of{" "}
              <span style={{ color: "var(--text-primary)" }}>security engineering</span>,{" "}
              <span style={{ color: "var(--text-primary)" }}>API design</span>, and{" "}
              <span style={{ color: "var(--text-primary)" }}>real-time infrastructure</span>.
            </p>
            <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: 1.8 }}>
              I care about building systems that are trustworthy by construction — where security isn&apos;t bolted on, observability is default, and every API surface reflects deliberate design. A bad API is permanent debt. I take that seriously.
            </p>
            <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: 1.8 }}>
              Outside engineering, I&apos;m an active day trader across NASDAQ and Thai SET. The discipline — cutting losses fast, staying systematic under uncertainty — shapes how I approach software decisions.
            </p>
            <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: 1.8 }}>
              The best engineers are product thinkers. The work doesn&apos;t end at{" "}
              <code className="font-mono" style={{ color: "var(--mono)", fontSize: "13px", background: "var(--surface)", padding: "1px 5px", borderRadius: "2px" }}>
                git push
              </code>.
            </p>
          </div>

          {/* Meta panel */}
          <div className="hud-frame" style={{
            border: "1px solid var(--border)",
            background: "var(--surface)",
            alignSelf: "start",
          }}>
            {[
              { label: "ROLE", value: "Staff Software Engineer" },
              { label: "LOCATION", value: "Bangkok, Thailand" },
              { label: "FOCUS", value: "Security · APIs · Real-time" },
              { label: "BUILDING", value: "NEXUS platform, TipBeam V2" },
              { label: "TRADING", value: "NASDAQ + Thai SET" },
              { label: "BEFORE TECH", value: "Guest services, Tennessee, USA" },
              { label: "OPEN TO", value: "Interesting problems" },
            ].map((item, i, arr) => (
              <div key={item.label}
                style={{
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

        {/* ── FOCUS AREAS ── */}
        <div className="py-8 reveal" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-mono" style={{ color: "var(--text-tertiary)", fontSize: "10px", letterSpacing: "0.1em", fontWeight: 500 }}>
              FOCUS AREAS
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {focus.map((f, i) => (
              <div key={f.area} className="hud-frame" style={{
                padding: "16px 20px",
                borderLeft: i === 0 ? "1px solid var(--border)" : "none",
                borderRight: "1px solid var(--border)",
                borderTop: "1px solid var(--border)",
                borderBottom: "1px solid var(--border)",
              }}>
                <h3 className="font-display font-semibold mb-3"
                  style={{ color: "var(--text-primary)", fontSize: "13px", letterSpacing: "-0.01em" }}>
                  {f.area}
                </h3>
                <div className="flex flex-wrap gap-1">
                  {f.tags.map((tag) => (
                    <span key={tag} className="font-mono"
                      style={{ fontSize: "9px", padding: "1px 5px", border: "1px solid var(--border)", borderRadius: "2px", color: "var(--accent)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── TIMELINE + SKILLS — side-by-side ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-0 py-8 reveal"
          style={{ borderBottom: "1px solid var(--border)" }}>

          {/* Timeline */}
          <div style={{ paddingRight: "clamp(0px, 4vw, 60px)" }}>
            <h2 className="font-mono mb-5"
              style={{ color: "var(--text-tertiary)", fontSize: "10px", letterSpacing: "0.1em", fontWeight: 500 }}>
              TIMELINE
            </h2>
            <div>
              {timeline.map((entry, i) => (
                <div
                  key={entry.year}
                  className="flex items-start gap-6 transition-all duration-200"
                  style={{
                    borderBottom: i < timeline.length - 1 ? "1px solid var(--border)" : "none",
                    padding: "12px 0",
                    cursor: "default",
                  }}
                  onMouseEnter={() => setHoveredYear(entry.year)}
                  onMouseLeave={() => setHoveredYear(null)}
                >
                  <span className="font-mono flex-shrink-0 transition-colors duration-200"
                    style={{
                      color: hoveredYear === entry.year ? "var(--accent)" : "var(--text-tertiary)",
                      fontSize: "11px", fontWeight: 500, minWidth: "40px", paddingTop: "1px",
                    }}>
                    {entry.year}
                  </span>
                  <div>
                    <p className="font-display font-medium mb-0.5"
                      style={{ color: "var(--text-primary)", fontSize: "14px" }}>
                      {entry.role}
                    </p>
                    <p style={{ color: "var(--text-secondary)", fontSize: "12px", lineHeight: 1.7 }}>
                      {entry.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills sidebar */}
          <div style={{
            borderLeft: "1px solid var(--border)",
            paddingLeft: "clamp(20px, 4vw, 48px)",
          }}>
            <h2 className="font-mono mb-5"
              style={{ color: "var(--text-tertiary)", fontSize: "10px", letterSpacing: "0.1em", fontWeight: 500 }}>
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

        {/* ── BEYOND THE CODE ── */}
        <div className="py-8 reveal" style={{ borderBottom: "1px solid var(--border)" }}>
          <Link href="/experience" className="group block hud-frame" style={{ padding: "20px 24px" }}>
            <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-6 items-center">
              <span className="font-mono flex-shrink-0" style={{ color: "var(--text-tertiary)", fontSize: "9px", letterSpacing: "0.1em" }}>
                [BEFORE THE CODE]
              </span>
              <p style={{ color: "var(--text-secondary)", fontSize: "13px", lineHeight: 1.65, maxWidth: "560px" }}>
                A season working guest services at Dollywood — wheelchairs, scooters, and guests from
                dozens of countries — taught me more about communication and problem-solving under
                pressure than any classroom did.
              </p>
              <span className="group flex items-center gap-2 font-mono flex-shrink-0 transition-colors duration-200"
                style={{ color: "var(--accent)", fontSize: "12px", letterSpacing: "0.02em" }}>
                Read the story
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" focusable="false"
                  className="transition-transform duration-200 group-hover:translate-x-1">
                  <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </Link>
        </div>

        {/* ── CONTACT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-center pt-8 reveal">
          <div>
            <h2 className="font-display font-semibold mb-1"
              style={{ fontSize: "clamp(18px, 2.5vw, 22px)", color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
              Get in touch
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "13px", maxWidth: "420px", lineHeight: 1.65 }}>
              Selective about what I take on, but always open to conversations about well-scoped engineering challenges.
            </p>
          </div>
          <a href={`mailto:${CONTACT_EMAIL}`}
            className="group inline-flex items-center gap-2 font-mono transition-all duration-200 hover:opacity-75 flex-shrink-0"
            style={{ color: "var(--accent-2)", fontSize: "13px", letterSpacing: "0.02em" }}>
            {CONTACT_EMAIL}
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true" focusable="false"
              className="transition-transform duration-200 group-hover:translate-x-0.5">
              <path d="M2 6.5H11M11 6.5L7.5 3M11 6.5L7.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

      </div>
    </main>
  );
}
