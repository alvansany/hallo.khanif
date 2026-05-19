"use client";
import {
  Box,
  Container,
  Grid,
  Heading,
  Text,
  HStack,
  Badge,
  Flex,
  Button,
  Image,
} from "@chakra-ui/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { WORKS } from "@/lib/data";
import FadeIn from "@/components/FadeIn";
import PageWrapper from "@/components/PageWrapper";
import { useState } from "react";

const ALL_TAGS = ["All", ...Array.from(new Set(WORKS.flatMap((w) => w.tags)))];

export default function WorkPage() {
  const [activeTag, setActiveTag] = useState("All");

  const filtered =
    activeTag === "All"
      ? WORKS
      : WORKS.filter((w) => w.tags.includes(activeTag));

  return (
    <PageWrapper>
      {/* Header */}
      <Box py={{ base: 20, md: 32 }} position="relative">
        <Container maxW="1400px" px={{ base: 5, md: 10, lg: 16 }}>
          <FadeIn>
            <HStack mb={3} spacing={2}>
              <Box w="24px" h="1px" background="linear-gradient(90deg, var(--color-violet), var(--color-cyan))" />
              <Text fontFamily="mono" fontSize="xs" letterSpacing="0.15em" textTransform="uppercase" color="var(--color-stardust)">
                Portfolio
              </Text>
            </HStack>
          </FadeIn>
          <Flex direction={{ base: "column", md: "row" }} justify="space-between" align={{ base: "flex-start", md: "flex-end" }} gap={6}>
            <FadeIn delay={0.1}>
              <Heading
                as="h1" fontSize={{ base: "5xl", md: "7xl" }} fontFamily="heading" fontWeight="900"
                lineHeight="0.95" letterSpacing="-0.03em" color="var(--color-star)"
              >
                Selected{" "}
                <Box as="span" fontStyle="italic" fontWeight="400" sx={{ background: "linear-gradient(135deg, var(--color-violet), var(--color-cyan))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Works
                </Box>
              </Heading>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Text fontSize="md" color="var(--color-stardust)" maxW="320px" lineHeight="1.7">
                A curated collection of projects spanning product design, engineering, brand identity, and design systems.
              </Text>
            </FadeIn>
          </Flex>

          {/* Filters */}
          <FadeIn delay={0.25}>
            <HStack mt={12} spacing={3} flexWrap="wrap">
              {ALL_TAGS.map((tag) => (
                <Button
                  key={tag} size="sm" variant="outline" borderRadius="full"
                  onClick={() => setActiveTag(tag)}
                  fontFamily="mono" fontSize="xs" textTransform="uppercase" letterSpacing="0.1em"
                  border="1px solid"
                  borderColor={activeTag === tag ? "var(--color-cyan)" : "var(--color-glass-border)"}
                  bg={activeTag === tag ? "rgba(6,182,212,0.1)" : "rgba(255,255,255,0.02)"}
                  color={activeTag === tag ? "var(--color-cyan)" : "var(--color-stardust)"}
                  _hover={{ borderColor: "var(--color-violet)", color: "white", bg: "rgba(124,58,237,0.1)", transform: "translateY(-2px)" }}
                  transition="all 0.3s ease"
                  backdropFilter="blur(10px)"
                >
                  {tag}
                </Button>
              ))}
            </HStack>
          </FadeIn>
        </Container>
      </Box>

      {/* Works Grid */}
      <Box py={{ base: 16, md: 24 }} position="relative">
        <Container maxW="1400px" px={{ base: 5, md: 10, lg: 16 }}>
          {/* Featured first item */}
          {activeTag === "All" && filtered.length > 0 && (
            <FadeIn>
              <Link href={`/work/${filtered[0].slug}`} passHref>
                <Box
                  role="group" cursor="pointer" mb={8}
                  className="glass-panel" borderRadius="2xl" overflow="hidden"
                  transition="all 0.4s ease" _hover={{ borderColor: "var(--color-cyan)", transform: "translateY(-4px)", boxShadow: "0 10px 40px rgba(0,0,0,0.5)" }}
                >
                  <Grid templateColumns={{ base: "1fr", md: "1.2fr 1fr" }} gap={0}>
                    <Box h={{ base: "280px", md: "520px" }} position="relative" overflow="hidden">
                      <Image
                        src={filtered[0].cover} alt={filtered[0].title} w="100%" h="100%" objectFit="cover"
                        transition="transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)" _groupHover={{ transform: "scale(1.05)" }}
                      />
                      <Box position="absolute" inset={0} bg="rgba(0,0,0,0.3)" opacity={0} _groupHover={{ opacity: 1 }} transition="opacity 0.4s" />
                    </Box>
                    <Box p={{ base: 8, md: 12 }} display="flex" flexDirection="column" justifyContent="center">
                      <HStack mb={6}>
                        <Badge bg="rgba(255,255,255,0.05)" color="var(--color-stardust)" border="1px solid rgba(255,255,255,0.1)" px={3} py={1} borderRadius="full" fontWeight="normal">
                          {filtered[0].category}
                        </Badge>
                        <Text fontSize="xs" color="var(--color-stardust)" fontFamily="mono">{filtered[0].year}</Text>
                      </HStack>
                      <Heading fontSize={{ base: "3xl", md: "5xl" }} color="var(--color-star)" lineHeight="1.1" mb={6}>
                        {filtered[0].title}
                      </Heading>
                      <Text fontSize="md" color="var(--color-stardust)" lineHeight="1.8" mb={8}>
                        {filtered[0].summary}
                      </Text>
                      <HStack flexWrap="wrap" spacing={2} mb={12}>
                        {filtered[0].tags.map((t) => (
                          <Badge key={t} bg="transparent" border="1px solid var(--color-glass-border)" color="var(--color-cyan)" borderRadius="md" px={2} py={1} fontWeight="normal">
                            {t}
                          </Badge>
                        ))}
                      </HStack>
                      <HStack justify="space-between" align="center" pt={6} borderTop="1px solid var(--color-glass-border)">
                        <Text fontSize="sm" color="var(--color-stardust)">
                          <Box as="span" fontWeight="700" color="var(--color-star)">Client: </Box>
                          {filtered[0].client}
                        </Text>
                        <Box w="48px" h="48px" borderRadius="full" border="1px solid var(--color-glass-border)" display="flex" alignItems="center" justifyContent="center" color="var(--color-star)" transition="all 0.3s" _groupHover={{ bg: "var(--color-cyan)", borderColor: "var(--color-cyan)", color: "black", transform: "rotate(45deg)" }}>
                          <ArrowUpRight size={24} />
                        </Box>
                      </HStack>
                    </Box>
                  </Grid>
                </Box>
              </Link>
            </FadeIn>
          )}

          {/* Rest of works */}
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={6}>
            {(activeTag === "All" ? filtered.slice(1) : filtered).map((work, i) => (
              <FadeIn key={work.slug} delay={i * 0.08}>
                <Link href={`/work/${work.slug}`} passHref>
                  <Box
                    role="group" cursor="pointer"
                    className="glass-panel" borderRadius="2xl" overflow="hidden"
                    transition="all 0.3s ease" _hover={{ borderColor: "var(--color-violet)", transform: "translateY(-6px)", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}
                  >
                    <Box h="280px" position="relative" overflow="hidden" bg="rgba(0,0,0,0.5)">
                      <Image
                        src={work.cover} alt={work.title} w="100%" h="100%" objectFit="cover"
                        transition="transform 0.6s ease" _groupHover={{ transform: "scale(1.05)" }}
                      />
                      <Box position="absolute" inset={0} bg="rgba(0,0,0,0.4)" opacity={0} _groupHover={{ opacity: 1 }} transition="opacity 0.3s" display="flex" alignItems="center" justifyContent="center">
                        <Box w="48px" h="48px" borderRadius="full" bg="white" color="black" display="flex" alignItems="center" justifyContent="center" transform="rotate(0deg)" _groupHover={{ transform: "rotate(45deg)" }} transition="transform 0.3s">
                          <ArrowUpRight size={24} />
                        </Box>
                      </Box>
                    </Box>
                    <Box p={6}>
                      <HStack mb={3}>
                        <Text fontSize="2xs" fontFamily="mono" color="var(--color-violet)" textTransform="uppercase" letterSpacing="0.1em">
                          {work.category}
                        </Text>
                        <Text fontSize="2xs" color="var(--color-stardust)">· {work.year}</Text>
                      </HStack>
                      <Heading fontSize="xl" color="var(--color-star)" lineHeight="1.3" mb={3}>
                        {work.title}
                      </Heading>
                      <Text fontSize="sm" color="var(--color-stardust)" lineHeight="1.7" noOfLines={2}>
                        {work.summary}
                      </Text>
                    </Box>
                  </Box>
                </Link>
              </FadeIn>
            ))}
          </Grid>

          {filtered.length === 0 && (
            <Box textAlign="center" py={20} className="glass-panel" borderRadius="2xl">
              <Text fontSize="lg" color="var(--color-stardust)">No projects found in this sector of the galaxy.</Text>
            </Box>
          )}
        </Container>
      </Box>
    </PageWrapper>
  );
}
