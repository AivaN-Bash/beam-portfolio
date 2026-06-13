interface SignalBarsProps {
  level: 1 | 2 | 3;
  color: string;
}

/**
 * Three-bar signal/power indicator, reminiscent of strategy-game
 * unit status readouts. `level` controls how many bars are lit.
 */
export default function SignalBars({ level, color }: SignalBarsProps) {
  const heights = [5, 8, 11];
  return (
    <svg
      width="14"
      height="11"
      viewBox="0 0 14 11"
      fill="none"
      aria-hidden="true"
      focusable="false"
      style={{ flexShrink: 0 }}
    >
      {heights.map((h, i) => (
        <rect
          key={i}
          x={i * 5}
          y={11 - h}
          width="3"
          height={h}
          rx="0.5"
          fill={i < level ? color : "var(--border-2)"}
        />
      ))}
    </svg>
  );
}
