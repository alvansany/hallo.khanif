"use client";

import { useColorMode } from "@chakra-ui/react";
import { useMemo } from "react";

interface Star {
  id: number;
  cx: number;
  cy: number;
  r: number;
  opacity: number;
  twinkle: boolean;
  twinkleDuration: number;
  twinkleDelay: number;
}

function generateStars(count: number, seed: number): Star[] {
  const stars: Star[] = [];
  // Simple seeded pseudo-random using LCG
  let s = seed;
  const rand = () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 4294967296;
  };

  for (let i = 0; i < count; i++) {
    stars.push({
      id: i,
      cx: rand() * 100,
      cy: rand() * 100,
      r: rand() * 1.2 + 0.3,
      opacity: rand() * 0.6 + 0.2,
      twinkle: rand() > 0.75,
      twinkleDuration: rand() * 4 + 2,
      twinkleDelay: rand() * 5,
    });
  }
  return stars;
}

export default function StarField() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  // Generate 3 layers with fixed seeds for SSR consistency
  const deepStars = useMemo(() => generateStars(300, 12345), []);
  const midStars = useMemo(() => generateStars(150, 67890), []);
  const nearStars = useMemo(() => generateStars(50, 11111), []);

  if (!isDark) {
    // Light mode: soft floating geometric shapes instead of stars
    return (
      <svg
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          pointerEvents: "none",
          opacity: 0.4,
        }}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        {deepStars.slice(0, 60).map((s) => (
          <circle
            key={s.id}
            cx={`${s.cx}%`}
            cy={`${s.cy}%`}
            r={s.r * 1.5}
            fill="#7C3AED"
            opacity={s.opacity * 0.3}
            style={
              s.twinkle
                ? {
                    animation: `twinkle ${s.twinkleDuration}s ease-in-out ${s.twinkleDelay}s infinite`,
                  }
                : undefined
            }
          />
        ))}
      </svg>
    );
  }

  return (
    <>
      {/* Layer 1 — deep stars (slowest parallax) */}
      <svg
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          pointerEvents: "none",
        }}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        {deepStars.map((s) => (
          <circle
            key={`d-${s.id}`}
            cx={`${s.cx}%`}
            cy={`${s.cy}%`}
            r={s.r * 0.7}
            fill="#E8EAFF"
            opacity={s.opacity * 0.5}
            style={
              s.twinkle
                ? {
                    animation: `twinkle ${s.twinkleDuration}s ease-in-out ${s.twinkleDelay}s infinite`,
                  }
                : undefined
            }
          />
        ))}
      </svg>

      {/* Layer 3 — mid stars */}
      <svg
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 3,
          pointerEvents: "none",
        }}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        {midStars.map((s) => (
          <circle
            key={`m-${s.id}`}
            cx={`${s.cx}%`}
            cy={`${s.cy}%`}
            r={s.r}
            fill="#E8EAFF"
            opacity={s.opacity * 0.7}
            style={
              s.twinkle
                ? {
                    animation: `twinkle ${s.twinkleDuration + 1}s ease-in-out ${s.twinkleDelay}s infinite`,
                  }
                : undefined
            }
          />
        ))}
      </svg>

      {/* Layer 5 — near stars (largest, with glow) */}
      <svg
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 5,
          pointerEvents: "none",
        }}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="star-glow">
            <feGaussianBlur stdDeviation="0.3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {nearStars.map((s) => (
          <circle
            key={`n-${s.id}`}
            cx={`${s.cx}%`}
            cy={`${s.cy}%`}
            r={s.r * 1.5}
            fill="white"
            opacity={s.opacity}
            filter="url(#star-glow)"
            style={
              s.twinkle
                ? {
                    animation: `twinkle ${s.twinkleDuration * 0.8}s ease-in-out ${s.twinkleDelay}s infinite`,
                  }
                : undefined
            }
          />
        ))}
      </svg>
    </>
  );
}
