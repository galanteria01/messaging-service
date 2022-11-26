import { Flex } from '@chakra-ui/react'
import React from 'react'
import ColorModeSwitcher from './ColorModeSwitcher'
import Logo from './Logo'

interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = (props) => {
  return (
    <Flex
      justifyContent={'space-between'}
      w={'100%'}
      p={4}
      bg={'blackAlpha.200'}
    >
      <Logo />
      <ColorModeSwitcher />
    </Flex>
  )
}

export default Navbar