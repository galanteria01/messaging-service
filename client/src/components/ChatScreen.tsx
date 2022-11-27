import { Flex, IconButton, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import MessageReceive from './MessageReceive'
import MessageSend from './MessageSend'

interface ChatScreenProps {
  userId: string
}

const ChatScreen: React.FC<ChatScreenProps> = (props) => {
  return (
    <Flex
      h={'100%'}
      flex={0.7}
      bg={'blackAlpha.50'}
      direction={'column'}
    >
      <VStack
        flex={1}
      >
        <MessageReceive message='Hello recieve' />
        <MessageSend message='Hello send' />
      </VStack>
      <Flex
        p={4}
      >
        <Input placeholder='Type your message' />
        <IconButton
          mx={2}
          colorScheme='teal'
          aria-label='Search database'
          icon={<FaArrowAltCircleRight />}
        />
      </Flex>
    </Flex>
  )
}

export default ChatScreen