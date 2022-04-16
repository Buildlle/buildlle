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
import SearchResult from 'components/Main/SearchResult'
import type { NextPage } from 'next'
import Head from 'next/head'
import BackNav from '../components/BackNav'
import Layout from '../components/Layout/Layout'

const Profile: NextPage = () => {
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

      {/* <Stack
        spacing="0"
        w="100%"
        maxH="100vh"
        position="fixed"
        overflow="hidden"
        display={{ base: 'none', md: 'flex' }}
      > */}

      <Grid
        templateColumns="1fr 300px"
        templateAreas={{
          base: `"top top" "bottom bottom"`,
          md: `"left right"
                "left right"`
        }}
        minH={{ base: '100%', md: '100vh' }}
        gridColumnGap={{ base: '6', md: '16' }}
      >
        <Stack
          gridArea={{ base: 'bottom', md: 'left' }}
          maxW={{ base: '100%', md: '780px' }}
          py="6"
        >
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
        </Stack>

        <chakra.aside
          w={{ base: '100%', md: '380px' }}
          mt="2"
          gridArea={{ base: 'top', md: 'right' }}
        >
          <Stack
            pos={{ base: 'relative', md: 'fixed' }}
            h={{ base: 'auto', md: '80vh' }}
            pr={{ base: '0', md: '16' }}
            // w="100%"
          >
            <Stack
              p="6"
              // w="100%"
              rounded="20px"
              border="1px solid #EAEDF1"
              spacing="4"
            >
              <Avatar
                size="lg"
                bg="grad.300"
                color="black.100"
                name="R"
                src="https://bit.ly/broken-link"
              />
              <Stack>
                <Heading as="h2" fontSize="lg" fontWeight="600">
                  Russel Neo
                </Heading>
                <Text fontSize="xs" fontWeight="400" opacity="68%">
                  200 Subscribers
                </Text>
                <Text pb="2" fontSize="sm" fontWeight="500">
                  I provide an exciting path for rust developers to create and
                  hone their portfolio.
                </Text>

                <Button alignSelf="flex-start" variant="secondary-outline">
                  Subscribe
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </chakra.aside>

        {/* Mobile display */}
        {/* <Stack gridArea="left" maxW="780px" h="100%">
          <SearchResult />
        </Stack> */}
      </Grid>
    </Layout>
  )
}

export default Profile
