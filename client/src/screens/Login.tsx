import { Button, Center, Heading, Input, VStack } from '@chakra-ui/react'
import React from 'react'

interface LoginProps { }

const Login: React.FC<LoginProps> = (props) => {
  return (
    <Center
      w={'100vw'}
      h={'100vh'}
    >
      <VStack>
        <Heading my={8}>Customer Application</Heading>
        <Input my={8} />
        <Button>
          Login
        </Button>
      </VStack>
    </Center>
  )
}

export default Login