import Link from "next/link";
import Nav from "../components/Nav";
import { experience } from "../data/portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${experience.title} — Work & Travel`,
  description: experience.tagline,
  openGraph: {
    title: `${experience.title} — Work & Travel | Beam`,
    description: experience.tagline,
    url: "/experience",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Beam — Experience" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${experience.title} — Work & Travel | Beam`,
    description: experience.tagline,
    images: ["/og-image.png"],
  },
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  const acts = [
    {
      act: "ACT 01",
      title: "Arrival",
      label: "THE SETTING",
      content: experience.sections[0],
      scene: "You leave Bangkok. You land in Tennessee. Nothing is the same.",
    },
    {
      act: "ACT 02",
      title: "Learning",
      label: "THE WORK",
      content: experience.sections[1],
      scene: "The job looks simple. Hand someone a scooter. It isn't.",
    },
    {
      act: "ACT 03",
      title: "Pressure",
      label: "THE CHALLENGE",
      content: experience.sections[2],
      scene: "No script. No shared language. Just the situation in front of you.",
    },
    {
      act: "ACT 04",
      title: "Growth",
      label: "WHAT CHANGED",
      content: experience.sections[3],
      scene: "By the end of the season, something had shifted.",
    },
  ];

  return (
    <main id="main-content" className="lg:pl-[72px]" style={{ minHeight: "100vh" }}>
      <Nav />

      {/* ── OPENING — wide, spare, cinematic ── */}
      <header
        className="pt-[calc(56px+clamp(24px,5vh,40px))] lg:pt-[clamp(80px,12vh,120px)]"
        style={{
          position: "relative",
          isolation: "isolate",
          padding: "clamp(80px, 12vh, 120px) clamp(32px, 8vw, 120px) clamp(40px, 6vh, 64px)",
          borderBottom: "1px solid var(--border)",
        }}>
        <span className="ghost-num hidden md:block" aria-hidden="true" style={{
          top: "20px",
          right: "clamp(16px, 6vw, 100px)",
          fontSize: "clamp(160px, 22vw, 340px)",
          "--ghost-c": "color-mix(in srgb, var(--accent) 18%, transparent)",
        } as React.CSSProperties}>
          03
        </span>

        {/* Breadcrumb */}
        <div className="flex items-center justify-between mb-12">
          <Link href="/about"
            className="inline-flex items-center gap-2 font-mono transition-colors hover:opacity-70"
            style={{ color: "var(--text-tertiary)", fontSize: "11px", letterSpacing: "0.06em" }}>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true" focusable="false">
              <path d="M11 6.5H2M2 6.5L5.5 10M2 6.5L5.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
          </Link>
          <span className="font-mono" style={{ color: "var(--text-tertiary)", fontSize: "10px", letterSpacing: "0.08em" }}>
            [BEFORE THE CODE]
          </span>
        </div>

        {/* Kicker */}
        <div className="flex items-center gap-3 mb-5">
          <span className="inline-block w-5 h-px" style={{ background: "var(--accent)" }} />
          <span className="font-mono" style={{ color: "var(--accent)", fontSize: "11px", letterSpacing: "0.1em" }}>
            WORK &amp; TRAVEL · PIGEON FORGE, TENNESSEE, USA
          </span>
        </div>

        {/* Title — large, dominant */}
        <h1 className="font-display font-bold leading-none mb-4"
          style={{
            fontSize: "clamp(56px, 11vw, 148px)",
            letterSpacing: "-0.045em",
            color: "var(--text-primary)",
          }}>
          {experience.title}
        </h1>

        {/* Tagline — reads as a subtitle under the big headline */}
        <p className="font-display font-light mb-10"
          style={{
            fontSize: "clamp(15px, 2vw, 20px)",
            color: "var(--text-secondary)",
            maxWidth: "580px",
            lineHeight: 1.6,
          }}>
          {experience.tagline}
        </p>

        {/* Compressed metadata row */}
        <div className="flex flex-wrap items-start gap-x-8 gap-y-3">
          <div>
            <span className="font-mono block mb-1" style={{ color: "var(--text-tertiary)", fontSize: "8px", letterSpacing: "0.1em" }}>
              ROLE
            </span>
            <span className="font-mono" style={{ color: "var(--text-primary)", fontSize: "11px" }}>
              {experience.role}
            </span>
          </div>
          <div style={{ width: "1px", height: "32px", background: "var(--border)", alignSelf: "center" }} className="hidden md:block" />
          <div>
            <span className="font-mono block mb-1" style={{ color: "var(--text-tertiary)", fontSize: "8px", letterSpacing: "0.1em" }}>
              PROGRAM
            </span>
            <span className="font-mono" style={{ color: "var(--text-primary)", fontSize: "11px" }}>
              {experience.program}
            </span>
          </div>
          <div style={{ width: "1px", height: "32px", background: "var(--border)", alignSelf: "center" }} className="hidden md:block" />
          {experience.stats.map((stat) => (
            <div key={stat.label}>
              <span className="font-mono block mb-1" style={{ color: "var(--text-tertiary)", fontSize: "8px", letterSpacing: "0.1em" }}>
                {stat.label.toUpperCase()}
              </span>
              <span className="font-display font-bold" style={{ color: "var(--accent)", fontSize: "20px", letterSpacing: "-0.03em" }}>
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </header>

      {/* ── ACTS — each differently staged ── */}
      {acts.map((act, i) => {
        const isEven = i % 2 === 0;
        const isClimax = i === 2; // Act 03 — Pressure, the emotional turning point
        const climaxColor = "var(--accent-2)";
        return (
          <section
            key={act.act}
            style={{
              borderBottom: "1px solid var(--border)",
              position: "relative",
              isolation: "isolate",
              background: isClimax ? "rgba(245, 166, 35, 0.03)" : "transparent",
            }}
          >
            {/* Ghost act number — climax bleeds amber */}
            <span className="ghost-num hidden lg:block" aria-hidden="true" style={{
              top: "12px",
              left: isEven ? "clamp(16px, 4vw, 60px)" : "auto",
              right: isEven ? "auto" : "clamp(16px, 4vw, 60px)",
              fontSize: isClimax ? "clamp(100px, 14vw, 180px)" : "clamp(80px, 10vw, 140px)",
              "--ghost-c": isClimax ? "rgba(245,166,35,0.18)" : "var(--border-2)",
            } as React.CSSProperties}>
              {String(i + 1).padStart(2, "0")}
            </span>

            <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-0">
              {/* Act label column */}
              <div style={{
                padding: isClimax
                  ? "clamp(36px, 6vh, 64px) clamp(20px, 3vw, 40px)"
                  : "clamp(28px, 4vh, 48px) clamp(20px, 3vw, 40px)",
                borderRight: `1px solid ${isClimax ? "rgba(245,166,35,0.25)" : "var(--border)"}`,
                display: "flex",
                flexDirection: "column",
                gap: "6px",
              }}>
                <span className="font-mono" style={{
                  color: isClimax ? climaxColor : "var(--accent)",
                  fontSize: "9px",
                  letterSpacing: "0.1em",
                }}>
                  {act.act}
                </span>
                <span className="font-display font-bold" style={{
                  color: isClimax ? climaxColor : "var(--text-primary)",
                  fontSize: isClimax ? "clamp(24px, 3.5vw, 40px)" : "clamp(20px, 3vw, 32px)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                }}>
                  {act.title}
                </span>
                <span className="font-mono mt-2" style={{
                  color: isClimax ? "rgba(245,166,35,0.6)" : "var(--text-tertiary)",
                  fontSize: "9px",
                  lineHeight: 1.6,
                }}>
                  {act.scene}
                </span>
              </div>

              {/* Content column — climax gets larger prose, no bullet list */}
              <div style={{
                padding: isClimax
                  ? "clamp(36px, 6vh, 64px) clamp(24px, 4vw, 56px)"
                  : "clamp(28px, 4vh, 48px) clamp(24px, 4vw, 56px)",
              }}>
                <h2 className="font-mono font-medium mb-4" style={{
                  color: isClimax ? climaxColor : "var(--text-tertiary)",
                  fontSize: "9px",
                  letterSpacing: "0.1em",
                }}>
                  {act.label}
                </h2>
                <p style={{
                  color: isClimax ? "var(--text-primary)" : "var(--text-primary)",
                  fontSize: isClimax ? "clamp(17px, 2.2vw, 22px)" : "15px",
                  lineHeight: isClimax ? 1.85 : 1.8,
                  marginBottom: act.content.list ? "20px" : "0",
                  maxWidth: isClimax ? "640px" : "none",
                  fontWeight: isClimax ? 300 : 400,
                }}>
                  {act.content.body}
                </p>
                {act.content.list && (
                  <ul className="space-y-2 mt-4" style={{ listStyle: "none" }}>
                    {act.content.list.map((item, j) => (
                      <li key={j} className="flex items-start gap-3"
                        style={{
                          padding: "10px 14px",
                          border: "1px solid var(--border)",
                          borderLeft: "2px solid var(--accent)",
                          background: "var(--bg)",
                        }}>
                        <span className="font-mono flex-shrink-0 mt-px" style={{ color: "var(--accent)", fontSize: "9px" }}>
                          {String(j + 1).padStart(2, "0")}
                        </span>
                        <p style={{ color: "var(--text-secondary)", fontSize: "13px", lineHeight: 1.65 }}>
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </section>
        );
      })}

      {/* ── ACT 05: IMPACT — wide full-bleed reflection ── */}
      <section style={{
        position: "relative",
        isolation: "isolate",
        borderBottom: "1px solid var(--border)",
        padding: "clamp(48px, 8vh, 96px) clamp(32px, 8vw, 120px)",
      }}>
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <span className="font-mono" style={{ color: "var(--accent)", fontSize: "9px", letterSpacing: "0.1em" }}>
              ACT 05
            </span>
            <span className="font-display font-bold" style={{
              color: "var(--text-primary)",
              fontSize: "clamp(20px, 3vw, 32px)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}>
              Impact
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {experience.skillsForged.map((skill, i) => (
              <div key={skill.title} style={{
                padding: "20px",
                borderLeft: i === 0 ? "1px solid var(--border)" : "none",
                borderRight: "1px solid var(--border)",
                borderTop: "1px solid var(--border)",
                borderBottom: "1px solid var(--border)",
              }}>
                <h3 className="font-display font-semibold mb-2"
                  style={{ color: "var(--text-primary)", fontSize: "13px", letterSpacing: "-0.01em" }}>
                  {skill.title}
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "12px", lineHeight: 1.65, marginBottom: "8px" }}>
                  {skill.body}
                </p>
                <p className="font-mono" style={{ color: "var(--accent)", fontSize: "10px" }}>
                  {skill.bridge}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING: REFLECTION — a moment to breathe ── */}
      <section style={{
        padding: "clamp(48px, 8vh, 96px) clamp(32px, 8vw, 120px)",
        borderBottom: "1px solid var(--border)",
        position: "relative",
        isolation: "isolate",
      }}>
        <div className="font-mono hud-frame" style={{
          fontSize: "clamp(13px, 1.8vw, 16px)",
          lineHeight: 2.2,
          padding: "24px 28px",
          border: "1px solid var(--border)",
          background: "var(--surface)",
          "--hud-c": "var(--accent)",
          "--hs": "14px",
          maxWidth: "720px",
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

        <p style={{
          color: "var(--text-secondary)",
          fontSize: "13px",
          lineHeight: 1.65,
          maxWidth: "560px",
          marginTop: "28px",
        }}>
          This is part of why I care about clear documentation, calm incident response, and building
          things for people who will never read the source code. The instincts didn&apos;t start at a keyboard.
        </p>
      </section>

      {/* ── TRANSITION ── */}
      <div style={{ padding: "clamp(28px, 4vh, 44px) clamp(32px, 8vw, 120px)" }}>
        <div className="flex items-center justify-between">
          <span className="font-mono" style={{ color: "var(--text-tertiary)", fontSize: "9px", letterSpacing: "0.08em" }}>
            CONTINUE
          </span>
          <Link href="/work" className="group hud-frame flex items-center gap-3"
            style={{ padding: "10px 18px" }}>
            <span className="font-display font-bold"
              style={{ color: "var(--accent)", fontSize: "clamp(18px, 2.5vw, 28px)", letterSpacing: "-0.025em" }}>
              See the work
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
