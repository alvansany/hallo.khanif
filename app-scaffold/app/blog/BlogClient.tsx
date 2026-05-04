"use client";

import {
  Box,
  Container,
  Grid,
  Heading,
  Text,
  HStack,
  Tag,
  Button,
  Flex,
  useColorModeValue,
  Input,
  InputGroup,
  InputLeftElement,
  Image,
  Badge,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Search, Clock, Calendar, ExternalLink } from "lucide-react";
import { useState, useMemo } from "react";
import FadeIn from "@/components/FadeIn";
import PageWrapper from "@/components/PageWrapper";
import type { BlogPost } from "./page";

const MotionBox = motion(Box);

const CARD_GRADIENTS = [
  "linear(135deg, #f0f4ff 0%, #e0e8ff 100%)",
  "linear(135deg, #fff0ed 0%, #ffd6cc 100%)",
  "linear(135deg, #f0fff4 0%, #c6f6d5 100%)",
  "linear(135deg, #fffff0 0%, #fef9c3 100%)",
  "linear(135deg, #fdf2f8 0%, #fce7f3 100%)",
];
const CARD_GRADIENTS_DARK = [
  "linear(135deg, #0d1a3d 0%, #0a1530 100%)",
  "linear(135deg, #3d1a0d 0%, #2d100a 100%)",
  "linear(135deg, #0d3d1a 0%, #0a2d12 100%)",
  "linear(135deg, #3d3a0d 0%, #2d2c0a 100%)",
  "linear(135deg, #3d0d30 0%, #2d0a22 100%)",
];

const CATEGORY_COLORS: Record<string, string> = {
  "Design": "purple",
  "Design Theory": "purple",
  "Design Systems": "blue",
  "UX Strategy": "orange",
  "Frontend Engineering": "teal",
  "AI": "pink",
  "Product": "cyan",
};

