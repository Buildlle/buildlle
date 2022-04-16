import { Select, Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout/Layout'
import BBanner from '../components/Main/BBanner'
import SearchResult from '../components/Main/SearchResult'

const Home: NextPage = () => {
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
        <SearchResult />
      </Stack>
    </Layout>
  )
}

export default Home
