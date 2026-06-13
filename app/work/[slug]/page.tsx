import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "../../components/Nav";
import { projects } from "../../data/portfolio";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Beam`,
    description: project.tagline,
  };
}

export default async function WorkDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const next = projects[projectIndex + 1] || projects[0];

  return (
    <main className="lg:pl-[72px]" style={{ minHeight: "100vh" }}>
      <Nav />

      {/* ── TOP NAV ── */}
      <div style={{ padding: "clamp(72px, 10vh, 96px) clamp(32px, 8vw, 120px) 0" }}>
        <div className="flex items-center justify-between">
          <Link href="/work"
            className="inline-flex items-center gap-2 font-mono transition-colors hover:opacity-70"
            style={{ color: "var(--text-tertiary)", fontSize: "11px", letterSpacing: "0.06em" }}>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true" focusable="false">
              <path d="M11 6.5H2M2 6.5L5.5 10M2 6.5L5.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            All work
          </Link>
          <span className="font-mono" style={{ color: "var(--text-tertiary)", fontSize: "10px" }}>
            [{project.index} / {String(projects.length).padStart(2, "0")}]
          </span>
        </div>
      </div>

      {/* ── PROJECT HEADER ── */}
      <header style={{ position: "relative", isolation: "isolate", padding: "28px clamp(32px, 8vw, 120px) 0" }}>
        <span className="ghost-num hidden md:block" aria-hidden="true" style={{
          top: "0px",
          right: "clamp(8px, 4vw, 280px)",
          fontSize: "clamp(160px, 22vw, 320px)",
          "--ghost-c": `${project.accent}30`,
        } as React.CSSProperties}>
          {project.index}
        </span>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-10 items-start">

          {/* Left: title block */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono px-1.5 py-0.5 rounded-sm"
                style={{ color: project.accent, background: `${project.accent}15`, fontSize: "9px", letterSpacing: "0.05em" }}>
                {project.status}
              </span>
              <span className="font-mono" style={{ color: "var(--text-tertiary)", fontSize: "10px" }}>
                {project.category}
              </span>
              <span className="font-mono" style={{ color: "var(--text-tertiary)", fontSize: "10px" }}>
                · {project.year}
              </span>
            </div>
            <h1 className="font-display font-bold leading-none mb-4"
              style={{
                fontSize: "clamp(48px, 9vw, 120px)",
                letterSpacing: "-0.045em",
                color: project.accent,
              }}>
              {project.title}
            </h1>
            <p className="font-display font-light"
              style={{
                fontSize: "clamp(15px, 2vw, 19px)",
                color: "var(--text-secondary)",
                maxWidth: "520px",
                lineHeight: 1.6,
              }}>
              {project.tagline}
            </p>
          </div>

          {/* Right: meta panel */}
          <div className="hud-frame" style={{
            border: "1px solid var(--border)",
            background: "var(--surface)",
            alignSelf: "start",
            marginTop: "8px",
            "--hud-c": project.accent,
            "--hs": "14px",
          } as React.CSSProperties}>
            <div style={{ padding: "12px 16px", borderBottom: "1px solid var(--border)" }}>
              <span className="font-mono block mb-2"
                style={{ color: "var(--text-tertiary)", fontSize: "9px", letterSpacing: "0.08em" }}>
                STACK
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span key={tech} className="font-mono"
                    style={{
                      fontSize: "10px", padding: "2px 6px",
                      border: "1px solid var(--border)",
                      borderRadius: "2px", color: "var(--text-secondary)",
                    }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ padding: "12px 16px" }}>
              <span className="font-mono block mb-2"
                style={{ color: "var(--text-tertiary)", fontSize: "9px", letterSpacing: "0.08em" }}>
                OUTCOMES
              </span>
              <div className="space-y-1">
                {project.metrics.map((m) => (
                  <div key={m} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: project.accent }} />
                    <span className="font-mono" style={{ fontSize: "10px", color: "var(--text-secondary)" }}>
                      {m}
                    </span>
                  </div>
                ))}
              </div>
            </div>
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

            {/* Problem */}
            <div className="mb-8 reveal">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="font-mono"
                  style={{ color: project.accent, fontSize: "9px", letterSpacing: "0.1em", fontWeight: 500 }}>
                  THE PROBLEM
                </h2>
                <span style={{ flex: 1, height: "1px", background: "var(--border)", maxWidth: "48px" }} />
              </div>
              <p style={{ color: "var(--text-primary)", fontSize: "15px", lineHeight: 1.8 }}>
                {project.problem}
              </p>
            </div>

            {/* Solution */}
            <div className="mb-8 reveal">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="font-mono"
                  style={{ color: project.accent, fontSize: "9px", letterSpacing: "0.1em", fontWeight: 500 }}>
                  THE SOLUTION
                </h2>
                <span style={{ flex: 1, height: "1px", background: "var(--border)", maxWidth: "48px" }} />
              </div>
              <p style={{ color: "var(--text-primary)", fontSize: "15px", lineHeight: 1.8 }}>
                {project.solution}
              </p>
            </div>

            {/* Decisions */}
            <div className="mb-8 reveal">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="font-mono"
                  style={{ color: project.accent, fontSize: "9px", letterSpacing: "0.1em", fontWeight: 500 }}>
                  TECHNICAL DECISIONS
                </h2>
                <span style={{ flex: 1, height: "1px", background: "var(--border)", maxWidth: "48px" }} />
              </div>
              <div className="space-y-2">
                {project.decisions.map((decision, i) => (
                  <div key={i} className="flex items-start gap-3"
                    style={{
                      padding: "10px 14px",
                      border: "1px solid var(--border)",
                      borderLeft: `2px solid ${project.accent}`,
                      background: "var(--surface)",
                      borderRadius: "0 2px 2px 0",
                    }}>
                    <span className="font-mono flex-shrink-0 mt-px"
                      style={{ color: project.accent, fontSize: "9px" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p style={{ color: "var(--text-secondary)", fontSize: "13px", lineHeight: 1.65 }}>
                      {decision}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Lessons learned */}
            <div className="hud-frame" style={{
              padding: "16px 20px",
              border: "1px solid var(--border)",
              background: "var(--surface)",
              "--hud-c": project.accent,
            } as React.CSSProperties}>
              <div className="flex items-center gap-3 mb-3">
                <h2 className="font-mono"
                  style={{ color: project.accent, fontSize: "9px", letterSpacing: "0.1em", fontWeight: 500 }}>
                  LESSONS LEARNED
                </h2>
                <span style={{ flex: 1, height: "1px", background: "var(--border)", maxWidth: "48px" }} />
              </div>
              <p className="font-display font-light" style={{ color: "var(--text-primary)", fontSize: "clamp(14px, 1.8vw, 16px)", lineHeight: 1.75 }}>
                {project.lessons}
              </p>
            </div>
          </div>

          {/* Sticky sidebar — principles that apply */}
          <div style={{ position: "sticky", top: "32px", alignSelf: "start" }}>
            <div className="hud-frame" style={{
              border: "1px solid var(--border)",
              background: "var(--surface)",
              "--hud-c": project.accent,
            } as React.CSSProperties}>
              <div style={{ padding: "12px 16px", borderBottom: "1px solid var(--border)" }}>
                <span className="font-mono"
                  style={{ color: "var(--text-tertiary)", fontSize: "9px", letterSpacing: "0.08em" }}>
                  ENGINEERING NOTES
                </span>
              </div>
              <div style={{ padding: "12px 16px" }}>
                <div className="space-y-4">
                  <div>
                    <p className="font-mono mb-1"
                      style={{ color: project.accent, fontSize: "9px", letterSpacing: "0.06em" }}>
                      SECURITY POSTURE
                    </p>
                    <p style={{ color: "var(--text-secondary)", fontSize: "11px", lineHeight: 1.65 }}>
                      Every sensitive operation uses timing-safe comparison. Auth surfaces are the first thing reviewed.
                    </p>
                  </div>
                  <div>
                    <p className="font-mono mb-1"
                      style={{ color: project.accent, fontSize: "9px", letterSpacing: "0.06em" }}>
                      API PHILOSOPHY
                    </p>
                    <p style={{ color: "var(--text-secondary)", fontSize: "11px", lineHeight: 1.65 }}>
                      Endpoints are designed as contracts. Breaking changes require version bumps, always.
                    </p>
                  </div>
                  <div>
                    <p className="font-mono mb-1"
                      style={{ color: project.accent, fontSize: "9px", letterSpacing: "0.06em" }}>
                      OBSERVABILITY
                    </p>
                    <p style={{ color: "var(--text-secondary)", fontSize: "11px", lineHeight: 1.65 }}>
                      Structured logs and correlation IDs from day one. Tracing is built in, not added on.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </article>

      {/* ── NEXT PROJECT ── */}
      <div style={{
        margin: "40px clamp(32px, 8vw, 120px) 0",
        borderTop: "1px solid var(--border)",
        padding: "28px 0 clamp(48px, 7vh, 72px)",
      }}>
        <div className="flex items-center justify-between">
          <span className="font-mono"
            style={{ color: "var(--text-tertiary)", fontSize: "9px", letterSpacing: "0.08em" }}>
            NEXT PROJECT [{next.index}]
          </span>
          <Link href={`/work/${next.slug}`} className="group hud-frame flex items-center gap-3"
            style={{ padding: "8px 16px", "--hud-c": next.accent } as React.CSSProperties}>
            <span className="font-display font-semibold transition-colors duration-200 group-hover:opacity-80"
              style={{
                color: next.accent,
                fontSize: "clamp(16px, 2.5vw, 24px)",
                letterSpacing: "-0.025em",
              }}>
              {next.title}
            </span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" focusable="false"
              className="transition-transform duration-200 group-hover:translate-x-1">
              <path d="M3.5 14.5L14.5 3.5M14.5 3.5H7M14.5 3.5V11"
                stroke={next.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>

    </main>
  );
}
