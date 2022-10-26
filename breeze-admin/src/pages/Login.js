import {
  Box,
  ChakraProvider,
  Heading,
  VStack,
  Text,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Button,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const req = await fetch('http://localhost:8443/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: await JSON.stringify({
        email,
        password,
      }),
    });

    const data = await req.json();

    if (data.user) {
      localStorage.setItem('token', data.user);
      alert('Login successful');
      window.location.href = '/dashboard';
    } else {
      alert('Please check your username and password');
    }
  };

  return (
    <div>
      <ChakraProvider>
        <form onSubmit={handleLogin}>
          <Box
            w={['full', 'md']}
            p={[8, 10]}
            mt={[20, '10vh']}
            mx="auto"
            border={['none', '1px']}
            background={['white']}
            borderColor={['', 'gray.300']}
            borderRadius={10}
          >
            <VStack spacing={4} align="flex-start" w="full">
              <VStack spacing={1} align={['flex-start', 'center']} w="full">
                <Heading>Login</Heading>
                <Text>WELCOME BACK BREEZE TEAM</Text>
              </VStack>

              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  rounded="10"
                  variant="filled"
                  type="email"
                  placeholder="breeze@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <FormLabel>Password</FormLabel>
                <Input
                  rounded="10"
                  variant="filled"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>

              <Button
                type="submit"
                rounded="none"
                colorScheme="purple"
                w="full"
              >
                Login
              </Button>
              <Link to="/"> Don't have an account?</Link>
            </VStack>
          </Box>
        </form>
      </ChakraProvider>
    </div>
  );
};

export default Login;
