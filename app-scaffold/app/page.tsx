"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Text,
  VStack,
  useColorMode,
  Badge,
  Image,
} from "@chakra-ui/react";
import { motion, useScroll, useTransform, useInView, animate } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Zap,
  Award,
  Users,
  TrendingUp,
} from "lucide-react";
import { LinkedinIcon, GithubIcon, DribbbleIcon, TwitterIcon } from "@/components/SocialIcons";
import Link from "next/link";
import { WORKS, STATS, PROFILE, SERVICES, EXPERIENCE } from "@/lib/data";
import FadeIn from "@/components/FadeIn";
import PageWrapper from "@/components/PageWrapper";
import OrbitalRings from "@/components/parallax/OrbitalRings";
import { useRef, useEffect, useState } from "react";

const MotionBox = motion(Box);

const STAT_ICONS = [<Zap key="z" />, <Award key="a" />, <TrendingUp key="t" />, <Users key="u" />];

/** Animated count-up number */
function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView || !ref.current) return;
    const ctrl = animate(0, to, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => { if (ref.current) ref.current.textContent = Math.round(v) + suffix; },
    });
    return () => ctrl.stop();
  }, [inView, to, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}



interface BlogPost {
  id: number;
  title: string;
  slug: string;
  link: string;
  date: string;
  readTime: string;
  category: string;
  categories: string[];
  excerpt: string;
  thumbnail: string;
  author: string;
}

