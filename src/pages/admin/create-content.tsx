import {
  Avatar,
  Button,
  chakra,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text
} from '@chakra-ui/react'
import { ArrowLeft24Filled } from '@fluentui/react-icons'
import Link from 'components/Link'
import type { NextPage } from 'next'
import Head from 'next/head'

const CreateContent: NextPage = () => {
  return (
    <>
      <Head>
        <title>Buildlle</title>
        <meta
          name="description"
          content="Knowlegde base for today's builders"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container
        maxW="780px"
        m="auto"
        py="20"
        display={{ base: 'none', md: 'block' }}
      >
        <Stack spacing="0" w="830px" h="100vh" pos="fixed">
          <chakra.nav
            rounded="50px"
            border="1px solid #EAEDF1"
            bgColor="#fff"
            w="100%"
            zIndex="1"
          >
            <Stack
              p="1"
              pos="relative"
              align="center"
              justify="space-between"
              direction="row"
            >
              <Button
                as={Link}
                href="/admin/account"
                variant="accent"
                w="40px"
                h="40px"
                rounded="full"
                size="sm"
              >
                <Icon boxSize={5} as={() => <ArrowLeft24Filled />} />
              </Button>

              <Button
                variant="primary"
                bg="linear-gradient(220.48deg, #E69F00 -3.71%, #E65969 20.72%, #E609E1 43.48%, #AA0EE2 67.39%, #091AE6 105.56%)"
              >
                Publish
              </Button>
            </Stack>
          </chakra.nav>
          <Stack
            maxW="780px"
            h="100%"
            overflow="hidden"
            borderLeft="1px solid #EAEDF1"
            borderRight="1px solid #EAEDF1"
            pos="relative"
            left="6"
          >
            <Stack
              overflowY="scroll"
              w="100%"
              h="100%"
              pr="17px"
              boxSizing="content-box"
            >
              <chakra.header pt="6" pb="4" px="8">
                <Flex align="center">
                  <Avatar
                    size="md"
                    bg="grad.300"
                    color="black.100"
                    name="R"
                    src="https://bit.ly/broken-link"
                  />
                  <Stack px="3" spacing="1">
                    <Heading as="h3" fontSize="md" fontWeight="400">
                      Russel Neo
                    </Heading>
                  </Stack>
                </Flex>
              </chakra.header>

              <chakra.article py="4" px="8" pb="12rem">
                <Stack spacing="4">
                  <Heading as="h2" fontSize="2xl" fontWeight="600">
                    Enter Title
                  </Heading>

                  <Text fontSize="md">Write up...</Text>
                </Stack>
              </chakra.article>
            </Stack>
          </Stack>
        </Stack>
      </Container>

      {/* Mobile display */}

      <chakra.nav
        display={{ base: 'block', md: 'none' }}
        border="1px solid #EAEDF1"
        pos="fixed"
        bgColor="#fff"
        w="100%"
        zIndex="1"
      >
        <Stack
          p="1"
          pos="relative"
          align="center"
          justify="space-between"
          direction="row"
          h="58px"
        >
          <Button
            as={Link}
            href="/admin/account"
            variant="accent"
            w="40px"
            h="40px"
            rounded="full"
            size="sm"
          >
            <Icon boxSize={5} as={() => <ArrowLeft24Filled />} />
          </Button>

          <Button
            variant="primary"
            bg="linear-gradient(220.48deg, #E69F00 -3.71%, #E65969 20.72%, #E609E1 43.48%, #AA0EE2 67.39%, #091AE6 105.56%)"
          >
            Publish
          </Button>
        </Stack>
      </chakra.nav>

      <Stack
        w="100%"
        display={{ base: 'block', md: 'none' }}
        pt="4rem"
        spacing="6"
      >
        <chakra.header pt="4" px="4">
          <Flex align="center">
            <Link href="/profile">
              <Avatar
                size="md"
                bg="grad.300"
                color="black.100"
                name="R"
                src="https://bit.ly/broken-link"
              />
            </Link>
            <Stack px="3" spacing="1">
              <Heading as="h3" fontSize="md" fontWeight="400">
                Russel Neo
              </Heading>
            </Stack>
          </Flex>
        </chakra.header>

        {/* Article body  */}
        <chakra.article px="6" pb="12rem">
          <Stack spacing="4">
            <Heading as="h2" color="black.100" fontSize="2xl" fontWeight="600">
              Enter Ttile
            </Heading>

            <Text fontSize="md">Write up...</Text>
          </Stack>
        </chakra.article>
      </Stack>
    </>
  )
}

export default CreateContent
