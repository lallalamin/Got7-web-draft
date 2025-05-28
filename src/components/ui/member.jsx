import React from 'react'
import { Text, Timeline, Box, Flex, Image, Tag, SimpleGrid } from "@chakra-ui/react"
import { LuCheck, LuPackage, LuShip } from "react-icons/lu"

const memberlist = [
    { name: "JayB", role: ["Leader", "Main Vocalist"], image: "/JB.jpg", description: "Chic & Sexy" },
    { name: "Mark", role: ["Lead Rapper"], image: "/MK.jpg", description: "Markipooh" },
    { name: "Jackson", role: ["Main Rapper"], image: "/JK.jpg", description: "Wang Puppy" },
    { name: "Jinyoung", role: ["Sub Vocalist"], image: "/JY.jpg", description: "Savage Eomma" },
    { name: "Youngjae", role: ["Main Vocalist"], image: "/YJ.jpg", description: "Sunshine Otter" },
    { name: "BamBam", role: ["Sub Rapper"], image: "/BB.jpg", description: "DoubleB" },
    { name: "Yugyeom", role: ["Main Dancer"], image: "/YG.jpg", description: "Pure Crystal" }
]

const member = () => {
  return (
    <Flex direction="column" mr={120} ml={120} mt={4} mb={4} gap={4}>
        <Text as="span" fontSize="xl" fontWeight="bold" color="black">MEMBERS</Text>
        <SimpleGrid
        columns={{ base: 2, sm: 3, md: 4, lg: 7 }}  // 7 on large, fewer as it shrinks
        spacing={6} gap={2}>
            {memberlist.map((member, index) => (
                <Flex direction={"column"} justifyContent={"space-between"} bg={"white"} borderRadius="lg" boxShadow="md" mb={4} overflow={"hidden"}>
                    <Flex direction="column" p={2} >
                        <Flex wrap={"wrap"}>
                            {member.role.map((role, idx) => (
                                <Tag.Root key={idx} size="sm" colorPalette="green" mr={2} mb={2}>
                                    <Tag.Label >
                                        {role}
                                    </Tag.Label>
                                    <Tag.EndElement>
                                        <Tag.CloseTrigger />
                                    </Tag.EndElement>
                                </Tag.Root>
                            ))}
                        </Flex>
                    </Flex>
                    <Flex direction={"column"} >
                        <Flex direction="column" ml={4} mb={2}>
                            <Text fontSize="2xl" fontWeight="bold">{member.name}</Text>
                            <Text>{member.description}</Text>
                        </Flex>
                        <Image src={member.image} alt={member.name} w={"100%"} h={"220px"} borderRadius={"lg"} />
                    </Flex>
                </Flex>
            ))}

        </SimpleGrid>
        <Flex direction={"row"} gap={4} wrap="wrap">
            
        </Flex>
      </Flex>
  )
}

export default member