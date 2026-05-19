"use client";

import {
  Box,
  Flex,
  HStack,
  useColorMode,
  useDisclosure,
  VStack,
  Text,
  Link as ChakraLink,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LinkedinIcon, GithubIcon, DribbbleIcon, TwitterIcon } from "@/components/SocialIcons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PROFILE } from "@/lib/data";

const MotionBox = motion(Box);

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/lab", label: "Design Lab" },
  { href: "/blog", label: "Blog" },
];

/** Moon SVG icon */
function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

/** Sun SVG icon */
function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

/** Theme toggle button (Moon ↔ Sun) */
function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      as="button"
      onClick={toggleColorMode}
      aria-label={`Switch to ${colorMode === "dark" ? "light" : "dark"} mode`}
      display="flex"
      alignItems="center"
      justifyContent="center"
      w="36px"
      h="36px"
      borderRadius="full"
      border="1px solid var(--color-glass-border)"
      bg="var(--color-glass-bg)"
      backdropFilter="blur(10px)"
      color="var(--color-stardust)"
      cursor="pointer"
      transition="all 0.3s ease"
      _hover={{
        color: "var(--color-star)",
        borderColor: "var(--color-violet)",
        boxShadow: "0 0 12px var(--color-glow-violet)",
        transform: "rotate(20deg)",
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={colorMode}
          initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
          transition={{ duration: 0.25 }}
          style={{ display: "flex", alignItems: "center" }}
        >
          {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        </motion.span>
      </AnimatePresence>
    </Box>
  );
}

export default function Navbar() {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const isDark = colorMode === "dark";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    { icon: <LinkedinIcon size={16} />, href: PROFILE.social.linkedin, label: "LinkedIn" },
    { icon: <GithubIcon size={16} />, href: PROFILE.social.github, label: "GitHub" },
    { icon: <DribbbleIcon size={16} />, href: PROFILE.social.dribbble, label: "Dribbble" },
    { icon: <TwitterIcon size={16} />, href: PROFILE.social.twitter, label: "Twitter" },
  ];

  // Glass nav background — stronger blur on scroll
  const navBg = scrolled
    ? isDark
      ? "rgba(4, 5, 10, 0.85)"
      : "rgba(240, 244, 255, 0.85)"
    : isDark
    ? "rgba(4, 5, 10, 0.4)"
    : "rgba(240, 244, 255, 0.4)";

  const borderBottom = scrolled
    ? `1px solid var(--color-glass-border)`
    : "1px solid transparent";

  return (
    <>
      <MotionBox
        as="nav"
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={1000}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{
          background: navBg,
          backdropFilter: `blur(${scrolled ? "24px" : "12px"})`,
          WebkitBackdropFilter: `blur(${scrolled ? "24px" : "12px"})`,
          borderBottom,
          transition: "all 0.4s ease",
        }}
      >
        <Flex
          maxW="1400px"
          mx="auto"
          px={{ base: 5, md: 10, lg: 16 }}
          h="70px"
          align="center"
          justify="space-between"
        >
          {/* ── Logo "KA." ─────────────────────────────────── */}
          <Link href="/" passHref>
            <HStack spacing={1} cursor="pointer" role="group">
              <Text
                fontFamily="heading"
                fontWeight="800"
                fontSize="xl"
                letterSpacing="-0.03em"
                color="var(--color-star)"
                transition="all 0.2s"
                _groupHover={{ color: "var(--color-star)" }}
              >
                KA
              </Text>
              {/* Glowing dot */}
              <Box
                w="6px"
                h="6px"
                borderRadius="full"
                bg="var(--color-violet)"
                boxShadow="0 0 8px var(--color-violet), 0 0 16px var(--color-glow-violet)"
                mb="6px"
                transition="all 0.3s"
                _groupHover={{
                  boxShadow: "0 0 12px var(--color-cyan), 0 0 24px var(--color-glow-cyan)",
                  bg: "var(--color-cyan)",
                }}
              />
            </HStack>
          </Link>

          {/* ── Desktop Nav Links ───────────────────────────── */}
          <HStack spacing={8} display={{ base: "none", md: "flex" }}>
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link key={link.href} href={link.href} passHref>
                  <ChakraLink
                    fontFamily="body"
                    fontSize="sm"
                    fontWeight="500"
                    color={isActive ? "var(--color-star)" : "var(--color-stardust)"}
                    position="relative"
                    _hover={{ color: "var(--color-star)", textDecoration: "none" }}
                    transition="color 0.2s ease"
                    pb={1}
                    _after={{
                      content: '""',
                      position: "absolute",
                      bottom: "-2px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: isActive ? "100%" : "0%",
                      height: "1.5px",
                      background: "linear-gradient(90deg, var(--color-violet), var(--color-cyan))",
                      transition: "width 0.3s ease",
                      borderRadius: "full",
                    }}
                    sx={{
                      "&:hover::after": { width: "100%" },
                    }}
                  >
                    {link.label}
                  </ChakraLink>
                </Link>
              );
            })}
          </HStack>

          {/* ── Right Actions ───────────────────────────────── */}
          <HStack spacing={3}>
            {/* Dark / Light Toggle */}
            <ThemeToggle />

            {/* CTA: Let's Talk */}
            <Link href="/contact" passHref>
              <Button
                display={{ base: "none", md: "flex" }}
                size="sm"
                px={5}
                h="36px"
                fontFamily="body"
                fontWeight="600"
                fontSize="sm"
                color="white"
                borderRadius="full"
                border="1px solid"
                borderColor="var(--color-glass-border)"
                background="linear-gradient(135deg, var(--color-violet), var(--color-cyan))"
                boxShadow="0 0 16px var(--color-glow-violet)"
                _hover={{
                  background: "linear-gradient(135deg, var(--color-cyan), var(--color-violet))",
                  boxShadow: "0 0 24px var(--color-glow-violet), 0 0 40px var(--color-glow-cyan)",
                  transform: "scale(1.04)",
                }}
                transition="all 0.3s ease"
              >
                Let&apos;s Talk
              </Button>
            </Link>

            {/* Hamburger (mobile) */}
            <IconButton
              display={{ base: "flex", md: "none" }}
              onClick={onOpen}
              aria-label="Open menu"
              icon={<Menu size={20} />}
              variant="ghost"
              color="var(--color-stardust)"
              _hover={{ color: "var(--color-star)", bg: "transparent" }}
              borderRadius="md"
            />
          </HStack>
        </Flex>
      </MotionBox>

      {/* ── Mobile Drawer ──────────────────────────────────── */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
        <DrawerOverlay backdropFilter="blur(12px)" bg={isDark ? "rgba(4,5,10,0.7)" : "rgba(240,244,255,0.7)"} />
        <DrawerContent
          bg={isDark ? "#080C18" : "#F0F4FF"}
          borderLeft="1px solid var(--color-glass-border)"
          maxW={{ base: "100%", sm: "380px" }}
        >
          <DrawerCloseButton
            top={5}
            right={5}
            color="var(--color-stardust)"
            _hover={{ color: "var(--color-star)", bg: "transparent" }}
            as={IconButton}
            icon={<X size={20} />}
            aria-label="Close menu"
          />
          <DrawerBody>
            <Flex h="100%" direction="column" justify="center" px={8} gap={2}>
              {/* Nav links */}
              <VStack align="flex-start" spacing={2} mb={10}>
                {NAV_LINKS.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <MotionBox
                      key={link.href}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <Link href={link.href} passHref>
                        <Text
                          fontFamily="heading"
                          fontWeight="800"
                          fontSize={{ base: "3xl", sm: "4xl" }}
                          lineHeight="1.1"
                          color={isActive ? "transparent" : "var(--color-star)"}
                          backgroundClip={isActive ? "text" : undefined}
                          background={isActive ? "linear-gradient(135deg, var(--color-violet), var(--color-cyan))" : undefined}
                          sx={isActive ? { WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } : {}}
                          cursor="pointer"
                          onClick={onClose}
                          transition="all 0.2s"
                          _hover={{
                            pl: 1,
                            background: "linear-gradient(135deg, var(--color-violet), var(--color-cyan))",
                            backgroundClip: "text",
                            sx: { WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
                          }}
                          py={1}
                        >
                          {link.label}
                        </Text>
                      </Link>
                    </MotionBox>
                  );
                })}
              </VStack>

              {/* Divider gradient */}
              <Box
                h="1px"
                background="linear-gradient(90deg, var(--color-violet), var(--color-cyan), transparent)"
                mb={8}
                opacity={0.5}
              />

              {/* Social links */}
              <HStack spacing={4} mb={8}>
                {socialLinks.map((s) => (
                  <Box
                    key={s.label}
                    as="a"
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="var(--color-stardust)"
                    transition="all 0.2s"
                    _hover={{
                      color: "var(--color-star)",
                      transform: "scale(1.2) rotate(5deg)",
                    }}
                  >
                    {s.icon}
                  </Box>
                ))}
              </HStack>

              {/* CTA */}
              <Link href="/contact" passHref>
                <Button
                  size="lg"
                  px={8}
                  onClick={onClose}
                  fontFamily="body"
                  fontWeight="600"
                  color="white"
                  borderRadius="full"
                  background="linear-gradient(135deg, var(--color-violet), var(--color-cyan))"
                  boxShadow="0 0 20px var(--color-glow-violet)"
                  _hover={{
                    background: "linear-gradient(135deg, var(--color-cyan), var(--color-violet))",
                    transform: "scale(1.02)",
                  }}
                  transition="all 0.3s ease"
                >
                  Let&apos;s Talk
                </Button>
              </Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
