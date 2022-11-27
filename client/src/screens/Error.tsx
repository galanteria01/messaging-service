import { Center, Text } from '@chakra-ui/react'
import React from 'react'

const Error = () => {
  return (
    <Center
      h={'100vh'}
      w={'100vw'}
    >
      <Text
        fontSize={32}
        fontWeight={600}
      >
        Error: Doesn't Exists
      </Text>
    </Center>
  )
}

export default Error