"use client";

import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Tag,
  Text,
  VStack,
  useColorModeValue,
  Badge,
  AspectRatio,
  Image,
} from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
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
import { useRef, useEffect, useState } from "react";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);

const STAT_ICONS = [<Zap key="z" />, <Award key="a" />, <TrendingUp key="t" />, <Users key="u" />];



export default function HomePage() {
  const heroRef = useRef(null);
  const [blogPosts, setBlogPosts] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/medium', { cache: 'no-store' })
      .then(res => res.json())
      .then(data => {
        if (data.posts) {
          setBlogPosts(data.posts.slice(0, 3));
        }
      })
      .catch(err => console.error("Failed to fetch medium posts:", err));
  }, []);

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  const bg = useColorModeValue("white", "gray.900");
  const cardBg = useColorModeValue("gray.50", "gray.800");
  const borderColor = useColorModeValue("gray.100", "gray.700");
  const subtleText = useColorModeValue("gray.500", "gray.400");
  const bodyText = useColorModeValue("gray.700", "gray.300");
  const headingColor = useColorModeValue("gray.900", "white");

  return (
    <PageWrapper>
      {/* ── HERO ── */}
      <Box
        ref={heroRef}
        position="relative"
        minH={{ base: "90vh", md: "95vh" }}
        bg={bg}
        overflow="hidden"
        display="flex"
        alignItems="center"
      >
        {/* Decorative grid lines */}
        <Box
          position="absolute"
          inset={0}
          opacity={0.04}
          backgroundImage="linear-gradient(#FE4820 1px, transparent 1px), linear-gradient(90deg, #FE4820 1px, transparent 1px)"
          backgroundSize="80px 80px"
          pointerEvents="none"
        />
        {/* Decorative blob */}
        <Box
          position="absolute"
          top="-20%"
          right="-10%"
          w={{ base: "400px", md: "700px" }}
          h={{ base: "400px", md: "700px" }}
          borderRadius="full"
          bg="brand.500"
          opacity={0.05}
          filter="blur(80px)"
          pointerEvents="none"
        />

        <MotionBox style={{ opacity: heroOpacity, y: heroY }} width="100%">
          <Container maxW="1400px" px={{ base: 5, md: 10, lg: 16 }} py={{ base: 20, md: 28 }}>
            <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={{ base: 12, lg: 20 }} alignItems="center">
              {/* Left */}
              <GridItem>
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <HStack mb={6} spacing={3}>
                    <Badge
                      colorScheme="green"
                      variant="subtle"
                      px={3}
                      py={1}
                      borderRadius="full"
                      fontSize="xs"
                      fontWeight="600"
                    >
                      ● Open to Opportunities
                    </Badge>
                  </HStack>
                </MotionBox>

                <MotionHeading
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  as="h1"
                  fontSize={{ base: "5xl", sm: "6xl", md: "7xl", lg: "8xl" }}
                  fontFamily="heading"
                  fontWeight="900"
                  lineHeight="0.95"
                  letterSpacing="-0.03em"
                  color={headingColor}
                  mb={6}
                >
                  Design.{" "}
                  <Box as="span" color="brand.500">
                    Think.
                  </Box>{" "}
                  <Box as="span" fontStyle="italic" fontWeight="400">
                    Solve.
                  </Box>
                </MotionHeading>

                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Text fontSize={{ base: "lg", md: "xl" }} color={bodyText} lineHeight="1.7" maxW="500px" mb={10}>
                    UI/UX Designer with 5+ years delivering 15+ digital products. I create intuitive experiences through design thinking, AI workflows, and human-centered design.
                  </Text>

                  <HStack spacing={4} flexWrap="wrap">
                    <Link href="/work" passHref>
                      <Button
                        colorScheme="brand"
                        variant="solid"
                        size="lg"
                        px={8}
                        rightIcon={<ArrowRight size={18} />}
                        _hover={{ transform: "translateY(-3px)", shadow: "lg" }}
                        transition="all 0.25s"
                      >
                        View My Work
                      </Button>
                    </Link>
                    <Link href="/contact" passHref>
                      <Button
                        variant="outline"
                        size="lg"
                        px={8}
                        borderColor={borderColor}
                        color={headingColor}
                        _hover={{ borderColor: "brand.500", color: "brand.500", transform: "translateY(-3px)" }}
                        transition="all 0.25s"
                      >
                        Let&apos;s Talk
                      </Button>
                    </Link>
                  </HStack>
                </MotionBox>

                {/* Metrics strip */}
                <MotionBox
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  mt={14}
                  pt={8}
                  borderTop="1px solid"
                  borderColor={borderColor}
                >
                  <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                    {STATS.map((stat, i) => (
                      <Box key={i}>
                        <Text
                          fontSize={{ base: "2xl", md: "3xl" }}
                          fontFamily="heading"
                          fontWeight="900"
                          color="brand.500"
                          lineHeight="1"
                          mb={1}
                        >
                          {stat.value}
                        </Text>
                        <Text fontSize="xs" color={subtleText} lineHeight="1.4">
                          {stat.label}
                        </Text>
                      </Box>
                    ))}
                  </Grid>
                </MotionBox>
              </GridItem>

              {/* Right — Profile Photo */}
              <GridItem display={{ base: "none", lg: "block" }}>
                <MotionBox
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  // @ts-ignore
                  transition={{ duration: 0.8, delay: 0.3 }}
                  position="relative"
                >
                  {/* Photo frame */}
                  <Box
                    position="relative"
                    overflow="hidden"
                    maxH="600px"
                    bg="gray.900"
                  >
                    <Image
                      src="/images/profile-editorial.png"
                      alt="Khanif Alfan — UI/UX Designer"
                      w="100%"
                      h="560px"
                      objectFit="cover"
                      objectPosition="top center"
                    />
                    {/* Bottom gradient overlay */}
                    <Box
                      position="absolute"
                      bottom={0}
                      left={0}
                      right={0}
                      h="180px"
                      bgGradient="linear(to-t, gray.900 0%, transparent 100%)"
                    />
                    {/* Name tag overlay */}
                    <Box
                      position="absolute"
                      bottom={0}
                      left={0}
                      right={0}
                      p={8}
                      zIndex={2}
                    >
                      <Text fontSize="xs" fontWeight="700" letterSpacing="0.12em" textTransform="uppercase" color="whiteAlpha.600" mb={1}>
                        UI/UX Designer
                      </Text>
                      <Text fontSize="2xl" fontFamily="heading" fontWeight="700" color="white" lineHeight="1.2">
                        Khanif Alfan
                      </Text>
                    </Box>
                    {/* Brand accent top-right */}
                    <Box
                      position="absolute"
                      top={0}
                      right={0}
                      w="6px"
                      h="80px"
                      bg="brand.500"
                    />
                    <Box
                      position="absolute"
                      top={0}
                      right={0}
                      w="80px"
                      h="6px"
                      bg="brand.500"
                    />
                  </Box>

                  {/* Floating stats card */}
                  <Box
                    position="absolute"
                    bottom="-24px"
                    right="-24px"
                    bg={bg}
                    p={5}
                    shadow="2xl"
                    border="1px solid"
                    borderColor={borderColor}
                    minW="180px"
                    zIndex={10}
                  >
                    <Text fontSize="xs" color={subtleText} mb={1} fontWeight="600" letterSpacing="0.08em" textTransform="uppercase">
                      Delivered
                    </Text>
                    <Text fontSize="3xl" fontFamily="heading" fontWeight="900" color="brand.500" lineHeight="1">
                      15+
                    </Text>
                    <Text fontSize="xs" color={subtleText}>
                      Digital Products
                    </Text>
                  </Box>
                </MotionBox>
              </GridItem>
            </Grid>


            {/* Social links */}
            <MotionBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              mt={{ base: 10, lg: 0 }}
              position={{ base: "static", lg: "absolute" }}
              right={{ lg: 16 }}
              top={{ lg: "50%" }}
              style={{ translateY: "-50%" } as React.CSSProperties}
            >
              <VStack spacing={4} display={{ base: "none", lg: "flex" }}>
                {[
                  { icon: <LinkedinIcon size={16} />, href: PROFILE.social.linkedin },
                  { icon: <GithubIcon size={16} />, href: PROFILE.social.github },
                  { icon: <DribbbleIcon size={16} />, href: PROFILE.social.dribbble },
                  { icon: <TwitterIcon size={16} />, href: PROFILE.social.twitter },
                ].map((s, i) => (
                  <Box
                    key={i}
                    as="a"
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    color={subtleText}
                    _hover={{ color: "brand.500", transform: "translateX(-4px)" }}
                    transition="all 0.2s"
                  >
                    {s.icon}
                  </Box>
                ))}
                <Box w="1px" h="60px" bg={borderColor} />
              </VStack>
            </MotionBox>
          </Container>
        </MotionBox>
      </Box>

      {/* ── ABOUT TEASER ── */}
      <Box bg={useColorModeValue("gray.50", "gray.800")} py={{ base: 20, md: 32 }}>
        <Container maxW="1400px" px={{ base: 5, md: 10, lg: 16 }}>
          <Grid templateColumns={{ base: "1fr", md: "1fr 2fr" }} gap={{ base: 10, md: 20 }} alignItems="center">
            <GridItem>
              <FadeIn>
                <Text fontSize="xs" fontWeight="700" letterSpacing="0.12em" textTransform="uppercase" color="brand.500" mb={4}>
                  About Me
                </Text>
                <Heading fontSize={{ base: "4xl", md: "5xl" }} lineHeight="1.1" mb={0} color={headingColor}>
                  Crafting with
                  <Box as="span" fontStyle="italic" color="brand.500"> intention.</Box>
                </Heading>
              </FadeIn>
            </GridItem>
            <GridItem>
              <FadeIn delay={0.15}>
                <Text fontSize={{ base: "lg", md: "xl" }} color={bodyText} lineHeight="1.8" mb={8}>
                  {PROFILE.bio}
                </Text>
                <Grid templateColumns="repeat(2, 1fr)" gap={6} mb={8}>
                  {[
                    { label: "Specialization", value: "UI/UX & Interaction Design" },
                    { label: "Experience", value: "5+ Years" },
                    { label: "Location", value: "Sleman, DI Yogyakarta" },
                    { label: "Education", value: "Teknik Informatika — UAD" },
                  ].map((item) => (
                    <Box key={item.label}>
                      <Text fontSize="xs" fontWeight="700" letterSpacing="0.1em" textTransform="uppercase" color={subtleText} mb={1}>
                        {item.label}
                      </Text>
                      <Text fontWeight="600" color={headingColor}>
                        {item.value}
                      </Text>
                    </Box>
                  ))}
                </Grid>
                <HStack>
                  <Link href="/work" passHref>
                    <Button variant="solid" colorScheme="brand" rightIcon={<ArrowUpRight size={16} />} size="md" px={6}>
                      See My Work
                    </Button>
                  </Link>
                </HStack>
              </FadeIn>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      {/* ── SKILLS / STATS STRIP ── */}
      <Box bg="brand.500" py={10} overflow="hidden">
        <Container maxW="1400px" px={{ base: 5, md: 10, lg: 16 }}>
          <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }} gap={0}>
            {STATS.map((stat, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Box
                  textAlign="center"
                  py={6}
                  px={4}
                  borderRight={i < 3 ? "1px solid" : "none"}
                  borderColor="whiteAlpha.300"
                >
                  <HStack justify="center" mb={2}>
                    <Box color="whiteAlpha.700" fontSize="lg">
                      {STAT_ICONS[i]}
                    </Box>
                  </HStack>
                  <Text fontSize={{ base: "3xl", md: "4xl" }} fontFamily="heading" fontWeight="900" color="white" lineHeight="1">
                    {stat.value}
                  </Text>
                  <Text fontSize="xs" color="whiteAlpha.800" mt={1} fontWeight="500" textTransform="uppercase" letterSpacing="0.08em">
                    {stat.label}
                  </Text>
                </Box>
              </FadeIn>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── EXPERIENCE ── */}
      <Box bg={bg} py={{ base: 20, md: 32 }}>
        <Container maxW="1400px" px={{ base: 5, md: 10, lg: 16 }}>
          <FadeIn>
            <HStack mb={16} spacing={6} align="flex-end" justify="space-between" flexWrap="wrap" gap={4}>
              <Box>
                <Text fontSize="xs" fontWeight="700" letterSpacing="0.12em" textTransform="uppercase" color="brand.500" mb={4}>
                  Career
                </Text>
                <Heading fontSize={{ base: "4xl", md: "5xl" }} lineHeight="1.05" color={headingColor}>
                  Work{" "}
                  <Box as="span" fontStyle="italic" fontWeight="400">Experience</Box>
                </Heading>
              </Box>
            </HStack>
          </FadeIn>

          <VStack spacing={0} align="stretch">
            {EXPERIENCE.map((exp, i) => (
              <FadeIn key={exp.company} delay={i * 0.08}>
                <Box
                  py={8}
                  borderTop="1px solid"
                  borderColor={borderColor}
                  role="group"
                  _last={{ borderBottom: "1px solid", borderBottomColor: borderColor }}
                >
                  <Grid templateColumns={{ base: "1fr", md: "240px 1fr auto" }} gap={{ base: 3, md: 8 }} alignItems="start">
                    {/* Left: company + type */}
                    <Box>
                      <Text fontFamily="heading" fontSize="xs" fontWeight="700" letterSpacing="0.1em" textTransform="uppercase" color={subtleText} mb={1}>
                        {exp.duration}
                      </Text>
                      <Text fontWeight="700" fontSize="lg" color={headingColor} mb={1}>
                        {exp.company}
                      </Text>
                      <Badge
                        colorScheme={exp.type === "Full Time" ? "green" : exp.type === "Freelance" ? "orange" : "blue"}
                        variant="subtle"
                        fontSize="2xs"
                        px={2}
                        borderRadius="none"
                        textTransform="uppercase"
                        letterSpacing="0.06em"
                      >
                        {exp.type}
                      </Badge>
                    </Box>

                    {/* Center: role + description */}
                    <Box>
                      <Text fontSize="xl" fontWeight="700" color="brand.500" mb={2} fontFamily="heading">
                        {exp.role}
                      </Text>
                      <Text fontSize="sm" color={bodyText} lineHeight="1.8" maxW="580px">
                        {exp.description}
                      </Text>
                    </Box>

                    {/* Right: location */}
                    <Box textAlign={{ base: "left", md: "right" }} minW="160px">
                      <Text fontSize="xs" color={subtleText} fontWeight="500">
                        {exp.location}
                      </Text>
                    </Box>
                  </Grid>
                </Box>
              </FadeIn>
            ))}
          </VStack>
        </Container>
      </Box>

      {/* ── SELECTED WORKS ── */}
      <Box py={{ base: 20, md: 32 }} bg={bg}>
        <Container maxW="1400px" px={{ base: 5, md: 10, lg: 16 }}>
          <Flex justify="space-between" align="flex-end" mb={16}>
            <FadeIn>
              <Box>
                <Text fontSize="xs" fontWeight="700" letterSpacing="0.12em" textTransform="uppercase" color="brand.500" mb={4}>
                  Selected Works
                </Text>
                <Heading fontSize={{ base: "4xl", md: "5xl" }} lineHeight="1.05" color={headingColor}>
                  Recent Projects
                </Heading>
              </Box>
            </FadeIn>
            <FadeIn direction="left">
              <Link href="/work" passHref>
                <Button
                  variant="outline"
                  rightIcon={<ArrowUpRight size={16} />}
                  size="md"
                  display={{ base: "none", md: "flex" }}
                  borderColor={borderColor}
                  _hover={{ borderColor: "brand.500", color: "brand.500" }}
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
                position="relative"
                overflow="hidden"
                cursor="pointer"
                role="group"
                mb={6}
                _hover={{ "& .overlay": { opacity: 1 } }}
              >
                <Box
                  h={{ base: "300px", md: "500px" }}
                  bgGradient="linear(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)"
                  position="relative"
                  overflow="hidden"
                >
                  <Box
                    className="overlay"
                    position="absolute"
                    inset={0}
                    bg="blackAlpha.500"
                    opacity={0}
                    transition="opacity 0.4s ease"
                    zIndex={1}
                  />
                  <Image 
                    src={WORKS[0].cover} 
                    alt={WORKS[0].title}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    transition="transform 0.4s ease"
                    _groupHover={{ transform: "scale(1.05)" }}
                  />
                  <Box
                    position="absolute"
                    bottom={0}
                    left={0}
                    right={0}
                    p={{ base: 6, md: 10 }}
                    zIndex={2}
                    bgGradient="linear(to-t, rgba(0,0,0,0.85) 0%, transparent 100%)"
                  >
                    <HStack mb={3}>
                      <Tag size="sm" colorScheme="brand" borderRadius="none">
                        {WORKS[0].category}
                      </Tag>
                      <Text fontSize="xs" color="whiteAlpha.700">
                        {WORKS[0].year}
                      </Text>
                    </HStack>
                    <Flex justify="space-between" align="flex-end">
                      <Heading fontSize={{ base: "2xl", md: "4xl" }} color="white" lineHeight="1.1" maxW="60%">
                        {WORKS[0].title}
                      </Heading>
                      <Box
                        color="white"
                        _groupHover={{ color: "white", transform: "translate(4px, -4px)" }}
                        transition="all 0.3s"
                      >
                        <ArrowUpRight size={28} />
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
                    position="relative"
                    overflow="hidden"
                    cursor="pointer"
                    role="group"
                    _hover={{ transform: "translateY(-6px)" }}
                    transition="transform 0.3s ease"
                  >
                    <Box
                      h="260px"
                      position="relative"
                      overflow="hidden"
                      bgGradient={
                        i === 0
                          ? "linear(135deg, #667eea 0%, #764ba2 100%)"
                          : i === 1
                            ? "linear(135deg, #f093fb 0%, #f5576c 100%)"
                            : "linear(135deg, #4facfe 0%, #00f2fe 100%)"
                      }
                    >
                      <Image 
                        src={work.cover} 
                        alt={work.title}
                        w="100%"
                        h="100%"
                        objectFit="cover"
                        transition="transform 0.4s ease"
                        _groupHover={{ transform: "scale(1.05)" }}
                      />
                      <Box
                        position="absolute"
                        inset={0}
                        bg="blackAlpha.400"
                        opacity={0}
                        _groupHover={{ opacity: 1 }}
                        transition="opacity 0.3s"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <ArrowUpRight size={32} color="white" />
                      </Box>
                    </Box>
                    <Box p={5} bg={cardBg}>
                      <HStack mb={2}>
                        <Text fontSize="xs" color={subtleText} fontWeight="600" textTransform="uppercase" letterSpacing="0.08em">
                          {work.category}
                        </Text>
                        <Text fontSize="xs" color={subtleText}>
                          · {work.year}
                        </Text>
                      </HStack>
                      <Heading fontSize="lg" color={headingColor} lineHeight="1.3">
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

      {/* ── SERVICES PREVIEW ── */}
      <Box bg={useColorModeValue("gray.50", "gray.800")} py={{ base: 20, md: 32 }}>
        <Container maxW="1400px" px={{ base: 5, md: 10, lg: 16 }}>
          <Flex justify="space-between" align="flex-end" mb={16}>
            <FadeIn>
              <Box>
                <Text fontSize="xs" fontWeight="700" letterSpacing="0.12em" textTransform="uppercase" color="brand.500" mb={4}>
                  What I Do
                </Text>
                <Heading fontSize={{ base: "4xl", md: "5xl" }} lineHeight="1.05" color={headingColor}>
                  Services
                </Heading>
              </Box>
            </FadeIn>
          </Flex>

          <VStack spacing={0} align="stretch">
            {SERVICES.slice(0, 4).map((service, i) => (
              <FadeIn key={service.number} delay={i * 0.08}>
                <Box
                  py={8}
                  px={6}
                  borderTop="1px solid"
                  borderColor={borderColor}
                  role="group"
                  cursor="pointer"
                  _hover={{ bg: cardBg, px: 8 }}
                  transition="all 0.25s ease"
                >
                  <Grid templateColumns={{ base: "1fr", md: "80px 1fr auto" }} gap={6} alignItems="center">
                    <Text fontFamily="heading" fontSize="3xl" fontWeight="900" color={borderColor} _groupHover={{ color: "brand.500" }} transition="color 0.2s">
                      {service.number}
                    </Text>
                    <Box>
                      <Heading fontSize={{ base: "xl", md: "2xl" }} color={headingColor} mb={2}>
                        {service.title}
                      </Heading>
                      <HStack flexWrap="wrap" spacing={2}>
                        {service.deliverables.slice(0, 3).map((d) => (
                          <Tag key={d} size="sm" borderRadius="none" colorScheme="gray" variant="subtle">
                            {d}
                          </Tag>
                        ))}
                      </HStack>
                    </Box>
                    <HStack>
                      <Text fontSize="sm" fontWeight="700" color="brand.500">{service.price}</Text>
                      <Box color={subtleText} _groupHover={{ color: "brand.500", transform: "translate(4px, -4px)" }} transition="all 0.2s">
                        <ArrowUpRight size={20} />
                      </Box>
                    </HStack>
                  </Grid>
                </Box>
              </FadeIn>
            ))}
            <Box borderTop="1px solid" borderColor={borderColor} pt={8} textAlign="center">
              <Link href="/services" passHref>
                <Button variant="outline" size="lg" rightIcon={<ArrowRight size={16} />} borderColor={borderColor} _hover={{ borderColor: "brand.500", color: "brand.500" }}>
                  View All Services
                </Button>
              </Link>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* ── BLOG PREVIEW ── */}
      <Box py={{ base: 20, md: 32 }} bg={bg}>
        <Container maxW="1400px" px={{ base: 5, md: 10, lg: 16 }}>
          <Flex justify="space-between" align="flex-end" mb={16}>
            <FadeIn>
              <Box>
                <Text fontSize="xs" fontWeight="700" letterSpacing="0.12em" textTransform="uppercase" color="brand.500" mb={4}>
                  Design Insights
                </Text>
                <Heading fontSize={{ base: "4xl", md: "5xl" }} lineHeight="1.05" color={headingColor}>
                  Latest Articles
                </Heading>
              </Box>
            </FadeIn>
            <FadeIn direction="left">
              <Link href="/blog" passHref>
                <Button
                  variant="outline"
                  rightIcon={<ArrowUpRight size={16} />}
                  size="md"
                  display={{ base: "none", md: "flex" }}
                  borderColor={borderColor}
                  _hover={{ borderColor: "brand.500", color: "brand.500" }}
                >
                  All Articles
                </Button>
              </Link>
            </FadeIn>
          </Flex>

          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
            {blogPosts.map((post, i) => (
              <FadeIn key={post.id} delay={i * 0.1}>
                <Box
                  as="a"
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  display="block"
                  role="group"
                  cursor="pointer"
                  _hover={{ transform: "translateY(-4px)" }}
                  transition="transform 0.3s ease"
                >
                  <Box
                    h="200px"
                    bg={cardBg}
                    mb={5}
                    position="relative"
                    overflow="hidden"
                  >
                    {post.thumbnail ? (
                      <Image
                        src={post.thumbnail}
                        alt={post.title}
                        w="100%"
                        h="100%"
                        objectFit="cover"
                        transition="transform 0.4s ease"
                        _groupHover={{ transform: "scale(1.05)" }}
                      />
                    ) : (
                      <Box
                        position="absolute"
                        inset={0}
                        bgGradient={
                          i === 0
                            ? "linear(135deg, #f5f5f5 0%, #e8e8e8 100%)"
                            : i === 1
                              ? "linear(135deg, #fff0ed 0%, #ffd4c9 100%)"
                              : "linear(135deg, #f0f4ff 0%, #d6e4ff 100%)"
                        }
                        _dark={
                          i === 0
                            ? { background: "linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)" }
                            : i === 1
                              ? { background: "linear-gradient(135deg, #3d1a0d 0%, #2d1008 100%)" }
                              : { background: "linear-gradient(135deg, #0d1a3d 0%, #081030 100%)" }
                        }
                      />
                    )}
                    <Box
                      position="absolute"
                      bottom={0}
                      left={0}
                      right={0}
                      h="40%"
                      bgGradient="linear(to-t, blackAlpha.200, transparent)"
                      opacity={0}
                      _groupHover={{ opacity: 1 }}
                      transition="opacity 0.3s"
                    />
                    <Box
                      position="absolute"
                      top={4}
                      left={4}
                    >
                      <Tag size="sm" colorScheme="brand" borderRadius="none" fontSize="xs">
                        {post.category}
                      </Tag>
                    </Box>
                    {!post.thumbnail && (
                      <Box
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                        fontSize="5xl"
                        opacity={0.06}
                        fontFamily="heading"
                        fontWeight="900"
                      >
                        {String(post.id).padStart(2, "0")}
                      </Box>
                    )}
                  </Box>
                  <Box>
                    <HStack mb={3} spacing={3}>
                      <Text fontSize="xs" color={subtleText}>{post.date}</Text>
                      <Text fontSize="xs" color={subtleText}>·</Text>
                      <Text fontSize="xs" color={subtleText}>{post.readTime} read</Text>
                    </HStack>
                    <Heading
                      fontSize="lg"
                      lineHeight="1.4"
                      color={headingColor}
                      mb={3}
                      _groupHover={{ color: "brand.500" }}
                      transition="color 0.2s"
                      noOfLines={2}
                    >
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
