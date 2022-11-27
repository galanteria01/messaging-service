import { Center, Text } from '@chakra-ui/react'
import React from 'react'
import { FaAllergies } from 'react-icons/fa'

interface ErrorProps { }

const Error: React.FC<ErrorProps> = (props) => {
  return (
    <Center
      h={'100vh'}
      w={'100vw'}
    >
      <FaAllergies fontSize={165} />
      <Text
        fontSize={32}
        fontWeight={600}
      >
        Error: Page Doesn't Exists
      </Text>
    </Center>
  )
}

export default Error