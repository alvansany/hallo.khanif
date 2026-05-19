"use client";

import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Text,
  VStack,
  Link as ChakraLink,
  Button,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { LinkedinIcon, GithubIcon, DribbbleIcon, TwitterIcon } from "@/components/SocialIcons";
import Link from "next/link";
import { PROFILE } from "@/lib/data";

const MotionBox = motion(Box);

const FOOTER_LINKS = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Design Lab", href: "/lab" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL_LINKS = [
  { icon: <LinkedinIcon size={16} />, href: PROFILE.social.linkedin, label: "LinkedIn", hoverColor: "#0077B5" },
  { icon: <GithubIcon size={16} />, href: PROFILE.social.github, label: "GitHub", hoverColor: "#E8EAFF" },
  { icon: <DribbbleIcon size={16} />, href: PROFILE.social.dribbble, label: "Dribbble", hoverColor: "#EA4C89" },
  { icon: <TwitterIcon size={16} />, href: PROFILE.social.twitter, label: "Twitter", hoverColor: "#1DA1F2" },
];

export default function Footer() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Box
      as="footer"
      position="relative"
      bg={isDark ? "#04050A" : "#F0F4FF"}
      color="var(--color-stardust)"
      pt={{ base: 16, md: 24 }}
      pb={8}
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "1px",
        background: "linear-gradient(90deg, var(--color-violet), var(--color-cyan), #10B981)",
      }}
    >
      <Container maxW="1400px" px={{ base: 5, md: 10, lg: 16 }}>

        {/* ── CTA Banner ──────────────────────────────────────── */}
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          mb={20}
          p={{ base: 10, md: 16 }}
          borderRadius="2xl"
          position="relative"
          overflow="hidden"
          className="glass-panel"
          border="1px solid var(--color-glass-border)"
        >
          {/* Subtle aurora behind CTA */}
          <Box
            position="absolute"
            inset={0}
            borderRadius="2xl"
            background={
              isDark
                ? "radial-gradient(ellipse at 70% 50%, rgba(124,58,237,0.15) 0%, rgba(6,182,212,0.08) 60%, transparent 100%)"
                : "radial-gradient(ellipse at 70% 50%, rgba(124,58,237,0.12) 0%, rgba(6,182,212,0.06) 60%, transparent 100%)"
            }
            zIndex={0}
          />

          {/* Orbital ring decoration */}
          <Box
            position="absolute"
            top="-80px"
            right="-80px"
            w="300px"
            h="300px"
            borderRadius="full"
            border="1px solid var(--color-glass-border)"
            opacity={0.4}
            zIndex={0}
          />
          <Box
            position="absolute"
            top="-40px"
            right="-40px"
            w="200px"
            h="200px"
            borderRadius="full"
            border="1px dashed"
            borderColor="var(--color-violet)"
            opacity={0.2}
            zIndex={0}
          />

          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align={{ base: "flex-start", md: "center" }}
            gap={8}
            position="relative"
            zIndex={1}
          >
            <Box>
              <Text
                fontSize={{ base: "2xl", md: "4xl" }}
                fontFamily="heading"
                fontWeight="800"
                color="var(--color-star)"
                lineHeight="1.1"
                mb={3}
              >
                Have a project in mind?
                <Box as="br" />
                <Text
                  as="span"
                  background="linear-gradient(135deg, var(--color-violet), var(--color-cyan))"
                  backgroundClip="text"
                  sx={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                >
                  Let&apos;s build it together.
                </Text>
              </Text>
              <Text fontSize="sm" color="var(--color-stardust)">
                Currently taking on select projects for Q3 2025
              </Text>
            </Box>

            <Link href="/contact" passHref>
              <Button
                size="lg"
                px={8}
                fontFamily="body"
                fontWeight="600"
                color="white"
                borderRadius="full"
                background="linear-gradient(135deg, var(--color-violet), var(--color-cyan))"
                boxShadow="0 0 24px var(--color-glow-violet), 0 0 48px var(--color-glow-cyan)"
                flexShrink={0}
                rightIcon={<ArrowUpRight size={18} />}
                _hover={{
                  background: "linear-gradient(135deg, var(--color-cyan), var(--color-violet))",
                  boxShadow: "0 0 32px var(--color-glow-violet), 0 0 64px var(--color-glow-cyan)",
                  transform: "scale(1.04) translateY(-2px)",
                }}
                transition="all 0.3s ease"
                // Shimmer effect
                sx={{
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    borderRadius: "full",
                    background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.25) 50%, transparent 100%)",
                    backgroundSize: "200% 100%",
                    animation: "shimmer 2.5s linear infinite",
                  },
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                Start a Project
              </Button>
            </Link>
          </Flex>
        </MotionBox>

        {/* ── Main Footer Grid ─────────────────────────────── */}
        <Grid
          templateColumns={{ base: "1fr", md: "2fr 1fr 1fr" }}
          gap={{ base: 10, md: 16 }}
          mb={16}
        >
          {/* Brand column */}
          <GridItem>
            {/* Logo */}
            <HStack spacing={1} mb={5}>
              <Text
                fontFamily="heading"
                fontWeight="800"
                fontSize="xl"
                color="var(--color-star)"
                letterSpacing="-0.03em"
              >
                KA
              </Text>
              <Box
                w="6px"
                h="6px"
                borderRadius="full"
                bg="var(--color-violet)"
                boxShadow="0 0 8px var(--color-violet)"
                mb="5px"
              />
            </HStack>

            <Text fontSize="sm" lineHeight="1.9" maxW="280px" mb={6} color="var(--color-stardust)">
              UI/UX Designer crafting intuitive digital experiences.
              Based in Sleman, DI Yogyakarta.
            </Text>

            <HStack spacing={2}>
              {SOCIAL_LINKS.map((s) => (
                <IconButton
                  key={s.label}
                  as="a"
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  icon={s.icon}
                  size="sm"
                  variant="ghost"
                  color="var(--color-stardust)"
                  borderRadius="full"
                  border="1px solid var(--color-glass-border)"
                  _hover={{
                    color: s.hoverColor,
                    borderColor: s.hoverColor,
                    transform: "scale(1.15) rotate(5deg)",
                    bg: `${s.hoverColor}15`,
                  }}
                  transition="all 0.25s ease"
                />
              ))}
            </HStack>
          </GridItem>

          {/* Navigation */}
          <GridItem>
            <Text
              fontSize="xs"
              fontFamily="mono"
              fontWeight="500"
              letterSpacing="0.15em"
              textTransform="uppercase"
              color="var(--color-star)"
              mb={5}
              opacity={0.7}
            >
              Navigation
            </Text>
            <VStack align="flex-start" spacing={3}>
              {FOOTER_LINKS.map((link) => (
                <Link key={link.href} href={link.href} passHref>
                  <ChakraLink
                    fontSize="sm"
                    color="var(--color-stardust)"
                    transition="all 0.2s"
                    _hover={{
                      color: "var(--color-star)",
                      pl: 1,
                      textDecoration: "none",
                    }}
                    position="relative"
                    _before={{
                      content: '"→"',
                      position: "absolute",
                      left: "-16px",
                      opacity: 0,
                      transition: "opacity 0.2s, left 0.2s",
                    }}
                    sx={{ "&:hover::before": { opacity: 1, left: "-14px" } }}
                  >
                    {link.label}
                  </ChakraLink>
                </Link>
              ))}
            </VStack>
          </GridItem>

          {/* Contact */}
          <GridItem>
            <Text
              fontSize="xs"
              fontFamily="mono"
              fontWeight="500"
              letterSpacing="0.15em"
              textTransform="uppercase"
              color="var(--color-star)"
              mb={5}
              opacity={0.7}
            >
              Get In Touch
            </Text>
            <VStack align="flex-start" spacing={3}>
              <ChakraLink
                href={`mailto:${PROFILE.email}`}
                fontSize="sm"
                color="var(--color-stardust)"
                _hover={{ color: "var(--color-star)", textDecoration: "none" }}
                transition="color 0.2s"
              >
                {PROFILE.email}
              </ChakraLink>
              <Text fontSize="sm" color="var(--color-stardust)">{PROFILE.location}</Text>
              <HStack spacing={2}>
                <Box
                  w="7px"
                  h="7px"
                  borderRadius="full"
                  bg="#10B981"
                  boxShadow="0 0 8px #10B981"
                  animation="pulse-dot 2s ease-in-out infinite"
                />
                <Text fontSize="xs" color="#10B981" fontWeight="600">
                  {PROFILE.availability}
                </Text>
              </HStack>
            </VStack>
          </GridItem>
        </Grid>

        {/* ── Bottom Bar ───────────────────────────────────── */}
        <Box
          h="1px"
          background={
            isDark
              ? "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)"
              : "linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)"
          }
          mb={8}
        />

        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "flex-start", md: "center" }}
          gap={4}
        >
          <Text fontSize="xs" fontFamily="mono" color="var(--color-stardust)" opacity={0.6}>
            © {new Date().getFullYear()} Muhammad Khanif Alfan Akhsani. All rights reserved.
          </Text>
          <Text fontSize="xs" fontFamily="mono" color="var(--color-stardust)" opacity={0.6}>
            Designed &amp; built with precision and{" "}
            <Text
              as="span"
              color="var(--color-aurora-2)"
              sx={{ textShadow: "0 0 8px var(--color-glow-cyan)" }}
            >
              passion
            </Text>
            .
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}
