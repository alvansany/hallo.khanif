import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
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
      500: "#FE4820", // primary accent
      600: "#d93a18",
      700: "#b32d11",
      800: "#8c200b",
      900: "#661406",
    },
    gray: {
      50:  "#f9f9f9",
      100: "#f0f0f0",
      200: "#e0e0e0",
      300: "#c7c7c7",
      400: "#a0a0a0",
      500: "#767676",
      600: "#555555",
      700: "#333333",
      800: "#1a1a1a",
      900: "#0a0a0a",
    },
  },
  fonts: {
    heading: "'Playfair Display', 'Georgia', serif",
    body:    "'Inter', 'Helvetica Neue', sans-serif",
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
    sm: "0.125rem",
    base: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    full: "9999px",
  },
  components: {
    Button: {
      baseStyle: {
        fontFamily: "body",
        fontWeight: "600",
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        fontSize: "xs",
        borderRadius: "none",
        transition: "all 0.25s ease",
      },
      variants: {
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
          borderRadius: "none",
          borderWidth: "1.5px",
          _hover: { transform: "translateY(-2px)" },
        },
        ghost: {
          borderRadius: "none",
          _hover: { bg: "transparent", color: "brand.500" },
        },
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: "heading",
        fontWeight: "700",
        lineHeight: "1.1",
        letterSpacing: "-0.02em",
      },
    },
    Link: {
      baseStyle: {
        _hover: { textDecoration: "none", color: "brand.500" },
        transition: "color 0.2s ease",
      },
    },
    Divider: {
      baseStyle: { borderColor: "gray.200", _dark: { borderColor: "gray.700" } },
    },
  },
  styles: {
    global: (props: { colorMode: string }) => ({
      "html, body": {
        fontFamily: "body",
        bg: props.colorMode === "dark" ? "gray.900" : "white",
        color: props.colorMode === "dark" ? "gray.50" : "gray.900",
        scrollBehavior: "smooth",
        overflowX: "hidden",
      },
      "::selection": {
        bg: "brand.500",
        color: "white",
      },
      "::-webkit-scrollbar": {
        width: "6px",
      },
      "::-webkit-scrollbar-thumb": {
        bg: "brand.500",
        borderRadius: "full",
      },
      "a": {
        transition: "all 0.2s ease",
      },
    }),
  },
});

export default theme;
