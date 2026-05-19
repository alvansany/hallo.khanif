"use client";

import { useColorMode } from "@chakra-ui/react";

export default function NebulaLayer() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {/* Nebula 1 — top-left, violet */}
      <svg
        style={{
          position: "absolute",
          top: "-100px",
          left: "-200px",
          width: "600px",
          height: "600px",
          animation: "nebula-breathe 10s ease-in-out infinite",
        }}
        viewBox="0 0 600 600"
        fill="none"
      >
        <defs>
          <radialGradient id="nebula-1" cx="50%" cy="50%" r="50%">
            <stop
              offset="0%"
              stopColor={isDark ? "#7C3AED" : "#DDD6FE"}
              stopOpacity={isDark ? "0.6" : "0.5"}
            />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          <filter id="nebula-blur-1">
            <feGaussianBlur stdDeviation="40" />
          </filter>
        </defs>
        <ellipse
          cx="300"
          cy="300"
          rx="260"
          ry="220"
          fill="url(#nebula-1)"
          filter="url(#nebula-blur-1)"
        />
      </svg>

      {/* Nebula 2 — top-right, cyan */}
      <svg
        style={{
          position: "absolute",
          top: "150px",
          right: "-300px",
          width: "800px",
          height: "500px",
          animation: "nebula-breathe 14s ease-in-out -7s infinite",
        }}
        viewBox="0 0 800 500"
        fill="none"
      >
        <defs>
          <radialGradient id="nebula-2" cx="50%" cy="50%" r="50%">
            <stop
              offset="0%"
              stopColor={isDark ? "#06B6D4" : "#BAE6FD"}
              stopOpacity={isDark ? "0.4" : "0.45"}
            />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          <filter id="nebula-blur-2">
            <feGaussianBlur stdDeviation="50" />
          </filter>
        </defs>
        <ellipse
          cx="400"
          cy="250"
          rx="380"
          ry="220"
          fill="url(#nebula-2)"
          filter="url(#nebula-blur-2)"
        />
      </svg>

      {/* Nebula 3 — subtle center/mid, mixed */}
      <svg
        style={{
          position: "absolute",
          top: "55%",
          left: "30%",
          width: "400px",
          height: "400px",
          animation: "nebula-breathe 12s ease-in-out -4s infinite",
        }}
        viewBox="0 0 400 400"
        fill="none"
      >
        <defs>
          <radialGradient id="nebula-3" cx="50%" cy="50%" r="50%">
            <stop
              offset="0%"
              stopColor={isDark ? "#1A0A2E" : "#EDE9FE"}
              stopOpacity={isDark ? "0.8" : "0.6"}
            />
            <stop
              offset="60%"
              stopColor={isDark ? "#0D1B3E" : "#DBEAFE"}
              stopOpacity={isDark ? "0.4" : "0.3"}
            />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          <filter id="nebula-blur-3">
            <feGaussianBlur stdDeviation="30" />
          </filter>
        </defs>
        <ellipse
          cx="200"
          cy="200"
          rx="180"
          ry="160"
          fill="url(#nebula-3)"
          filter="url(#nebula-blur-3)"
        />
      </svg>
    </div>
  );
}
