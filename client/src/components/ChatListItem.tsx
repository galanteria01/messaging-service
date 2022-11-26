import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

interface ChatListProps { 
  userId: string
}

const ChatListItem: React.FC<ChatListProps> = (props) => {
  return (
    <Flex
      p={4}
      w={'100%'}
      justifyContent={'space-between'}
      alignItems={'center'}
      cursor={'pointer'}
      borderRadius={8}
      _hover={{ bg: "teal.600" }}
      _active={{ bg: "teal.800" }}
    >
      <Text fontSize={32} fontWeight={600}>{props.userId}</Text>
      <Text color={'gray'}>13 December 2023</Text>
    </Flex>
  )
}

export default ChatListItem