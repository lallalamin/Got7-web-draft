import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/ui/navbar.jsx'
import Footer from './components/ui/footer.jsx'
import Banner from './components/ui/banner.jsx'
import Member from './components/ui/member.jsx'
import Upcomingevent from './components/ui/upcomingevent.jsx'
import { Text, Timeline, Box, Flex, Image } from "@chakra-ui/react"
import { LuCheck, LuPackage, LuShip } from "react-icons/lu"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Banner/>
      <Member/>
      <Upcomingevent/>
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