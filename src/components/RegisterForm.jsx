import { Box, Flex, Heading, Link, Stack, Text } from '@chakra-ui/layout';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  useColorModeValue,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const RegisterForm = ({ handleSignUp }) => {
  const bgColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Flex align={'center'} justify={'center'} bg={bgColor}>
      <Stack spacing={1} mx={'auto'} maxW={'lg'} py={3} px={3}>
        <Stack align={'center'}>
          <Heading fontSize={'2xl'} textAlign={'center'}>
            Sign up to your account
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            Phonebook App
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={1} as="form" onSubmit={handleSignUp}>
            <FormControl id="firstName" isRequired>
              <FormLabel>Nickname</FormLabel>
              <Input size="md" type="text" name="username" />
            </FormControl>

            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input size="md" type="email" name="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input size="md" name="password" />
                <InputRightElement h={'full'}></InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack pt={2}>
              <Button
                type="submit"
                loadingText="Submitting"
                size="md"
                fontSize={'md'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={1}>
              <Text align={'center'} fontSize={'md'}>
                Already a user?
                <Link
                  as={NavLink}
                  to="/login"
                  color={'blue.400'}
                  fontSize={'lg'}
                  ml="1"
                >
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
