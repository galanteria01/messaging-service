import {
  VStack,
  Flex,
} from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import ChatList from "./components/ChatList"
import ChatScreen from "./components/ChatScreen"

export const App = () => {

  return (
    <VStack
      h={'100vh'}
      w={'100%'}
    >
      <Navbar />
      <Flex
        w={'100%'}
        h={'100%'}
        justifyContent={'space-between'}
        marginTop={'0!important'}
      >
        <ChatList />
        <ChatScreen />
      </Flex>
    </VStack>
  )
}
