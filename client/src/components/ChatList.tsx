import { Center, CircularProgress, VStack } from '@chakra-ui/react'
import React from 'react'
import ChatListItem from './ChatListItem'

interface ChatListProps {
  setUserId: (a: string) => void
}

const ChatList: React.FC<ChatListProps> = (props) => {

  const [loading, setLoading] = React.useState<boolean>(true);
  const [users, setUsers] = React.useState<any>();

  React.useEffect(() => {
    fetch('http://localhost:8000/user/list')
      .then(res => res.json())
      .then(json => {
        setUsers(json)
        setLoading(false);
      })
  }, [])
  return (
    <VStack
      h={'100%'}
      flex={0.3}
      overflowY={'scroll'}
      css={{
        '::-webkit-scrollbar': {
          display: 'none'
        }
      }}
    >
      {
        loading ?
          <Center h={'100%'}>
            <CircularProgress isIndeterminate color='teal.300' />
          </Center> :
          users.map((item: any) => {
            return (
              <ChatListItem key={item['User ID']} timeStamp={item['Timestamp (UTC)']} userId={item['User ID']} setUserId={props.setUserId} />
            )
          })
      }


    </VStack>
  )
}

export default ChatList