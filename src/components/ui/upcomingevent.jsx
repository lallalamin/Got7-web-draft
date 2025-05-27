import React from 'react'
import { Text, Timeline, Box, Flex, Image } from "@chakra-ui/react"
import { LuCheck, LuPackage, LuShip } from "react-icons/lu"

const upcomingevent = () => {
  return (
    <Flex direction="column" mr={120} ml={120} mt={4} mb={4} gap={4}>
        <Text as="span" fontSize="xl" fontWeight="bold" color="black">UPCOMING EVENTS</Text>
        <Flex direction={"row"} gap={4} wrap="wrap">
          <Flex direction="column" justifyContent={"space-between"} bg="white" p={4} borderRadius="md" boxShadow="md" w={"300px"} height={"350px"}>
            <Flex direction="row" justifyContent={"space-between"} >
              <Flex direction="column">
                <Text fontSize="5xl" fontWeight="bold">11</Text>
                <Text>June</Text>
              </Flex>
              <Image src="src/assets/jayb.jpg" alt="Jay B" width="130px" height="200px" />
            </Flex>
            <Flex direction="column">
              <Text fontSize="lg" fontWeight="bold">Jay B TAPE: RE LOAD US TOUR Chicago</Text>
              <Flex direction="column">
                <Text>7:30PM</Text>
                <Text>@ Riviera Theatre</Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex direction="column" justifyContent={"space-between"} bg="white" p={4} borderRadius="md" boxShadow="md" w={"300px"} height={"350px"}>
            <Flex direction="row" justifyContent={"space-between"}>
              <Flex direction="column">
                <Text fontSize="5xl" fontWeight="bold">13</Text>
                <Text>June</Text>
              </Flex>
              <Image src="src/assets/jayb.jpg" alt="Jay B" width="130px" height="200px" />
            </Flex>
            <Flex direction="column">
              <Text fontSize="lg" fontWeight="bold">Jay B TAPE: RE LOAD US TOUR Washington</Text>
              <Flex direction="column">
                <Text>7:30PM</Text>
                <Text>@ The Hall at Maryland Live</Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex direction="column" justifyContent={"space-between"} bg="white" p={4} borderRadius="md" boxShadow="md" w={"300px"} height={"350px"}>
            <Flex direction="row" justifyContent={"space-between"}>
              <Flex direction="column">
                <Text fontSize="5xl" fontWeight="bold">17</Text>
                <Text>June</Text>
              </Flex>
              <Image src="src/assets/yugyeom.jpg" alt="Yugyeom" width="130px" height="200px" />
            </Flex>
            <Flex direction="column">
              <Text fontSize="lg" fontWeight="bold">Interlunar Yugyeom Album Release</Text>
              <Flex direction="column">
                <Text>7:00PM</Text>
                <Text>@ Youtube</Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex direction="column" justifyContent={"space-between"} bg="white" p={4} borderRadius="md" boxShadow="md" w={"300px"} height={"350px"}>
            <Flex direction="row" justifyContent={"space-between"}>
              <Flex direction="column">
                <Text fontSize="5xl" fontWeight="bold">18</Text>
                <Text>July</Text>
              </Flex>
              <Image src="src/assets/jackson.jpg" alt="Jackson" width="130px" height="200px" />
            </Flex>
            <Flex direction="column">
              <Text fontSize="lg" fontWeight="bold">MagicMan2 Jackson Album Release</Text>
              <Flex direction="column">
                <Text>7:00PM</Text>
                <Text>@ Youtube</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
  )
}

export default upcomingevent