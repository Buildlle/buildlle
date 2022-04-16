import { Box, Heading, Stack, VStack, Text, Flex } from '@chakra-ui/react'
import {
  MoreHorizontal16Regular,
  MoreVertical16Regular
} from '@fluentui/react-icons'
import Link from 'components/Link'
import React from 'react'

const SearchResult: React.FC = () => {
  return (
    <Stack
      w={{ base: '100%', md: '720px' }}
      direction="row"
      align="flex-start"
      justify="flex-start"
      rounded="20px"
      bg="linear-gradient(90deg, #FAFAFA 0%, rgba(250, 250, 250, 0) 100%)"
      p="2"
    >
      <VStack align="flex-start" py="2" px={{ base: '0', md: '2' }}>
        <Flex fontSize="xs" align="center">
          <Text noOfLines={[1]}>
            https://buildlle.com › Bay-Lionel › DaGenix-rust
          </Text>
          <Text px="2" noOfLines={[1, 2]}>
            27 Dec 2021
          </Text>
          <MoreVertical16Regular />
        </Flex>
        <Heading
          as="h2"
          fontSize={{ base: 'lg', md: 'xl' }}
          fontWeight="400"
          color="link.100"
        >
          <Link
            href="/content/"
            _hover={{
              textDecoration: 'underline'
            }}
          >
            Implementing Rust for Cryptography
          </Link>
        </Heading>
        <Text fontSize="13px" noOfLines={[1, 2]}>
          Rust-Crypto seeks to create practical, auditable, pure-Rust
          implementations of common
        </Text>
      </VStack>
    </Stack>
  )
}
export default SearchResult
