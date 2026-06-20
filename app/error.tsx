"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to an error reporting service if needed
    console.error("[Error Boundary]", error);
  }, [error]);

  return (
    <main
      id="main-content"
      className="relative isolate"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(32px, 8vw, 120px)",
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
              "radial-gradient(circle, rgba(245,166,35,0.05) 0%, transparent 65%)",
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
            fontSize: "clamp(100px, 18vw, 200px)",
            lineHeight: 1,
            marginBottom: "8px",
            "--ghost-c": "var(--border-2)",
          } as React.CSSProperties}
        >
          ERR
        </span>

        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="inline-block w-5 h-px" style={{ background: "var(--accent-2)" }} />
          <span
            className="font-mono"
            style={{ color: "var(--accent-2)", fontSize: "11px", letterSpacing: "0.1em" }}
          >
            SOMETHING WENT WRONG
          </span>
          <span className="inline-block w-5 h-px" style={{ background: "var(--accent-2)" }} />
        </div>

        <h1
          className="font-display font-bold mb-4"
          style={{
            fontSize: "clamp(20px, 3.5vw, 28px)",
            letterSpacing: "-0.03em",
            color: "var(--text-primary)",
          }}
        >
          An unexpected error occurred.
        </h1>

        <p
          className="font-mono mb-8"
          style={{
            color: "var(--text-secondary)",
            fontSize: "13px",
            lineHeight: 1.7,
          }}
        >
          Something broke on our end. You can try again, or head back home.
          {error.digest && (
            <span
              style={{
                display: "block",
                marginTop: "8px",
                color: "var(--text-tertiary)",
                fontSize: "10px",
                letterSpacing: "0.06em",
              }}
            >
              Error ID: {error.digest}
            </span>
          )}
        </p>

        <div className="flex items-center justify-center gap-6 flex-wrap">
          <button
            onClick={reset}
            className="group inline-flex items-center gap-2.5 font-mono transition-all duration-200"
            style={{
              color: "var(--text-primary)",
              fontSize: "12px",
              letterSpacing: "0.03em",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <span
              className="inline-flex items-center justify-center rounded-sm transition-all duration-200 group-hover:scale-110"
              style={{
                width: "28px",
                height: "28px",
                background: "var(--accent-2)",
              }}
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <path
                  d="M2 6.5a4.5 4.5 0 1 1 1.32 3.18M2 6.5V3m0 3.5H5.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Try Again
          </button>

          <Link
            href="/"
            className="font-mono transition-colors duration-200 hover:opacity-60"
            style={{ color: "var(--text-tertiary)", fontSize: "12px", letterSpacing: "0.03em" }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
