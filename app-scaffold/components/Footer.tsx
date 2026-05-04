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
  Divider,
  IconButton,
  useColorModeValue,
  Button,
  Image,
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
  { icon: <LinkedinIcon size={16} />, href: PROFILE.social.linkedin, label: "LinkedIn" },
  { icon: <GithubIcon size={16} />, href: PROFILE.social.github, label: "GitHub" },
  { icon: <DribbbleIcon size={16} />, href: PROFILE.social.dribbble, label: "Dribbble" },
  { icon: <TwitterIcon size={16} />, href: PROFILE.social.twitter, label: "Twitter" },
];

export default function Footer() {
  const bg = useColorModeValue("gray.900", "gray.900");
  const textColor = "gray.400";
  const headingColor = "white";
  const borderColor = "gray.800";
  const logoSrc = "/images/logo-white.png";

  return (
    <Box as="footer" bg={bg} color={textColor} pt={{ base: 16, md: 24 }} pb={8}>
      <Container maxW="1400px" px={{ base: 5, md: 10, lg: 16 }}>
        {/* CTA Banner */}
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          mb={20}
          p={{ base: 10, md: 16 }}
          bg="brand.500"
          position="relative"
          overflow="hidden"
          _before={{
            content: '""',
            position: "absolute",
            top: "-60%",
            right: "-10%",
            width: "400px",
            height: "400px",
            borderRadius: "full",
            bg: "rgba(255,255,255,0.07)",
          }}
        >
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align={{ base: "flex-start", md: "center" }}
            gap={6}
          >
            <Box>
              <Text
                fontSize={{ base: "2xl", md: "4xl" }}
                fontFamily="heading"
                fontWeight="700"
                color="white"
                lineHeight="1.2"
                mb={2}
              >
                Have a project in mind?
                <Box as="br" />
                Let&apos;s build it together.
              </Text>
              <Text fontSize="sm" color="whiteAlpha.800">
                Currently taking on select projects for Q3 2025
              </Text>
            </Box>
            <HStack spacing={3} flexShrink={0}>
              <Link href="/contact" passHref>
                <Button
                  bg="white"
                  color="brand.500"
                  size="lg"
                  px={8}
                  borderRadius="none"
                  fontWeight="700"
                  fontSize="xs"
                  letterSpacing="0.08em"
                  textTransform="uppercase"
                  _hover={{ bg: "gray.100", transform: "translateY(-2px)" }}
                  transition="all 0.25s"
                  rightIcon={<ArrowUpRight size={16} />}
                >
                  Start a Project
                </Button>
              </Link>
            </HStack>
          </Flex>
        </MotionBox>

        <Grid
          templateColumns={{ base: "1fr", md: "2fr 1fr 1fr" }}
          gap={{ base: 10, md: 16 }}
          mb={16}
        >
          {/* Brand column */}
          <GridItem>
            <HStack spacing={2} mb={5}>
              <Image src={logoSrc} alt="Logo" w="28px" h="28px" objectFit="contain" />
              <Text fontFamily="heading" fontWeight="700" fontSize="lg" color={headingColor}>
                Khanif Alfan<Text as="span" color="brand.500">.</Text>
              </Text>
            </HStack>
            <Text fontSize="sm" lineHeight="1.8" maxW="300px" mb={6}>
              UI/UX Designer crafting intuitive digital experiences. Based in Sleman, DI Yogyakarta.
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
                  variant="outline"
                  color={textColor}
                  borderColor="gray.700"
                  borderRadius="none"
                  _hover={{ color: "brand.500", borderColor: "brand.500", bg: "transparent" }}
                />
              ))}
            </HStack>
          </GridItem>

          {/* Navigation */}
          <GridItem>
            <Text fontSize="xs" fontWeight="700" letterSpacing="0.12em" textTransform="uppercase" color={headingColor} mb={5}>
              Navigation
            </Text>
            <VStack align="flex-start" spacing={3}>
              {FOOTER_LINKS.map((link) => (
                <Link key={link.href} href={link.href} passHref>
                  <ChakraLink
                    fontSize="sm"
                    color={textColor}
                    _hover={{ color: "brand.500", pl: 1 }}
                    transition="all 0.2s"
                  >
                    {link.label}
                  </ChakraLink>
                </Link>
              ))}
            </VStack>
          </GridItem>

          {/* Contact */}
          <GridItem>
            <Text fontSize="xs" fontWeight="700" letterSpacing="0.12em" textTransform="uppercase" color={headingColor} mb={5}>
              Get In Touch
            </Text>
            <VStack align="flex-start" spacing={3}>
              <ChakraLink href={`mailto:${PROFILE.email}`} fontSize="sm" color={textColor} _hover={{ color: "brand.500" }}>
                {PROFILE.email}
              </ChakraLink>
              <Text fontSize="sm">{PROFILE.location}</Text>
              <Text fontSize="xs" color="green.400" fontWeight="600">
                ● {PROFILE.availability}
              </Text>
            </VStack>
          </GridItem>
        </Grid>

        <Divider borderColor={borderColor} mb={8} />

        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "flex-start", md: "center" }}
          gap={4}
        >
          <Text fontSize="xs" color="gray.600">
            © {new Date().getFullYear()} Muhammad Khanif Alfan Akhsani. All rights reserved.
          </Text>
          <Text fontSize="xs" color="gray.600">
            Designed & built with precision and passion.
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}
