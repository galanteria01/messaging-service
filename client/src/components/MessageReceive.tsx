import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

interface MessageRecieveProps {
  message: string,
  time: string
}

const MessageReceive: React.FC<MessageRecieveProps> = (props) => {
  return (
    <Flex
      alignSelf={'flex-start'}
      m={'2!important'}
      bg={'blackAlpha.400'}
      flexDir={'column'}
      p={2}
      borderRadius={4}
    >
      <Text>{props.message}</Text>
      <Text alignSelf={'flex-end'} fontSize={12} color={'gray.600'}>{props.time}</Text>
    </Flex>
  )
}

export default MessageReceive