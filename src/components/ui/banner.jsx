import { Flex, Image, Box, Text, Button } from '@chakra-ui/react'
import React from 'react'

const Banner = () => {
  return (
    <Box position="relative" w="100%" h="600px" overflow="hidden">
      {/* Background Image with Overlay */}
      <Image
        src="/banner.jpg"
        alt="GOT7 Banner"
        width="100%"
        height="100%"
        objectFit="cover"
        filter="brightness(0.4)"
      />
      
      {/* Gradient Overlay for better text readability */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient="linear(to-r, blackAlpha.800, blackAlpha.400, transparent)"
      />

        <Box
        display={{ base: "none", lg: "block" }}
        position="absolute"
        top="-40px"
        left="20px"
        zIndex={1}             
        opacity={0.8}
        transform="rotate(-15deg)"
        >
        {/* paste your SVG here */}
        <svg width="180" height="180" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_104_35)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M107.143 0H92.8571V63.2531L69.1621 4.60582L55.9166 9.95735L80.2255 70.1239L34.3401 24.2385L24.2386 34.3401L68.2177 78.3191L11.2241 53.4181L5.50459 66.5089L65.8105 92.8571H0V107.143H65.8104L5.50461 133.491L11.2241 146.582L68.2176 121.681L24.2386 165.66L34.3401 175.761L80.2255 129.876L55.9166 190.043L69.1621 195.394L92.8571 136.747V200H107.143V136.747L130.838 195.394L144.083 190.043L119.775 129.876L165.66 175.761L175.761 165.66L131.782 121.681L188.776 146.582L194.495 133.491L134.19 107.143H200V92.8571H134.189L194.495 66.5089L188.776 53.4181L131.782 78.3191L175.761 34.34L165.66 24.2385L119.775 70.1238L144.083 9.95735L130.838 4.60582L107.143 63.2531V0Z" fill="url(#paint0_linear_104_35)"/> </g> <defs> <linearGradient id="paint0_linear_104_35" x1="14" y1="26" x2="179" y2="179.5" gradientUnits="userSpaceOnUse"> <stop stop-color="#E9B8FF"/> <stop offset="1" stop-color="#F9ECFF"/> </linearGradient> <clipPath id="clip0_104_35"> <rect width="200" height="200" fill="white"/> </clipPath> </defs> </svg>

        </Box>

        {/* Shape B (top-right) */}
        <Box
        display={{ base: "none", lg: "block" }}
        position="absolute"
        top="120px"
        right="15px"
        zIndex={1}
        opacity={0.8}
        transform="rotate(10deg)"
        >
        <svg width="180" height="180" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M100.106 0L115 54.1591L158.884 19.0983L139.1 71.6687L195.211 69.0983L148.306 100L195.211 130.902L139.1 128.331L158.884 180.902L115 145.841L100.106 200L85.211 145.841L41.3271 180.902L61.111 128.331L5 130.902L51.9057 100L5 69.0983L61.111 71.6687L41.3271 19.0983L85.211 54.1591L100.106 0Z" fill="url(#paint0_linear_103_4)"/> <defs> <linearGradient id="paint0_linear_103_4" x1="31.1541" y1="19" x2="153.991" y2="168.516" gradientUnits="userSpaceOnUse"> <stop stop-color="#FFD9A0"/> <stop offset="1" stop-color="#FFF5F1"/> </linearGradient> </defs> </svg>
                
        </Box>

        {/* Shape C (bottom-left)
        <Box
        display={{ base: "none", lg: "block" }}
        position="absolute"
        bottom="30px"
        left="50px"
        zIndex={1}
        opacity={0.8}
        transform="rotate(25deg)"
        >
        <svg width="170" height="170" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_105_560)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M200 100.671L100 0L0 100.671H98.6668L0 200H200L101.333 100.671H200Z" fill="url(#paint0_linear_105_560)"/> </g> <defs> <linearGradient id="paint0_linear_105_560" x1="20.5" y1="16" x2="100" y2="200" gradientUnits="userSpaceOnUse"> <stop stop-color="#ACAAFF"/> <stop offset="1" stop-color="#C0E8FF"/> </linearGradient> <clipPath id="clip0_105_560"> <rect width="200" height="200" fill="white"/> </clipPath> </defs> </svg> 
        </Box> */}

        {/* Shape C (bottom-left) */}
        <Box
        position="absolute"
        bottom="-90px"
        left="30px"
        zIndex={1}
        >
            <Image src="/ahgase.png" alt="Ahgase" width="400px" height="280px" />
        </Box>

        {/* Shape D (bottom-right) */}
        <Box
        display={{ base: "none", lg: "block" }}
        position="absolute"
        bottom="20px"
        right="180px"
        zIndex={1}
        opacity={0.8}
        transform="rotate(-20deg)"
        >
        <svg width="150" height="150" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_103_9)"> <path d="M89.9318 6.12863C94.1569 -2.04288 105.843 -2.04288 110.068 6.12863L136.973 58.1644C138.051 60.2496 139.75 61.9486 141.836 63.0268L193.871 89.9318C202.043 94.1569 202.043 105.843 193.871 110.068L141.836 136.973C139.75 138.051 138.051 139.75 136.973 141.836L110.068 193.871C105.843 202.043 94.1569 202.043 89.9318 193.871L63.0268 141.836C61.9486 139.75 60.2496 138.051 58.1644 136.973L6.12863 110.068C-2.04288 105.843 -2.04288 94.1569 6.12863 89.9318L58.1644 63.0268C60.2496 61.9486 61.9486 60.2496 63.0268 58.1644L89.9318 6.12863Z" fill="url(#paint0_linear_103_9)"/> </g> <defs> <linearGradient id="paint0_linear_103_9" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse"> <stop stop-color="#DF99F7"/> <stop offset="1" stop-color="#FFDBB0"/> </linearGradient> <clipPath id="clip0_103_9"> <rect width="200" height="200" fill="white"/> </clipPath> </defs> </svg> 
        </Box>
        
      {/* Content Container */}
      <Flex
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        align="center"
        justify="space-between"
        px={{ base: 6, md: 12, lg: 20 }}
        py={10}
      >
        {/* Left Content */}
        <Box maxW="800px" zIndex={2}>
          {/* Main Heading */}
          <Text
            fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
            fontWeight="700"
            color="white"
            mb={4}
          >
            Welcome to 
            <Text color="green.400" as="span" ml={4}> 
              GOT7 Nest
            </Text>
          </Text>
          
          {/* Subtitle */}
          <Text
            fontSize={{ base: "sm", md: "md" }}
            color="gray.200"
            mb={8}
            fontWeight="400"
            textShadow="0 2px 10px rgba(0,0,0,0.8)"
            maxW="590px"
            lineHeight="relaxed"
          >
            Your one-stop fan platform for exclusive events, latest updates, and connecting with the GOT7 community worldwide.
          </Text>
          
          {/* CTA Button */}
          <Button
            size="lg"
            borderRadius="full"
            px={8}
            py={6}
            bg="linear-gradient(135deg, #48BB78, #38A169)"
            color="white"
            fontWeight="bold"
            fontSize="lg"
            boxShadow="0 8px 32px rgba(72, 187, 120, 0.4)"
            transition="all 0.3s ease"
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "0 12px 40px rgba(72, 187, 120, 0.6)",
              bg: "linear-gradient(135deg, #38A169, #2F855A)",
            }}
            _active={{
              transform: "translateY(0px)",
            }}
          >
            Explore the Chaos!
          </Button>
        </Box>
        {/* Right Decorative Element */}
        <Box
          display={{ base: "none", lg: "block" }}
          position="relative"
          zIndex={1}
        >
          {/* Floating Cards */}
          <Box position="relative">
            <Box
              w="200px"
              h="120px"
              bg="whiteAlpha.100"
              backdropFilter="blur(10px)"
              borderRadius="20px"
              border="1px solid"
              borderColor="whiteAlpha.300"
              p={6}
              position="absolute"
              top="-60px"
              right="0"
              transform="rotate(5deg)"
              boxShadow="0 8px 32px rgba(0,0,0,0.3)"
            >
              <Text color="white" fontWeight="bold" fontSize="sm" mb={2}>
                Latest Updates
              </Text>
              <Text color="gray.300" fontSize="xs">
                Stay connected with your favorite group
              </Text>
            </Box>
            
            <Box
              w="200px"
              h="120px"
              bg="whiteAlpha.100"
              backdropFilter="blur(10px)"
              borderRadius="20px"
              border="1px solid"
              borderColor="whiteAlpha.300"
              p={6}
              position="absolute"
              top="80px"
              right="-40px"
              transform="rotate(-5deg)"
              boxShadow="0 8px 32px rgba(0,0,0,0.3)"
            >
              <Text color="white" fontWeight="bold" fontSize="sm" mb={2}>
                Exclusive Events
              </Text>
              <Text color="gray.300" fontSize="xs">
                Join special fan experiences
              </Text>
            </Box>
          </Box>
        </Box>
      </Flex>
      
      {/* Bottom Decorative Elements */}
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        h="2px"
        bgGradient="linear(to-r, green.400, blue.400, purple.400)"
      />
    </Box>
  )
}

export default Banner