export default function HomePage() {
  const heroRef = useRef(null);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  useEffect(() => {
    fetch('/api/medium', { cache: 'no-store' })
      .then(res => res.json())
      .then(data => {
        if (data.posts) setBlogPosts(data.posts.slice(0, 3));
      })
      .catch(err => console.error("Failed to fetch medium posts:", err));
  }, []);

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  // Semantic tokens using CSS variables
  const subtleText = "var(--color-stardust)";
  const bodyText = isDark ? "#C4C9E2" : "#374151";
  const headingColor = "var(--color-star)";

  return (
    <PageWrapper>
      {/* ── HERO ── */}
      <Box
        ref={heroRef}
        position="relative"
        minH={{ base: "100dvh", md: "100dvh" }}
        overflow="hidden"
        display="flex"
        alignItems="center"
      >
        <MotionBox style={{ opacity: heroOpacity, y: heroY }} width="100%">
          <Container maxW="1400px" px={{ base: 5, md: 10, lg: 16 }} py={{ base: 24, md: 32 }}>
            <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={{ base: 12, lg: 16 }} alignItems="center">

              {/* ── Left: Text content ── */}
              <GridItem>
                {/* "Open to Opportunities" badge */}
                <MotionBox initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} mb={8}>
                  <HStack
                    display="inline-flex"
                    spacing={2}
                    px={4}
                    py={2}
                    borderRadius="full"
                    border="1px solid"
                    borderColor="rgba(16,185,129,0.3)"
                    bg="rgba(16,185,129,0.08)"
                    backdropFilter="blur(10px)"
                  >
                    <Box
                      w="7px" h="7px"
                      borderRadius="full"
                      bg="#10B981"
                      boxShadow="0 0 8px #10B981"
                      sx={{ animation: "pulse-dot 2s ease-in-out infinite" }}
                    />
                    <Text fontSize="xs" fontWeight="600" color="#10B981" letterSpacing="0.05em">
                      Open to Opportunities
                    </Text>
                  </HStack>
                </MotionBox>

                {/* Main headline — word-reveal stagger */}
                <Box mb={6} overflow="hidden">
                  {["Design.", "Think.", "Solve."].map((word, i) => (
                    <MotionBox
                      key={word}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.65, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                      display="inline-block"
                      mr={4}
                    >
                      <Text
                        as="h1"
                        display="inline"
                        fontFamily="heading"
                        fontSize={{ base: "5xl", sm: "6xl", md: "7xl", lg: "8xl" }}
                        lineHeight="0.95"
                        letterSpacing="-0.03em"
                        color={
                          i === 0 ? headingColor
                          : i === 1 ? "transparent"
                          : headingColor
                        }
                        sx={i === 1 ? {
                          background: "linear-gradient(135deg, var(--color-violet), var(--color-cyan))",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        } : {}}
                        fontStyle={i === 2 ? "italic" : "normal"}
                        fontWeight={i === 2 ? "400" : "800"}
                      >
                        {word}
                      </Text>
                    </MotionBox>
                  ))}
                </Box>

                {/* Subtitle */}
                <MotionBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }}>
                  <Text fontSize={{ base: "md", md: "lg" }} color={bodyText} lineHeight="1.8" maxW="480px" mb={10}>
                    UI/UX Designer with 5+ years delivering 15+ digital products. I create intuitive experiences through design thinking, AI workflows, and human-centered design.
                  </Text>

                  <HStack spacing={4} flexWrap="wrap">
                    <Link href="/work" passHref>
                      <Button
                        size="lg" px={8}
                        fontFamily="body" fontWeight="600" color="white"
                        borderRadius="full"
                        background="linear-gradient(135deg, var(--color-violet), var(--color-cyan))"
                        boxShadow="0 0 20px var(--color-glow-violet)"
                        rightIcon={<ArrowRight size={18} />}
                        _hover={{
                          background: "linear-gradient(135deg, var(--color-cyan), var(--color-violet))",
                          boxShadow: "0 0 30px var(--color-glow-violet), 0 0 50px var(--color-glow-cyan)",
                          transform: "scale(1.04) translateY(-2px)",
                        }}
                        transition="all 0.3s ease"
                      >
                        View My Work
                      </Button>
                    </Link>
                    <Link href="/contact" passHref>
                      <Button
                        size="lg" px={8}
                        fontFamily="body" fontWeight="600"
                        color="var(--color-star)"
                        borderRadius="full"
                        border="1px solid var(--color-glass-border)"
                        bg="var(--color-glass-bg)"
                        backdropFilter="blur(10px)"
                        _hover={{
                          borderColor: "var(--color-violet)",
                          boxShadow: "0 0 15px var(--color-glow-violet)",
                          transform: "translateY(-2px)",
                        }}
                        transition="all 0.3s ease"
                      >
                        Let&apos;s Talk
                      </Button>
                    </Link>
                  </HStack>
                </MotionBox>

                {/* Stats strip */}
                <MotionBox
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
                  mt={14} pt={8}
                  borderTop="1px solid var(--color-glass-border)"
                >
                  <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                    {STATS.map((stat, i) => (
                      <Box key={i}>
                        <Text
                          fontFamily="heading" fontWeight="800"
                          fontSize={{ base: "2xl", md: "3xl" }}
                          lineHeight="1" mb={1}
                          sx={{
                            background: "linear-gradient(135deg, var(--color-violet), var(--color-cyan))",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }}
                        >
                          {stat.value}
                        </Text>
                        <Text fontSize="xs" color={subtleText} lineHeight="1.4">{stat.label}</Text>
                      </Box>
                    ))}
                  </Grid>
                </MotionBox>
              </GridItem>

              {/* ── Right: Profile photo with orbital rings ── */}
              <GridItem display={{ base: "none", lg: "flex" }} justifyContent="center" alignItems="center">
                <MotionBox
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.9, delay: 0.3 }}
                  position="relative"
                  w="420px" h="420px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  {/* Orbital rings behind photo */}
                  <Box position="absolute" inset={0} display="flex" alignItems="center" justifyContent="center">
                    <OrbitalRings size={420} glow />
                  </Box>

                  {/* Profile photo — circular */}
                  <Box
                    position="relative"
                    w="260px" h="260px"
                    borderRadius="full"
                    overflow="hidden"
                    border="2px solid var(--color-glass-border)"
                    boxShadow="0 0 40px var(--color-glow-violet), 0 0 80px var(--color-glow-cyan)"
                    zIndex={5}
                  >
                    <Image
                      src="/images/profile-editorial.png"
                      alt="Khanif Alfan — UI/UX Designer"
                      w="100%" h="100%"
                      objectFit="cover"
                      objectPosition="top center"
                    />
                    {/* Glass overlay at bottom */}
                    <Box
                      position="absolute" bottom={0} left={0} right={0}
                      h="50%" p={4}
                      background="linear-gradient(to top, rgba(4,5,10,0.8) 0%, transparent 100%)"
                      display="flex" flexDirection="column" justifyContent="flex-end"
                    >
                      <Text fontSize="2xs" fontFamily="mono" color="rgba(255,255,255,0.5)" letterSpacing="0.15em" textTransform="uppercase">UI/UX Designer</Text>
                      <Text fontSize="sm" fontFamily="heading" fontWeight="700" color="white">Khanif Alfan</Text>
                    </Box>
                  </Box>

                  {/* Floating glass card — delivered count */}
                  <Box
                    position="absolute" bottom="-8px" right="-8px"
                    className="glass-panel"
                    px={5} py={4} borderRadius="xl"
                    zIndex={10}
                    boxShadow="0 0 20px var(--color-glow-violet)"
                  >
                    <Text fontSize="2xs" fontFamily="mono" color={subtleText} textTransform="uppercase" letterSpacing="0.1em" mb={1}>Delivered</Text>
                    <Text fontFamily="heading" fontWeight="800" fontSize="3xl" lineHeight="1"
                      sx={{ background: "linear-gradient(135deg, var(--color-violet), var(--color-cyan))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                      <CountUp to={15} suffix="+" />
                    </Text>
                    <Text fontSize="xs" color={subtleText}>Digital Products</Text>
                  </Box>
                </MotionBox>
              </GridItem>
            </Grid>

            {/* Side social links */}
            <MotionBox
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
              position="absolute" right={6} top="50%"
              display={{ base: "none", xl: "block" }}
              style={{ translateY: "-50%" } as React.CSSProperties}
            >
              <VStack spacing={4}>
                {[
                  { icon: <LinkedinIcon size={15} />, href: PROFILE.social.linkedin },
                  { icon: <GithubIcon size={15} />, href: PROFILE.social.github },
                  { icon: <DribbbleIcon size={15} />, href: PROFILE.social.dribbble },
                  { icon: <TwitterIcon size={15} />, href: PROFILE.social.twitter },
                ].map((s, i) => (
                  <Box key={i} as="a" href={s.href} target="_blank" rel="noopener noreferrer"
                    color={subtleText} transition="all 0.2s"
                    _hover={{ color: "var(--color-star)", transform: "scale(1.2) rotate(5deg)" }}>
                    {s.icon}
                  </Box>
                ))}
                <Box w="1px" h="50px" background="linear-gradient(var(--color-violet), transparent)" />
              </VStack>
            </MotionBox>
          </Container>
        </MotionBox>
      </Box>

      {/* ── ABOUT (Bento Glass Grid) ── */}
      <Box py={{ base: 20, md: 32 }} position="relative">
        <Container maxW="1400px" px={{ base: 5, md: 10, lg: 16 }}>
          <FadeIn>
            <HStack mb={3} spacing={2}>
              <Box w="24px" h="1px" background="linear-gradient(90deg, var(--color-violet), var(--color-cyan))" />
              <Text fontFamily="mono" fontSize="xs" letterSpacing="0.15em" textTransform="uppercase" color="var(--color-stardust)">
                About Me
              </Text>
            </HStack>
            <Heading
              fontSize={{ base: "4xl", md: "5xl" }} lineHeight="1.1" mb={12}
              color="var(--color-star)"
            >
              Crafting with{" "}
              <Box
                as="span" fontStyle="italic" fontWeight="400"
                sx={{
                  background: "linear-gradient(135deg, var(--color-violet), var(--color-cyan))",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}
              >
                intention.
              </Box>
            </Heading>
          </FadeIn>

          {/* Bento grid */}
          <Grid templateColumns={{ base: "1fr", md: "2fr 1fr", lg: "2fr 1fr 1fr" }} gap={4}>

            {/* Card 1 — Bio (large) */}
            <FadeIn delay={0.05}>
              <Box
                className="glass-panel" borderRadius="2xl" p={8}
                h="100%" minH="220px"
                position="relative" overflow="hidden"
              >
                <Box
                  position="absolute" top={0} left={0} right={0} h="3px"
                  background="linear-gradient(90deg, var(--color-violet), var(--color-cyan))"
                  borderRadius="2xl 2xl 0 0"
                />
                <Text fontFamily="mono" fontSize="xs" color="var(--color-stardust)" letterSpacing="0.12em" textTransform="uppercase" mb={4}>
                  Bio
                </Text>
                <Text fontSize={{ base: "md", md: "lg" }} color={bodyText} lineHeight="1.9">
                  {PROFILE.bio}
                </Text>
              </Box>
            </FadeIn>

            {/* Card 2 — Specialization */}
            <FadeIn delay={0.1}>
              <Box className="glass-panel" borderRadius="2xl" p={6} h="100%" minH="160px">
                <Text fontFamily="mono" fontSize="xs" color="var(--color-stardust)" letterSpacing="0.12em" textTransform="uppercase" mb={4}>
                  Specialization
                </Text>
                <Text fontFamily="heading" fontWeight="700" fontSize="xl" color="var(--color-star)" lineHeight="1.3">
                  UI/UX &amp; Interaction Design
                </Text>
                <Box mt={4} h="2px" w="40px" background="linear-gradient(90deg, var(--color-violet), var(--color-cyan))" borderRadius="full" />
              </Box>
            </FadeIn>

            {/* Card 3 — Experience */}
            <FadeIn delay={0.15}>
              <Box
                className="glass-panel" borderRadius="2xl" p={6} h="100%"
                display="flex" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center"
              >
                <Text
                  fontFamily="heading" fontWeight="800"
                  fontSize="6xl" lineHeight="1"
                  sx={{
                    background: "linear-gradient(135deg, var(--color-violet), var(--color-cyan))",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  }}
                >
                  <CountUp to={5} suffix="+" />
                </Text>
                <Text fontFamily="mono" fontSize="xs" color="var(--color-stardust)" letterSpacing="0.12em" textTransform="uppercase" mt={2}>
                  Years Experience
                </Text>
              </Box>
            </FadeIn>

            {/* Card 4 — Location */}
            <FadeIn delay={0.2}>
              <Box className="glass-panel" borderRadius="2xl" p={6}>
                <Text fontFamily="mono" fontSize="xs" color="var(--color-stardust)" letterSpacing="0.12em" textTransform="uppercase" mb={3}>
                  Based In
                </Text>
                <Text fontFamily="heading" fontWeight="700" fontSize="lg" color="var(--color-star)">
                  Sleman, DI Yogyakarta 🇮🇩
                </Text>
              </Box>
            </FadeIn>

            {/* Card 5 — CTA */}
            <FadeIn delay={0.25}>
              <Link href="/work" passHref>
                <Box
                  className="glass-panel" borderRadius="2xl" p={6}
                  cursor="pointer" role="group"
                  border="1px solid var(--color-glass-border)"
                  transition="all 0.3s ease"
                  _hover={{ borderColor: "var(--color-violet)", boxShadow: "0 0 20px var(--color-glow-violet)", transform: "translateY(-4px)" }}
                  display="flex" alignItems="center" justifyContent="space-between"
                >
                  <Text fontFamily="heading" fontWeight="700" fontSize="lg" color="var(--color-star)">
                    See My Work
                  </Text>
                  <Box
                    w="36px" h="36px" borderRadius="full"
                    background="linear-gradient(135deg, var(--color-violet), var(--color-cyan))"
                    display="flex" alignItems="center" justifyContent="center"
                    transition="transform 0.3s"
                    _groupHover={{ transform: "rotate(45deg) scale(1.1)" }}
                  >
                    <ArrowUpRight size={16} color="white" />
                  </Box>
                </Box>
              </Link>
            </FadeIn>

            {/* Card 6 — Education */}
            <FadeIn delay={0.3}>
              <Box className="glass-panel" borderRadius="2xl" p={6}>
                <Text fontFamily="mono" fontSize="xs" color="var(--color-stardust)" letterSpacing="0.12em" textTransform="uppercase" mb={3}>
                  Education
                </Text>
                <Text fontFamily="heading" fontWeight="700" fontSize="md" color="var(--color-star)">
                  Teknik Informatika
                </Text>
                <Text fontSize="sm" color="var(--color-stardust)">UAD Yogyakarta</Text>
              </Box>
            </FadeIn>
          </Grid>
        </Container>
      </Box>

      {/* ── STATS STRIP (Glass) ── */}
      <Box py={12} position="relative">
        <Box
          position="absolute" inset={0}
          background="linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(6,182,212,0.05) 100%)"
          borderTop="1px solid var(--color-glass-border)"
          borderBottom="1px solid var(--color-glass-border)"
        />
        <Container maxW="1400px" px={{ base: 5, md: 10, lg: 16 }} position="relative">
          <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }} gap={0}>
            {STATS.map((stat, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Box
                  textAlign="center" py={6} px={4}
                  borderRight={i < 3 ? "1px solid var(--color-glass-border)" : "none"}
                >
                  <HStack justify="center" mb={3} color="var(--color-stardust)">
                    {STAT_ICONS[i]}
                  </HStack>
                  <Text
                    fontFamily="heading" fontWeight="800"
                    fontSize={{ base: "3xl", md: "4xl" }} lineHeight="1"
                    sx={{
                      background: "linear-gradient(135deg, var(--color-violet), var(--color-cyan))",
                      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                    }}
                  >
                    {stat.value}
                  </Text>
                  <Text fontSize="xs" color="var(--color-stardust)" mt={1} fontFamily="mono" textTransform="uppercase" letterSpacing="0.1em">
                    {stat.label}
                  </Text>
                </Box>
              </FadeIn>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── EXPERIENCE ── */}
      <Box py={{ base: 20, md: 32 }} position="relative">
        <Container maxW="1400px" px={{ base: 5, md: 10, lg: 16 }}>
          <FadeIn>
            <HStack mb={3} spacing={2}>
              <Box w="24px" h="1px" background="linear-gradient(90deg, var(--color-violet), var(--color-cyan))" />
              <Text fontFamily="mono" fontSize="xs" letterSpacing="0.15em" textTransform="uppercase" color="var(--color-stardust)">
                Career
              </Text>
            </HStack>
            <Heading fontSize={{ base: "4xl", md: "5xl" }} lineHeight="1.05" color="var(--color-star)" mb={16}>
              Work{" "}
              <Box as="span" fontStyle="italic" fontWeight="400" sx={{ background: "linear-gradient(135deg, var(--color-violet), var(--color-cyan))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Experience</Box>
            </Heading>
          </FadeIn>

          <Box position="relative">
            {/* Timeline gradient line */}
            <Box position="absolute" left={{ base: "20px", md: "240px" }} top={0} bottom={0} w="1px" background="linear-gradient(to bottom, var(--color-violet), var(--color-cyan), transparent)" opacity={0.3} />

            <VStack spacing={8} align="stretch">
              {EXPERIENCE.map((exp, i) => (
                <FadeIn key={exp.company} delay={i * 0.1}>
                  <Box position="relative">
                    {/* Timeline dot */}
                    <Box
                      position="absolute" left={{ base: "16px", md: "236px" }} top="32px"
                      w="9px" h="9px" borderRadius="full"
                      background="var(--color-cyan)"
                      boxShadow="0 0 10px var(--color-glow-cyan)"
                      zIndex={2}
                    />

                    <Grid templateColumns={{ base: "1fr", md: "200px 1fr" }} gap={{ base: 6, md: 16 }} alignItems="start">
                      {/* Left: Date + Company */}
                      <Box pt={1} textAlign={{ base: "left", md: "right" }} pl={{ base: 12, md: 0 }}>
                        <Text fontFamily="mono" fontSize="xs" fontWeight="700" letterSpacing="0.1em" textTransform="uppercase" color="var(--color-stardust)" mb={1}>
                          {exp.duration}
                        </Text>
                        <Text fontWeight="700" fontSize="lg" color="var(--color-star)" mb={1}>
                          {exp.company}
                        </Text>
                        <Text fontSize="xs" color="var(--color-cyan)">{exp.location}</Text>
                      </Box>

                      {/* Right: Role + Description */}
                      <Box className="glass-panel" p={6} borderRadius="xl" ml={{ base: 10, md: 0 }}>
                        <HStack justify="space-between" align="start" mb={3} flexWrap="wrap">
                          <Text fontSize="xl" fontWeight="700" color="var(--color-star)" fontFamily="heading">
                            {exp.role}
                          </Text>
                          <Badge
                            bg={exp.type === "Full Time" ? "rgba(16,185,129,0.1)" : "rgba(139,92,246,0.1)"}
                            color={exp.type === "Full Time" ? "#10B981" : "#8B5CF6"}
                            border="1px solid"
                            borderColor={exp.type === "Full Time" ? "rgba(16,185,129,0.2)" : "rgba(139,92,246,0.2)"}
                            px={2} py={0.5} borderRadius="md" textTransform="uppercase" letterSpacing="0.05em" fontSize="2xs"
                          >
                            {exp.type}
                          </Badge>
                        </HStack>
                        <Text fontSize="sm" color={bodyText} lineHeight="1.8">
                          {exp.description}
                        </Text>
                      </Box>
                    </Grid>
                  </Box>
                </FadeIn>
              ))}
            </VStack>
          </Box>
        </Container>
      </Box>

      {/* ── SELECTED WORKS ── */}
      <Box py={{ base: 20, md: 32 }} position="relative">
        <Container maxW="1400px" px={{ base: 5, md: 10, lg: 16 }}>
          <Flex justify="space-between" align="flex-end" mb={12}>
            <FadeIn>
              <HStack mb={3} spacing={2}>
                <Box w="24px" h="1px" background="linear-gradient(90deg, var(--color-violet), var(--color-cyan))" />
                <Text fontFamily="mono" fontSize="xs" letterSpacing="0.15em" textTransform="uppercase" color="var(--color-stardust)">
                  Selected Works
                </Text>
              </HStack>
              <Heading fontSize={{ base: "4xl", md: "5xl" }} lineHeight="1.05" color="var(--color-star)">
                Recent Projects
              </Heading>
            </FadeIn>
            <FadeIn direction="left">
              <Link href="/work" passHref>
                <Button
                  variant="outline" size="md" display={{ base: "none", md: "flex" }}
                  rightIcon={<ArrowUpRight size={16} />}
                  borderColor="var(--color-glass-border)" color="var(--color-star)" bg="var(--color-glass-bg)" backdropFilter="blur(10px)"
                  _hover={{ borderColor: "var(--color-cyan)", color: "var(--color-cyan)", transform: "translateY(-2px)" }}
                >
                  View All
                </Button>
              </Link>
            </FadeIn>
          </Flex>

          {/* Featured large card */}
          <FadeIn>
            <Link href={`/work/${WORKS[0].slug}`} passHref>
              <Box
                position="relative" overflow="hidden" cursor="pointer" role="group" mb={6}
                borderRadius="2xl" border="1px solid var(--color-glass-border)"
              >
                <Box h={{ base: "300px", md: "500px" }} position="relative" overflow="hidden">
                  <Box className="overlay" position="absolute" inset={0} bg="blackAlpha.500" opacity={0} transition="opacity 0.4s ease" zIndex={1} _groupHover={{ opacity: 1 }} />
                  <Image
                    src={WORKS[0].cover} alt={WORKS[0].title} w="100%" h="100%" objectFit="cover"
                    transition="transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)" _groupHover={{ transform: "scale(1.05)" }}
                  />
                  <Box position="absolute" bottom={0} left={0} right={0} p={{ base: 6, md: 10 }} zIndex={2} bgGradient="linear(to-t, rgba(4,5,10,0.9) 0%, transparent 100%)">
                    <HStack mb={3}>
                      <Badge bg="rgba(255,255,255,0.1)" color="white" backdropFilter="blur(4px)" px={2} py={1} borderRadius="md" fontWeight="normal">
                        {WORKS[0].category}
                      </Badge>
                      <Text fontSize="xs" color="var(--color-stardust)" fontFamily="mono">{WORKS[0].year}</Text>
                    </HStack>
                    <Flex justify="space-between" align="flex-end">
                      <Heading fontSize={{ base: "2xl", md: "4xl" }} color="white" lineHeight="1.1" maxW="70%">
                        {WORKS[0].title}
                      </Heading>
                      <Box w="48px" h="48px" borderRadius="full" bg="rgba(255,255,255,0.1)" backdropFilter="blur(10px)" display="flex" alignItems="center" justifyContent="center" transition="all 0.3s" _groupHover={{ bg: "var(--color-cyan)", color: "#000", transform: "scale(1.1)" }}>
                        <ArrowUpRight size={24} />
                      </Box>
                    </Flex>
                  </Box>
                </Box>
              </Box>
            </Link>
          </FadeIn>

          {/* 3 column grid */}
          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
            {WORKS.slice(1, 4).map((work, i) => (
              <FadeIn key={work.slug} delay={i * 0.1}>
                <Link href={`/work/${work.slug}`} passHref>
                  <Box
                    className="glass-panel" borderRadius="2xl" overflow="hidden" cursor="pointer" role="group"
                    transition="all 0.3s ease" _hover={{ borderColor: "var(--color-violet)", transform: "translateY(-6px)", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}
                  >
                    <Box h="260px" position="relative" overflow="hidden">
                      <Image
                        src={work.cover} alt={work.title} w="100%" h="100%" objectFit="cover"
                        transition="transform 0.6s ease" _groupHover={{ transform: "scale(1.05)" }}
                      />
                      <Box position="absolute" inset={0} bg="rgba(0,0,0,0.4)" opacity={0} _groupHover={{ opacity: 1 }} transition="opacity 0.3s" display="flex" alignItems="center" justifyContent="center">
                        <Box w="40px" h="40px" borderRadius="full" bg="white" color="black" display="flex" alignItems="center" justifyContent="center">
                          <ArrowUpRight size={20} />
                        </Box>
                      </Box>
                    </Box>
                    <Box p={5}>
                      <HStack mb={2}>
                        <Text fontSize="2xs" fontFamily="mono" color="var(--color-violet)" textTransform="uppercase" letterSpacing="0.1em">
                          {work.category}
                        </Text>
                        <Text fontSize="2xs" color="var(--color-stardust)">· {work.year}</Text>
                      </HStack>
                      <Heading fontSize="lg" color="var(--color-star)" lineHeight="1.3">
                        {work.title}
                      </Heading>
                    </Box>
                  </Box>
                </Link>
              </FadeIn>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── SERVICES ── */}
      <Box py={{ base: 20, md: 32 }} position="relative">
        <Container maxW="1400px" px={{ base: 5, md: 10, lg: 16 }}>
          <FadeIn>
            <HStack mb={3} spacing={2}>
              <Box w="24px" h="1px" background="linear-gradient(90deg, var(--color-violet), var(--color-cyan))" />
              <Text fontFamily="mono" fontSize="xs" letterSpacing="0.15em" textTransform="uppercase" color="var(--color-stardust)">
                What I Do
              </Text>
            </HStack>
            <Heading fontSize={{ base: "4xl", md: "5xl" }} lineHeight="1.05" color="var(--color-star)" mb={12}>
              Services
            </Heading>
          </FadeIn>

          <Grid templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }} gap={6}>
            {SERVICES.slice(0, 4).map((service, i) => (
              <FadeIn key={service.number} delay={i * 0.08}>
                <Box
                  className="glass-panel" p={8} borderRadius="2xl" role="group" cursor="pointer"
                  transition="all 0.3s" _hover={{ borderColor: "var(--color-cyan)", transform: "translateY(-4px)" }}
                  display="flex" flexDirection="column" h="100%"
                >
                  <Flex justify="space-between" align="start" mb={6}>
                    <Text fontFamily="mono" fontSize="2xl" fontWeight="900" color="rgba(255,255,255,0.1)" _groupHover={{ color: "var(--color-cyan)" }} transition="color 0.3s">
                      {service.number}
                    </Text>
                    <Box w="32px" h="32px" borderRadius="full" border="1px solid var(--color-glass-border)" display="flex" alignItems="center" justifyContent="center" color="var(--color-stardust)" _groupHover={{ bg: "var(--color-cyan)", color: "black", borderColor: "var(--color-cyan)" }} transition="all 0.3s">
                      <ArrowUpRight size={16} />
                    </Box>
                  </Flex>
                  <Heading fontSize="2xl" color="var(--color-star)" mb={4}>
                    {service.title}
                  </Heading>
                  <HStack flexWrap="wrap" spacing={2} mb={6} flex="1">
                    {service.deliverables.slice(0, 3).map((d) => (
                      <Badge key={d} bg="rgba(255,255,255,0.05)" color="var(--color-stardust)" border="1px solid rgba(255,255,255,0.1)" fontWeight="normal" px={2} py={1} borderRadius="md" mb={2}>
                        {d}
                      </Badge>
                    ))}
                  </HStack>
                  <HStack justify="space-between" pt={4} borderTop="1px solid var(--color-glass-border)">
                    <Text fontSize="xs" color="var(--color-stardust)" textTransform="uppercase" letterSpacing="0.1em">Starting from</Text>
                    <Text fontSize="md" fontWeight="700" color="var(--color-cyan)">{service.price}</Text>
                  </HStack>
                </Box>
              </FadeIn>
            ))}
          </Grid>
          <Box pt={10} textAlign="center">
            <Link href="/services" passHref>
              <Button variant="outline" size="lg" rightIcon={<ArrowRight size={16} />} borderColor="var(--color-glass-border)" color="var(--color-star)" _hover={{ borderColor: "var(--color-violet)", color: "white" }}>
                View All Services
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>

      {/* ── BLOG PREVIEW ── */}
      <Box py={{ base: 20, md: 32 }} position="relative">
        <Container maxW="1400px" px={{ base: 5, md: 10, lg: 16 }}>
          <Flex justify="space-between" align="flex-end" mb={12}>
            <FadeIn>
              <HStack mb={3} spacing={2}>
                <Box w="24px" h="1px" background="linear-gradient(90deg, var(--color-violet), var(--color-cyan))" />
                <Text fontFamily="mono" fontSize="xs" letterSpacing="0.15em" textTransform="uppercase" color="var(--color-stardust)">
                  Insights
                </Text>
              </HStack>
              <Heading fontSize={{ base: "4xl", md: "5xl" }} lineHeight="1.05" color="var(--color-star)">
                Articles
              </Heading>
            </FadeIn>
            <FadeIn direction="left">
              <Link href="/blog" passHref>
                <Button
                  variant="outline" size="md" display={{ base: "none", md: "flex" }}
                  rightIcon={<ArrowUpRight size={16} />}
                  borderColor="var(--color-glass-border)" color="var(--color-star)" bg="var(--color-glass-bg)" backdropFilter="blur(10px)"
                  _hover={{ borderColor: "var(--color-violet)", color: "white", transform: "translateY(-2px)" }}
                >
                  All Articles
                </Button>
              </Link>
            </FadeIn>
          </Flex>

          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
            {blogPosts.map((post, i) => (
              <FadeIn key={post.link} delay={i * 0.1}>
                <Box
                  as="a" href={post.link} target="_blank" rel="noopener noreferrer"
                  display="block" role="group" cursor="pointer"
                  className="glass-panel" borderRadius="2xl" p={4}
                  transition="all 0.3s ease" _hover={{ borderColor: "var(--color-violet)", transform: "translateY(-6px)" }}
                >
                  <Box h="200px" borderRadius="xl" mb={5} position="relative" overflow="hidden" bg="rgba(0,0,0,0.3)">
                    {post.thumbnail ? (
                      <Image src={post.thumbnail} alt={post.title} w="100%" h="100%" objectFit="cover" transition="transform 0.4s ease" _groupHover={{ transform: "scale(1.05)" }} />
                    ) : (
                      <Box position="absolute" inset={0} background="linear-gradient(135deg, rgba(124,58,237,0.2), rgba(6,182,212,0.2))" />
                    )}
                    <Box position="absolute" bottom={0} left={0} right={0} h="50%" bgGradient="linear(to-t, rgba(0,0,0,0.8), transparent)" opacity={0} _groupHover={{ opacity: 1 }} transition="opacity 0.3s" />
                    <Box position="absolute" top={4} left={4}>
                      <Badge bg="rgba(0,0,0,0.6)" color="white" backdropFilter="blur(4px)" px={2} py={1} borderRadius="md" fontWeight="normal" border="1px solid rgba(255,255,255,0.1)">
                        {post.category}
                      </Badge>
                    </Box>
                  </Box>
                  <Box px={2} pb={2}>
                    <HStack mb={3} spacing={3}>
                      <Text fontFamily="mono" fontSize="xs" color="var(--color-stardust)">{post.date}</Text>
                      <Text fontSize="xs" color="var(--color-stardust)">·</Text>
                      <Text fontFamily="mono" fontSize="xs" color="var(--color-stardust)">{post.readTime} read</Text>
                    </HStack>
                    <Heading fontSize="lg" lineHeight="1.4" color="var(--color-star)" mb={3} _groupHover={{ color: "var(--color-cyan)" }} transition="color 0.2s" noOfLines={2}>
                      {post.title}
                    </Heading>
                    <Text fontSize="sm" color={bodyText} lineHeight="1.7" noOfLines={2}>
                      {post.excerpt}
                    </Text>
                  </Box>
                </Box>
              </FadeIn>
            ))}
          </Grid>
        </Container>
      </Box>
    </PageWrapper>
  );
}
