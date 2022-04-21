import { Button, chakra, Heading, Icon, Stack, VStack } from '@chakra-ui/react'
import { Add16Filled } from '@fluentui/react-icons'
import Link from 'components/Link'
import React from 'react'

const LeftSidebar: React.FC = () => {
  return (
    <chakra.aside
      gridArea="lsidebar"
      w="249px"
      rounded="20px"
      border="1px solid"
      borderColor="white.500"
      h="80vh"
      pos="fixed"
    >
      <VStack h="100%" align="flex-start">
        <Heading px={6} pt="6" fontSize="20px" fontWeight="500">
          Search
        </Heading>
        <VStack flex="1" px="4" py="3" w="100%" h="100%">
          <Stack w="100%">
            <Link
              as={Button}
              justifyContent="left"
              href="/"
              size="sm"
              bgColor="white.400"
              color="black.200"
              fontWeight="400"
              _hover={{ bgColor: 'white.300' }}
            >
              All
            </Link>
          </Stack>
        </VStack>
        <Stack px="3" py="3" w="100%">
          <Button
            variant="accent"
            w="full"
            fontWeight="500"
            fontSize="sm"
            leftIcon={<Icon boxSize={4} as={() => <Add16Filled />} />}
          >
            Add Entry
          </Button>
        </Stack>
      </VStack>
    </chakra.aside>
  )
}
export default LeftSidebar
