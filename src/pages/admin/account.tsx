import {
  Avatar,
  Button,
  chakra,
  Divider,
  Flex,
  Grid,
  Heading,
  Icon,
  Stack,
  Text
} from '@chakra-ui/react'
import { Add16Filled } from '@fluentui/react-icons'
import Link from 'components/Link'
import SearchResult from 'components/SearchResultCard'
import type { NextPage } from 'next'
import Head from 'next/head'
import AdminLayout from '../../components/Layout/AdminLayout'

const Account: NextPage = () => {
  return (
    <AdminLayout>
      <Head>
        <title>Buildlle</title>
        <meta
          name="description"
          content="Knowlegde base for today's builders"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
          <Stack
            justify="center"
            align="center"
            h={{ base: 'auto', md: '60vh' }}
            pos="relative"
          >
            <Stack
              align="center"
              pos={{ base: 'static', md: 'fixed' }}
              spacing="8"
            >
              <Text opacity="48%">No Content Yet</Text>
              <Button
                as={Link}
                href="/admin/create-content"
                variant="accent"
                bgColor="transparent"
                color="blue.100"
                leftIcon={<Icon boxSize={4} as={() => <Add16Filled />} />}
              >
                Create Something Great
              </Button>
            </Stack>
          </Stack>

          {/* <SearchResult /> */}
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
              // p="6"
              // w="100%"
              rounded="20px"
              border="1px solid #EAEDF1"
              spacing="4"
            >
              <Stack px="6" pt={{ base: '6', md: '6' }}>
                <Avatar
                  size="lg"
                  bg="grad.300"
                  color="black.100"
                  name="R"
                  src="https://bit.ly/broken-link"
                />
                <Heading as="h2" pt={1} fontSize="lg" fontWeight="600">
                  Russel Neo
                </Heading>
                <Text fontSize="xs" fontWeight="400" opacity="68%">
                  No Subscribers
                </Text>
                <Text pb="2" fontSize="sm" fontWeight="400">
                  Write About what you do and how you can help others on
                  Buildlle...
                </Text>
                <Button
                  variant="secondary"
                  size="sm"
                  px="5"
                  alignSelf="flex-start"
                >
                  Save
                </Button>
              </Stack>
              {/* Security/Privacy */}
              <Divider />
              <Stack
                px={{ base: '6', md: '6' }}
                pt={{ base: '0', md: '0' }}
                pb={{ base: '4', md: '4' }}
                rounded="20px"
                spacing="4"
              >
                <Heading fontSize="md" fontWeight="600">
                  Security & Privacy
                </Heading>
                <Flex align="center" justify="space-between">
                  <Text fontSize="sm">2Factor Authentication</Text>
                  <Button size="sm" variant="accent">
                    Enable
                  </Button>
                </Flex>
                <Flex align="center" justify="space-between">
                  <Text fontSize="sm">Delete my Account</Text>
                  <Button size="sm" variant="accent">
                    Delete
                  </Button>
                </Flex>
              </Stack>
            </Stack>
          </Stack>
        </chakra.aside>

        {/* Mobile display */}
        {/* <Stack gridArea="left" maxW="780px" h="100%">
          <SearchResult />
        </Stack> */}
      </Grid>
    </AdminLayout>
  )
}

export default Account
