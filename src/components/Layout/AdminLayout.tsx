import { chakra, Container, Grid } from '@chakra-ui/react'
import Topbar from 'components/Topbar'
import { useRouter } from 'next/router'
import React from 'react'
import UserAccountLeftSidebar from '../LeftSidebar/UserAccountLeftSidebar'

const AdminLayout = ({ children }: any) => {
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
        <Topbar />

        {/* Desktop body display */}
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
              md: `"lsidebar main" "lsidebar main"`
            }}
            minH="100vh"
            gridColumnGap="8"
          >
            <UserAccountLeftSidebar />
            <chakra.main gridArea="main">{children}</chakra.main>
          </Grid>
        </Container>

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
export default AdminLayout
