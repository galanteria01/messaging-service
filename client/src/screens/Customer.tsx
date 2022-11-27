import { Flex, VStack } from '@chakra-ui/react'
import React from 'react'
import ChatList from '../components/ChatList'
import ChatScreen from '../components/ChatScreen'
import Navbar from '../components/Navbar'

interface CustomerProps {}

const Customer: React.FC<CustomerProps> = (props) => {
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
        <ChatList setUserId={setUserId} />
        <ChatScreen userId={userId} />
      </Flex>
    </VStack>
  )
}

export default Customer