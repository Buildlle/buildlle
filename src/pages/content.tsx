import {
  Avatar,
  Box,
  Button,
  chakra,
  Divider,
  Flex,
  Grid,
  Heading,
  Icon,
  Image,
  Stack,
  Text
} from '@chakra-ui/react'
import {
  ChevronDown16Filled,
  ChevronDown16Regular
} from '@fluentui/react-icons'
import Link from 'components/Link'
import type { NextPage } from 'next'
import Head from 'next/head'
import BackNav from '../components/BackNav'
import Layout from '../components/Layout/Layout'

const Content: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Buildlle</title>
        <meta
          name="description"
          content="Knowlegde base for today's builders"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Stack
        spacing="0"
        w="100%"
        maxH="100vh"
        position="fixed"
        overflow="hidden"
        display={{ base: 'none', md: 'flex' }}
      >
        <BackNav />

        <Grid
          templateColumns="780px 1fr"
          templateAreas={{
            md: `"left right"
                "left right"`
          }}
          minH="100vh"
          gridColumnGap="16"
        >
          <Stack
            gridArea="left"
            maxW="780px"
            h="100%"
            overflow="hidden"
            borderLeft="1px solid #EAEDF1"
            borderRight="1px solid #EAEDF1"
            pos="relative"
            left="4"
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
                    <Text fontSize="xs" opacity="48%">
                      27 Apr 2022 ·
                    </Text>
                  </Stack>
                </Flex>
              </chakra.header>

              <chakra.article py="4" px="8">
                <Stack spacing="8">
                  <Heading
                    as="h2"
                    color="black.100"
                    fontSize="2xl"
                    fontWeight="600"
                  >
                    Implementing Rust for Cryptography
                  </Heading>
                  <Box>
                    <Image src="/images/792ddfed.webp" alt="image" />
                  </Box>
                  <Text fontSize="md">
                    A (mostly) pure-Rust implementation of various common
                    cryptographic algorithms. Rust-Crypto seeks to create
                    practical, auditable, pure-Rust implementations of common
                    cryptographic algorithms with a minimum amount of assembly
                    code where appropriate. The x86-64, x86, and ARM
                    architectures are supported, although the x86-64
                    architecture receives the most testing. Rust-Crypto targets
                    the current, stable build of Rust. If you are having issues
                    while using an older version, please try upgrading to the
                    latest stable. Rust-Crypto has not been thoroughly audited
                    for correctness, so any use where security is important is
                    not recommended at this time.
                  </Text>
                </Stack>
              </chakra.article>

              <chakra.section py="12">
                <Divider />
                <Stack pb="8rem" pt="8" px="8">
                  <Flex align="center" justify="space-between">
                    <Heading fontSize="lg">Comments</Heading>
                    <Button size="sm" variant="secondary">
                      Comment
                    </Button>
                  </Flex>
                  <Stack py="6">
                    <Stack direction="row" align="flex-start" spacing="4">
                      <Avatar
                        size="md"
                        bg="grad.300"
                        color="black.100"
                        name="S"
                        src="https://bit.ly/broken-link"
                      />
                      <Stack py="2">
                        <Flex align="center">
                          <Heading as="h3" fontSize="md" fontWeight="600">
                            Jane Jenny
                          </Heading>
                          <Text
                            fontSize="xs"
                            fontWeight="600"
                            opacity="48%"
                            px="1"
                          >
                            5 hours ago
                          </Text>
                        </Flex>
                        <Text>
                          I think Rust-Crypto has not been thoroughly audited
                          for correctness, so any use where security is
                          important is not recommended at this time.
                        </Text>
                        <Flex align="center" justify="space-between" w="100%">
                          <Button
                            variant="accent"
                            bgColor="transparent"
                            _hover={{ bgColor: 'transparent' }}
                            rounded="full"
                            size="xs"
                            fontWeight="500"
                            leftIcon={
                              <Icon
                                boxSize={4}
                                as={() => <ChevronDown16Filled />}
                              />
                            }
                          >
                            View 2 Replies
                          </Button>
                          <Button
                            size="xs"
                            variant="accent"
                            alignSelf="flex-end"
                          >
                            Reply
                          </Button>
                        </Flex>
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
              </chakra.section>
            </Stack>
          </Stack>

          <chakra.aside w="380px" mt="8" gridArea="right">
            <Stack p="6" rounded="20px" border="1px solid #EAEDF1" spacing="4">
              <Link href="/profile">
                <Avatar
                  size="lg"
                  bg="grad.300"
                  color="black.100"
                  name="R"
                  src="https://bit.ly/broken-link"
                />
              </Link>
              <Stack>
                <Link href="/profile">
                  <Heading as="h2" fontSize="lg" fontWeight="600">
                    Russel Neo
                  </Heading>
                </Link>
                <Text fontSize="xs" fontWeight="400" opacity="68%">
                  200 Subscribers
                </Text>
                <Text pb="2">
                  I provide an exciting path for rust developers to create and
                  hone their portfolio.
                </Text>

                <Button alignSelf="flex-start" variant="secondary-outline">
                  Subscribe
                </Button>
              </Stack>
            </Stack>
          </chakra.aside>
        </Grid>
      </Stack>

      {/* Mobile displa */}

      <Stack w="100%" display={{ base: 'block', md: 'none' }}>
        <chakra.header py="3" px="3">
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
              <Link href="/profile">
                <Heading as="h3" fontSize="md" fontWeight="400">
                  Russel Neo
                </Heading>
              </Link>
              <Text fontSize="xs" opacity="48%">
                27 Apr 2022 ·
              </Text>
            </Stack>
          </Flex>
        </chakra.header>

        {/* Article body  */}
        <chakra.article py="3" px="4">
          <Stack spacing="8">
            <Heading as="h2" color="black.100" fontSize="2xl" fontWeight="600">
              Implementing Rust for Cryptography
            </Heading>
            <Box>
              <Image src="/images/792ddfed.webp" alt="image" />
            </Box>
            <Text fontSize="md">
              A (mostly) pure-Rust implementation of various common
              cryptographic algorithms. Rust-Crypto seeks to create practical,
              auditable, pure-Rust implementations of common cryptographic
              algorithms with a minimum amount of assembly code where
              appropriate. The x86-64, x86, and ARM architectures are supported,
              although the x86-64 architecture receives the most testing.
              Rust-Crypto targets the current, stable build of Rust. If you are
              having issues while using an older version, please try upgrading
              to the latest stable. Rust-Crypto has not been thoroughly audited
              for correctness, so any use where security is important is not
              recommended at this time.
            </Text>
          </Stack>
        </chakra.article>

        {/* Comment section */}
        <chakra.section py="12">
          <Divider />
          <Stack py="8" px="3">
            <Flex align="center" justify="space-between">
              <Heading fontSize="lg">Comments</Heading>
              <Button size="sm" variant="secondary">
                Comment
              </Button>
            </Flex>
            <Stack py="6">
              <Stack direction="row" align="flex-start" spacing="4">
                <Avatar
                  size="md"
                  w="40px"
                  h="40px"
                  bg="grad.300"
                  color="black.100"
                  name="S"
                  src="https://bit.ly/broken-link"
                />
                <Stack py="1">
                  <Flex align="center">
                    <Heading as="h3" fontSize="sm" fontWeight="600">
                      Jane Jenny
                    </Heading>
                    <Text fontSize="xs" fontWeight="600" opacity="48%" px="1">
                      5 hours ago
                    </Text>
                  </Flex>
                  <Text fontSize="md">
                    I think Rust-Crypto has not been thoroughly audited for
                    correctness, so any use where security is important is not
                    recommended at this time.
                  </Text>
                  <Flex align="center" justify="space-between" w="100%">
                    <Button
                      variant="accent"
                      bgColor="transparent"
                      _hover={{ bgColor: 'transparent' }}
                      rounded="full"
                      size="xs"
                      fontWeight="500"
                      leftIcon={
                        <Icon boxSize={4} as={() => <ChevronDown16Filled />} />
                      }
                    >
                      View 2 Replies
                    </Button>
                    <Button size="xs" variant="accent" alignSelf="flex-end">
                      Reply
                    </Button>
                  </Flex>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </chakra.section>
      </Stack>
    </Layout>
  )
}

export default Content
