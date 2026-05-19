"use client";

import { useColorMode } from "@chakra-ui/react";

interface OrbitalRingsProps {
  /** Size of the rings container in px */
  size?: number;
  /** Outer ring color */
  outerColor?: string;
  /** Inner ring color */
  innerColor?: string;
  /** Whether to show a glow effect */
  glow?: boolean;
  /** Custom style for the wrapper */
  style?: React.CSSProperties;
}

export default function OrbitalRings({
  size = 320,
  outerColor,
  innerColor,
  glow = true,
  style,
}: OrbitalRingsProps) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const outer = outerColor ?? (isDark ? "#7C3AED" : "#A78BFA");
  const inner = innerColor ?? (isDark ? "#06B6D4" : "#38BDF8");

  return (
    <div
      aria-hidden="true"
      style={{
        width: size,
        height: size,
        position: "relative",
        ...style,
      }}
    >
      {/* Outer ring — clockwise */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          animation: "orbit-spin-cw 30s linear infinite",
          transformOrigin: "center center",
          ...(glow
            ? { filter: `drop-shadow(0 0 8px ${outer}80)` }
            : undefined),
        }}
        viewBox="0 0 320 320"
      >
        <ellipse
          cx="160"
          cy="160"
          rx="140"
          ry="50"
          fill="none"
          stroke={outer}
          strokeWidth="1"
          strokeOpacity="0.8"
        />
      </svg>

      {/* Inner ring — counter-clockwise, dashed */}
      <svg
        style={{
          position: "absolute",
          inset: "15%",
          width: "70%",
          height: "70%",
          animation: "orbit-spin-ccw 20s linear infinite",
          transformOrigin: "center center",
          ...(glow
            ? { filter: `drop-shadow(0 0 6px ${inner}80)` }
            : undefined),
        }}
        viewBox="0 0 224 224"
      >
        <ellipse
          cx="112"
          cy="112"
          rx="95"
          ry="35"
          fill="none"
          stroke={inner}
          strokeWidth="1"
          strokeDasharray="6 4"
          strokeOpacity="0.7"
        />
      </svg>

      {/* Center glow dot */}
      {glow && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${outer}, ${inner})`,
            boxShadow: `0 0 20px ${outer}, 0 0 40px ${inner}40`,
          }}
        />
      )}
    </div>
  );
}
