import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: "The page you're looking for doesn't exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main
      id="main-content"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(32px, 8vw, 120px)",
        position: "relative",
        isolation: "isolate",
      }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "40vw",
            height: "40vw",
            background:
              "radial-gradient(circle, rgba(108,99,255,0.06) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="relative" style={{ zIndex: 1, textAlign: "center", maxWidth: "480px" }}>
        {/* Ghost numeral */}
        <span
          aria-hidden="true"
          className="ghost-num"
          style={{
            position: "relative",
            display: "block",
            fontSize: "clamp(120px, 20vw, 220px)",
            lineHeight: 1,
            marginBottom: "8px",
            "--ghost-c": "var(--border-2)",
          } as React.CSSProperties}
        >
          404
        </span>

        <div
          className="flex items-center justify-center gap-3 mb-5"
        >
          <span className="inline-block w-5 h-px" style={{ background: "var(--accent)" }} />
          <span
            className="font-mono"
            style={{ color: "var(--accent)", fontSize: "11px", letterSpacing: "0.1em" }}
          >
            NOT FOUND
          </span>
          <span className="inline-block w-5 h-px" style={{ background: "var(--accent)" }} />
        </div>

        <h1
          className="font-display font-bold mb-4"
          style={{
            fontSize: "clamp(22px, 4vw, 32px)",
            letterSpacing: "-0.03em",
            color: "var(--text-primary)",
          }}
        >
          This page doesn&apos;t exist.
        </h1>

        <p
          className="font-mono mb-8"
          style={{
            color: "var(--text-secondary)",
            fontSize: "13px",
            lineHeight: 1.7,
          }}
        >
          The URL you requested wasn&apos;t found. It may have moved, or never existed.
        </p>

        <div className="flex items-center justify-center gap-6 flex-wrap">
          <Link
            href="/"
            className="group inline-flex items-center gap-2.5 font-mono transition-all duration-200"
            style={{
              color: "var(--text-primary)",
              fontSize: "12px",
              letterSpacing: "0.03em",
            }}
          >
            <span
              className="inline-flex items-center justify-center rounded-sm transition-all duration-200 group-hover:scale-110"
              style={{
                width: "28px",
                height: "28px",
                background: "var(--accent)",
              }}
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <path
                  d="M9 6.5H2M2 6.5L5.5 3M2 6.5L5.5 10"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Back to Home
          </Link>

          <Link
            href="/work"
            className="font-mono transition-colors duration-200 hover:opacity-60"
            style={{ color: "var(--text-tertiary)", fontSize: "12px", letterSpacing: "0.03em" }}
          >
            View Work
          </Link>
        </div>
      </div>
    </main>
  );
}
