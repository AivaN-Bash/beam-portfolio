"use client";

import { useState } from "react";
import Link from "next/link";

interface ProjectCardProps {
  project: {
    id: string;
    slug: string;
    title: string;
    year: string;
    category: string;
    status: string;
    tagline: string;
    stack: string[];
    index: string;
    accent: string;
  };
  delay?: number;
}

export default function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/work/${project.slug}`}
      className="block group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: 0,
        animation: `fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms forwards`,
      }}
    >
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <article
        className="relative overflow-hidden transition-all duration-300"
        style={{
          border: `1px solid ${hovered ? project.accent + "40" : "var(--border)"}`,
          borderRadius: "2px",
          background: hovered ? `${project.accent}06` : "transparent",
          padding: "28px 32px",
        }}
      >
        {/* Accent line top */}
        <div
          className="absolute top-0 left-0 h-px transition-all duration-500"
          style={{
            width: hovered ? "100%" : "0%",
            background: `linear-gradient(90deg, ${project.accent}, transparent)`,
          }}
        />

        <div className="flex items-start justify-between gap-6">
          {/* Left: content */}
          <div className="flex-1 min-w-0">
            {/* Header row */}
            <div className="flex items-center gap-3 mb-3">
              <span
                className="font-mono text-xs"
                style={{ color: "var(--text-tertiary)", fontSize: "10px" }}
              >
                {project.index}
              </span>
              <span
                className="font-mono text-xs px-2 py-0.5 rounded-sm"
                style={{
                  color: project.accent,
                  background: `${project.accent}15`,
                  fontSize: "10px",
                  letterSpacing: "0.05em",
                }}
              >
                {project.status}
              </span>
              <span
                className="font-mono text-xs"
                style={{ color: "var(--text-tertiary)", fontSize: "10px", marginLeft: "auto" }}
              >
                {project.year}
              </span>
            </div>

            <h3
              className="font-display text-xl font-semibold mb-2 transition-colors duration-200"
              style={{
                color: hovered ? project.accent : "var(--text-primary)",
                letterSpacing: "-0.025em",
              }}
            >
              {project.title}
            </h3>

            <p
              className="text-sm mb-4 leading-relaxed"
              style={{ color: "var(--text-secondary)", maxWidth: "480px" }}
            >
              {project.tagline}
            </p>

            {/* Stack pills */}
            <div className="flex flex-wrap gap-1.5">
              {project.stack.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-2 py-0.5"
                  style={{
                    color: "var(--text-tertiary)",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "2px",
                    fontSize: "10px",
                  }}
                >
                  {tech}
                </span>
              ))}
              {project.stack.length > 5 && (
                <span
                  className="font-mono text-xs px-2 py-0.5"
                  style={{
                    color: "var(--text-tertiary)",
                    fontSize: "10px",
                  }}
                >
                  +{project.stack.length - 5} more
                </span>
              )}
            </div>
          </div>

          {/* Right: arrow */}
          <div
            className="flex-shrink-0 transition-all duration-300 mt-1"
            style={{
              transform: hovered ? "translate(4px, -4px)" : "translate(0, 0)",
              opacity: hovered ? 1 : 0.3,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M5 15L15 5M15 5H8M15 5V12"
                stroke={project.accent}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}
