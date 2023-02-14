import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  FormControl,
  FormLabel,
  Stack,
  useColorModeValue,
  Box,
  Heading,
  Text,
  Flex,
  Link,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const LoginForm = ({ handleLogin }) => {
  const bgColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Flex className="loginForm" justify={'center'} bg={bgColor}>
      <Stack spacing={1} mx={'auto'} maxW={'lg'} py={3} px={3}>
        <Stack align={'center'}>
          <Heading fontSize={'2xl'}>Sign in to your account </Heading>
          <Text fontSize={'lg'} color={'gray.600'}></Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('light', 'gray.100')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={2} as="form" onSubmit={handleLogin}>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" name="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={'password'}
                  name="password"
                  pattern="(?=.*\d).{7,}"
                />
                <InputRightElement h={'full'}></InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={2}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              ></Stack>
              <Button
                type="submit"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Sign in
              </Button>
            </Stack>
            <Stack pt={1}>
              <Text align={'center'}>
                <Link
                  as={NavLink}
                  to="/register"
                  color={'blue.400'}
                  fontSize={'lg'}
                  ml="1"
                >
                  Sign Up
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
