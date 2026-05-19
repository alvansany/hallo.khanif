"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useColorMode } from "@chakra-ui/react";
import StarField from "./StarField";
import NebulaLayer from "./NebulaLayer";
import CosmicParticles from "./CosmicParticles";

/** Wraps the hero viewport and orchestrates multi-layer scroll parallax */
export default function ParallaxContainer({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const { scrollY } = useScroll();

  // Layer Y transforms (scroll 0→1000px maps to each layer's offset)
  const layer1Y: MotionValue<number> = useTransform(scrollY, [0, 1000], [0, -100]);  // deep stars
  const layer2Y: MotionValue<number> = useTransform(scrollY, [0, 1000], [0, -200]);  // nebula
  const layer7Y: MotionValue<number> = useTransform(scrollY, [0, 1000], [0, -800]);  // particles

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      {/* ── Background void ───────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          background: isDark
            ? "radial-gradient(ellipse at 20% 20%, #1A0A2E 0%, #080C18 40%, #04050A 100%)"
            : "radial-gradient(ellipse at 20% 20%, #EDE9FE 0%, #E8EEFF 40%, #F0F4FF 100%)",
          transition: "background 0.5s ease",
        }}
      />

      {/* ── Layer 1: Deep Stars ───────────────────────────────── */}
      <motion.div
        aria-hidden="true"
        style={{ y: layer1Y, position: "fixed", inset: 0, zIndex: 1, pointerEvents: "none" }}
      >
        {/* StarField renders its own SVG layers at z-index 1, 3, 5 */}
        <StarField />
      </motion.div>

      {/* ── Layer 2: Nebula ───────────────────────────────────── */}
      <motion.div
        aria-hidden="true"
        style={{ y: layer2Y, position: "fixed", inset: 0, zIndex: 2, pointerEvents: "none" }}
      >
        <NebulaLayer />
      </motion.div>

      {/* ── Layer 7: Cosmic Particles (Canvas) ───────────────── */}
      <motion.div
        aria-hidden="true"
        style={{ y: layer7Y, position: "fixed", inset: 0, zIndex: 7, pointerEvents: "none" }}
      >
        <CosmicParticles />
      </motion.div>

      {/* ── Content (above all layers) ───────────────────────── */}
      <div style={{ position: "relative", zIndex: 10 }}>
        {children}
      </div>
    </div>
  );
}
