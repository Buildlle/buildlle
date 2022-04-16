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

const AdminSidebar: React.FC = () => {
  return (
    <chakra.aside
      w="249px"
      rounded="20px"
      border="1px solid #EAEDF1"
      h="80vh"
      pos="fixed"
    >
      <VStack h="100%" align="flex-start" spacing="6">
        <Heading px={6} pt={6} fontSize="xl" fontWeight="500">
          My Account
        </Heading>
        <VStack flex="1" w="100%" h="100%">
          <Stack px={4} py={2} w="100%">
            <Link
              as={Button}
              justifyContent="left"
              href="#"
              size="sm"
              bgColor="grey.200"
              color="black.100"
              fontWeight="400"
              fontSize="md"
              _hover={{ bgColor: 'grey.200' }}
            >
              General
            </Link>
          </Stack>
          <Divider />
          <Stack px={6} py={2} w="100%">
            <Flex align="center" color="black.100" opacity="48%">
              <Icon boxSize={4} opacity="36%" as={() => <GoTriangleRight />} />
              <Text pl="1">My Entries</Text>
            </Flex>
          </Stack>
        </VStack>
        <Stack p={6} align="center" justify="center" w="100%">
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
export default AdminSidebar
