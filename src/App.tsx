import React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import ColorModeSwitcher from "./components/ColorModeSwitcher"
import Logo from "./components/Logo"
import { readRemoteFile } from "react-papaparse"
import { readString } from "react-papaparse"
// import csv from './MessageData.csv'

export const App = () => {
  const readCsvToString = () => {
    fetch('/messageData.csv')
      .then(response => response.text())
      .then(text => {
        readString(text, {
          download: false,
          complete: (data) => {
            console.log(data)
          },
          worker: true
        })
      })
  }

  React.useEffect(() => {
    readCsvToString()
  }, [])

  return (
    <Text>Hello World</Text>
  )
}
