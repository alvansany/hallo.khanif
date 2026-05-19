import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    brand: {
      50:  "#fff1ed",
      100: "#ffd9cc",
      200: "#ffb499",
      300: "#ff8a66",
      400: "#ff6033",
      500: "#FE4820", // aurora-1 primary
      600: "#d93a18",
      700: "#b32d11",
      800: "#8c200b",
      900: "#661406",
    },
    violet: {
      50:  "#f5f3ff",
      100: "#ede9fe",
      200: "#ddd6fe",
      300: "#c4b5fd",
      400: "#a78bfa",
      500: "#7C3AED",
      600: "#6d28d9",
      700: "#5b21b6",
      800: "#4c1d95",
      900: "#2e1065",
    },
    cyan: {
      50:  "#ecfeff",
      100: "#cffafe",
      200: "#a5f3fc",
      300: "#67e8f9",
      400: "#22d3ee",
      500: "#06B6D4",
      600: "#0891b2",
      700: "#0e7490",
      800: "#155e75",
      900: "#164e63",
    },
    cosmic: {
      void:    "#04050A",
      deep:    "#080C18",
      nebula1: "#1A0A2E",
      nebula2: "#0D1B3E",
      star:    "#E8EAFF",
      dust:    "#94A3B8",
    },
  },
  fonts: {
    heading: "'Syne', sans-serif",
    body:    "'DM Sans', 'Helvetica Neue', sans-serif",
    mono:    "'JetBrains Mono', monospace",
  },
  fontSizes: {
    "2xs": "0.625rem",
    xs:   "0.75rem",
    sm:   "0.875rem",
    md:   "1rem",
    lg:   "1.125rem",
    xl:   "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  space: {
    px: "1px",
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    32: "8rem",
    40: "10rem",
  },
  radii: {
    none: "0",
    sm:   "0.25rem",
    base: "0.375rem",
    md:   "0.5rem",
    lg:   "0.75rem",
    xl:   "1rem",
    "2xl": "1.5rem",
    full: "9999px",
  },
  components: {
    Button: {
      baseStyle: {
        fontFamily: "body",
        fontWeight: "600",
        letterSpacing: "0.04em",
        fontSize: "sm",
        borderRadius: "full",
        transition: "all 0.3s ease",
        _focus: { boxShadow: "none" },
      },
      variants: {
        // Primary glow button: violet → cyan gradient
        cosmic: {
          bg: "linear-gradient(135deg, #7C3AED, #06B6D4)",
          color: "white",
          border: "none",
          boxShadow: "0 0 20px rgba(124,58,237,0.3), 0 0 40px rgba(6,182,212,0.2)",
          _hover: {
            bg: "linear-gradient(135deg, #06B6D4, #7C3AED)",
            boxShadow: "0 0 30px rgba(124,58,237,0.5), 0 0 60px rgba(6,182,212,0.3)",
            transform: "scale(1.03)",
          },
          _active: { transform: "scale(0.98)" },
        },
        // Secondary glass button
        glass: {
          bg: "var(--color-glass-bg)",
          color: "var(--color-star)",
          border: "1px solid var(--color-glass-border)",
          backdropFilter: "blur(10px)",
          _hover: {
            bg: "rgba(124,58,237,0.1)",
            borderColor: "violet.500",
            boxShadow: "0 0 15px rgba(124,58,237,0.3)",
          },
          _active: { transform: "scale(0.98)" },
        },
        solid: (props: { colorScheme: string }) =>
          props.colorScheme === "brand"
            ? {
                bg: "brand.500",
                color: "white",
                _hover: { bg: "brand.600", transform: "translateY(-2px)" },
                _active: { bg: "brand.700", transform: "translateY(0)" },
              }
            : {},
        outline: {
          borderWidth: "1.5px",
          _hover: { transform: "translateY(-2px)" },
        },
        ghost: {
          _hover: { bg: "transparent", color: "brand.500" },
        },
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: "heading",
        fontWeight: "800",
        lineHeight: "1.05",
        letterSpacing: "-0.02em",
      },
    },
    Link: {
      baseStyle: {
        _hover: { textDecoration: "none" },
        transition: "color 0.2s ease",
      },
    },
    Divider: {
      baseStyle: {
        borderColor: "gray.200",
        _dark: { borderColor: "whiteAlpha.100" },
      },
    },
  },
  styles: {
    global: (props: { colorMode: string }) => ({
      "html, body": {
        fontFamily: "body",
        bg: props.colorMode === "dark" ? "cosmic.void" : "#F0F4FF",
        color: props.colorMode === "dark" ? "cosmic.star" : "cosmic.void",
        scrollBehavior: "smooth",
        overflowX: "hidden",
      },
      "::selection": {
        bg: "violet.500",
        color: "white",
      },
      // Custom scrollbar
      "::-webkit-scrollbar": { width: "5px" },
      "::-webkit-scrollbar-track": {
        bg: props.colorMode === "dark" ? "cosmic.void" : "#F0F4FF",
      },
      "::-webkit-scrollbar-thumb": {
        background: "linear-gradient(#7C3AED, #06B6D4)",
        borderRadius: "full",
      },
      "a": { transition: "all 0.2s ease" },
    }),
  },
});

export default theme;