export default function BlogClient({ posts }: { posts: BlogPost[] }) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const bg = useColorModeValue("white", "gray.900");
  const cardBg = useColorModeValue("gray.50", "gray.800");
  const borderColor = useColorModeValue("gray.100", "gray.700");
  const subtleText = useColorModeValue("gray.500", "gray.400");
  const headingColor = useColorModeValue("gray.900", "white");
  const inputBg = useColorModeValue("white", "gray.800");
  const isDark = useColorModeValue(false, true);
  const headerBg = useColorModeValue("gray.50", "gray.900");

  // Derive unique categories from actual posts
  const allCategories = useMemo(() => {
    const cats = new Set(posts.map((p) => p.category).filter(Boolean));
    return ["All", ...Array.from(cats)];
  }, [posts]);

  const filtered = useMemo(() =>
    posts.filter((p) => {
      const matchCat = activeCategory === "All" || p.category === activeCategory;
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return matchCat && matchSearch;
    }), [posts, activeCategory, search]);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <PageWrapper>
      {/* Header */}
      <Box bg={headerBg} pt={{ base: 20, md: 28 }} pb={{ base: 16, md: 24 }} borderBottom="1px solid" borderColor={borderColor}>
        <Container maxW="1400px" px={{ base: 5, md: 10, lg: 16 }}>
          <FadeIn>
            <HStack mb={4} spacing={3}>
              <Text fontSize="xs" fontWeight="700" letterSpacing="0.12em" textTransform="uppercase" color="brand.500">
                Insights & Articles
              </Text>
              <Badge colorScheme="green" variant="subtle" borderRadius="full" fontSize="xs" px={2}>
                Live from Medium
              </Badge>
            </HStack>
          </FadeIn>
          <Flex direction={{ base: "column", md: "row" }} justify="space-between" align={{ base: "flex-start", md: "flex-end" }} gap={6} mb={10}>
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
                Design
                <Box as="span" fontStyle="italic" color="brand.500"> Blog</Box>
              </Heading>
            </FadeIn>
            <FadeIn delay={0.15}>
              <InputGroup maxW="300px">
                <InputLeftElement pointerEvents="none">
                  <Search size={16} color={subtleText as string} />
                </InputLeftElement>
                <Input
                  placeholder="Search articles..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  bg={inputBg}
                  borderColor={borderColor}
                  borderRadius="none"
                  fontSize="sm"
                  _focus={{ borderColor: "brand.500", boxShadow: "none" }}
                />
              </InputGroup>
            </FadeIn>
          </Flex>

          {/* Category filters */}
          <FadeIn delay={0.2}>
            <HStack spacing={2} flexWrap="wrap">
              {allCategories.map((cat) => (
                <Button
                  key={cat}
                  size="sm"
                  variant={activeCategory === cat ? "solid" : "outline"}
                  colorScheme={activeCategory === cat ? "brand" : "gray"}
                  borderRadius="none"
                  onClick={() => setActiveCategory(cat)}
                  fontSize="xs"
                  fontWeight="600"
                  borderColor={borderColor}
                  _hover={{ borderColor: "brand.500", color: "brand.500" }}
                >
                  {cat}
                </Button>
              ))}
            </HStack>
          </FadeIn>
        </Container>
      </Box>

      {/* Articles */}
      <Box bg={bg} py={{ base: 16, md: 24 }}>
        <Container maxW="1400px" px={{ base: 5, md: 10, lg: 16 }}>
          {filtered.length === 0 ? (
            <Box textAlign="center" py={20}>
              <Text fontSize="4xl" mb={4}>✍️</Text>
              <Text fontSize="lg" color={subtleText}>No articles found.</Text>
              <Button mt={4} variant="ghost" colorScheme="brand" onClick={() => { setSearch(""); setActiveCategory("All"); }}>
                Clear filters
              </Button>
            </Box>
          ) : (
            <>
              {/* Featured Post */}
              {featured && (
                <FadeIn>
                  <Box
                    as="a"
                    href={featured.link}
                    target={featured.link === "#" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    display="block"
                    role="group"
                    cursor="pointer"
                    mb={10}
                    border="1px solid"
                    borderColor={borderColor}
                    overflow="hidden"
                    _hover={{ transform: "translateY(-4px)", shadow: "xl" }}
                    transition="all 0.3s ease"
                  >
                    <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }}>
                      {/* Thumbnail */}
                      <Box
                        h={{ base: "240px", md: "420px" }}
                        position="relative"
                        overflow="hidden"
                        bg={isDark ? "gray.800" : "gray.100"}
                      >
                        {featured.thumbnail ? (
                          <Image
                            src={featured.thumbnail}
                            alt={featured.title}
                            w="100%"
                            h="100%"
                            objectFit="cover"
                            transition="transform 0.4s ease"
                            _groupHover={{ transform: "scale(1.04)" }}
                          />
                        ) : (
                          <Box
                            w="100%"
                            h="100%"
                            bgGradient={isDark ? CARD_GRADIENTS_DARK[0] : CARD_GRADIENTS[0]}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                          >
                            <Text
                              fontSize={{ base: "8xl", md: "12xl" }}
                              fontFamily="heading"
                              fontWeight="900"
                              color={isDark ? "whiteAlpha.100" : "blackAlpha.100"}
                              lineHeight="1"
                              userSelect="none"
                            >
                              01
                            </Text>
                          </Box>
                        )}
                        <Box position="absolute" top={4} left={4}>
                          <Tag size="sm" colorScheme={CATEGORY_COLORS[featured.category] || "brand"} borderRadius="none">
                            {featured.category}
                          </Tag>
                        </Box>
                      </Box>

                      {/* Content */}
                      <Box p={{ base: 8, md: 12 }} bg={cardBg} display="flex" flexDirection="column" justifyContent="center">
                        <HStack mb={4} spacing={4} fontSize="xs" color={subtleText}>
                          <HStack>
                            <Calendar size={12} />
                            <Text>{featured.date}</Text>
                          </HStack>
                          <HStack>
                            <Clock size={12} />
                            <Text>{featured.readTime} read</Text>
                          </HStack>
                        </HStack>
                        <Heading
                          fontSize={{ base: "2xl", md: "3xl" }}
                          color={headingColor}
                          lineHeight="1.2"
                          mb={4}
                          _groupHover={{ color: "brand.500" }}
                          transition="color 0.2s"
                        >
                          {featured.title}
                        </Heading>
                        <Text fontSize="md" color={subtleText} lineHeight="1.8" mb={6} noOfLines={4}>
                          {featured.excerpt}
                        </Text>
                        <HStack color="brand.500" fontWeight="700" fontSize="sm">
                          <Text>Read on Medium</Text>
                          <ExternalLink size={14} />
                        </HStack>
                      </Box>
                    </Grid>
                  </Box>
                </FadeIn>
              )}

              {/* Grid of rest */}
              <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={6}>
                {rest.map((post, i) => (
                  <FadeIn key={post.id} delay={i * 0.07}>
                    <MotionBox
                      as="a"
                      // @ts-expect-error type checking issue
                      href={post.link}
                      target={post.link === "#" ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      display="block"
                      role="group"
                      cursor="pointer"
                      border="1px solid"
                      borderColor={borderColor}
                      overflow="hidden"
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.25 }}
                    >
                      {/* Thumbnail */}
                      <Box
                        h="180px"
                        position="relative"
                        overflow="hidden"
                        bg={isDark ? "gray.800" : "gray.100"}
                      >
                        {post.thumbnail ? (
                          <Image
                            src={post.thumbnail}
                            alt={post.title}
                            w="100%"
                            h="100%"
                            objectFit="cover"
                            transition="transform 0.35s ease"
                            _groupHover={{ transform: "scale(1.06)" }}
                          />
                        ) : (
                          <Box
                            w="100%"
                            h="100%"
                            bgGradient={isDark ? CARD_GRADIENTS_DARK[i % CARD_GRADIENTS_DARK.length] : CARD_GRADIENTS[(i + 1) % CARD_GRADIENTS.length]}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                          >
                            <Text
                              fontSize="7xl"
                              fontFamily="heading"
                              fontWeight="900"
                              color={isDark ? "whiteAlpha.100" : "blackAlpha.100"}
                              lineHeight="1"
                              userSelect="none"
                            >
                              {String(i + 2).padStart(2, "0")}
                            </Text>
                          </Box>
                        )}
                        <Box position="absolute" top={3} left={3}>
                          <Tag size="sm" colorScheme={CATEGORY_COLORS[post.category] || "brand"} borderRadius="none" fontSize="xs">
                            {post.category}
                          </Tag>
                        </Box>
                      </Box>

                      {/* Content */}
                      <Box p={6} bg={cardBg}>
                        <HStack mb={3} spacing={4} fontSize="xs" color={subtleText}>
                          <HStack>
                            <Calendar size={11} />
                            <Text>{post.date}</Text>
                          </HStack>
                          <HStack>
                            <Clock size={11} />
                            <Text>{post.readTime}</Text>
                          </HStack>
                        </HStack>
                        <Heading
                          fontSize="lg"
                          color={headingColor}
                          lineHeight="1.4"
                          mb={3}
                          _groupHover={{ color: "brand.500" }}
                          transition="color 0.2s"
                          noOfLines={2}
                        >
                          {post.title}
                        </Heading>
                        <Text fontSize="sm" color={subtleText} lineHeight="1.7" noOfLines={3}>
                          {post.excerpt}
                        </Text>
                      </Box>
                    </MotionBox>
                  </FadeIn>
                ))}
              </Grid>

              {/* Follow on Medium CTA */}
              <FadeIn>
                <Box mt={16} p={10} bg={cardBg} border="1px solid" borderColor={borderColor} textAlign="center">
                  <Text fontSize="xs" fontWeight="700" letterSpacing="0.12em" textTransform="uppercase" color="brand.500" mb={3}>
                    Follow for more
                  </Text>
                  <Heading fontSize={{ base: "2xl", md: "3xl" }} color={headingColor} mb={4} fontFamily="heading">
                    Read all articles on{" "}
                    <Box as="span" fontStyle="italic">Medium</Box>
                  </Heading>
                  <Text color={subtleText} mb={6} maxW="400px" mx="auto">
                    I write about UI/UX design, design systems, AI-assisted workflows, and digital product thinking.
                  </Text>
                  <Button
                    as="a"
                    href="https://medium.com/@hallo.khanif"
                    target="_blank"
                    rel="noopener noreferrer"
                    colorScheme="brand"
                    size="lg"
                    px={8}
                    rightIcon={<ExternalLink size={16} />}
                    borderRadius="none"
                  >
                    Follow @hallo.khanif
                  </Button>
                </Box>
              </FadeIn>
            </>
          )}
        </Container>
      </Box>
    </PageWrapper>
  );
}
