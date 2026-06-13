import Link from "next/link";
import Nav from "../components/Nav";
import { experience } from "../data/portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${experience.title} — Work & Travel | Beam`,
  description: experience.tagline,
};

export default function ExperiencePage() {
  return (
    <main className="lg:pl-[72px]" style={{ minHeight: "100vh" }}>
      <Nav />

      {/* ── TOP NAV ── */}
      <div style={{ padding: "clamp(72px, 10vh, 96px) clamp(32px, 8vw, 120px) 0" }}>
        <div className="flex items-center justify-between">
          <Link href="/about"
            className="inline-flex items-center gap-2 font-mono transition-colors hover:opacity-70"
            style={{ color: "var(--text-tertiary)", fontSize: "11px", letterSpacing: "0.06em" }}>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true" focusable="false">
              <path d="M11 6.5H2M2 6.5L5.5 10M2 6.5L5.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to about
          </Link>
          <span className="font-mono" style={{ color: "var(--text-tertiary)", fontSize: "10px", letterSpacing: "0.08em" }}>
            [BEFORE THE CODE]
          </span>
        </div>
      </div>

      {/* ── HEADER ── */}
      <header style={{ position: "relative", isolation: "isolate", padding: "28px clamp(32px, 8vw, 120px) 0" }}>
        <span className="ghost-num hidden md:block" aria-hidden="true" style={{
          top: "0px",
          right: "clamp(8px, 4vw, 280px)",
          fontSize: "clamp(160px, 22vw, 320px)",
          "--ghost-c": "color-mix(in srgb, var(--accent) 25%, transparent)",
        } as React.CSSProperties}>
          03
        </span>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-10 items-start">

          {/* Left: title block */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-5 h-px" style={{ background: "var(--accent)" }} />
              <span className="font-mono" style={{ color: "var(--accent)", fontSize: "11px", letterSpacing: "0.1em" }}>
                WORK &amp; TRAVEL · {experience.location.toUpperCase()}
              </span>
            </div>
            <h1 className="font-display font-bold leading-none mb-2"
              style={{
                fontSize: "clamp(48px, 9vw, 120px)",
                letterSpacing: "-0.045em",
                color: "var(--text-primary)",
              }}>
              {experience.title}
            </h1>
            <p className="font-display font-light mb-5"
              style={{
                fontSize: "clamp(16px, 2.2vw, 22px)",
                color: "var(--text-secondary)",
                letterSpacing: "-0.01em",
              }}>
              {experience.location}
            </p>
            <p className="font-display font-light"
              style={{
                fontSize: "clamp(15px, 2vw, 19px)",
                color: "var(--text-secondary)",
                maxWidth: "560px",
                lineHeight: 1.6,
              }}>
              {experience.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6">
              <div>
                <span className="font-mono block" style={{ color: "var(--text-tertiary)", fontSize: "9px", letterSpacing: "0.08em" }}>
                  ROLE
                </span>
                <span className="font-mono" style={{ color: "var(--text-primary)", fontSize: "12px" }}>
                  {experience.role}
                </span>
              </div>
              <div>
                <span className="font-mono block" style={{ color: "var(--text-tertiary)", fontSize: "9px", letterSpacing: "0.08em" }}>
                  PROGRAM
                </span>
                <span className="font-mono" style={{ color: "var(--text-primary)", fontSize: "12px" }}>
                  {experience.program}
                </span>
              </div>
            </div>
          </div>

          {/* Right: stats panel */}
          <div className="hud-frame" style={{
            border: "1px solid var(--border)",
            background: "var(--surface)",
            alignSelf: "start",
            marginTop: "8px",
            "--hud-c": "var(--accent)",
            "--hs": "14px",
          } as React.CSSProperties}>
            <div style={{ padding: "12px 16px", borderBottom: "1px solid var(--border)" }}>
              <span className="font-mono block" style={{ color: "var(--text-tertiary)", fontSize: "9px", letterSpacing: "0.08em" }}>
                BY THE NUMBERS
              </span>
            </div>
            {experience.stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center justify-between"
                style={{
                  padding: "12px 16px",
                  borderBottom: i < experience.stats.length - 1 ? "1px solid var(--border)" : "none",
                }}>
                <span className="font-mono" style={{ color: "var(--text-secondary)", fontSize: "11px" }}>
                  {stat.label}
                </span>
                <span className="font-display font-bold" style={{ color: "var(--accent)", fontSize: "22px", letterSpacing: "-0.03em" }}>
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

        </div>
      </header>

      {/* Divider */}
      <div style={{ margin: "24px clamp(32px, 8vw, 120px)", borderTop: "1px solid var(--border)" }} />

      {/* ── BODY ── */}
      <article style={{ padding: "0 clamp(32px, 8vw, 120px)" }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-10 items-start">

          {/* Main narrative */}
          <div>
            {experience.sections.map((section) => (
              <section key={section.heading} className="mb-8 reveal">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="font-mono"
                    style={{ color: "var(--accent)", fontSize: "9px", letterSpacing: "0.1em", fontWeight: 500 }}>
                    {section.heading.toUpperCase()}
                  </h2>
                  <span style={{ flex: 1, height: "1px", background: "var(--border)", maxWidth: "48px" }} />
                </div>
                <p style={{ color: "var(--text-primary)", fontSize: "15px", lineHeight: 1.8 }}>
                  {section.body}
                </p>
                {section.list && (
                  <ul className="space-y-2 mt-4" style={{ listStyle: "none" }}>
                    {section.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-3"
                        style={{
                          padding: "10px 14px",
                          border: "1px solid var(--border)",
                          borderLeft: "2px solid var(--accent)",
                          background: "var(--surface)",
                          borderRadius: "0 2px 2px 0",
                        }}>
                        <span className="font-mono flex-shrink-0 mt-px"
                          style={{ color: "var(--accent)", fontSize: "9px" }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p style={{ color: "var(--text-secondary)", fontSize: "13px", lineHeight: 1.65 }}>
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {/* Reflection — code-comment styled quote */}
            <section className="mb-2" aria-label="Reflection">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="font-mono"
                  style={{ color: "var(--accent)", fontSize: "9px", letterSpacing: "0.1em", fontWeight: 500 }}>
                  REFLECTION
                </h2>
                <span style={{ flex: 1, height: "1px", background: "var(--border)", maxWidth: "48px" }} />
              </div>
              <div className="font-mono hud-frame" style={{
                fontSize: "clamp(13px, 1.6vw, 15px)",
                lineHeight: 2,
                padding: "16px 20px",
                border: "1px solid var(--border)",
                background: "var(--surface)",
                borderRadius: "2px",
                "--hud-c": "var(--accent)",
                "--hs": "14px",
              } as React.CSSProperties}>
                <div style={{ color: "var(--text-tertiary)" }}>{"/**"}</div>
                {experience.quote.map((line, i) => (
                  <div key={i} style={{ color: "var(--text-primary)" }}>
                    <span style={{ color: "var(--text-tertiary)" }}>{" * "}</span>
                    {line}
                  </div>
                ))}
                <div style={{ color: "var(--text-tertiary)" }}>{" */"}</div>
              </div>
            </section>
          </div>

          {/* Sticky sidebar — skills forged */}
          <div style={{ position: "sticky", top: "32px", alignSelf: "start" }}>
            <div className="hud-frame" style={{
              border: "1px solid var(--border)",
              background: "var(--surface)",
            }}>
              <div style={{ padding: "12px 16px", borderBottom: "1px solid var(--border)" }}>
                <span className="font-mono"
                  style={{ color: "var(--text-tertiary)", fontSize: "9px", letterSpacing: "0.08em" }}>
                  SKILLS FORGED
                </span>
              </div>
              <div style={{ padding: "12px 16px" }}>
                <div className="space-y-4">
                  {experience.skillsForged.map((skill) => (
                    <div key={skill.title}>
                      <h3 className="font-display font-semibold mb-1"
                        style={{ color: "var(--text-primary)", fontSize: "12px", letterSpacing: "-0.01em" }}>
                        {skill.title}
                      </h3>
                      <p style={{ color: "var(--text-secondary)", fontSize: "11px", lineHeight: 1.6, marginBottom: "4px" }}>
                        {skill.body}
                      </p>
                      <p className="font-mono" style={{ color: "var(--accent)", fontSize: "10px", lineHeight: 1.5 }}>
                        {skill.bridge}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </article>

      {/* ── CLOSING ── */}
      <div style={{
        margin: "40px clamp(32px, 8vw, 120px) 0",
        borderTop: "1px solid var(--border)",
        padding: "28px 0 clamp(48px, 7vh, 72px)",
      }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-center">
          <p style={{ color: "var(--text-secondary)", fontSize: "13px", lineHeight: 1.65, maxWidth: "560px" }}>
            This is part of why I care about clear documentation, calm incident response, and building things
            for people who will never read the source code. The instincts didn&apos;t start at a keyboard.
          </p>
          <Link href="/" className="group hud-frame flex items-center gap-3 flex-shrink-0" style={{ padding: "8px 16px" }}>
            <span className="font-display font-semibold transition-colors duration-200 group-hover:opacity-80"
              style={{
                color: "var(--accent)",
                fontSize: "clamp(16px, 2.5vw, 24px)",
                letterSpacing: "-0.025em",
              }}>
              See my principles
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
