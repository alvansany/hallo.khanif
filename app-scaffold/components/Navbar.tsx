"use client";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  VStack,
  Text,
  Link as ChakraLink,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Moon, Sun, Menu } from "lucide-react";
import { LinkedinIcon, GithubIcon, DribbbleIcon, TwitterIcon } from "@/components/SocialIcons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PROFILE } from "@/lib/data";

const MotionBox = motion(Box);

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/lab", label: "Design Lab" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // All hooks at top level — no hooks inside maps
  const navBg = useColorModeValue(
    scrolled ? "rgba(255,255,255,0.95)" : "transparent",
    scrolled ? "rgba(10,10,10,0.95)" : "transparent"
  );
  const borderColor = useColorModeValue("gray.100", "gray.800");
  const logoSrc = useColorModeValue("/images/logo-light.png", "/images/logo-dark.png");
  const logoTextColor = useColorModeValue("gray.900", "white");
  const navLinkColor = useColorModeValue("gray.600", "gray.400");
  const iconColor = useColorModeValue("gray.700", "gray.300");
  const drawerBg = useColorModeValue("white", "gray.900");
  const drawerTextColor = useColorModeValue("gray.900", "white");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    { icon: <LinkedinIcon size={16} />, href: PROFILE.social.linkedin, label: "LinkedIn" },
    { icon: <GithubIcon size={16} />, href: PROFILE.social.github, label: "GitHub" },
    { icon: <DribbbleIcon size={16} />, href: PROFILE.social.dribbble, label: "Dribbble" },
    { icon: <TwitterIcon size={16} />, href: PROFILE.social.twitter, label: "Twitter" },
  ];

  return (
    <>
      <MotionBox
        as="nav"
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={1000}
        bg={navBg}
        backdropFilter={scrolled ? "blur(16px)" : "none"}
        borderBottom={scrolled ? "1px solid" : "none"}
        borderColor={borderColor}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ transition: "background 0.3s ease, border 0.3s ease" }}
      >
        <Flex
          maxW="1400px"
          mx="auto"
          px={{ base: 5, md: 10, lg: 16 }}
          h="72px"
          align="center"
          justify="space-between"
        >
          {/* Logo */}
          <Link href="/" passHref>
            <HStack spacing={2} cursor="pointer">
              <Box w="32px" h="32px" position="relative">
                <Image src={logoSrc} alt="Logo" w="32px" h="32px" objectFit="contain" />
              </Box>
              <Text
                fontFamily="heading"
                fontWeight="700"
                fontSize="lg"
                letterSpacing="-0.02em"
                color={logoTextColor}
              >
                Khanif Alfan<Text as="span" color="brand.500">.</Text>
              </Text>
            </HStack>
          </Link>

          {/* Desktop Nav */}
          <HStack spacing={8} display={{ base: "none", md: "flex" }}>
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link key={link.href} href={link.href} passHref>
                  <ChakraLink
                    fontSize="xs"
                    fontWeight="600"
                    letterSpacing="0.08em"
                    textTransform="uppercase"
                    color={isActive ? "brand.500" : navLinkColor}
                    position="relative"
                    _hover={{ color: "brand.500" }}
                    _after={{
                      content: '""',
                      position: "absolute",
                      bottom: "-4px",
                      left: 0,
                      width: isActive ? "100%" : "0%",
                      height: "2px",
                      bg: "brand.500",
                      transition: "width 0.25s ease",
                    }}
                    sx={{
                      "&:hover::after": { width: "100%" },
                    }}
                  >
                    {link.label}
                  </ChakraLink>
                </Link>
              );
            })}
          </HStack>

          {/* Right actions */}
          <HStack spacing={3}>
            <IconButton
              onClick={toggleColorMode}
              aria-label="Toggle color mode"
              icon={colorMode === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              variant="ghost"
              size="sm"
              color={iconColor}
              borderRadius="none"
            />
            <Link href="/contact" passHref>
              <Button
                colorScheme="brand"
                variant="solid"
                size="sm"
                display={{ base: "none", md: "flex" }}
                px={6}
                h="36px"
              >
                Let&apos;s Talk
              </Button>
            </Link>
            <IconButton
              display={{ base: "flex", md: "none" }}
              onClick={onOpen}
              aria-label="Open menu"
              icon={<Menu size={20} />}
              variant="ghost"
              borderRadius="none"
            />
          </HStack>
        </Flex>
      </MotionBox>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
        <DrawerOverlay backdropFilter="blur(8px)" />
        <DrawerContent bg={drawerBg}>
          <DrawerCloseButton
            size="lg"
            top={6}
            right={6}
            borderRadius="none"
            _hover={{ bg: "brand.500", color: "white" }}
          />
          <DrawerBody>
            <Flex h="100%" direction="column" justify="center" px={8}>
              <VStack align="flex-start" spacing={6}>
                {NAV_LINKS.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <MotionBox
                      key={link.href}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 }}
                    >
                      <Link href={link.href} passHref>
                        <Text
                          fontSize="4xl"
                          fontFamily="heading"
                          fontWeight="700"
                          color={isActive ? "brand.500" : drawerTextColor}
                          cursor="pointer"
                          onClick={onClose}
                          _hover={{ color: "brand.500", pl: 2 }}
                          transition="all 0.2s"
                        >
                          {link.label}
                        </Text>
                      </Link>
                    </MotionBox>
                  );
                })}

                {/* Social links in drawer */}
                <HStack spacing={4} pt={4}>
                  {socialLinks.map((s) => (
                    <Box
                      key={s.label}
                      as="a"
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      color={navLinkColor}
                      _hover={{ color: "brand.500" }}
                      transition="color 0.2s"
                    >
                      {s.icon}
                    </Box>
                  ))}
                </HStack>

                <Box pt={2}>
                  <Link href="/contact" passHref>
                    <Button
                      colorScheme="brand"
                      variant="solid"
                      size="lg"
                      onClick={onClose}
                      px={8}
                    >
                      Let&apos;s Talk
                    </Button>
                  </Link>
                </Box>
              </VStack>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
