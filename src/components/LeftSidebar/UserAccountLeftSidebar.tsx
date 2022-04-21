import {
  Button,
  chakra,
  Divider,
  Heading,
  VStack,
  Text,
  Stack,
  Icon,
  Flex
} from '@chakra-ui/react'
import { Add16Filled } from '@fluentui/react-icons'
import { GoTriangleRight } from 'react-icons/go'
import Link from 'components/Link'
import React from 'react'

const UserAccountLeftSidebar: React.FC = () => {
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
      <VStack h="100%" align="flex-start" spacing="3">
        <Heading px={6} pt={6} fontSize="xl" fontWeight="500">
          My Account
        </Heading>
        <VStack flex="1" w="100%" h="100%">
          <Stack px="4" py="3" w="100%">
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
              General
            </Link>
          </Stack>
          <Divider borderColor="white.500" />
          <Stack px={6} py={2} w="100%">
            <Flex align="center" color="black.100" opacity="36%">
              <Icon boxSize={3} opacity="24%" as={() => <GoTriangleRight />} />
              <Text pl="1" fontSize="sm">
                My Entries
              </Text>
            </Flex>
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
export default UserAccountLeftSidebar
