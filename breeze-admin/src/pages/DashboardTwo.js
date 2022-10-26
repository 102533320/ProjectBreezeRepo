import React from 'react';
import '../index.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import '../index.css';

import {
  ChakraProvider,
  Flex,
  Grid,
  Image,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';

import Card from '../components/Card.js';

function Dashboard() {
  const [userList, setUserList] = useState([]);

  const getAllData = () => {
    Axios.get('http://localhost:4000/api/users').then((response) => {
      setUserList(response.data);
    });
  };

  useEffect(() => {
    getAllData();
  });

  const count = userList.length;
  console.log(count);

  return (
    <ChakraProvider>
      <Card>
        <Flex
          background="#F5F5F5"
          flexDirection="column"
          align="center"
          justify="center"
          w="15%"
          h="100"
          marginTop="-85vh"
          marginLeft="70vh"
          borderRadius="10px"
          boxShadow="5px 4px 12px 12px rgba(0,0,0,0.05)"
        >
          <p id="totalUsers">Total Users</p>
          <p id="totalUsersCount">{count}</p>
        </Flex>

        <Flex
          background="#F5F5F5"
          flexDirection="column"
          align="center"
          justify="center"
          w="15%"
          h="100"
          marginTop="-16vh"
          marginLeft="110vh"
          borderRadius="10px"
          boxShadow="5px 4px 12px 12px rgba(0,0,0,0.05)"
        >
          <p id="activeUsers">Active Users</p>
        </Flex>

        <Flex
          background="#F5F5F5"
          flexDirection="column"
          align="center"
          justify="center"
          w="15%"
          h="100"
          marginTop="-16vh"
          marginLeft="150vh"
          borderRadius="10px"
          boxShadow="5px 4px 12px 12px rgba(0,0,0,0.05)"
        >
          <p id="newUsers">New Users</p>
        </Flex>

        <Flex
          background="#8b7cfb" //#8b7cfb
          flexDirection="row"
          align="center"
          justify="center"
          w="10%"
          h="10"
          marginTop="-25vh"
          marginLeft="43vh"
        >
          <p id="overView">Overview</p>
        </Flex>

        <Flex
          background="#F5F5F5"
          flexDirection="row"
          align="center"
          justify="center"
          w="37%"
          h="302"
          marginTop="28vh"
          marginLeft="66.5vh"
          borderRadius="10px 0px 0px 10px "
          boxShadow="5px 4px 12px 12px rgba(0,0,0,0.05)"
        ></Flex>

        <Flex
          background="#F5F5F5"
          flexDirection="column"
          align="center"
          justify="center"
          w="18%"
          h="100"
          marginTop="-48.25vh"
          marginLeft="146.5vh"
          borderRadius="0px 10px 0px 0px"
          boxShadow="5px 4px 12px 12px rgba(0,0,0,0.05)"
        >
          <p id="totalUsersSecond">Total Users</p>
          <p id="totalUsersCountSecond">{count}</p>
        </Flex>

        <Flex
          background="#F5F5F5"
          flexDirection="column"
          align="center"
          justify="center"
          w="18%"
          h="100"
          marginTop="0.1vh"
          marginLeft="146.5vh"
          borderRadius="0px 0px 0px 0px"
          boxShadow="5px 4px 12px 12px rgba(0,0,0,0.05)"
        >
          <p id="totalUsersSecond">Active Users</p>
        </Flex>

        <Flex
          background="#F5F5F5"
          flexDirection="column"
          align="center"
          justify="center"
          w="18%"
          h="100"
          marginTop="0.2vh"
          marginLeft="146.5vh"
          borderRadius="0px 0px 10px 0px"
          boxShadow="5px 4px 12px 12px rgba(0,0,0,0.05)"
        >
          <p id="totalUsersSecond">New Users</p>
        </Flex>

        <Flex
          background="#8b7cfb" //#8b7cfb
          flexDirection="row"
          align="center"
          justify="center"
          w="10%"
          h="10"
          marginTop="5vh"
          marginBottom="-12vh"
          marginLeft="43vh"
        >
          <p id="ratings">Hello</p>
        </Flex>

        <Flex
          background="#F5F5F5"
          flexDirection="row"
          align="center"
          justify="center"
          w="15%"
          h="100"
          marginTop="15vh"
          marginLeft="150vh"
          marginBottom="5vh"
          borderRadius="10px"
          boxShadow="5px 4px 12px 12px rgba(0,0,0,0.05)"
        ></Flex>
        <Flex
          background="#F5F5F5"
          flexDirection="row"
          align="center"
          justify="center"
          w="15%"
          h="100"
          marginTop="-21vh"
          marginLeft="110vh"
          marginBottom="5vh"
          borderRadius="10px"
          boxShadow="5px 4px 12px 12px rgba(0,0,0,0.05)"
        ></Flex>
        <Flex
          background="#F5F5F5"
          flexDirection="row"
          align="center"
          justify="center"
          w="15%"
          h="100"
          marginTop="-21vh"
          marginLeft="70vh"
          marginBottom="5vh"
          borderRadius="10px"
          boxShadow="5px 4px 12px 12px rgba(0,0,0,0.05)"
        ></Flex>
      </Card>
    </ChakraProvider>
  );
}

export default Dashboard;
