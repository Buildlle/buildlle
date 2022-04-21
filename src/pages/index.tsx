import {
  chakra,
  IconButton,
  Select,
  Stack,
  useColorMode
} from '@chakra-ui/react'
import { ToggleLeft16Regular, ToggleRight16Filled } from '@fluentui/react-icons'
import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import BBanner from '../components/BBanner'
import SearchResult from '../components/SearchResultCard'
import SearchResultCard from '../components/SearchResultCard'

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  // const bgColor = useColorModeValue('white.100', 'black.100')

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

      <BBanner />
      <Stack py="6" spacing="4">
        <Select
          w="140px"
          size="sm"
          rounded="10px"
          outline="none"
          boxShadow="none !important"
        >
          <option value="">Newest entry</option>
          <option value="">Most popular</option>
          <option value="">Oldest entry</option>
        </Select>
        <SearchResultCard />
      </Stack>
      <chakra.footer
        bgColor="white.300"
        pos="fixed"
        px="24"
        py="4"
        bottom="0"
        left="0"
        right="0"
      >
        <Stack>
          <IconButton
            alignSelf="flex-end"
            aria-label="Toggle Mode"
            onClick={toggleColorMode}
          >
            {colorMode === 'light' ? (
              <ToggleRight16Filled />
            ) : (
              <ToggleLeft16Regular />
            )}
          </IconButton>
        </Stack>
      </chakra.footer>
    </Layout>
  )
}

export default Home
