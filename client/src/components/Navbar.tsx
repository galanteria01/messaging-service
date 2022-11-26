import { Flex } from '@chakra-ui/react'
import React from 'react'
import ColorModeSwitcher from './ColorModeSwitcher'
import Logo from './Logo'

interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = (props) => {
  return (
    <Flex>
      <Logo />
      <ColorModeSwitcher />
    </Flex>
  )
}

export default Navbar