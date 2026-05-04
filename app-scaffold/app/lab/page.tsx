"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Switch,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  Text,
  Textarea,
  VStack,
  useColorModeValue,
  Badge,
  Progress,
  Tooltip,
  Avatar,
  RadioGroup,
  Radio,
  Stack,
  Checkbox,
  Select,
  FormControl,
  FormLabel,
  useToast,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  Zap,
  Mail,
  Search,
  Bell,
  Heart,
  Star,
  Settings,
  User,
  Check,
  X,
} from "lucide-react";
import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import PageWrapper from "@/components/PageWrapper";

const MotionBox = motion(Box);

export default function LabPage() {
  const [sliderVal, setSliderVal] = useState(60);
  const [toggleA, setToggleA] = useState(true);
  const [toggleB, setToggleB] = useState(false);
  const [liked, setLiked] = useState(false);
  const [starred, setStarred] = useState(false);
  const [radioVal, setRadioVal] = useState("option1");
  const toast = useToast();

  const bg = useColorModeValue("white", "gray.900");
  const cardBg = useColorModeValue("gray.50", "gray.800");
  const borderColor = useColorModeValue("gray.100", "gray.700");
  const subtleText = useColorModeValue("gray.500", "gray.400");
  const headingColor = useColorModeValue("gray.900", "white");

  const showToast = (type: "success" | "error" | "info" | "warning") => {
    const config = {
      success: { title: "Success!", description: "Action completed successfully.", status: "success" as const },
      error: { title: "Error!", description: "Something went wrong.", status: "error" as const },
      info: { title: "Info", description: "Here's some information.", status: "info" as const },
      warning: { title: "Warning!", description: "Please review this.", status: "warning" as const },
    };
    toast({
      ...config[type],
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });
  };

  return (
    <PageWrapper>
      {/* Header */}
      <Box bg={useColorModeValue("gray.50", "gray.900")} pt={{ base: 20, md: 28 }} pb={{ base: 16, md: 24 }} borderBottom="1px solid" borderColor={borderColor}>
        <Container maxW="1400px" px={{ base: 5, md: 10, lg: 16 }}>
          <FadeIn>
            <HStack mb={4}>
              <Zap size={16} color="#FE4820" />
              <Text fontSize="xs" fontWeight="700" letterSpacing="0.12em" textTransform="uppercase" color="brand.500">
                Interactive
              </Text>
            </HStack>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Heading
              as="h1"
              fontSize={{ base: "5xl", md: "7xl" }}
              fontFamily="heading"
              fontWeight="900"
              lineHeight="0.95"
              letterSpacing="-0.03em"
              color={headingColor}
              mb={6}
            >
              Design
              <Box as="span" fontStyle="italic" color="brand.500"> Lab</Box>
            </Heading>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Text fontSize={{ base: "md", md: "lg" }} color={subtleText} maxW="520px" lineHeight="1.7">
              A live component playground showcasing custom-designed UI elements from my design system. Every component is handcrafted with accessibility and delight in mind.
            </Text>
          </FadeIn>
        </Container>
      </Box>

      <Box bg={bg} py={{ base: 16, md: 24 }}>
        <Container maxW="1400px" px={{ base: 5, md: 10, lg: 16 }}>
          <Tabs variant="unstyled">
            <TabList mb={10} gap={2} flexWrap="wrap">
              {["Buttons", "Forms", "Feedback", "Data Display"].map((tab) => (
                <Tab
                  key={tab}
                  px={5}
                  py={2}
                  fontSize="xs"
                  fontWeight="700"
                  letterSpacing="0.08em"
                  textTransform="uppercase"
                  borderRadius="none"
                  border="1.5px solid"
                  borderColor={borderColor}
                  color={subtleText}
                  _selected={{
                    bg: "brand.500",
                    color: "white",
                    borderColor: "brand.500",
                  }}
                  _hover={{ borderColor: "brand.500", color: "brand.500" }}
                  transition="all 0.2s"
                >
                  {tab}
                </Tab>
              ))}
            </TabList>

            <TabPanels>
              {/* BUTTONS */}
              <TabPanel p={0}>
                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
                  {/* Button variants */}
                  <FadeIn>
                    <Box p={8} bg={cardBg} border="1px solid" borderColor={borderColor}>
                      <Text fontSize="xs" fontWeight="700" letterSpacing="0.1em" textTransform="uppercase" color={subtleText} mb={6}>
                        Button Variants
                      </Text>
                      <VStack align="flex-start" spacing={3}>
                        <Button colorScheme="brand" variant="solid" size="md" rightIcon={<Zap size={14} />}>
                          Solid Primary
                        </Button>
                        <Button colorScheme="brand" variant="outline" size="md">
                          Outline Primary
                        </Button>
                        <Button variant="ghost" color="brand.500" size="md">
                          Ghost Primary
                        </Button>
                        <Button colorScheme="gray" variant="solid" size="md">
                          Solid Secondary
                        </Button>
                        <Button isDisabled size="md">
                          Disabled State
                        </Button>
                        <Button isLoading colorScheme="brand" size="md" loadingText="Loading...">
                          Loading State
                        </Button>
                      </VStack>
                    </Box>
                  </FadeIn>

                  {/* Button sizes */}
                  <FadeIn delay={0.08}>
                    <Box p={8} bg={cardBg} border="1px solid" borderColor={borderColor}>
                      <Text fontSize="xs" fontWeight="700" letterSpacing="0.1em" textTransform="uppercase" color={subtleText} mb={6}>
                        Button Sizes
                      </Text>
                      <VStack align="flex-start" spacing={3}>
                        <Button colorScheme="brand" size="xs">Extra Small (XS)</Button>
                        <Button colorScheme="brand" size="sm">Small (SM)</Button>
                        <Button colorScheme="brand" size="md">Medium (MD)</Button>
                        <Button colorScheme="brand" size="lg">Large (LG)</Button>
                      </VStack>
                    </Box>
                  </FadeIn>

                  {/* Icon buttons */}
                  <FadeIn delay={0.12}>
                    <Box p={8} bg={cardBg} border="1px solid" borderColor={borderColor}>
                      <Text fontSize="xs" fontWeight="700" letterSpacing="0.1em" textTransform="uppercase" color={subtleText} mb={6}>
                        Interactive Icon Buttons
                      </Text>
                      <HStack spacing={4}>
                        <MotionBox
                          whileHover={{ scale: 1.1, rotate: 15 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setLiked(!liked)}
                          cursor="pointer"
                          p={3}
                          borderRadius="full"
                          bg={liked ? "red.50" : cardBg}
                          border="1px solid"
                          borderColor={liked ? "red.200" : borderColor}
                        >
                          <Heart size={20} fill={liked ? "#e53e3e" : "none"} color={liked ? "#e53e3e" : subtleText} />
                        </MotionBox>
                        <MotionBox
                          whileHover={{ scale: 1.1, rotate: -15 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setStarred(!starred)}
                          cursor="pointer"
                          p={3}
                          borderRadius="full"
                          bg={starred ? "yellow.50" : cardBg}
                          border="1px solid"
                          borderColor={starred ? "yellow.200" : borderColor}
                        >
                          <Star size={20} fill={starred ? "#d69e2e" : "none"} color={starred ? "#d69e2e" : subtleText} />
                        </MotionBox>
                        <MotionBox
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          cursor="pointer"
                          p={3}
                          borderRadius="full"
                          bg={cardBg}
                          border="1px solid"
                          borderColor={borderColor}
                        >
                          <Bell size={20} color={subtleText} />
                        </MotionBox>
                        <MotionBox
                          whileHover={{ scale: 1.1, rotate: 90 }}
                          transition={{ duration: 0.3 }}
                          cursor="pointer"
                          p={3}
                          borderRadius="full"
                          bg={cardBg}
                          border="1px solid"
                          borderColor={borderColor}
                        >
                          <Settings size={20} color={subtleText} />
                        </MotionBox>
                      </HStack>
                    </Box>
                  </FadeIn>

                  {/* Tags & badges */}
                  <FadeIn delay={0.16}>
                    <Box p={8} bg={cardBg} border="1px solid" borderColor={borderColor}>
                      <Text fontSize="xs" fontWeight="700" letterSpacing="0.1em" textTransform="uppercase" color={subtleText} mb={6}>
                        Tags & Badges
                      </Text>
                      <VStack align="flex-start" spacing={4}>
                        <HStack flexWrap="wrap">
                          {["brand", "green", "blue", "orange", "purple", "red"].map((c) => (
                            <Badge key={c} colorScheme={c} borderRadius="none" px={3} py={1}>
                              {c}
                            </Badge>
                          ))}
                        </HStack>
                        <HStack flexWrap="wrap">
                          {["Design", "UX", "Frontend", "Strategy", "Systems"].map((t) => (
                            <Tag key={t} size="md" borderRadius="none" variant="subtle" colorScheme="brand">
                              {t}
                            </Tag>
                          ))}
                        </HStack>
                      </VStack>
                    </Box>
                  </FadeIn>
                </Grid>
              </TabPanel>

              {/* FORMS */}
              <TabPanel p={0}>
                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
                  {/* Text inputs */}
                  <FadeIn>
                    <Box p={8} bg={cardBg} border="1px solid" borderColor={borderColor}>
                      <Text fontSize="xs" fontWeight="700" letterSpacing="0.1em" textTransform="uppercase" color={subtleText} mb={6}>
                        Input Fields
                      </Text>
                      <VStack spacing={4}>
                        <FormControl>
                          <FormLabel fontSize="xs" fontWeight="700" textTransform="uppercase" letterSpacing="0.08em">
                            Email Address
                          </FormLabel>
                          <InputGroup>
                            <InputLeftElement><Mail size={16} color={subtleText} /></InputLeftElement>
                            <Input placeholder="hello@example.com" borderRadius="none" borderColor={borderColor} _focus={{ borderColor: "brand.500", boxShadow: "none" }} />
                          </InputGroup>
                        </FormControl>
                        <FormControl>
                          <FormLabel fontSize="xs" fontWeight="700" textTransform="uppercase" letterSpacing="0.08em">
                            Search
                          </FormLabel>
                          <InputGroup>
                            <InputLeftElement><Search size={16} color={subtleText} /></InputLeftElement>
                            <Input placeholder="Search anything..." borderRadius="none" borderColor={borderColor} _focus={{ borderColor: "brand.500", boxShadow: "none" }} />
                          </InputGroup>
                        </FormControl>
                        <FormControl>
                          <FormLabel fontSize="xs" fontWeight="700" textTransform="uppercase" letterSpacing="0.08em">
                            Select
                          </FormLabel>
                          <Select borderRadius="none" borderColor={borderColor} _focus={{ borderColor: "brand.500", boxShadow: "none" }}>
                            <option>Product Design</option>
                            <option>Frontend Engineering</option>
                            <option>Design Systems</option>
                            <option>Brand Identity</option>
                          </Select>
                        </FormControl>
                        <FormControl>
                          <FormLabel fontSize="xs" fontWeight="700" textTransform="uppercase" letterSpacing="0.08em">
                            Message
                          </FormLabel>
                          <Textarea placeholder="Write your message..." borderRadius="none" borderColor={borderColor} _focus={{ borderColor: "brand.500", boxShadow: "none" }} rows={3} />
                        </FormControl>
                      </VStack>
                    </Box>
                  </FadeIn>

                  {/* Controls */}
                  <FadeIn delay={0.08}>
                    <Box p={8} bg={cardBg} border="1px solid" borderColor={borderColor}>
                      <Text fontSize="xs" fontWeight="700" letterSpacing="0.1em" textTransform="uppercase" color={subtleText} mb={6}>
                        Controls & Toggles
                      </Text>
                      <VStack align="stretch" spacing={6}>
                        {/* Slider */}
                        <Box>
                          <Flex justify="space-between" mb={2}>
                            <Text fontSize="sm" fontWeight="600" color={headingColor}>Progress Slider</Text>
                            <Text fontSize="sm" color="brand.500" fontWeight="700">{sliderVal}%</Text>
                          </Flex>
                          <Slider value={sliderVal} onChange={setSliderVal} colorScheme="brand">
                            <SliderTrack borderRadius="none" h="4px" bg={borderColor}>
                              <SliderFilledTrack bg="brand.500" />
                            </SliderTrack>
                            <SliderThumb w={4} h={4} borderRadius="sm" border="2px solid" borderColor="brand.500" />
                          </Slider>
                        </Box>

                        {/* Switches */}
                        <HStack justify="space-between">
                          <Text fontSize="sm" color={headingColor}>Enable notifications</Text>
                          <Switch colorScheme="brand" isChecked={toggleA} onChange={() => setToggleA(!toggleA)} />
                        </HStack>
                        <HStack justify="space-between">
                          <Text fontSize="sm" color={headingColor}>Dark mode</Text>
                          <Switch colorScheme="brand" isChecked={toggleB} onChange={() => setToggleB(!toggleB)} />
                        </HStack>

                        {/* Checkboxes */}
                        <Box>
                          <Text fontSize="xs" fontWeight="700" textTransform="uppercase" letterSpacing="0.08em" color={subtleText} mb={3}>
                            Preferences
                          </Text>
                          <Stack spacing={2}>
                            <Checkbox colorScheme="brand" defaultChecked>Receive product updates</Checkbox>
                            <Checkbox colorScheme="brand" defaultChecked>Weekly design newsletter</Checkbox>
                            <Checkbox colorScheme="brand">Marketing emails</Checkbox>
                          </Stack>
                        </Box>

                        {/* Radio */}
                        <Box>
                          <Text fontSize="xs" fontWeight="700" textTransform="uppercase" letterSpacing="0.08em" color={subtleText} mb={3}>
                            Plan
                          </Text>
                          <RadioGroup value={radioVal} onChange={setRadioVal} colorScheme="brand">
                            <Stack spacing={2}>
                              <Radio value="option1">Starter — Free</Radio>
                              <Radio value="option2">Professional — $49/mo</Radio>
                              <Radio value="option3">Enterprise — Custom</Radio>
                            </Stack>
                          </RadioGroup>
                        </Box>
                      </VStack>
                    </Box>
                  </FadeIn>
                </Grid>
              </TabPanel>

              {/* FEEDBACK */}
              <TabPanel p={0}>
                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
                  <FadeIn>
                    <Box p={8} bg={cardBg} border="1px solid" borderColor={borderColor}>
                      <Text fontSize="xs" fontWeight="700" letterSpacing="0.1em" textTransform="uppercase" color={subtleText} mb={6}>
                        Toast Notifications
                      </Text>
                      <VStack align="flex-start" spacing={3}>
                        {(["success", "error", "info", "warning"] as const).map((type) => (
                          <Button
                            key={type}
                            size="sm"
                            colorScheme={type === "success" ? "green" : type === "error" ? "red" : type === "warning" ? "orange" : "blue"}
                            variant="outline"
                            onClick={() => showToast(type)}
                            rightIcon={type === "success" ? <Check size={14} /> : type === "error" ? <X size={14} /> : undefined}
                          >
                            Show {type.charAt(0).toUpperCase() + type.slice(1)}
                          </Button>
                        ))}
                      </VStack>
                    </Box>
                  </FadeIn>
                  <FadeIn delay={0.08}>
                    <Box p={8} bg={cardBg} border="1px solid" borderColor={borderColor}>
                      <Text fontSize="xs" fontWeight="700" letterSpacing="0.1em" textTransform="uppercase" color={subtleText} mb={6}>
                        Progress Indicators
                      </Text>
                      <VStack spacing={5}>
                        {[
                          { label: "UI Design", value: 95 },
                          { label: "Frontend Dev", value: 88 },
                          { label: "UX Research", value: 82 },
                          { label: "Brand Strategy", value: 75 },
                        ].map((skill) => (
                          <Box key={skill.label} w="100%">
                            <Flex justify="space-between" mb={2}>
                              <Text fontSize="sm" color={headingColor} fontWeight="600">{skill.label}</Text>
                              <Text fontSize="sm" color="brand.500" fontWeight="700">{skill.value}%</Text>
                            </Flex>
                            <Progress value={skill.value} colorScheme="brand" size="sm" borderRadius="none" bg={borderColor} />
                          </Box>
                        ))}
                      </VStack>
                    </Box>
                  </FadeIn>
                </Grid>
              </TabPanel>

              {/* DATA DISPLAY */}
              <TabPanel p={0}>
                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
                  <FadeIn>
                    <Box p={8} bg={cardBg} border="1px solid" borderColor={borderColor}>
                      <Text fontSize="xs" fontWeight="700" letterSpacing="0.1em" textTransform="uppercase" color={subtleText} mb={6}>
                        User Cards
                      </Text>
                      <VStack spacing={4}>
                        {[
                          { name: "Deri Kurniawan", role: "Product Designer", status: "Online" },
                          { name: "Sarah Chen", role: "Frontend Engineer", status: "Busy" },
                          { name: "Marcus Liu", role: "Brand Strategist", status: "Offline" },
                        ].map((u) => (
                          <HStack
                            key={u.name}
                            w="100%"
                            p={4}
                            bg={bg}
                            border="1px solid"
                            borderColor={borderColor}
                            _hover={{ borderColor: "brand.500" }}
                            transition="border-color 0.2s"
                          >
                            <Avatar name={u.name} size="sm" bg="brand.500" />
                            <Box flex={1}>
                              <Text fontSize="sm" fontWeight="700" color={headingColor}>{u.name}</Text>
                              <Text fontSize="xs" color={subtleText}>{u.role}</Text>
                            </Box>
                            <Badge
                              colorScheme={u.status === "Online" ? "green" : u.status === "Busy" ? "orange" : "gray"}
                              borderRadius="full"
                              px={2}
                              fontSize="xs"
                            >
                              {u.status}
                            </Badge>
                          </HStack>
                        ))}
                      </VStack>
                    </Box>
                  </FadeIn>

                  <FadeIn delay={0.08}>
                    <Box p={8} bg={cardBg} border="1px solid" borderColor={borderColor}>
                      <Text fontSize="xs" fontWeight="700" letterSpacing="0.1em" textTransform="uppercase" color={subtleText} mb={6}>
                        Color Palette
                      </Text>
                      <VStack spacing={3}>
                        {[
                          { name: "Brand Primary", value: "#FE4820", light: false },
                          { name: "Brand Dark", value: "#D93A18", light: false },
                          { name: "Surface Light", value: "#F9F9F9", light: true },
                          { name: "Text Primary", value: "#1A1A1A", light: false },
                          { name: "Text Muted", value: "#767676", light: false },
                        ].map((c) => (
                          <HStack key={c.name} w="100%" spacing={4}>
                            <Box w="40px" h="40px" bg={c.value} border="1px solid" borderColor={borderColor} flexShrink={0} />
                            <Box>
                              <Text fontSize="sm" fontWeight="600" color={headingColor}>{c.name}</Text>
                              <Text fontSize="xs" fontFamily="mono" color={subtleText}>{c.value}</Text>
                            </Box>
                          </HStack>
                        ))}
                      </VStack>
                    </Box>
                  </FadeIn>
                </Grid>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </Box>
    </PageWrapper>
  );
}
