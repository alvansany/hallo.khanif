"use client";
import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ParallaxContainer from "./parallax/ParallaxContainer";
import CustomCursor from "./ui/CustomCursor";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ParallaxContainer>
      {/* Custom cursor — desktop only */}
      <CustomCursor />

      <Box minH="100vh" display="flex" flexDirection="column" position="relative" zIndex={10}>
        <Navbar />
        <Box as="main" flex="1" pt="70px">
          {children}
        </Box>
        <Footer />
      </Box>
    </ParallaxContainer>
  );
}
