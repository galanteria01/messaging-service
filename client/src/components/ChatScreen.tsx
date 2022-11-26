import { VStack } from '@chakra-ui/react'
import React from 'react'

interface ChatScreenProps { }

const ChatScreen: React.FC<ChatScreenProps> = (props) => {
  return (
    <VStack
      h={'100%'}
      flex={0.7}
      bg={'blackAlpha.50'}
    >

    </VStack>
  )
}

export default ChatScreen