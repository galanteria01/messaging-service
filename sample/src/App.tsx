import * as React from "react"
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
  Input,
  Button,
  Heading,
  Container,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"

export const App = () => {
  const [userId, setUserId] = React.useState<string>("")
  const [message, setMessage] = React.useState<string>("")
  const submitQuestion = () => {
    fetch('http://localhost:8000/message/add', {
      method: 'POST',
      body: JSON.stringify({
        userId,
        message,
        timeStamp: new Date().toUTCString()
      })
    })
      .then(res => res.json())
      .then(json => console.log(json))

  }
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Container>
            <VStack spacing={8}>
              <Heading>Write your question?</Heading>
              <Input placeholder={'User Id'} value={userId} onChange={(e) => setUserId(e.target.value)} />
              <Input placeholder={'Write your question?'} value={message} onChange={(e) => setMessage(e.target.value)} />
              <Button onClick={() => submitQuestion()}>Submit Question</Button>
            </VStack>
          </Container>
        </Grid>
      </Box>
    </ChakraProvider>
  )
}
