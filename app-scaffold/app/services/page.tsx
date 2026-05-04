"use client";

import {
  Box,
  Container,
  Grid,
  Heading,
  Text,
  HStack,
  VStack,
  Button,
  Flex,
  useColorModeValue,
  List,
  ListItem,
} from "@chakra-ui/react";
import { CheckCircle, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";
import { SERVICES } from "@/lib/data";
import FadeIn from "@/components/FadeIn";
import PageWrapper from "@/components/PageWrapper";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const PROCESS = [
  { step: "01", title: "Discovery", desc: "Deep-dive into your goals, users, and competitors. I ask the uncomfortable questions others skip." },
  { step: "02", title: "Strategy", desc: "Synthesize research into a clear design and technical strategy with defined success metrics." },
  { step: "03", title: "Design", desc: "Iterative design from rough concepts to pixel-perfect Figma files, with your team in the loop." },
  { step: "04", title: "Build", desc: "Production-ready frontend code in Next.js/React — performant, accessible, and ready to ship." },
  { step: "05", title: "Launch", desc: "QA, stakeholder review, and go-live support. I stick around for the moment of truth." },
  { step: "06", title: "Measure", desc: "Post-launch analytics review and optimisation recommendations. Design is never 'done'." },
];

export default function ServicesPage() {
  const bg = useColorModeValue("white", "gray.900");
  const cardBg = useColorModeValue("gray.50", "gray.800");
  const borderColor = useColorModeValue("gray.100", "gray.700");
  const subtleText = useColorModeValue("gray.500", "gray.400");
  const bodyText = useColorModeValue("gray.700", "gray.300");
  const headingColor = useColorModeValue("gray.900", "white");
  const numberColor = useColorModeValue("gray.200", "gray.700");
  const processNumberColor = useColorModeValue("gray.100", "gray.700");

  return (
    <PageWrapper>
      {/* Header */}
      <Box bg={useColorModeValue("gray.50", "gray.900")} pt={{ base: 20, md: 28 }} pb={{ base: 16, md: 24 }} borderBottom="1px solid" borderColor={borderColor}>
        <Container maxW="1400px" px={{ base: 5, md: 10, lg: 16 }}>
          <FadeIn>
            <Text fontSize="xs" fontWeight="700" letterSpacing="0.12em" textTransform="uppercase" color="brand.500" mb={4}>
              Services
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
                What I
                <Box as="span" fontStyle="italic" color="brand.500"> Offer</Box>
              </Heading>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Text fontSize="md" color={subtleText} maxW="320px" lineHeight="1.7">
                Strategic design and engineering services for startups moving fast and enterprises building for scale.
              </Text>
            </FadeIn>
          </Flex>
        </Container>
      </Box>

      {/* Services list */}
      <Box bg={bg} py={{ base: 16, md: 24 }}>
        <Container maxW="1400px" px={{ base: 5, md: 10, lg: 16 }}>
          <VStack align="stretch" spacing={0}>
            {SERVICES.map((service, i) => (
              <FadeIn key={service.number} delay={i * 0.06}>
                <Box
                  borderTop="1px solid"
                  borderColor={borderColor}
                  py={10}
                  px={6}
                  role="group"
                  _hover={{ bg: cardBg, px: 8 }}
                  transition="all 0.25s ease"
                >
                  <Grid templateColumns={{ base: "1fr", md: "80px 1fr 1fr auto" }} gap={{ base: 6, md: 10 }} alignItems="flex-start">
                    {/* Number */}
                    <Text
                      fontFamily="heading"
                      fontSize="3xl"
                      fontWeight="900"
                      color={numberColor}
                      _groupHover={{ color: "brand.500" }}
                      transition="color 0.2s"
                    >
                      {service.number}
                    </Text>

                    {/* Title + desc */}
                    <Box>
                      <Heading fontSize={{ base: "2xl", md: "3xl" }} color={headingColor} mb={3}>
                        {service.title}
                      </Heading>
                      <Text fontSize="md" color={bodyText} lineHeight="1.8">
                        {service.description}
                      </Text>
                    </Box>

                    {/* Deliverables */}
                    <Box>
                      <Text fontSize="xs" fontWeight="700" letterSpacing="0.1em" textTransform="uppercase" color={subtleText} mb={3}>
                        Deliverables
                      </Text>
                      <List spacing={2}>
                        {service.deliverables.map((d) => (
                          <ListItem key={d} fontSize="sm" color={bodyText} display="flex" alignItems="center" gap={2}>
                            <CheckCircle size={14} color="#FE4820" />
                            {d}
                          </ListItem>
                        ))}
                      </List>
                    </Box>

                    {/* Price + CTA */}
                    <VStack align={{ base: "flex-start", md: "flex-end" }} spacing={3} flexShrink={0}>
                      <Text fontFamily="heading" fontSize="xl" fontWeight="700" color="brand.500">
                        {service.price}
                      </Text>
                      <Link href="/contact" passHref>
                        <Button
                          size="sm"
                          variant="outline"
                          borderRadius="none"
                          borderColor={borderColor}
                          fontSize="xs"
                          rightIcon={<ArrowRight size={14} />}
                          _hover={{ borderColor: "brand.500", color: "brand.500" }}
                          opacity={0}
                          _groupHover={{ opacity: 1 }}
                          transition="all 0.25s"
                        >
                          Enquire
                        </Button>
                      </Link>
                    </VStack>
                  </Grid>
                </Box>
              </FadeIn>
            ))}
            <Box borderTop="1px solid" borderColor={borderColor} />
          </VStack>
        </Container>
      </Box>

      {/* Process */}
      <Box bg={useColorModeValue("gray.50", "gray.800")} py={{ base: 16, md: 32 }}>
        <Container maxW="1400px" px={{ base: 5, md: 10, lg: 16 }}>
          <FadeIn>
            <Text fontSize="xs" fontWeight="700" letterSpacing="0.12em" textTransform="uppercase" color="brand.500" mb={4}>
              How I Work
            </Text>
            <Heading fontSize={{ base: "4xl", md: "5xl" }} lineHeight="1.05" color={headingColor} mb={16}>
              My Design Process
            </Heading>
          </FadeIn>

          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={8}>
            {PROCESS.map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.08}>
                <MotionBox
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  bg={bg}
                  p={8}
                  border="1px solid"
                  borderColor={borderColor}
                  position="relative"
                  overflow="hidden"
                >
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    w="3px"
                    h="0%"
                    bg="brand.500"
                    transition="height 0.3s ease"
                    _groupHover={{ h: "100%" }}
                  />
                  <Text
                    fontSize="6xl"
                    fontFamily="heading"
                    fontWeight="900"
                    color={processNumberColor}
                    lineHeight="1"
                    mb={4}
                    position="absolute"
                    top={4}
                    right={6}
                  >
                    {step.step}
                  </Text>
                  <Box mb={4} mt={2}>
                    <Zap size={20} color="#FE4820" />
                  </Box>
                  <Heading fontSize="xl" color={headingColor} mb={3}>
                    {step.title}
                  </Heading>
                  <Text fontSize="sm" color={bodyText} lineHeight="1.8">
                    {step.desc}
                  </Text>
                </MotionBox>
              </FadeIn>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box py={{ base: 20, md: 32 }} bg={bg}>
        <Container maxW="1400px" px={{ base: 5, md: 10, lg: 16 }}>
          <FadeIn>
            <Box textAlign="center">
              <Text fontSize="xs" fontWeight="700" letterSpacing="0.12em" textTransform="uppercase" color="brand.500" mb={4}>
                Ready to Start?
              </Text>
              <Heading fontSize={{ base: "4xl", md: "6xl" }} lineHeight="1.05" color={headingColor} mb={6}>
                Let&apos;s build something
                <Box as="span" fontStyle="italic" color="brand.500"> great.</Box>
              </Heading>
              <Text fontSize="lg" color={subtleText} mb={10} maxW="480px" mx="auto" lineHeight="1.7">
                Tell me about your project and I&apos;ll send over a tailored proposal within 48 hours.
              </Text>
              <HStack justify="center" spacing={4}>
                <Link href="/contact" passHref>
                  <Button colorScheme="brand" size="lg" px={10} rightIcon={<ArrowRight size={18} />}>
                    Start a Project
                  </Button>
                </Link>
                <Link href="/work" passHref>
                  <Button variant="outline" size="lg" px={10} borderColor={borderColor} _hover={{ borderColor: "brand.500", color: "brand.500" }}>
                    View My Work
                  </Button>
                </Link>
              </HStack>
            </Box>
          </FadeIn>
        </Container>
      </Box>
    </PageWrapper>
  );
}
