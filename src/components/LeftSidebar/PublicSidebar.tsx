import { Button, chakra, Heading, Icon, Stack, VStack } from '@chakra-ui/react'
import { Add16Filled } from '@fluentui/react-icons'
import Link from 'components/Link'
import React from 'react'

const PublicSidebar: React.FC = () => {
  return (
    <chakra.aside
      p={6}
      w="249px"
      rounded="20px"
      border="1px solid #EAEDF1"
      h="80vh"
      pos="fixed"
    >
      <VStack h="100%" align="flex-start" spacing="6">
        <Heading fontSize="20px" fontWeight="500">
          Search
        </Heading>
        <VStack flex="1" w="100%" h="100%">
          <Stack w="100%">
            <Link
              as={Button}
              justifyContent="left"
              href="/"
              size="sm"
              bgColor="grey.200"
              color="black.100"
              fontWeight="400"
              _hover={{ bgColor: 'grey.200' }}
            >
              All
            </Link>
          </Stack>
        </VStack>
        <Button
          variant="accent"
          w="full"
          fontWeight="500"
          fontSize="sm"
          leftIcon={<Icon boxSize={4} as={() => <Add16Filled />} />}
        >
          Add Entry
        </Button>
      </VStack>
    </chakra.aside>
  )
}
export default PublicSidebar
