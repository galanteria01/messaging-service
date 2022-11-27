import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

interface MessageSendProps {
  message: string
}

const MessageSend: React.FC<MessageSendProps> = (props) => {
  return (
    <Flex
      alignSelf={'flex-end'}
      m={4}
      bg={'blackAlpha.800'}
      p={2}
      borderRadius={4}
    >
      <Text>{props.message}</Text>
    </Flex>
  )
}

export default MessageSend