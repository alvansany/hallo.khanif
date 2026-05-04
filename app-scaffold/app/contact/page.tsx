"use client";

import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Grid,
  Heading,
  HStack,
  Input,
  Select,
  Link as ChakraLink,
  Text,
  Textarea,
  VStack,
  useColorModeValue,
  Flex,
  Divider,
  Icon,
  useToast,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Calendar, Clock } from "lucide-react";
import { LinkedinIcon, GithubIcon, DribbbleIcon, TwitterIcon } from "@/components/SocialIcons";
import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import PageWrapper from "@/components/PageWrapper";
import { PROFILE } from "@/lib/data";

const MotionBox = motion(Box);

const SERVICES_LIST = [
  "Product Design",
  "Design Systems",
  "Brand Identity",
  "Frontend Engineering",
  "UX Audit & Strategy",
  "Consulting / Workshop",
  "Other",
];

const BUDGET_RANGES = [
  "Under $2,000",
  "$2,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000 – $25,000",
  "$25,000+",
  "Not sure yet",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const toast = useToast();

  const bg = useColorModeValue("white", "gray.900");
  const cardBg = useColorModeValue("gray.50", "gray.800");
  const borderColor = useColorModeValue("gray.100", "gray.700");
  const subtleText = useColorModeValue("gray.500", "gray.400");
  const headingColor = useColorModeValue("gray.900", "white");

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email address";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          subject: `Project Inquiry from ${form.name}`,
          type: 'Contact Form'
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you within 48 hours.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      setForm({ name: "", email: "", company: "", service: "", budget: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <PageWrapper>
      {/* Header */}
      <Box bg={useColorModeValue("gray.50", "gray.900")} pt={{ base: 20, md: 28 }} pb={{ base: 16, md: 24 }} borderBottom="1px solid" borderColor={borderColor}>
        <Container maxW="1400px" px={{ base: 5, md: 10, lg: 16 }}>
          <FadeIn>
            <Text fontSize="xs" fontWeight="700" letterSpacing="0.12em" textTransform="uppercase" color="brand.500" mb={4}>
              Contact
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
                Let&apos;s Work
                <Box as="span" fontStyle="italic" color="brand.500"> Together</Box>
              </Heading>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Text fontSize="md" color={subtleText} maxW="320px" lineHeight="1.7">
                Have a project in mind? I&apos;d love to hear about it. Fill in the form and I&apos;ll get back to you within 48 hours.
              </Text>
            </FadeIn>
          </Flex>
        </Container>
      </Box>

      {/* Main content */}
      <Box bg={bg} py={{ base: 16, md: 24 }}>
        <Container maxW="1400px" px={{ base: 5, md: 10, lg: 16 }}>
          <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={{ base: 12, lg: 20 }}>
            {/* Form */}
            <FadeIn>
              <Box as="form" onSubmit={handleSubmit} noValidate>
                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={5} mb={5}>
                  <FormControl isRequired isInvalid={!!errors.name}>
                    <FormLabel fontSize="xs" fontWeight="700" textTransform="uppercase" letterSpacing="0.08em" color={subtleText}>
                      Full Name
                    </FormLabel>
                    <Input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      borderRadius="none"
                      borderColor={borderColor}
                      size="lg"
                      _focus={{ borderColor: "brand.500", boxShadow: "none" }}
                    />
                    <FormErrorMessage fontSize="xs">{errors.name}</FormErrorMessage>
                  </FormControl>

                  <FormControl isRequired isInvalid={!!errors.email}>
                    <FormLabel fontSize="xs" fontWeight="700" textTransform="uppercase" letterSpacing="0.08em" color={subtleText}>
                      Email Address
                    </FormLabel>
                    <Input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="hello@company.com"
                      borderRadius="none"
                      borderColor={borderColor}
                      size="lg"
                      _focus={{ borderColor: "brand.500", boxShadow: "none" }}
                    />
                    <FormErrorMessage fontSize="xs">{errors.email}</FormErrorMessage>
                  </FormControl>

                  <FormControl>
                    <FormLabel fontSize="xs" fontWeight="700" textTransform="uppercase" letterSpacing="0.08em" color={subtleText}>
                      Company / Startup
                    </FormLabel>
                    <Input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      borderRadius="none"
                      borderColor={borderColor}
                      size="lg"
                      _focus={{ borderColor: "brand.500", boxShadow: "none" }}
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel fontSize="xs" fontWeight="700" textTransform="uppercase" letterSpacing="0.08em" color={subtleText}>
                      Service Needed
                    </FormLabel>
                    <Select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      placeholder="Select a service"
                      borderRadius="none"
                      borderColor={borderColor}
                      size="lg"
                      _focus={{ borderColor: "brand.500", boxShadow: "none" }}
                    >
                      {SERVICES_LIST.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl gridColumn={{ md: "1 / -1" }}>
                    <FormLabel fontSize="xs" fontWeight="700" textTransform="uppercase" letterSpacing="0.08em" color={subtleText}>
                      Budget Range
                    </FormLabel>
                    <Select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      placeholder="Select budget range"
                      borderRadius="none"
                      borderColor={borderColor}
                      size="lg"
                      _focus={{ borderColor: "brand.500", boxShadow: "none" }}
                    >
                      {BUDGET_RANGES.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl isRequired isInvalid={!!errors.message} gridColumn={{ md: "1 / -1" }}>
                    <FormLabel fontSize="xs" fontWeight="700" textTransform="uppercase" letterSpacing="0.08em" color={subtleText}>
                      Project Details
                    </FormLabel>
                    <Textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, goals, timeline, and anything else you'd like me to know..."
                      borderRadius="none"
                      borderColor={borderColor}
                      size="lg"
                      rows={6}
                      _focus={{ borderColor: "brand.500", boxShadow: "none" }}
                      resize="vertical"
                    />
                    <FormErrorMessage fontSize="xs">{errors.message}</FormErrorMessage>
                  </FormControl>
                </Grid>

                <Button
                  type="submit"
                  colorScheme="brand"
                  size="lg"
                  px={10}
                  isLoading={loading}
                  loadingText="Sending..."
                  rightIcon={<ArrowRight size={18} />}
                  _hover={{ transform: "translateY(-3px)", shadow: "lg" }}
                  transition="all 0.25s"
                >
                  Send Message
                </Button>
              </Box>
            </FadeIn>

            {/* Sidebar */}
            <FadeIn delay={0.15} direction="left">
              <VStack align="stretch" spacing={6}>
                {/* Contact info */}
                <Box p={8} bg={cardBg} border="1px solid" borderColor={borderColor}>
                  <Text fontSize="xs" fontWeight="700" letterSpacing="0.1em" textTransform="uppercase" color={subtleText} mb={6}>
                    Contact Details
                  </Text>
                  <VStack align="flex-start" spacing={5}>
                    <HStack spacing={4}>
                      <Box p={2} bg={bg} border="1px solid" borderColor={borderColor}>
                        <Mail size={16} color="#FE4820" />
                      </Box>
                      <Box>
                        <Text fontSize="xs" color={subtleText} mb={0.5}>Email</Text>
                        <ChakraLink href={`mailto:${PROFILE.email}`} fontSize="sm" fontWeight="600" color={headingColor} _hover={{ color: "brand.500" }}>
                          {PROFILE.email}
                        </ChakraLink>
                      </Box>
                    </HStack>
                    <HStack spacing={4}>
                      <Box p={2} bg={bg} border="1px solid" borderColor={borderColor}>
                        <MapPin size={16} color="#FE4820" />
                      </Box>
                      <Box>
                        <Text fontSize="xs" color={subtleText} mb={0.5}>Location</Text>
                        <Text fontSize="sm" fontWeight="600" color={headingColor}>{PROFILE.location}</Text>
                      </Box>
                    </HStack>
                    <HStack spacing={4}>
                      <Box p={2} bg={bg} border="1px solid" borderColor={borderColor}>
                        <Clock size={16} color="#FE4820" />
                      </Box>
                      <Box>
                        <Text fontSize="xs" color={subtleText} mb={0.5}>Response Time</Text>
                        <Text fontSize="sm" fontWeight="600" color={headingColor}>Within 48 hours</Text>
                      </Box>
                    </HStack>
                  </VStack>
                </Box>

                {/* Availability */}
                <Box p={8} bg="brand.500" position="relative" overflow="hidden">
                  <Box
                    position="absolute"
                    top="-30px"
                    right="-30px"
                    w="120px"
                    h="120px"
                    borderRadius="full"
                    bg="whiteAlpha.100"
                  />
                  <Text fontSize="xs" fontWeight="700" letterSpacing="0.1em" textTransform="uppercase" color="whiteAlpha.800" mb={3}>
                    Availability Status
                  </Text>
                  <Text fontSize="2xl" fontFamily="heading" fontWeight="700" color="white" mb={2} lineHeight="1.3">
                    Open to new projects & opportunities
                  </Text>
                  <Text fontSize="sm" color="whiteAlpha.800">
                    I&apos;m currently available for freelance projects and open to exploring new opportunities.
                  </Text>
                </Box>

                {/* Book a call */}
                <Box p={8} bg={cardBg} border="1px solid" borderColor={borderColor}>
                  <HStack mb={4}>
                    <Calendar size={16} color="#FE4820" />
                    <Text fontSize="xs" fontWeight="700" letterSpacing="0.1em" textTransform="uppercase" color={subtleText}>
                      Book a Discovery Call
                    </Text>
                  </HStack>
                  <Text fontSize="sm" color={subtleText} lineHeight="1.7" mb={5}>
                    Prefer to talk first? Book a free 30-minute discovery call and let&apos;s discuss your project in detail.
                  </Text>
                  <Button
                    as="a"
                    href="https://calendly.com/hallo-khanif/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    w="100%"
                    leftIcon={<Calendar size={16} />}
                    borderColor={borderColor}
                    _hover={{ borderColor: "brand.500", color: "brand.500" }}
                    borderRadius="none"
                  >
                    Schedule via Calendly
                  </Button>
                </Box>

                {/* Socials */}
                <Box p={8} bg={cardBg} border="1px solid" borderColor={borderColor}>
                  <Text fontSize="xs" fontWeight="700" letterSpacing="0.1em" textTransform="uppercase" color={subtleText} mb={5}>
                    Connect
                  </Text>
                  <VStack align="stretch" spacing={3}>
                    {[
                      { icon: <LinkedinIcon size={16} />, label: "LinkedIn", href: PROFILE.social.linkedin },
                      { icon: <GithubIcon size={16} />, label: "GitHub", href: PROFILE.social.github },
                      { icon: <DribbbleIcon size={16} />, label: "Dribbble", href: PROFILE.social.dribbble },
                      { icon: <TwitterIcon size={16} />, label: "Twitter / X", href: PROFILE.social.twitter },
                    ].map((s) => (
                      <ChakraLink
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        display="flex"
                        alignItems="center"
                        gap={3}
                        fontSize="sm"
                        fontWeight="600"
                        color={subtleText}
                        _hover={{ color: "brand.500" }}
                        transition="color 0.2s"
                        py={1}
                      >
                        <Box color="brand.500">{s.icon}</Box>
                        {s.label}
                      </ChakraLink>
                    ))}
                  </VStack>
                </Box>
              </VStack>
            </FadeIn>
          </Grid>
        </Container>
      </Box>
    </PageWrapper>
  );
}
