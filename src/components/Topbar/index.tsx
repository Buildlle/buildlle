import {
  Button,
  chakra,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Image,
  VStack,
  Avatar
} from '@chakra-ui/react'
import { Add16Filled, Search16Regular } from '@fluentui/react-icons'
import Link from 'components/Link'
import React from 'react'

const Topbar: React.FC = () => {
  const isLoggedIn = false

  return (
    <>
      {isLoggedIn ? (
        <>
          {/* Desktop nav display */}
          <chakra.nav
            gridArea="topbar"
            display={{ base: 'none', md: 'block' }}
            position="relative"
          >
            <Stack
              px={{ base: '4', md: '24', lg: '32' }}
              py={{ base: '4', md: '6' }}
              direction="row"
              align="center"
              pos="fixed"
              top="0"
              left="0"
              right="0"
              bgColor="rgba(255, 255, 255, 99%)"
              backdropFilter="blur(58px)"
              zIndex="2"
            >
              <Link href="/">
                <Image src="/logo.svg" w="40px" h="40px" alt="Buidlle Logo" />
              </Link>
              <Stack flex={1} justify="center" align="center">
                <InputGroup
                  w="800px"
                  _focus={{ boxShadow: '0px 4px 12px rgba(20, 20, 21, 4%)' }}
                >
                  <InputLeftElement pointerEvents="none">
                    <Search16Regular />
                  </InputLeftElement>
                  <Input type="search" />
                </InputGroup>
              </Stack>
              <Avatar
                // size="md"
                w="40px"
                h="40px"
                bg="grad.300"
                color="black.100"
                name="R"
                src="https://bit.ly/broken-link"
              />
            </Stack>
          </chakra.nav>

          {/* Mobile nav display */}
          <chakra.nav
            gridArea="topbar"
            w="100%"
            display={{ base: 'block', md: 'none' }}
          >
            <Stack
              px="4"
              py="4"
              w="100%"
              h="58px"
              direction="row"
              align="center"
              justify="space-between"
              pos="fixed"
              top="0"
              left="0"
              right="0"
              bgColor="rgba(255, 255, 255, 99%)"
              backdropFilter="blur(58px)"
              zIndex="2"
            >
              <Stack w="100%">
                <InputGroup
                  w="100px"
                  _hover={{
                    width: '100%',
                    boxShadow: '0px 4px 12px rgba(10, 10, 10, 4%)'
                  }}
                  _focus={{ width: '100%' }}
                >
                  <InputLeftElement pointerEvents="none">
                    <Search16Regular />
                  </InputLeftElement>
                  <Input type="search" />
                </InputGroup>
              </Stack>

              <Avatar
                size="sm"
                bg="grad.300"
                color="black.100"
                name="R"
                src="https://bit.ly/broken-link"
              />
            </Stack>
          </chakra.nav>
        </>
      ) : (
        <>
          {/* Desktop nav display */}
          <chakra.nav
            gridArea="topbar"
            display={{ base: 'none', md: 'block' }}
            position="relative"
          >
            <Stack
              px={{ base: '4', md: '24', lg: '32' }}
              py={{ base: '4', md: '6' }}
              direction="row"
              align="center"
              pos="fixed"
              top="0"
              left="0"
              right="0"
              bgColor="rgba(255, 255, 255, 99%)"
              backdropFilter="blur(58px)"
              zIndex="2"
            >
              <Link href="/">
                <Image src="/logo.svg" w="40px" h="40px" alt="Buidlle Logo" />
              </Link>
              <Stack flex={1} justify="center" align="center">
                <InputGroup
                  w="800px"
                  _focus={{ boxShadow: '0px 4px 12px rgba(20, 20, 21, 4%)' }}
                >
                  <InputLeftElement pointerEvents="none">
                    <Search16Regular />
                  </InputLeftElement>
                  <Input type="search" />
                </InputGroup>
              </Stack>
              <Button as={Link} href="/admin/sign-in" variant="primary">
                Sign In
              </Button>
            </Stack>
          </chakra.nav>

          {/* Mobile nav display */}
          <chakra.nav
            gridArea="topbar"
            w="100%"
            display={{ base: 'block', md: 'none' }}
          >
            <Stack
              px="4"
              py="4"
              w="100%"
              h="58px"
              direction="row"
              align="center"
              justify="space-between"
              pos="fixed"
              top="0"
              left="0"
              right="0"
              bgColor="rgba(255, 255, 255, 99%)"
              backdropFilter="blur(58px)"
              zIndex="2"
            >
              <Stack w="100%">
                <InputGroup
                  w="100px"
                  _hover={{
                    width: '100%',
                    boxShadow: '0px 4px 12px rgba(10, 10, 10, 4%)'
                  }}
                  _focus={{ width: '100%' }}
                >
                  <InputLeftElement pointerEvents="none">
                    <Search16Regular />
                  </InputLeftElement>
                  <Input type="search" />
                </InputGroup>
              </Stack>

              <Button
                as={Link}
                size="sm"
                px="4"
                href="/admin/sign-in"
                variant="primary"
              >
                Sign In
              </Button>
            </Stack>
          </chakra.nav>
        </>
      )}
    </>
  )
}
export default Topbar
