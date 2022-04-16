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
import Link from 'components/Link'
import type { NextPage } from 'next'
import Head from 'next/head'
import { FaApple } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

const SignUp: NextPage = () => {
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
              Welcome, Sign Up.
            </Heading>
          </Stack>
          <Input
            type="text"
            placeholder="Full name"
            required
            rounded="8px"
            _focus={{ borderColor: 'grey.100' }}
          />
          <Input
            type="email"
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
            Sign Up
          </Button>

          <HStack spacing="4">
            <Divider /> <Text>OR</Text>
            <Divider />
          </HStack>
          <Button
            variant="google"
            leftIcon={
              <Icon boxSize={6} as={(props) => <FcGoogle {...props} />} />
            }
          >
            Sign Up with Google
          </Button>
          <Button
            variant="apple"
            leftIcon={
              <Icon boxSize={6} as={(props) => <FaApple {...props} />} />
            }
          >
            Sign Up with Apple
          </Button>
          <Flex pt="2" align="center" justify="center" fontSize="sm">
            <Text pr="1">Already a member?</Text>
            <Link href="/admin/sign-in" textDecoration="underline">
              Sign In
            </Link>
          </Flex>
        </Stack>
      </Stack>
    </>
  )
}

export default SignUp
