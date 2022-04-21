import {
  chakra,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text
} from '@chakra-ui/react'
import { Search16Regular } from '@fluentui/react-icons'
import Link from 'components/Link'
import React from 'react'

const BBanner: React.FC = () => {
  return (
    <chakra.header
      rounded="20px"
      border="1px solid #EAEDF1"
      p={{ base: '8', md: 12 }}
      w={{ base: '100%', md: '800px' }}
    >
      <Stack
        align="center"
        justify="center"
        w="100%"
        spacing={{ base: '4', md: '8' }}
      >
        <Stack align="center" justify="center" spacing="3">
          <Image
            src="/wordmark.svg"
            boxSize={{ base: '35%', md: '50%' }}
            alt="Buildlle"
          />
          <Text fontSize={{ base: 'sm', md: 'md' }}>
            Knowledge base for builders.
          </Text>
        </Stack>
        <InputGroup w={{ base: '100%', md: '600px' }}>
          <InputLeftElement pointerEvents="none">
            <Search16Regular />
          </InputLeftElement>
          <Input variant="outline" type="search" />
        </InputGroup>
        <Stack
          direction="row"
          fontSize="xs"
          color="blue.100"
          spacing={{ base: '2', md: '4' }}
        >
          <Link href="#">How it works</Link>
          <Link href="#">Community guidelines</Link>
        </Stack>
      </Stack>
    </chakra.header>
  )
}
export default BBanner
