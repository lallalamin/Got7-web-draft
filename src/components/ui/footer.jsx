// Footer.js
import { Box, Flex, Text, Link, Stack, Image, Button } from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Box 
      position="relative" 
      bg="linear-gradient(135deg, #0aab45 0%, #3c8350 100%)" 
      color="white" 
      py={16} 
      px={6} 
      mt={12}
      overflow="hidden"
    >
      {/* Decorative Background Elements */}
      <Box
        position="absolute"
        top="-20px"
        left="10%"
        width="80px"
        height="80px"
        borderRadius="full"
        bg="rgba(255, 255, 255, 0.1)"
        transform="rotate(45deg)"
      />
      <Box
        position="absolute"
        top="20px"
        right="15%"
        width="60px"
        height="60px"
        borderRadius="md"
        bg="rgba(255, 255, 255, 0.08)"
        transform="rotate(15deg)"
      />
      <Box
        position="absolute"
        bottom="10%"
        left="5%"
        width="100px"
        height="100px"
        borderRadius="full"
        bg="rgba(255, 255, 255, 0.05)"
      />
      <Box
        position="absolute"
        bottom="-30px"
        right="20%"
        width="120px"
        height="120px"
        borderRadius="md"
        bg="rgba(255, 255, 255, 0.06)"
        transform="rotate(-20deg)"
      />

      {/* Main Footer Content */}
      <Flex 
        bg="#f3f6f4" 
        p={8} 
        borderRadius="xl" 
        boxShadow="0 10px 40px rgba(0, 0, 0, 0.1)" 
        justifyContent="space-between"
        position="relative"
        zIndex={1}
        backdropFilter="blur(10px)"
        border="1px solid rgba(255, 255, 255, 0.2)"
      >
        <Flex direction={"row"}>
          <Flex direction={"column"} mr={20} >
            <Image 
              src="/GOT7-Logo.png" 
              mb={8} 
              w={"100px"} 
              alt="GOT7 Logo" 
              height="60px"
            />
            <Box mt="auto">
              <Text fontSize={"xs"} color={"#222222"} mb={1}>
                © {new Date().getFullYear()} GOT7 Fan Platform - Join The Nest!
              </Text>
              <Text fontSize={"xs"} color={"#222222"}>
                Built with 💚 by fans 
              </Text>
            </Box>
          </Flex>
          
          <Flex direction={"row"} justifyContent={"space-between"} gap={16}>
            <Flex direction={"column"}>
              <Text fontWeight="bold" color={"#222222"} mb={4} fontSize="md">
                Get Involved
              </Text>
              <Stack spacing={3}>
                <Link fontSize={"sm"} color={"#222222"} _hover={{ color: "#0aab45" }}>
                  Open Volunteer Roles
                </Link>
                <Link fontSize={"sm"} color={"#222222"} _hover={{ color: "#0aab45" }}>
                  Submit Fan Art
                </Link>
                <Link fontSize={"sm"} color={"#222222"} _hover={{ color: "#0aab45" }}>
                  Share Event Info
                </Link>
                <Link fontSize={"sm"} color={"#222222"} _hover={{ color: "#0aab45" }}>
                  Join Our Discord
                </Link>
              </Stack>
            </Flex>
            
            <Flex direction={"column"}>
              <Text fontWeight="bold" color={"#222222"} mb={4} fontSize="md">
                Discover
              </Text>
              <Stack spacing={3}>
                <Link fontSize={"sm"} color={"#222222"} _hover={{ color: "#0aab45" }}>
                  By Member
                </Link>
                <Link fontSize={"sm"} color={"#222222"} _hover={{ color: "#0aab45" }}>
                  By Era
                </Link>
                <Link fontSize={"sm"} color={"#222222"} _hover={{ color: "#0aab45" }}>
                  Solo Activities
                </Link>
              </Stack>
            </Flex>
          </Flex>
        </Flex>

        <Flex direction={"column"} alignItems={"flex-end"} justifyContent={"space-between"}>
          <Flex direction={"column"} alignItems={"flex-end"} mb={6}>
            <Button 
              size={"md"} 
              mb={4}
              color="white"
              _hover={{ bg: "#3c8350" }}
              borderRadius="lg"
              px={6}
            >
              Contact us
            </Button>
            <Image 
              src="/coffee.png" 
              w={"115px"} 
              alt="buy me a coffee"
            />
          </Flex>
          
          <Flex direction={"column"} alignItems={"flex-end"}>
            <Stack direction={"row"} spacing={4} mb={3}>
              <Link href="https://www.instagram.com/got7/" isExternal>
                <Box 
                  p={2} 
                  borderRadius="md" 
                  _hover={{ bg: "rgba(10, 171, 69, 0.1)" }}
                  transition="all 0.2s"
                >
                  <FaInstagram size={20} color="#222222" />
                </Box>
              </Link>
              <Link href="https://twitter.com/GOT7Official" isExternal>
                <Box 
                  p={2} 
                  borderRadius="md" 
                  _hover={{ bg: "rgba(10, 171, 69, 0.1)" }}
                  transition="all 0.2s"
                >
                  <FaTwitter size={20} color="#222222" />
                </Box>
              </Link>
              <Link href="https://www.youtube.com/channel/UCV1fFrt0c2G8z3d6b9a5QwA" isExternal>
                <Box 
                  p={2} 
                  borderRadius="md" 
                  _hover={{ bg: "rgba(10, 171, 69, 0.1)" }}
                  transition="all 0.2s"
                >
                  <FaYoutube size={20} color="#222222" />
                </Box>
              </Link>
            </Stack>
            <Text fontSize={"xs"} color={"#222222"}>
              Follow us on social media
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;