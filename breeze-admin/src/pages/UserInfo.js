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
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import axios from 'axios';

const IndividualUsers = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let params = new URLSearchParams(location.search);

  const userid = params.get('_id');

  const deleteUser = (id) => {
    axios.delete(`http://localhost:8443/api/user/userdelete/` + userid);
    navigate('/users');
  };

  return (
    <div>
      <Sidebar />
      <ChakraProvider>
        <ChakraProvider>
          <Box
            w={[800]}
            p={[8, 10]}
            mt={[20, '10vh']}
            mx="auto"
            border={['none', '1px']}
            background={['white']}
            borderColor={['', 'gray.300']}
            borderRadius={10}
          >
            <VStack spacing={10} align={['flex-start', 'center']} w="full">
              <Heading>User: {params.get('first_name')}</Heading>
              <div>
                <div>
                  {' '}
                  <b> User ID:</b> {userid}
                </div>
                <div>
                  {' '}
                  <b> First Name:</b> {params.get('first_name')}
                </div>
                <div>
                  {' '}
                  <b> Last Name: </b> {params.get('last_name')}
                </div>
                <div>
                  {' '}
                  <b> Email: </b>
                  {params.get('email')}
                </div>
                <div>
                  <b> Created: </b> {params.get('creation_date')}
                </div>
                <div>
                  <b> Active: </b> {params.get('active')}
                </div>
              </div>

              <Button colorScheme="red" onClick={deleteUser}>
                Delete User
              </Button>
            </VStack>
          </Box>
        </ChakraProvider>
      </ChakraProvider>
    </div>
  );
};

export default IndividualUsers;
