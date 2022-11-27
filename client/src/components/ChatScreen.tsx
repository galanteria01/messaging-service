import { Button, Center, Container, Flex, Heading, Icon, IconButton, Input, Menu, MenuButton, MenuItem, MenuList, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaArrowAltCircleRight, FaBicycle, FaChevronDown } from 'react-icons/fa'
import MessageReceive from './MessageReceive'
import MessageSend from './MessageSend'
import { getDatetimeString } from '../utils/helpers'

interface ChatScreenProps {
  userId: string
}

const ChatScreen: React.FC<ChatScreenProps> = (props) => {
  const [messages, setMessages] = React.useState<any>([]);
  const [inputValue, setInputValue] = React.useState<any>("");

  const predefinedInputs = [
    "I'll get back to you as soon as possible",
    "I'm looking at your issues at this moment and will try to contact you.",
    "Hold on!",
    "Certainly looking at your issue."
  ]

  React.useEffect(() => {
    if (props.userId !== "") {
      fetch(`http://localhost:8000/message/${props.userId}`)
        .then(res => res.json())
        .then(json => {
          json.sort((a: any, b: any) => a['Timestamp (UTC)'] - b['Timestamp (UTC)'])
          setMessages(json);
        })
    }
  }, [props.userId])

  const submitMessage = () => {
    fetch('http://localhost:8000/message/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: inputValue,
        userId: props.userId,
        sender: 'Admin',
        timeStamp: getDatetimeString()
      })
    })
  }

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
        {
          messages.map((item: any, index: number) => {
            console.log(item)
            if (item['Sender'] === 'User') {
              return (
                <MessageReceive key={index} message={item['Message Body']} time={item['Timestamp (UTC)']} />
              )
            }
            return (
              <MessageSend key={index} message={item['Message Body']} time={item['Timestamp (UTC)']} />
            )
          })
        }
      </VStack>
      <Container w={'100%'}>
        <Menu>
          <MenuButton as={Button} rightIcon={<FaChevronDown />}>
            Select among predefined messages
          </MenuButton>
          <MenuList>
            {
              predefinedInputs.map((item, index) => {
                return (
                  <MenuItem key={index} onClick={() => setInputValue(item)}>{item}</MenuItem>
                )
              })
            }

          </MenuList>
        </Menu>
        <Button mx={2}>
          Mark as Urgent
        </Button>
      </Container>
      <Flex
        p={4}
      >
        <Input placeholder='Type your message' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <IconButton
          mx={2}
          colorScheme='teal'
          aria-label='Search database'
          icon={<FaArrowAltCircleRight />}
          onClick={() => submitMessage()}
        />
      </Flex>
    </Flex>
  )
}

export default ChatScreen