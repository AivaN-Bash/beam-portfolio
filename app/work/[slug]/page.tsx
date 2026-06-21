import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "../../components/Nav";
import SignalBars from "../../components/SignalBars";
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
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: `${project.title} — Beam`,
      description: project.tagline,
      url: `/work/${project.slug}`,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${project.title} — Beam` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Beam`,
      description: project.tagline,
      images: ["/og-image.png"],
    },
    alternates: { canonical: `/work/${project.slug}` },
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
    <main id="main-content" className="lg:pl-[72px]" style={{ minHeight: "100vh" }}>
      <Nav />

      {/* ── SCENE 1: OPENING — breadcrumb + full-bleed title ── */}
      <div
        className="pt-[calc(56px+clamp(16px,4vh,32px))] lg:pt-[clamp(72px,10vh,96px)]"
        style={{ padding: "clamp(72px, 10vh, 96px) clamp(32px, 8vw, 120px) 0" }}
      >
        <div className="flex items-center justify-between mb-12">
          <Link href="/work"
            className="inline-flex items-center gap-2 font-mono transition-colors hover:opacity-70"
            style={{ color: "var(--text-tertiary)", fontSize: "11px", letterSpacing: "0.06em" }}>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true" focusable="false">
              <path d="M11 6.5H2M2 6.5L5.5 10M2 6.5L5.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            All work
          </Link>
          <div className="flex items-center gap-4">
            <SignalBars level={project.signal as 1 | 2 | 3} color={project.accent} />
            <span className="font-mono" style={{ color: "var(--text-tertiary)", fontSize: "10px" }}>
              [{project.index} / {String(projects.length).padStart(2, "0")}]
            </span>
          </div>
        </div>

        {/* Opening: full-width title — no sidebar competing for attention */}
        <header className="relative isolate" style={{ paddingBottom: "clamp(32px, 5vh, 56px)" }}>
          <span className="ghost-num" aria-hidden="true" style={{
            top: "-20px",
            right: "0",
            fontSize: "clamp(180px, 26vw, 360px)",
            "--ghost-c": `${project.accent}20`,
          } as React.CSSProperties}>
            {project.index}
          </span>

          {/* Status row — dense, small, compressed */}
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono px-2 py-0.5 rounded-sm"
              style={{ color: project.accent, background: `${project.accent}15`, fontSize: "9px", letterSpacing: "0.06em" }}>
              {project.status}
            </span>
            <span className="font-mono" style={{ color: "var(--text-tertiary)", fontSize: "10px" }}>
              {project.category}
            </span>
            <span className="font-mono" style={{ color: "var(--text-tertiary)", fontSize: "10px" }}>· {project.year}</span>
          </div>

          {/* Title — takes the whole canvas */}
          <h1 className="font-display font-bold leading-none mb-6"
            style={{
              fontSize: "clamp(56px, 11vw, 144px)",
              letterSpacing: "-0.045em",
              color: project.accent,
              maxWidth: "900px",
            }}>
            {project.title}
          </h1>

          {/* Tagline below the title — reads as caption to the headline */}
          <p className="font-display font-light"
            style={{
              fontSize: "clamp(16px, 2.2vw, 22px)",
              color: "var(--text-secondary)",
              maxWidth: "600px",
              lineHeight: 1.55,
            }}>
            {project.tagline}
          </p>
        </header>
      </div>

      {/* ── SCENE 2: CONTEXT — compressed metadata bar ── */}
      <div style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "16px clamp(32px, 8vw, 120px)",
      }}>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
          <div>
            <span className="font-mono block mb-1" style={{ color: "var(--text-tertiary)", fontSize: "8px", letterSpacing: "0.1em" }}>
              STACK
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span key={tech} className="font-mono"
                  style={{
                    fontSize: "10px", padding: "2px 7px",
                    border: "1px solid var(--border)",
                    borderRadius: "2px", color: "var(--text-secondary)",
                    background: "var(--bg)",
                  }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div style={{ width: "1px", height: "32px", background: "var(--border)", flexShrink: 0 }} className="hidden md:block" />
          <div>
            <span className="font-mono block mb-1" style={{ color: "var(--text-tertiary)", fontSize: "8px", letterSpacing: "0.1em" }}>
              OUTCOMES
            </span>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {project.metrics.map((m) => (
                <span key={m} className="flex items-center gap-1.5 font-mono"
                  style={{ fontSize: "10px", color: "var(--text-secondary)" }}>
                  <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: project.accent }} />
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── SCENE 3: THE PROBLEM — wide, open, single focus ── */}
      <section style={{
        padding: "clamp(48px, 7vh, 80px) clamp(32px, 8vw, 120px)",
      }}>
        <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-8 lg:gap-16">
          <div className="flex flex-col gap-2 lg:pt-2">
            <h2 className="font-mono font-medium" style={{ color: project.accent, fontSize: "9px", letterSpacing: "0.1em" }}>
              THE PROBLEM
            </h2>
            <p className="font-mono" style={{ color: "var(--text-tertiary)", fontSize: "9px" }}>
              Scene 01 of 03
            </p>
          </div>
          <div>
            <p className="font-display font-light"
              style={{
                fontSize: "clamp(17px, 2.4vw, 24px)",
                color: "var(--text-primary)",
                lineHeight: 1.65,
                maxWidth: "680px",
              }}>
              {project.problem}
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" style={{ margin: "0 clamp(32px, 8vw, 120px)" }} />

      {/* ── SCENE 4: DEEP DIVE — compressed, dense, two-column ── */}
      <section style={{
        padding: "0 clamp(32px, 8vw, 120px)",
      }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-0 lg:gap-12">

          {/* Left: Solution + Decisions — dense */}
          <div style={{ padding: "clamp(32px, 5vh, 56px) 0", borderRight: "1px solid var(--border)", paddingRight: "clamp(20px, 4vw, 56px)" }}>
            <h2 className="font-mono font-medium" style={{ color: project.accent, fontSize: "9px", letterSpacing: "0.1em" }}>
              THE SOLUTION
            </h2>
            <p className="font-mono mb-4" style={{ color: "var(--text-tertiary)", fontSize: "9px" }}>
              Scene 02 of 03
            </p>
            {/* Larger than Scene 3 problem — answer should feel bigger than the question */}
            <p className="font-display font-light" style={{
              color: "var(--text-primary)",
              fontSize: "clamp(16px, 2vw, 20px)",
              lineHeight: 1.75,
              marginBottom: "32px",
            }}>
              {project.solution}
            </p>

            <h2 className="font-mono font-medium mb-4" style={{ color: project.accent, fontSize: "9px", letterSpacing: "0.1em" }}>
              TECHNICAL DECISIONS
            </h2>
            <div className="space-y-2">
              {project.decisions.map((decision, i) => (
                <div key={i} className="flex items-start gap-3"
                  style={{
                    padding: "10px 14px",
                    border: "1px solid var(--border)",
                    borderLeft: `2px solid ${project.accent}`,
                    background: "var(--bg)",
                  }}>
                  <span className="font-mono flex-shrink-0 mt-px" style={{ color: project.accent, fontSize: "9px" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p style={{ color: "var(--text-secondary)", fontSize: "13px", lineHeight: 1.65 }}>
                    {decision}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Engineering notes sidebar — persistent context */}
          <div style={{ padding: "clamp(32px, 5vh, 56px) 0", paddingLeft: "clamp(20px, 4vw, 56px)" }} className="hidden lg:block">
            <h2 className="font-mono font-medium mb-5" style={{ color: "var(--text-tertiary)", fontSize: "9px", letterSpacing: "0.08em" }}>
              ENGINEERING NOTES
            </h2>
            <div className="space-y-6">
              {[
                {
                  label: "SECURITY POSTURE",
                  body: "Every sensitive operation uses timing-safe comparison. Auth surfaces are the first thing reviewed.",
                },
                {
                  label: "API PHILOSOPHY",
                  body: "Endpoints are designed as contracts. Breaking changes require version bumps, always.",
                },
                {
                  label: "OBSERVABILITY",
                  body: "Structured logs and correlation IDs from day one. Tracing is built in, not added on.",
                },
              ].map((note) => (
                <div key={note.label}>
                  <p className="font-mono mb-1.5" style={{ color: project.accent, fontSize: "9px", letterSpacing: "0.06em" }}>
                    {note.label}
                  </p>
                  <p style={{ color: "var(--text-secondary)", fontSize: "11px", lineHeight: 1.7 }}>
                    {note.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" style={{ margin: "0 clamp(32px, 8vw, 120px)" }} />

      {/* ── SCENE 5: REFLECTION — wide, sparse, impact first ── */}
      <section className="relative isolate" style={{
        padding: "clamp(48px, 8vh, 96px) clamp(32px, 8vw, 120px)",
      }}>
        <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-8 lg:gap-16">
          <div className="flex flex-col gap-2 lg:pt-2">
            <h2 className="font-mono font-medium" style={{ color: "var(--accent-2)", fontSize: "9px", letterSpacing: "0.1em" }}>
              IMPACT & LESSONS
            </h2>
            <p className="font-mono" style={{ color: "var(--text-tertiary)", fontSize: "9px" }}>
              Scene 03 of 03
            </p>
          </div>
          <div>
            {/* Impact first — the most important sentence on the page */}
            <div className="flex items-start gap-3 mb-6 reveal--strong">
              <span className="inline-block w-8 h-px flex-shrink-0 mt-3" style={{ background: "var(--accent-2)" }} />
              <p className="font-display font-semibold"
                style={{
                  fontSize: "clamp(18px, 2.8vw, 30px)",
                  color: "var(--accent-2)",
                  lineHeight: 1.4,
                  letterSpacing: "-0.02em",
                  maxWidth: "640px",
                }}>
                {project.impact}
              </p>
            </div>
            {/* Lessons as the supporting explanation below */}
            <p className="font-display font-light"
              style={{
                fontSize: "clamp(15px, 1.8vw, 18px)",
                color: "var(--text-secondary)",
                lineHeight: 1.75,
                maxWidth: "600px",
                paddingLeft: "44px",
              }}>
              <span style={{ color: "var(--text-tertiary)" }}>&ldquo;</span>
              {project.lessons}
              <span style={{ color: "var(--text-tertiary)" }}>&rdquo;</span>
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" style={{ margin: "0 clamp(32px, 8vw, 120px)" }} />

      {/* ── SCENE 6: TRANSITION — next project ── */}
      <div className="relative isolate" style={{
        padding: "clamp(32px, 5vh, 48px) clamp(32px, 8vw, 120px)",
      }}>
        <div className="flex items-center justify-between">
          <div>
            <span className="font-mono block mb-1" style={{ color: "var(--text-tertiary)", fontSize: "9px", letterSpacing: "0.08em" }}>
              NEXT PROJECT [{next.index}]
            </span>
            <span className="font-mono" style={{ color: "var(--text-tertiary)", fontSize: "9px" }}>
              {next.category} · {next.year}
            </span>
          </div>
          <Link href={`/work/${next.slug}`} className="group hud-frame flex items-center gap-4"
            style={{ padding: "12px 20px", "--hud-c": next.accent } as React.CSSProperties}>
            <span className="font-display font-bold transition-colors duration-200 group-hover:opacity-80"
              style={{
                color: next.accent,
                fontSize: "clamp(20px, 3vw, 36px)",
                letterSpacing: "-0.03em",
              }}>
              {next.title}
            </span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false"
              className="transition-transform duration-200 group-hover:translate-x-1">
              <path d="M4 16L16 4M16 4H8M16 4V12"
                stroke={next.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>

    </main>
  );
}
