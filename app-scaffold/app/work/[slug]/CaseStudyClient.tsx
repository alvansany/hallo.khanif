"use client";
import { useState } from "react";

import {
  Box,
  Container,
  Grid,
  Heading,
  Text,
  HStack,
  Tag,
  VStack,
  Divider,
  useColorModeValue,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { WORKS } from "@/lib/data";
import FadeIn from "@/components/FadeIn";
import PageWrapper from "@/components/PageWrapper";

interface Work {
  slug: string;
  title: string;
  category: string;
  year: string;
  tags: string[];
  summary: string;
  client: string;
  role: string;
  duration: string;
  problem: string;
  solution: string;
  result: string;
  content?: {
    id: string;
    title: string;
    description: string;
    image?: string;
    gallery?: { src: string; caption: string }[];
  }[];
}

export default function CaseStudyClient({ work }: { work: Work }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
    onOpen();
  };

  const bg = useColorModeValue("white", "gray.900");
  const cardBg = useColorModeValue("gray.50", "gray.800");
  const borderColor = useColorModeValue("gray.100", "gray.700");
  const subtleText = useColorModeValue("gray.500", "gray.400");
  const bodyText = useColorModeValue("gray.700", "gray.300");
  const headingColor = useColorModeValue("gray.900", "white");

  const currentIndex = WORKS.findIndex((w) => w.slug === work.slug);
  const prevWork = currentIndex > 0 ? WORKS[currentIndex - 1] : null;
  const nextWork = currentIndex < WORKS.length - 1 ? WORKS[currentIndex + 1] : null;

  return (
    <PageWrapper>
      {/* Breadcrumb */}
      <Box pt={8} pb={4} bg={useColorModeValue("gray.50", "gray.900")} borderBottom="1px solid" borderColor={borderColor}>
        <Container maxW="1400px" px={{ base: 5, md: 10, lg: 16 }}>
          <HStack spacing={2} fontSize="xs" color={subtleText}>
            <Link href="/work" passHref>
              <Text _hover={{ color: "brand.500" }} cursor="pointer" transition="color 0.2s">Work</Text>
            </Link>
            <ChevronRight size={12} />
            <Text color="brand.500" fontWeight="600">{work.title}</Text>
          </HStack>
        </Container>
      </Box>

      {/* Hero */}
      <Box
        pt={{ base: 16, md: 24 }}
        pb={{ base: 12, md: 20 }}
        bg={useColorModeValue("gray.50", "gray.900")}
        borderBottom="1px solid"
        borderColor={borderColor}
      >
        <Container maxW="1400px" px={{ base: 5, md: 10, lg: 16 }}>
          <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={{ base: 10, lg: 20 }} alignItems="center">
            <Box>
              <FadeIn>
                <HStack mb={5}>
                  <Tag colorScheme="brand" borderRadius="none" size="md">{work.category}</Tag>
                  <Text fontSize="sm" color={subtleText}>{work.year}</Text>
                </HStack>
              </FadeIn>
              <FadeIn delay={0.1}>
                <Heading
                  as="h1"
                  fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
                  fontFamily="heading"
                  fontWeight="900"
                  lineHeight="0.95"
                  letterSpacing="-0.03em"
                  color={headingColor}
                  mb={6}
                >
                  {work.title}
                </Heading>
              </FadeIn>
              <FadeIn delay={0.2}>
                <Text fontSize={{ base: "lg", md: "xl" }} color={bodyText} lineHeight="1.8" maxW="600px">
                  {work.summary}
                </Text>
              </FadeIn>
            </Box>

            <FadeIn delay={0.15} direction="left">
              <VStack align="stretch" spacing={5} bg={cardBg} p={8} border="1px solid" borderColor={borderColor}>
                {[
                  { label: "Client", value: work.client },
                  { label: "Role", value: work.role },
                  { label: "Duration", value: work.duration },
                  { label: "Year", value: work.year },
                ].map((item) => (
                  <Box key={item.label}>
                    <Text fontSize="xs" fontWeight="700" letterSpacing="0.1em" textTransform="uppercase" color={subtleText} mb={1}>
                      {item.label}
                    </Text>
                    <Text fontWeight="600" color={headingColor}>{item.value}</Text>
                  </Box>
                ))}
                <Divider borderColor={borderColor} />
                <HStack flexWrap="wrap" spacing={2}>
                  {work.tags.map((t) => (
                    <Tag key={t} size="sm" variant="subtle" borderRadius="none">{t}</Tag>
                  ))}
                </HStack>
              </VStack>
            </FadeIn>
          </Grid>
        </Container>
      </Box>

      {/* Hero visual */}
      <Box
        h={{ base: "300px", md: "500px" }}
        bg={cardBg}
        position="relative"
        overflow="hidden"
      >
        <Image 
          src={work.cover} 
          alt={work.title} 
          w="100%" 
          h="100%" 
          objectFit="cover" 
        />
        <Box
          position="absolute"
          inset={0}
          bgGradient="linear(to-t, blackAlpha.700, transparent)"
        />
      </Box>

      {/* Content */}
      <Box bg={bg} py={{ base: 16, md: 28 }}>
        <Container maxW="1000px" px={{ base: 5, md: 10, lg: 16 }}>
          <VStack align="stretch" spacing={20}>
            {work.content && work.content.length > 0 ? (
              work.content.map((section, idx) => (
                <FadeIn key={section.id}>
                  <Box>
                    <HStack mb={6}>
                      <Box w="40px" h="2px" bg="brand.500" />
                      <Text fontSize="xs" fontWeight="700" letterSpacing="0.12em" textTransform="uppercase" color="brand.500">
                        {String(idx + 1).padStart(2, "0")} — {section.title}
                      </Text>
                    </HStack>
                    <Heading fontSize={{ base: "3xl", md: "4xl" }} color={headingColor} mb={5} lineHeight="1.2">
                      {section.title}
                    </Heading>
                    <Text 
                      fontSize={{ base: "md", md: "lg" }} 
                      color={bodyText} 
                      lineHeight="1.9"
                      mb={section.image ? 8 : 0}
                      dangerouslySetInnerHTML={{ __html: section.description }} 
                    />
                    {section.image && (
                      <Box 
                        borderRadius="xl" 
                        overflow="hidden" 
                        border="1px solid" 
                        borderColor={borderColor}
                        bg={cardBg}
                        p={2}
                        cursor="zoom-in"
                        onClick={() => section.image && handleImageClick(section.image)}
                        _hover={{ opacity: 0.9 }}
                        transition="opacity 0.2s"
                      >
                        <Image 
                          src={section.image} 
                          alt={section.title} 
                          w="100%" 
                          borderRadius="lg"
                        />
                      </Box>
                    )}
                    {section.gallery && section.gallery.length > 0 && (
                      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6} mt={8}>
                        {section.gallery.map((img, idx) => (
                          <Box key={idx} borderRadius="xl" overflow="hidden" border="1px solid" borderColor={borderColor} bg={cardBg} p={2}>
                            <Box 
                              cursor="zoom-in" 
                              onClick={() => handleImageClick(img.src)}
                              _hover={{ opacity: 0.9 }}
                              transition="opacity 0.2s"
                            >
                              <Image src={img.src} alt={img.caption} w="100%" borderRadius="lg" mb={3} />
                            </Box>
                            <Text fontSize="sm" color={subtleText} textAlign="center" fontWeight="500">{img.caption}</Text>
                          </Box>
                        ))}
                      </Grid>
                    )}
                  </Box>
                  {idx < work.content!.length - 1 && (
                    <Divider borderColor={borderColor} mt={20} />
                  )}
                </FadeIn>
              ))
            ) : (
              <>
                {/* Problem */}
                <FadeIn>
                  <Box>
                    <HStack mb={6}>
                      <Box w="40px" h="2px" bg="brand.500" />
                      <Text fontSize="xs" fontWeight="700" letterSpacing="0.12em" textTransform="uppercase" color="brand.500">
                        01 — The Problem
                      </Text>
                    </HStack>
                    <Heading fontSize={{ base: "3xl", md: "4xl" }} color={headingColor} mb={5} lineHeight="1.2">
                      What needed to be solved
                    </Heading>
                    <Text fontSize={{ base: "md", md: "lg" }} color={bodyText} lineHeight="1.9">
                      {work.problem}
                    </Text>
                  </Box>
                </FadeIn>

                <Divider borderColor={borderColor} />

                {/* Solution */}
                <FadeIn>
                  <Box>
                    <HStack mb={6}>
                      <Box w="40px" h="2px" bg="brand.500" />
                      <Text fontSize="xs" fontWeight="700" letterSpacing="0.12em" textTransform="uppercase" color="brand.500">
                        02 — The Solution
                      </Text>
                    </HStack>
                    <Heading fontSize={{ base: "3xl", md: "4xl" }} color={headingColor} mb={5} lineHeight="1.2">
                      How we solved it
                    </Heading>
                    <Text fontSize={{ base: "md", md: "lg" }} color={bodyText} lineHeight="1.9">
                      {work.solution}
                    </Text>
                  </Box>
                </FadeIn>

                <Divider borderColor={borderColor} />

                {/* Result */}
                <FadeIn>
                  <Box bg={cardBg} p={{ base: 8, md: 12 }} border="1px solid" borderColor={borderColor} position="relative" overflow="hidden">
                    <Box
                      position="absolute"
                      top={0}
                      left={0}
                      w="4px"
                      h="100%"
                      bg="brand.500"
                    />
                    <HStack mb={6}>
                      <Box w="40px" h="2px" bg="brand.500" />
                      <Text fontSize="xs" fontWeight="700" letterSpacing="0.12em" textTransform="uppercase" color="brand.500">
                        03 — The Result
                      </Text>
                    </HStack>
                    <Heading fontSize={{ base: "3xl", md: "4xl" }} color={headingColor} mb={5} lineHeight="1.2">
                      The impact delivered
                    </Heading>
                    <Text fontSize={{ base: "md", md: "lg" }} color={bodyText} lineHeight="1.9">
                      {work.result}
                    </Text>
                  </Box>
                </FadeIn>
              </>
            )}
          </VStack>
        </Container>
      </Box>

      {/* Next / Prev Navigation */}
      <Box border="1px solid" borderColor={borderColor} mx={{ base: 5, md: 10, lg: 16 }} mb={20}>
        <Grid templateColumns="1fr 1px 1fr">
          {prevWork ? (
            <Link href={`/work/${prevWork.slug}`} passHref>
              <Box
                p={8}
                role="group"
                cursor="pointer"
                _hover={{ bg: cardBg }}
                transition="bg 0.2s"
              >
                <HStack mb={3} color={subtleText} fontSize="xs" fontWeight="700" letterSpacing="0.1em" textTransform="uppercase">
                  <ArrowLeft size={14} />
                  <Text>Previous</Text>
                </HStack>
                <Heading fontSize="xl" color={headingColor} _groupHover={{ color: "brand.500" }} transition="color 0.2s">
                  {prevWork.title}
                </Heading>
              </Box>
            </Link>
          ) : (
            <Box />
          )}
          <Box bg={borderColor} />
          {nextWork ? (
            <Link href={`/work/${nextWork.slug}`} passHref>
              <Box
                p={8}
                role="group"
                cursor="pointer"
                textAlign="right"
                _hover={{ bg: cardBg }}
                transition="bg 0.2s"
              >
                <HStack mb={3} justify="flex-end" color={subtleText} fontSize="xs" fontWeight="700" letterSpacing="0.1em" textTransform="uppercase">
                  <Text>Next</Text>
                  <ArrowRight size={14} />
                </HStack>
                <Heading fontSize="xl" color={headingColor} _groupHover={{ color: "brand.500" }} transition="color 0.2s">
                  {nextWork.title}
                </Heading>
              </Box>
            </Link>
          ) : (
            <Box />
          )}
        </Grid>
      </Box>

      {/* Image Lightbox Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="6xl" isCentered>
        <ModalOverlay bg="blackAlpha.800" backdropFilter="blur(10px)" />
        <ModalContent bg="transparent" boxShadow="none" p={0} m={4}>
          <ModalCloseButton color="white" top="-40px" right="0" />
          <ModalBody p={0} display="flex" justifyContent="center" alignItems="center">
            {selectedImage && (
              <Image 
                src={selectedImage} 
                alt="Enlarged view" 
                maxH="85vh" 
                objectFit="contain" 
                borderRadius="lg"
                boxShadow="2xl"
              />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </PageWrapper>
  );
}
