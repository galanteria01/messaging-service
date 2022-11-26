import { VStack } from '@chakra-ui/react'
import React from 'react'
import ChatListItem from './ChatListItem'

interface ChatListProps { }

const ChatList: React.FC<ChatListProps> = (props) => {
  const [users, setUsers] = React.useState();
  React.useEffect(() => {
    fetch('http://localhost:8000/user/list')
      .then(res => res.json())
      .then(json => console.log(json))
  }, [])
  return (
    <VStack
      h={'100%'}
      flex={0.3}
    >
      {/* {users.map((item: { [x: string]: string; }) => (
        <ChatListItem userId={item['UserID']} />
      ))} */}
      
    </VStack>
  )
}

export default ChatList