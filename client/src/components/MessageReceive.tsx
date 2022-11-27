import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

interface MessageRecieveProps {
  message: string
}

const MessageReceive: React.FC<MessageRecieveProps> = (props) => {
  return (
    <Flex
      alignSelf={'flex-start'}
      m={'2!important'}
      bg={'blackAlpha.400'}
      p={2}
      borderRadius={4}
    >
      <Text>{props.message}</Text>
    </Flex>
  )
}

export default MessageReceive