import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
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
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const req = await fetch('http://localhost:8443/api/admins', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: await JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);

        if (data === 'ok') {
        } else {
          navigate('/login');
        }
      });
  };

  return (
    <ChakraProvider>
      <form onSubmit={handleRegister}>
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
              <Heading>Sign Up</Heading>
              <Text>Enter your details here</Text>
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

              <FormLabel>Name</FormLabel>
              <Input
                rounded="10"
                variant="filled"
                type="text"
                placeholder="Breeze"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <FormLabel>Password</FormLabel>
              <Input
                rounded="10"
                variant="filled"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>

            <Button type="submit" rounded="none" colorScheme="purple" w="full">
              Sign up
            </Button>

            <Link to="/login">Already have an account?</Link>
          </VStack>
        </Box>
      </form>
    </ChakraProvider>
  );
};

export default Signup;
