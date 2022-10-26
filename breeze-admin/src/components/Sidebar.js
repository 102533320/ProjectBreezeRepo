import React, { useState } from 'react';
import '../index.css';

import {
  Flex,
  Text,
  Image,
  Divider,
  Heading,
  IconButton,
  ChakraProvider,
  useMediaQuery,
} from '@chakra-ui/react';

import { FiMenu, FiUsers, FiSettings } from 'react-icons/fi';
import { TbReportAnalytics } from 'react-icons/tb';
import { MdOutlineDashboard } from 'react-icons/md';
import { CgLogOut } from 'react-icons/cg';

import NavItem from './Navitem';

import { Link } from 'react-router-dom';

import Logo from '../Assets/img/Logo.png';

function Sidebar() {
  const [isActive, setIsActive] = useState(false);
  const [navSize, changeNavSize] = useState('large');
  const [isMobile] = useMediaQuery('(max-width: 480px)');

  return (
    <ChakraProvider>
      <Flex
        background="#363741"
        textColor={'#aeaec1'}
        pos="fixed"
        top="0"
        //left="5"
        h={!isMobile && '100%'}
        //marginTop="2.5vh"
        boxShadow="0 4px 12px 0 rgba(0,0,0,0.05)"
        //borderRadius={navSize == 'small' ? '15px' : '30px'}
        w={!isMobile ? '200px' : '100%'}
        //w={navSize == "small" ? "75px" : "200px"}
        flexDir="column"
        justifyContent="space-between"
      >
        <div>
          <Flex p="5%" flexDir="column" alignItems="flex-start" as="nav">
            <Image
              src={Logo}
              alt="Breeze Logo"
              marginTop="1.5vh"
              marginLeft="1.5vh"
              marginBottom="-1vh"
              w="20%"
            />
            <Heading as="h3" size="sm" marginLeft="8vh" marginTop="-3.5vh">
              Breeze
            </Heading>
            <Link to="/dashboard">
              <NavItem
                navSize={navSize}
                icon={MdOutlineDashboard}
                title="Dashboard"
              />
            </Link>
            <Link to="/users">
              <NavItem navSize={navSize} icon={FiUsers} title="Users" active />
            </Link>
            <Link to="/analytics">
              <NavItem
                navSize={navSize}
                icon={TbReportAnalytics}
                title="Analytics"
              />
            </Link>
          </Flex>
          <Flex
            p="5%"
            flexDir="column"
            w="100%"
            alignItems={navSize == 'small' ? 'center' : 'flex-start'}
            mb={4}
          >
            <Divider display={navSize == 'small' ? 'none' : 'flex'} />

            <Flex mt={4} align="center">
              <IconButton
                background="none"
                mt={5}
                _hover={{ background: 'none' }}
                icon={<CgLogOut />}
              />
              <Flex
                flexDir="column"
                ml={4}
                display={navSize == 'small' ? 'none' : 'flex'}
              >
                <Heading as="h3" size="sm">
                  {' '}
                  Breeze Team
                </Heading>
                <Text color="gray"> Admin</Text>
              </Flex>
            </Flex>
          </Flex>
        </div>
      </Flex>
    </ChakraProvider>
  );
}

export default Sidebar;
