import { Navigation } from './Navigation';
import { UserMenu } from './UserMenu';
import { AuthNav } from './AuthNav';

import { useAuth } from 'hooks/hooks';

import { Box, Container, Flex } from '@chakra-ui/layout';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box as="header">
      <Container maxW={'6xl'} py={4}>
        <Flex
          name="InsideAppBarBox"
          h={6}
          justify={{ base: 'space-evenly', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Navigation />
          <Flex alignItems={'center'}>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
