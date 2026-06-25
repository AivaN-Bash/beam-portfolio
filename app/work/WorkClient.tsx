"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "../components/Nav";
import { projects } from "../data/portfolio";
import SignalBars from "../components/SignalBars";

const allStack = Array.from(new Set(projects.flatMap((p) => p.stack))).sort();

export default function WorkPage() {
  const [filter, setFilter] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const categories = Array.from(new Set(projects.map((p) => p.category)));
  const filtered = filter ? projects.filter((p) => p.category === filter) : projects;
  const featured = !filter ? projects[0] : null;
  const rest = featured ? filtered.slice(1) : filtered;

  return (
    <main id="main-content" className="lg:pl-[72px]" style={{ minHeight: "100vh" }}>
      <Nav />

      {/* ── SCENE 1: OPENING — compressed kicker, dominant title ── */}
      <header
        className="relative isolate pt-[calc(56px+clamp(24px,5vh,40px))] lg:pt-[clamp(80px,12vh,120px)]"
        style={{
          padding: "clamp(80px, 12vh, 120px) clamp(32px, 8vw, 120px) clamp(40px, 6vh, 60px)",
        }}>
        <span className="ghost-num" aria-hidden="true" style={{
          top: "-10px",
          right: "0",
          fontSize: "clamp(140px, 18vw, 260px)",
          "--ghost-c": "var(--border-2)",
        } as React.CSSProperties}>
          WK
        </span>

        <div className="flex items-center gap-3 mb-6">
          <span className="inline-block w-5 h-px" style={{ background: "var(--accent)" }} />
          <span className="font-mono" style={{ color: "var(--accent)", fontSize: "11px", letterSpacing: "0.1em" }}>
            WORK
          </span>
        </div>

        <h1 className="font-display font-bold leading-none mb-6" style={{
          fontSize: "clamp(48px, 9vw, 100px)",
          letterSpacing: "-0.04em",
          color: "var(--text-primary)",
        }}>
          Selected Projects
        </h1>

        {/* Compressed stat row replaces the standalone caption + panel */}
        <div className="flex flex-wrap items-end gap-x-8 gap-y-3">
          <p className="font-display font-light" style={{
            fontSize: "clamp(14px, 1.6vw, 17px)",
            color: "var(--text-secondary)",
            maxWidth: "380px",
            lineHeight: 1.6,
          }}>
            Case studies in problem-solving. Each project is a story about constraints, decisions, and outcomes.
          </p>
          <div style={{ width: "1px", height: "36px", background: "var(--border)" }} className="hidden md:block" />
          <div className="flex items-end gap-6">
            <div>
              <div className="font-display font-bold" style={{ fontSize: "26px", color: "var(--text-primary)", letterSpacing: "-0.04em", lineHeight: 1 }}>
                {projects.length}
              </div>
              <div className="font-mono" style={{ color: "var(--text-tertiary)", fontSize: "9px", letterSpacing: "0.08em" }}>PROJECTS</div>
            </div>
            <div>
              <div className="font-display font-bold" style={{ fontSize: "26px", color: "var(--text-primary)", letterSpacing: "-0.04em", lineHeight: 1 }}>
                {categories.length}
              </div>
              <div className="font-mono" style={{ color: "var(--text-tertiary)", fontSize: "9px", letterSpacing: "0.08em" }}>DOMAINS</div>
            </div>
            <div>
              <div className="font-display font-bold" style={{ fontSize: "26px", color: "var(--accent)", letterSpacing: "-0.04em", lineHeight: 1 }}>
                2+
              </div>
              <div className="font-mono" style={{ color: "var(--text-tertiary)", fontSize: "9px", letterSpacing: "0.08em" }}>IN PROGRESS</div>
            </div>
          </div>
        </div>
      </header>

      <div className="section-divider" style={{ margin: "0 clamp(32px, 8vw, 120px)" }} />

      {/* ── SCENE 2: FEATURED — the lead project, given room ── */}
      {featured && (
        <Link href={`/work/${featured.slug}`} className="group block">
          <div className="relative isolate hud-frame hud-frame--active" style={{
            padding: "clamp(32px, 5vh, 56px) clamp(32px, 8vw, 120px)",
            "--hud-c": featured.accent,
          } as React.CSSProperties}>
            <span className="ghost-num hidden lg:block" aria-hidden="true" style={{
              top: "50%",
              right: "clamp(24px, 6vw, 90px)",
              transform: "translateY(-50%)",
              fontSize: "clamp(100px, 14vw, 200px)",
              "--ghost-c": `${featured.accent}30`,
            } as React.CSSProperties}>
              {featured.index}
            </span>

            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono" style={{ color: "var(--accent-2)", fontSize: "9px", letterSpacing: "0.1em" }}>
                ★ FEATURED
              </span>
              <span className="font-mono px-1.5 py-0.5 rounded-sm"
                style={{ color: featured.accent, background: `${featured.accent}15`, fontSize: "9px", letterSpacing: "0.05em" }}>
                {featured.status}
              </span>
              <SignalBars level={featured.signal} color={featured.accent} />
            </div>

            <h2 className="font-display font-bold leading-none mb-3 transition-colors duration-200"
              style={{
                fontSize: "clamp(40px, 7vw, 80px)",
                letterSpacing: "-0.04em",
                color: featured.accent,
              }}>
              {featured.title}
            </h2>

            <p style={{ color: "var(--text-secondary)", fontSize: "clamp(13px, 1.6vw, 16px)", lineHeight: 1.7, maxWidth: "620px", marginBottom: "16px" }}>
              {featured.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <div className="flex flex-wrap gap-1.5">
                {featured.stack.slice(0, 5).map((tech) => (
                  <span key={tech} className="font-mono"
                    style={{ fontSize: "9px", padding: "2px 7px", border: "1px solid var(--border)", borderRadius: "2px", color: "var(--text-tertiary)", background: "var(--bg)" }}>
                    {tech}
                  </span>
                ))}
              </div>
              <span className="font-mono ml-auto" style={{ color: "var(--text-tertiary)", fontSize: "10px" }}>
                {featured.category} · {featured.year}
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono transition-transform duration-200 group-hover:translate-x-1"
                style={{ color: featured.accent, fontSize: "12px" }}>
                Read case study
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" focusable="false">
                  <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </div>
        </Link>
      )}

      <div className="section-divider" style={{ margin: "0 clamp(32px, 8vw, 120px)" }} />

      {/* ── FILTER — compressed bar ── */}
      <div
        role="group"
        aria-label="Filter projects by category"
        className="flex flex-wrap items-center gap-2"
        style={{
          padding: "6px clamp(32px, 8vw, 120px)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <span className="font-mono mr-2" style={{ color: "var(--text-tertiary)", fontSize: "9px", letterSpacing: "0.08em" }}>
          FILTER
        </span>
        <button
          onClick={() => setFilter(null)}
          aria-pressed={!filter}
          className="font-mono transition-all duration-200"
          style={{
            fontSize: "10px", letterSpacing: "0.06em",
            padding: "0 12px",
            minHeight: "44px",
            minWidth: "44px",
            borderRadius: "2px", cursor: "pointer",
            border: `1px solid ${!filter ? "var(--accent)" : "var(--border)"}`,
            background: !filter ? "var(--accent-dim)" : "transparent",
            color: !filter ? "var(--accent)" : "var(--text-tertiary)",
          }}>
          All
        </button>
        {categories.map((cat) => (
          <button key={cat} onClick={() => setFilter(cat === filter ? null : cat)}
            aria-pressed={filter === cat}
            className="font-mono transition-all duration-200"
            style={{
              fontSize: "10px", letterSpacing: "0.06em",
              padding: "0 12px",
              minHeight: "44px",
              minWidth: "44px",
              borderRadius: "2px", cursor: "pointer",
              border: `1px solid ${filter === cat ? "var(--accent)" : "var(--border)"}`,
              background: filter === cat ? "var(--accent-dim)" : "transparent",
              color: filter === cat ? "var(--accent)" : "var(--text-tertiary)",
            }}>
            {cat}
          </button>
        ))}
        <span className="font-mono ml-auto" aria-live="polite" aria-atomic="true" style={{ color: "var(--text-tertiary)", fontSize: "9px" }}>
          {filtered.length} result{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* ── SCENE 3: THE REST — dense, scannable list ── */}
      <div style={{ padding: "0 clamp(32px, 8vw, 120px)" }}>
        {rest.map((project) => (
          <Link
            key={project.id}
            href={`/work/${project.slug}`}
            className="group block"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
            onFocus={() => setHoveredProject(project.id)}
            onBlur={() => setHoveredProject(null)}
          >
            <div className={`relative isolate transition-all duration-200 hud-frame ${hoveredProject === project.id ? "hud-frame--active" : ""}`} style={{
              borderBottom: "1px solid var(--border)",
              background: hoveredProject === project.id ? `${project.accent}05` : "transparent",
              padding: "18px 12px",
              marginLeft: "-12px",
              marginRight: "-12px",
            }}>
              <span className="ghost-num hidden lg:block" aria-hidden="true" style={{
                top: "50%",
                right: "20px",
                transform: "translateY(-50%)",
                fontSize: "clamp(56px, 7vw, 96px)",
                "--ghost-c": hoveredProject === project.id ? project.accent : "var(--border-2)",
              } as React.CSSProperties}>
                {project.index}
              </span>
              <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-x-8 gap-y-2 items-start">

                <div className="flex items-center gap-3 lg:flex-col lg:items-end lg:gap-1.5 lg:pt-0.5">
                  <span className="font-mono" style={{ color: hoveredProject === project.id ? project.accent : "var(--text-tertiary)", fontSize: "10px" }}>
                    [{project.index}]
                  </span>
                  <span className="font-mono px-1.5 py-0.5 rounded-sm"
                    style={{ fontSize: "9px", letterSpacing: "0.04em", color: project.accent, background: `${project.accent}15` }}>
                    {project.status}
                  </span>
                  <SignalBars level={project.signal} color={hoveredProject === project.id ? project.accent : "var(--text-tertiary)"} />
                </div>

                <div>
                  <div className="flex items-baseline gap-3 mb-1.5 flex-wrap">
                    <h2 className="font-display font-semibold transition-colors duration-200"
                      style={{
                        fontSize: "clamp(18px, 2.8vw, 26px)",
                        letterSpacing: "-0.025em",
                        color: hoveredProject === project.id ? project.accent : "var(--text-primary)",
                      }}>
                      {project.title}
                    </h2>
                    <span className="font-mono" style={{ color: "var(--text-tertiary)", fontSize: "10px" }}>
                      {project.category}
                    </span>
                  </div>
                  <p className="mb-3" style={{ color: "var(--text-secondary)", fontSize: "13px", lineHeight: 1.65, maxWidth: "560px" }}>
                    {project.tagline}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span key={tech} className="font-mono"
                        style={{ fontSize: "9px", padding: "2px 6px", border: "1px solid var(--border)", background: "var(--surface)", borderRadius: "2px", color: "var(--text-tertiary)" }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="hidden lg:flex flex-col items-end gap-2 pt-1">
                  <span className="font-mono" style={{ color: "var(--text-tertiary)", fontSize: "10px" }}>
                    {project.year}
                  </span>
                  <span className="transition-all duration-200" style={{
                    opacity: hoveredProject === project.id ? 1 : 0,
                    transform: hoveredProject === project.id ? "translate(0,-2px)" : "translate(-4px,2px)",
                  }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
                      <path d="M3 13L13 3M13 3H7M13 3V9" stroke={project.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>

              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* ── CLOSING: STACK COVERAGE — wide, compressed ── */}
      <div className="hud-frame" style={{
        margin: "clamp(24px, 4vh, 40px) clamp(32px, 8vw, 120px)",
        padding: "16px 20px",
        border: "1px solid var(--border)",
        background: "var(--surface)",
      }}>
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 items-center">
          <span className="font-mono" style={{ color: "var(--text-tertiary)", fontSize: "9px", letterSpacing: "0.1em" }}>
            STACK COVERAGE ACROSS ALL PROJECTS
          </span>
          <div className="flex flex-wrap gap-1.5">
            {allStack.map((tech) => (
              <span key={tech} className="font-mono"
                style={{ fontSize: "9px", padding: "2px 7px", border: "1px solid var(--border)", borderRadius: "2px", color: "var(--text-tertiary)" }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── TRANSITION ── */}
      <div style={{ padding: "clamp(28px, 4vh, 44px) clamp(32px, 8vw, 120px) clamp(40px, 6vh, 56px)" }}>
        <div className="flex items-center justify-between">
          <span className="font-mono" style={{ color: "var(--text-tertiary)", fontSize: "9px", letterSpacing: "0.08em" }}>
            CONTINUE
          </span>
          <Link href="/experience" className="group hud-frame flex items-center gap-3"
            style={{ padding: "10px 18px" }}>
            <span className="font-display font-bold"
              style={{ color: "var(--accent)", fontSize: "clamp(18px, 2.5vw, 28px)", letterSpacing: "-0.025em" }}>
              Before the code
            </span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" focusable="false"
              className="transition-transform duration-200 group-hover:translate-x-1">
              <path d="M3.5 14.5L14.5 3.5M14.5 3.5H7M14.5 3.5V11"
                stroke="#6C63FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>

    </main>
  );
}
