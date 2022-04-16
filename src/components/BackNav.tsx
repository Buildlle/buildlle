import { Button, chakra, Icon, Stack } from '@chakra-ui/react'
import { ArrowLeft24Filled } from '@fluentui/react-icons'
import React from 'react'
import Link from './Link'

const BackNav: React.FC = () => {
  return (
    <chakra.nav
      rounded="50px"
      border="1px solid #EAEDF1"
      bgColor="#fff"
      w="100%"
      zIndex="1"
    >
      <Stack p="1" pos="relative">
        <Button
          as={Link}
          href="/"
          variant="accent"
          w="40px"
          rounded="full"
          size="sm"
        >
          <Icon boxSize={4} as={() => <ArrowLeft24Filled />} />
        </Button>
      </Stack>
    </chakra.nav>
  )
}
export default BackNav
