import { Center, Flex, Heading, Icon, IconButton, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaArrowAltCircleRight, FaBicycle } from 'react-icons/fa'
import MessageReceive from './MessageReceive'
import MessageSend from './MessageSend'

interface ChatScreenProps {
  userId: string
}

const ChatScreen: React.FC<ChatScreenProps> = (props) => {

  if (props.userId === "") {
    return (
      <Flex
        h={'100%'}

        flex={0.7}
        bg={'blackAlpha.50'}
      >
        <Center w={'100%'}>
          <VStack>
            <FaBicycle fontSize={165} />
            <Heading>Select a user to get its chat!</Heading>
          </VStack>
        </Center>
      </Flex>
    )
  } else {
    console.log(props.userId)
  }
  return (
    <Flex
      h={'100%'}
      flex={0.7}
      bg={'blackAlpha.50'}
      direction={'column'}
    >
      <VStack
        flex={1}
        overflowY={'scroll'}
        css={{
          '::-webkit-scrollbar': {
            display: 'none'
          }
        }}
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