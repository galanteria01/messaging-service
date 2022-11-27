import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

interface ChatListProps { 
  userId: string,
  timeStamp: string,
  setUserId: (a:string) => void
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
      onClick={() => props.setUserId(props.userId)}
    >
      <Text fontSize={32} fontWeight={600}>User: {props.userId}</Text>
      <Text color={'gray'}>{props.timeStamp}</Text>
    </Flex>
  )
}

export default ChatListItem