import { Flex, VStack } from '@chakra-ui/react'
import React from 'react'
import ChatList from '../components/ChatList'
import ChatScreen from '../components/ChatScreen'
import Navbar from '../components/Navbar'

const Customer = () => {
  const [userId, setUserId] = React.useState<string>("");
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
        <ChatScreen userId={userId} />
      </Flex>
    </VStack>
  )
}

export default Customer