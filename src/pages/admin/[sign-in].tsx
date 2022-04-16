import {
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Input,
  Stack,
  Text
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'
import Link from 'components/Link'

const SignIn: NextPage = () => {
  return (
    <>
      <Head>
        <title>Buildlle</title>
        <meta
          name="description"
          content="Knowlegde base for today's builders"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Stack maxW="100%" h="90vh" justify="center" align="center">
        <Stack
          justify="center"
          py="12"
          px="6"
          spacing="4"
          border={{ base: 'none', md: '1px solid #EAEDF1' }}
          w={{ base: '100%', md: '400px' }}
        >
          <Stack align="center" spacing="6" pb="6">
            <Image src="/buildlle-logo.svg" boxSize="40%" alt="Buidlle" />
            <Heading
              as="h2"
              fontWeight="400"
              fontSize="2xl"
              letterSpacing="-0.15px"
            >
              Welcome, Sign In.
            </Heading>
          </Stack>
          <Input
            type="text"
            placeholder="Email"
            required
            rounded="8px"
            _focus={{ borderColor: 'grey.100' }}
          />
          <Input
            type="password"
            placeholder="Password"
            required
            rounded="8px"
            _focus={{ borderColor: 'grey.100' }}
          />
          <Button
            as={Link}
            href="/admin/account"
            w="full"
            h="50px"
            type="submit"
            variant="primary"
            rounded="10px"
            fontSize="18px"
          >
            Sign In
          </Button>
          <HStack spacing="4">
            <Divider /> <Text>OR</Text>
            <Divider />
          </HStack>
          <Button
            variant="google"
            leftIcon={<Icon boxSize={6} as={() => <FcGoogle />} />}
          >
            Continue with Google
          </Button>

          <Button
            variant="apple"
            leftIcon={<Icon boxSize={6} as={() => <FaApple />} />}
          >
            Continue with Apple
          </Button>
          <Flex pt="2" align="center" justify="center" fontSize="sm">
            <Text pr="1">New Here?</Text>
            <Link href="/admin/sign-up" textDecoration="underline">
              Create account
            </Link>
          </Flex>
        </Stack>
      </Stack>
    </>
  )
}

export default SignIn
