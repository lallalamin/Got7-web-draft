import React from 'react'
import { Container, Flex, Box, Text, Image } from "@chakra-ui/react"

const About = () => {
  return (
    <Flex direction="column" mr={120} ml={120} mt={4} mb={4} gap={4}>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        gap={8}
      >
        {/* left side: heading + text */}
        <Box flex="1" maxW={{ md: "45%" }}>
          <Text fontSize="4xl" fontWeight="bold" mb={4}>
            ABOUT GOT7
          </Text>
          <Text fontSize="md" color="gray.800" bg="white" p={6} borderRadius="md">
            GOT7 (갓세븐) is a 7-member South Korean boy group, They debuted on January 16, 2014, under JYP 
            Entertainment with their first mini album, Got it?. JYP Entertainment released a statement that 
            the group will be officially leaving the agency on January 19th, 2021 following the expiration 
            of their contract. On February 20, 2021, they released their first single after leaving 
            JYP Ent., Encore. It seems the group has signed under Warner Music Korea.
          </Text>
        </Box>

        {/* right side: image */}
        <Image
            src="/group2wShape.png"
            alt="GOT7 Group"
            w="30%"
            objectFit="cover"
          />
        
      </Flex>
    </Flex>
  )
}

export default About
