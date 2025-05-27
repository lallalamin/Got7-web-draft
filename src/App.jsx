import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/ui/navbar.jsx'
import Footer from './components/ui/footer.jsx'
import { Text, Timeline, Box, Flex, Image } from "@chakra-ui/react"
import { LuCheck, LuPackage, LuShip } from "react-icons/lu"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      
      <Flex direction="column" mr={150} ml={150} mt={4} mb={4} gap={4}>
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
      
      <Footer/>
    </>
  )
}

export default App


{/* <div style={{ padding: "20px" }}>
        <Timeline.Root maxW="400px">
          <Timeline.Item>
            <Timeline.Connector>
              <Timeline.Separator />
              <Timeline.Indicator>
                <LuShip />
              </Timeline.Indicator>
            </Timeline.Connector>
            <Timeline.Content>
              <Timeline.Title>Product Shipped</Timeline.Title>
              <Timeline.Description>13th May 2021</Timeline.Description>
              <Text textStyle="sm">
                We shipped your product via <strong>FedEx</strong> and it should
                arrive within 3-5 business days.
              </Text>
            </Timeline.Content>
          </Timeline.Item>

          <Timeline.Item>
            <Timeline.Connector>
              <Timeline.Separator />
              <Timeline.Indicator>
                <LuCheck />
              </Timeline.Indicator>
            </Timeline.Connector>
            <Timeline.Content>
              <Timeline.Title textStyle="sm">Order Confirmed</Timeline.Title>
              <Timeline.Description>18th May 2021</Timeline.Description>
            </Timeline.Content>
          </Timeline.Item>

          <Timeline.Item>
            <Timeline.Connector>
              <Timeline.Separator />
              <Timeline.Indicator>
                <LuPackage />
              </Timeline.Indicator>
            </Timeline.Connector>
            <Timeline.Content>
              <Timeline.Title textStyle="sm">Order Delivered</Timeline.Title>
              <Timeline.Description>20th May 2021, 10:30am</Timeline.Description>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline.Root>
      </div> */}