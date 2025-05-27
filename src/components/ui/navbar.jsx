// Footer.js
import { Box, Flex, Text, Link, Stack, Image, Button, VStack, HStack } from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { useState } from 'react';

const Navbar = () => {
    const [activePage, setActivePage] = useState('Home');

    const handleNavClick = (page) => {
        setActivePage(page);
    };
  return (
    <Box
      bg="#0aab45"
    >
      <Flex 
        p={4}
        justifyContent="space-between"
      >
        <Flex direction={"row"} justifyContent={"space-between"} alignItems={"center"} w="100%">
          <Flex direction={"column"} >
            <Image 
              src="src/assets/GOT7-Logo.png" 
              w={"100px"} 
              alt="GOT7 Logo" 
              height="60px"
            />
          </Flex>
          <Flex direction={"row"} justifyContent={"space-between"} gap={25} w={"200px"}>
            <Link
            fontSize="sm"
            fontWeight="bold"
            onClick={() => handleNavClick("Home")}
            bg={activePage === "Home" ? "white" : "transparent"}
            color={"#222222"}
            px={3}
            py={1}
            borderRadius="full"
            >
            Home
            </Link>

            <Link
            fontSize="sm"
            fontWeight="bold"
            onClick={() => handleNavClick("About")}
            bg={activePage === "About" ? "white" : "transparent"}
            color={"#222222"}
            px={3}
            py={1}
            borderRadius="full"
            >
            About
            </Link>
            <Link
            fontSize="sm"
            fontWeight="bold"
            onClick={() => handleNavClick("News")}
            bg={activePage === "News" ? "white" : "transparent"}
            color={"#222222"}
            px={3}
            py={1}
            borderRadius="full"
            >
            News
            </Link>
            <Link
            fontSize="sm"
            fontWeight="bold"
            onClick={() => handleNavClick("Gallery")}
            bg={activePage === "Gallery" ? "white" : "transparent"}
            color={"#222222"}
            px={3}
            py={1}
            borderRadius="full"
            >
            Gallery
            </Link>
          </Flex>
          <Flex direction={"row"}>
                <Stack direction={"row"} spacing={4}>
                    <Link href="https://www.instagram.com/got7/" isExternal>
                    <Box 
                        p={2} 
                        bg={"white"} 
                        borderRadius="full" 
                        _hover={{ bg: "rgba(204, 247, 220, 0.5)" }}
                        transition="all 0.2s"
                    >
                        <FaInstagram size={20} color="#222222" />
                    </Box>
                    </Link>
                    <Link href="https://twitter.com/GOT7Official" isExternal>
                    <Box 
                        p={2}
                        bg={"white"} 
                        borderRadius="full" 
                        _hover={{ bg: "rgba(204, 247, 220, 0.5)" }}
                        transition="all 0.2s"
                    >
                        <FaTwitter size={20} color="#222222" />
                    </Box>
                    </Link>
                    <Link href="https://www.youtube.com/channel/UCV1fFrt0c2G8z3d6b9a5QwA" isExternal>
                    <Box 
                        p={2} 
                        bg={"white"} 
                        borderRadius="full" 
                        _hover={{ bg: "rgba(204, 247, 220, 0.5)" }}
                        transition="all 0.2s"
                    >
                        <FaYoutube size={20} color="#222222" />
                    </Box>
                    </Link>
                </Stack>
                <Button 
                size={"md"} 
                color="white"
                _hover={{ bg: "rgb(57, 71, 62)" }}
                borderRadius="lg"
                px={6}
                ml={4}
                >
                    Sign in
                </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;