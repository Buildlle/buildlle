import {
  Button,
  chakra,
  Container,
  Grid,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Stack
} from '@chakra-ui/react'
import { Search16Regular } from '@fluentui/react-icons'
import React from 'react'
import LeftSidebar from '../LeftSidebar'
import { useRouter } from 'next/router'
import Link from 'components/Link'

const Layout: React.FC = ({ children }) => {
  const router = useRouter()

  return (
    <>
      <Grid
        templateColumns="1fr"
        templateRows="60px 1fr"
        templateAreas={{
          base: `"topbar" "body"`,
          md: `"topbar"
          "body"`
        }}
        minH="100vh"
        gridRowGap={{ base: '4', md: '12' }}
      >
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
                <InputLeftElement
                  pointerEvents="none"
                  children={<Search16Regular />}
                />
                <Input type="search" />
              </InputGroup>
            </Stack>
            <Button as={Link} href="/admin/sign-in" variant="primary">
              Sign In
            </Button>
          </Stack>
        </chakra.nav>

        <Container
          gridArea="body"
          display={{ base: 'none', md: 'block' }}
          maxW="100%"
          pl="12rem"
          pr="8rem"
        >
          <Grid
            templateColumns="248px 1fr"
            templateAreas={{
              md: `"lsidebar main"
                    "lsidebar main"`
            }}
            minH="100vh"
            gridColumnGap="8"
          >
            <chakra.aside gridArea="lsidebar">
              <LeftSidebar />
            </chakra.aside>

            <chakra.main gridArea="main">{children}</chakra.main>

            {/* <chakra.aside gridArea="rsidebar"> */}
            {/* <LeftSidebar /> */}
            {/* </chakra.aside> */}
          </Grid>
        </Container>

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
                <InputLeftElement
                  pointerEvents="none"
                  children={<Search16Regular />}
                />
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

        {/* Mobile body display */}
        <Container
          gridArea="body"
          display={{ base: 'block', md: 'none' }}
          maxW="100%"
          px="4"
        >
          <Grid
            templateColumns="1fr"
            templateAreas={{
              base: `"main"`
            }}
          >
            <chakra.main gridArea="main">{children}</chakra.main>
          </Grid>
        </Container>
      </Grid>
    </>
  )
}
export default Layout