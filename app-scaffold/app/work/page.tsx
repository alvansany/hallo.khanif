"use client";
import {
  Box,
  Container,
  Grid,
  Heading,
  Text,
  HStack,
  Tag,
  Flex,
  Button,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { WORKS } from "@/lib/data";
import FadeIn from "@/components/FadeIn";
import PageWrapper from "@/components/PageWrapper";
import { useState } from "react";

const ALL_TAGS = ["All", ...Array.from(new Set(WORKS.flatMap((w) => w.tags)))];

const GRADIENTS = [
  "linear(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
  "linear(135deg, #667eea 0%, #764ba2 100%)",
  "linear(135deg, #f093fb 0%, #f5576c 100%)",
  "linear(135deg, #4facfe 0%, #00f2fe 100%)",
  "linear(135deg, #43e97b 0%, #38f9d7 100%)",
  "linear(135deg, #fa709a 0%, #fee140 100%)",
];

export default function WorkPage() {
  const [activeTag, setActiveTag] = useState("All");

  const bg = useColorModeValue("white", "gray.900");
  const cardBg = useColorModeValue("gray.50", "gray.800");
  const borderColor = useColorModeValue("gray.100", "gray.700");
  const subtleText = useColorModeValue("gray.500", "gray.400");
  const headingColor = useColorModeValue("gray.900", "white");

  const filtered =
    activeTag === "All"
      ? WORKS
      : WORKS.filter((w) => w.tags.includes(activeTag));

  return (
    <PageWrapper>
      {/* Header */}
      <Box bg={useColorModeValue("gray.50", "gray.900")} pt={{ base: 20, md: 28 }} pb={{ base: 16, md: 24 }} borderBottom="1px solid" borderColor={borderColor}>
        <Container maxW="1400px" px={{ base: 5, md: 10, lg: 16 }}>
          <FadeIn>
            <Text fontSize="xs" fontWeight="700" letterSpacing="0.12em" textTransform="uppercase" color="brand.500" mb={4}>
              Portfolio
            </Text>
          </FadeIn>
          <Flex direction={{ base: "column", md: "row" }} justify="space-between" align={{ base: "flex-start", md: "flex-end" }} gap={6}>
            <FadeIn delay={0.1}>
              <Heading
                as="h1"
                fontSize={{ base: "5xl", md: "7xl" }}
                fontFamily="heading"
                fontWeight="900"
                lineHeight="0.95"
                letterSpacing="-0.03em"
                color={headingColor}
              >
                Selected
                <Box as="span" fontStyle="italic" color="brand.500"> Works</Box>
              </Heading>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Text fontSize="md" color={subtleText} maxW="320px" lineHeight="1.7">
                A curated collection of projects spanning product design, engineering, brand identity, and design systems.
              </Text>
            </FadeIn>
          </Flex>

          {/* Filters */}
          <FadeIn delay={0.25}>
            <HStack mt={12} spacing={2} flexWrap="wrap">
              {ALL_TAGS.map((tag) => (
                <Button
                  key={tag}
                  size="sm"
                  variant={activeTag === tag ? "solid" : "outline"}
                  colorScheme={activeTag === tag ? "brand" : "gray"}
                  borderRadius="none"
                  onClick={() => setActiveTag(tag)}
                  fontSize="xs"
                  fontWeight="600"
                  letterSpacing="0.06em"
                  borderColor={borderColor}
                  _hover={{ borderColor: "brand.500", color: "brand.500" }}
                >
                  {tag}
                </Button>
              ))}
            </HStack>
          </FadeIn>
        </Container>
      </Box>

      {/* Works Grid */}
      <Box bg={bg} py={{ base: 16, md: 24 }}>
        <Container maxW="1400px" px={{ base: 5, md: 10, lg: 16 }}>
          {/* Featured first item */}
          {activeTag === "All" && (
            <FadeIn>
              <Link href={`/work/${filtered[0].slug}`} passHref>
                <Box
                  role="group"
                  cursor="pointer"
                  mb={8}
                  _hover={{ "& .arrow-icon": { transform: "translate(4px, -4px)" } }}
                >
                  <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={0} border="1px solid" borderColor={borderColor}>
                    <Box
                      h={{ base: "280px", md: "480px" }}
                      bgGradient={GRADIENTS[0]}
                      position="relative"
                      overflow="hidden"
                    >
                      <Image 
                        src={filtered[0].cover} 
                        alt={filtered[0].title}
                        w="100%"
                        h="100%"
                        objectFit="cover"
                        transition="transform 0.4s ease"
                        _groupHover={{ transform: "scale(1.05)" }}
                      />
                      <Box position="absolute" inset={0} bg="blackAlpha.200" opacity={0} _groupHover={{ opacity: 1 }} transition="opacity 0.3s" />
                    </Box>
                    <Box bg={cardBg} p={{ base: 8, md: 12 }} display="flex" flexDirection="column" justifyContent="space-between">
                      <Box>
                        <HStack mb={4}>
                          <Tag size="sm" colorScheme="brand" borderRadius="none">{filtered[0].category}</Tag>
                          <Text fontSize="xs" color={subtleText}>{filtered[0].year}</Text>
                        </HStack>
                        <Heading fontSize={{ base: "3xl", md: "4xl" }} color={headingColor} lineHeight="1.1" mb={4}>
                          {filtered[0].title}
                        </Heading>
                        <Text fontSize="md" color={subtleText} lineHeight="1.8" mb={6}>
                          {filtered[0].summary}
                        </Text>
                        <HStack flexWrap="wrap" spacing={2} mb={8}>
                          {filtered[0].tags.map((t) => (
                            <Tag key={t} size="sm" variant="subtle" borderRadius="none">{t}</Tag>
                          ))}
                        </HStack>
                      </Box>
                      <HStack justify="space-between" align="center">
                        <Text fontSize="sm" color={subtleText}>
                          <Box as="span" fontWeight="700" color={headingColor}>Client: </Box>
                          {filtered[0].client}
                        </Text>
                        <Box className="arrow-icon" transition="transform 0.3s" color="brand.500">
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
                    role="group"
                    cursor="pointer"
                    border="1px solid"
                    borderColor={borderColor}
                    overflow="hidden"
                    _hover={{ transform: "translateY(-6px)", shadow: "xl" }}
                    transition="all 0.3s ease"
                  >
                    <Box
                      h="240px"
                      bgGradient={GRADIENTS[(i + 1) % GRADIENTS.length]}
                      position="relative"
                      overflow="hidden"
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
                        bg="blackAlpha.300"
                        opacity={0}
                        _groupHover={{ opacity: 1 }}
                        transition="opacity 0.3s"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <ArrowUpRight size={36} color="white" />
                      </Box>
                    </Box>
                    <Box p={6} bg={cardBg}>
                      <HStack mb={3}>
                        <Text fontSize="xs" color={subtleText} fontWeight="600" textTransform="uppercase" letterSpacing="0.08em">
                          {work.category}
                        </Text>
                        <Text fontSize="xs" color={subtleText}>· {work.year}</Text>
                      </HStack>
                      <Heading fontSize="xl" color={headingColor} lineHeight="1.3" mb={3}>
                        {work.title}
                      </Heading>
                      <Text fontSize="sm" color={subtleText} lineHeight="1.7" noOfLines={2}>
                        {work.summary}
                      </Text>
                    </Box>
                  </Box>
                </Link>
              </FadeIn>
            ))}
          </Grid>

          {filtered.length === 0 && (
            <Box textAlign="center" py={20}>
              <Text fontSize="lg" color={subtleText}>No projects found for this category.</Text>
            </Box>
          )}
        </Container>
      </Box>
    </PageWrapper>
  );
}
