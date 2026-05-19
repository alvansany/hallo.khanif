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

  return (
    <PageWrapper>
      {/* Header */}
      <Box py={{ base: 20, md: 32 }} position="relative">
        <Container maxW="1400px" px={{ base: 5, md: 10, lg: 16 }}>
          <FadeIn>
            <HStack mb={3} spacing={2}>
              <Box w="24px" h="1px" background="linear-gradient(90deg, var(--color-violet), var(--color-cyan))" />
              <Text fontFamily="mono" fontSize="xs" letterSpacing="0.15em" textTransform="uppercase" color="var(--color-stardust)">
                Services
              </Text>
            </HStack>
          </FadeIn>
          <Flex direction={{ base: "column", md: "row" }} justify="space-between" align={{ base: "flex-start", md: "flex-end" }} gap={6}>
            <FadeIn delay={0.1}>
              <Heading
                as="h1" fontSize={{ base: "5xl", md: "7xl" }} fontFamily="heading" fontWeight="900"
                lineHeight="0.95" letterSpacing="-0.03em" color="var(--color-star)"
              >
                What I{" "}
                <Box as="span" fontStyle="italic" fontWeight="400" sx={{ background: "linear-gradient(135deg, var(--color-violet), var(--color-cyan))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Offer
                </Box>
              </Heading>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Text fontSize="md" color="var(--color-stardust)" maxW="320px" lineHeight="1.7">
                Strategic design and engineering services for startups moving fast and enterprises building for scale.
              </Text>
            </FadeIn>
          </Flex>
        </Container>
      </Box>

      {/* Services list */}
      <Box py={{ base: 16, md: 24 }} position="relative">
        <Container maxW="1400px" px={{ base: 5, md: 10, lg: 16 }}>
          <VStack align="stretch" spacing={0}>
            {SERVICES.map((service, i) => (
              <FadeIn key={service.number} delay={i * 0.06}>
                <Box
                  borderTop="1px solid" borderColor="var(--color-glass-border)"
                  py={10} px={6} role="group" className="glass-panel"
                  _hover={{ px: 8, borderColor: "var(--color-cyan)", transform: "translateY(-4px)" }}
                  transition="all 0.3s ease" mb={4} borderRadius="2xl"
                >
                  <Grid templateColumns={{ base: "1fr", md: "80px 1fr 1fr auto" }} gap={{ base: 6, md: 10 }} alignItems="flex-start">
                    {/* Number */}
                    <Text
                      fontFamily="mono" fontSize="3xl" fontWeight="900" color="rgba(255,255,255,0.1)"
                      _groupHover={{ color: "var(--color-cyan)" }} transition="color 0.3s"
                    >
                      {service.number}
                    </Text>

                    {/* Title + desc */}
                    <Box>
                      <Heading fontSize={{ base: "2xl", md: "3xl" }} color="var(--color-star)" mb={3}>
                        {service.title}
                      </Heading>
                      <Text fontSize="md" color="var(--color-stardust)" lineHeight="1.8">
                        {service.description}
                      </Text>
                    </Box>

                    {/* Deliverables */}
                    <Box>
                      <Text fontSize="xs" fontWeight="700" letterSpacing="0.1em" textTransform="uppercase" color="var(--color-cyan)" mb={3} fontFamily="mono">
                        Deliverables
                      </Text>
                      <List spacing={2}>
                        {service.deliverables.map((d) => (
                          <ListItem key={d} fontSize="sm" color="var(--color-stardust)" display="flex" alignItems="center" gap={3}>
                            <Box color="var(--color-violet)">
                              <CheckCircle size={14} />
                            </Box>
                            {d}
                          </ListItem>
                        ))}
                      </List>
                    </Box>

                    {/* Price + CTA */}
                    <VStack align={{ base: "flex-start", md: "flex-end" }} spacing={3} flexShrink={0}>
                      <Text fontFamily="heading" fontSize="xl" fontWeight="700" color="var(--color-star)">
                        {service.price}
                      </Text>
                      <Link href="/contact" passHref>
                        <Button
                          size="sm" variant="outline" borderRadius="full"
                          borderColor="var(--color-glass-border)" color="var(--color-stardust)"
                          fontSize="xs" rightIcon={<ArrowRight size={14} />}
                          _hover={{ borderColor: "var(--color-cyan)", color: "black", bg: "var(--color-cyan)" }}
                          transition="all 0.3s"
                        >
                          Enquire
                        </Button>
                      </Link>
                    </VStack>
                  </Grid>
                </Box>
              </FadeIn>
            ))}
          </VStack>
        </Container>
      </Box>

      {/* Process */}
      <Box py={{ base: 16, md: 32 }} position="relative">
        <Container maxW="1400px" px={{ base: 5, md: 10, lg: 16 }}>
          <FadeIn>
            <HStack mb={3} spacing={2}>
              <Box w="24px" h="1px" background="linear-gradient(90deg, var(--color-violet), var(--color-cyan))" />
              <Text fontFamily="mono" fontSize="xs" letterSpacing="0.15em" textTransform="uppercase" color="var(--color-stardust)">
                How I Work
              </Text>
            </HStack>
            <Heading fontSize={{ base: "4xl", md: "5xl" }} lineHeight="1.05" color="var(--color-star)" mb={16}>
              My Design Process
            </Heading>
          </FadeIn>

          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={8}>
            {PROCESS.map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.08}>
                <MotionBox
                  whileHover={{ y: -6 }} transition={{ duration: 0.2 }}
                  className="glass-panel" p={8} borderRadius="2xl" position="relative" overflow="hidden" role="group"
                >
                  <Box
                    position="absolute" top={0} left={0} right={0} h="2px" bg="var(--color-violet)"
                    transform="scaleX(0)" transformOrigin="left" transition="transform 0.3s ease" _groupHover={{ transform: "scaleX(1)" }}
                  />
                  <Text
                    fontSize="6xl" fontFamily="heading" fontWeight="900"
                    color="rgba(255,255,255,0.05)" lineHeight="1" mb={4} position="absolute" top={4} right={6}
                    transition="color 0.3s" _groupHover={{ color: "rgba(124,58,237,0.1)" }}
                  >
                    {step.step}
                  </Text>
                  <Box mb={4} mt={2} color="var(--color-cyan)">
                    <Zap size={24} />
                  </Box>
                  <Heading fontSize="xl" color="var(--color-star)" mb={3}>
                    {step.title}
                  </Heading>
                  <Text fontSize="sm" color="var(--color-stardust)" lineHeight="1.8">
                    {step.desc}
                  </Text>
                </MotionBox>
              </FadeIn>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box py={{ base: 20, md: 32 }} position="relative">
        <Box position="absolute" inset={0} bg="radial-gradient(circle at center, rgba(124,58,237,0.1) 0%, transparent 70%)" />
        <Container maxW="1400px" px={{ base: 5, md: 10, lg: 16 }} position="relative">
          <FadeIn>
            <Box textAlign="center" className="glass-panel" p={16} borderRadius="3xl" border="1px solid var(--color-glass-border)">
              <HStack justify="center" mb={4} spacing={2}>
                <Box w="24px" h="1px" background="linear-gradient(90deg, var(--color-violet), var(--color-cyan))" />
                <Text fontFamily="mono" fontSize="xs" letterSpacing="0.15em" textTransform="uppercase" color="var(--color-stardust)">
                  Ready to Start?
                </Text>
                <Box w="24px" h="1px" background="linear-gradient(90deg, var(--color-cyan), var(--color-violet))" />
              </HStack>
              <Heading fontSize={{ base: "4xl", md: "6xl" }} lineHeight="1.05" color="var(--color-star)" mb={6}>
                Let&apos;s build something{" "}
                <Box as="span" fontStyle="italic" fontWeight="400" sx={{ background: "linear-gradient(135deg, var(--color-violet), var(--color-cyan))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  great.
                </Box>
              </Heading>
              <Text fontSize="lg" color="var(--color-stardust)" mb={10} maxW="480px" mx="auto" lineHeight="1.7">
                Tell me about your project and I&apos;ll send over a tailored proposal within 48 hours.
              </Text>
              <HStack justify="center" spacing={4} flexWrap="wrap">
                <Link href="/contact" passHref>
                  <Button
                    size="lg" px={10} rightIcon={<ArrowRight size={18} />}
                    bg="linear-gradient(135deg, var(--color-violet), var(--color-cyan))"
                    color="white" border="none"
                    _hover={{ transform: "scale(1.05)", boxShadow: "0 0 20px var(--color-glow-cyan)" }}
                  >
                    Start a Project
                  </Button>
                </Link>
                <Link href="/work" passHref>
                  <Button
                    variant="outline" size="lg" px={10}
                    borderColor="var(--color-glass-border)" color="var(--color-star)" bg="var(--color-glass-bg)" backdropFilter="blur(10px)"
                    _hover={{ borderColor: "var(--color-violet)", color: "white" }}
                  >
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
