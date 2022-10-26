import React from 'react';
import {
  Icon,
  Flex,
  Text,
  icon,
  Link,
  Menu,
  MenuButton,
  MenuList,
} from '@chakra-ui/react';

export default function NavItem({ navSize, icon, title, active }) {
  return (
    <Flex
      mt={30}
      flexDir="column"
      w="100%"
      alignItems={navSize == 'small' ? 'center' : 'flex-start'}
    >
      <Menu placement="right">
        <Link
          backgroundColor={active && '57565b'}
          p={3}
          borderRadius={8}
          _hover={{ textDecor: 'none', backgroundColor: '#57565b' }}
          w={navSize == 'large' && '100%'}
        >
          <MenuButton w="100%">
            <Flex>
              <Icon
                as={icon}
                fontSize="xl"
                color={active ? '#82AAD' : 'gray.500'}
              />
              <Text ml={5} display={navSize == 'small' ? 'none' : 'flex'}>
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
}
