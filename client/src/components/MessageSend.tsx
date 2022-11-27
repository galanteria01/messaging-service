import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

interface MessageSendProps {
  message: string,
  time: string
}

const MessageSend: React.FC<MessageSendProps> = (props) => {
  return (
    <Flex
      alignSelf={'flex-end'}
      m={'2!important'}
      bg={'blackAlpha.800'}
      flexDir={'column'}
      p={2}
      borderRadius={4}
    >
      <Text>{props.message}</Text>
      <Text alignSelf={'flex-end'} fontSize={12} color={'gray.600'}>{props.time}</Text>
    </Flex>
  )
}

export default MessageSend