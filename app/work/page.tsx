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

  return (
    <main className="lg:pl-[72px]" style={{ minHeight: "100vh" }}>
      <Nav />

      <div style={{ padding: "clamp(72px, 10vh, 100px) clamp(32px, 8vw, 120px) clamp(60px, 8vh, 100px)" }}>

        {/* ── PAGE HEADER — two-column, overlapping ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-end mb-0"
          style={{ position: "relative", isolation: "isolate", borderBottom: "1px solid var(--border)", paddingBottom: "24px" }}>
          <span className="ghost-num hidden lg:block" aria-hidden="true" style={{
            top: "-20px",
            right: "0px",
            fontSize: "clamp(140px, 18vw, 260px)",
            "--ghost-c": "var(--border-2)",
          } as React.CSSProperties}>
            01
          </span>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-5 h-px" style={{ background: "var(--accent)" }} />
              <span className="font-mono" style={{ color: "var(--accent)", fontSize: "11px", letterSpacing: "0.1em" }}>
                WORK
              </span>
            </div>
            <h1 className="font-display font-bold leading-none mb-3" style={{
              fontSize: "clamp(44px, 8vw, 84px)",
              letterSpacing: "-0.04em",
              color: "var(--text-primary)",
            }}>
              Selected Projects
            </h1>
            <p className="font-display font-light" style={{
              fontSize: "14px",
              color: "var(--text-secondary)",
              maxWidth: "400px",
              lineHeight: 1.65,
            }}>
              Case studies in problem-solving. Each project is a story about constraints, decisions, and outcomes.
            </p>
          </div>

          {/* Right: summary stats */}
          <div className="hidden lg:flex flex-col gap-2 items-end hud-frame" style={{
            padding: "16px 24px",
            border: "1px solid var(--border)",
            background: "var(--surface)",
          }}>
            <div className="flex items-center gap-6">
              <div className="text-right">
                <div className="font-display font-bold" style={{ fontSize: "28px", color: "var(--text-primary)", letterSpacing: "-0.04em", lineHeight: 1 }}>
                  {projects.length}
                </div>
                <div className="font-mono" style={{ color: "var(--text-tertiary)", fontSize: "9px", letterSpacing: "0.08em" }}>
                  PROJECTS
                </div>
              </div>
              <div style={{ width: "1px", height: "32px", background: "var(--border)" }} />
              <div className="text-right">
                <div className="font-display font-bold" style={{ fontSize: "28px", color: "var(--text-primary)", letterSpacing: "-0.04em", lineHeight: 1 }}>
                  {categories.length}
                </div>
                <div className="font-mono" style={{ color: "var(--text-tertiary)", fontSize: "9px", letterSpacing: "0.08em" }}>
                  DOMAINS
                </div>
              </div>
              <div style={{ width: "1px", height: "32px", background: "var(--border)" }} />
              <div className="text-right">
                <div className="font-display font-bold" style={{ fontSize: "28px", color: "var(--accent)", letterSpacing: "-0.04em", lineHeight: 1 }}>
                  2+
                </div>
                <div className="font-mono" style={{ color: "var(--text-tertiary)", fontSize: "9px", letterSpacing: "0.08em" }}>
                  IN PROGRESS
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── FILTER ROW ── */}
        <div className="flex flex-wrap items-center gap-2 py-4"
          style={{ borderBottom: "1px solid var(--border)", marginBottom: "0" }}>
          <span className="font-mono mr-2" style={{ color: "var(--text-tertiary)", fontSize: "9px", letterSpacing: "0.08em" }}>
            FILTER
          </span>
          <button
            onClick={() => setFilter(null)}
            className="font-mono transition-all duration-200"
            style={{
              fontSize: "10px", letterSpacing: "0.06em", padding: "3px 10px",
              borderRadius: "2px", cursor: "pointer",
              border: `1px solid ${!filter ? "var(--accent)" : "var(--border)"}`,
              background: !filter ? "var(--accent-dim)" : "transparent",
              color: !filter ? "var(--accent)" : "var(--text-tertiary)",
            }}>
            All
          </button>
          {categories.map((cat) => (
            <button key={cat} onClick={() => setFilter(cat === filter ? null : cat)}
              className="font-mono transition-all duration-200"
              style={{
                fontSize: "10px", letterSpacing: "0.06em", padding: "3px 10px",
                borderRadius: "2px", cursor: "pointer",
                border: `1px solid ${filter === cat ? "var(--accent)" : "var(--border)"}`,
                background: filter === cat ? "var(--accent-dim)" : "transparent",
                color: filter === cat ? "var(--accent)" : "var(--text-tertiary)",
              }}>
              {cat}
            </button>
          ))}
          <span className="font-mono ml-auto" style={{ color: "var(--text-tertiary)", fontSize: "9px" }}>
            {filtered.length} result{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* ── PROJECT LIST ── dense, scannable ── */}
        <div>
          {filtered.map((project) => (
            <Link
              key={project.id}
              href={`/work/${project.slug}`}
              className="group block reveal"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onFocus={() => setHoveredProject(project.id)}
              onBlur={() => setHoveredProject(null)}
            >
              <div className={`transition-all duration-200 hud-frame ${hoveredProject === project.id ? "hud-frame--active" : ""}`} style={{
                position: "relative",
                isolation: "isolate",
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

                  {/* Index + status */}
                  <div className="flex items-center gap-3 lg:flex-col lg:items-end lg:gap-1.5 lg:pt-0.5">
                    <span className="font-mono" style={{ color: hoveredProject === project.id ? project.accent : "var(--text-tertiary)", fontSize: "10px" }}>
                      [{project.index}]
                    </span>
                    <span className="font-mono px-1.5 py-0.5 rounded-sm"
                      style={{
                        fontSize: "9px", letterSpacing: "0.04em",
                        color: project.accent, background: `${project.accent}15`,
                      }}>
                      {project.status}
                    </span>
                    <SignalBars level={project.signal as 1 | 2 | 3} color={hoveredProject === project.id ? project.accent : "var(--text-tertiary)"} />
                  </div>

                  {/* Main content */}
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
                          style={{
                            fontSize: "9px", padding: "2px 6px",
                            border: "1px solid var(--border)",
                            background: "var(--surface)",
                            borderRadius: "2px",
                            color: "var(--text-tertiary)",
                          }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Year + arrow */}
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

        {/* ── STACK COVERAGE ── horizontal summary bar ── */}
        <div className="mt-12 hud-frame" style={{
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
                  style={{
                    fontSize: "9px", padding: "2px 7px",
                    border: "1px solid var(--border)",
                    borderRadius: "2px",
                    color: "var(--text-tertiary)",
                  }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
