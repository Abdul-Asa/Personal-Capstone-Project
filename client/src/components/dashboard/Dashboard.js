import React from 'react';
import {
  Avatar,
  Box,
  Flex,
  HStack,
  Text,
  WrapItem,
  Container,
  Button,
  Stack,
} from '@chakra-ui/react';
import {
  FiHome,
  FiSettings,
  FiSearch,
  FiBookmark,
  FiUser,
  FiPhoneCall,
  FiLogOut,
  FiPlusCircle,
} from 'react-icons/fi';

import { useRouteMatch } from 'react-router-dom';

const Dashboard = ({ ...rest }) => {
  let { path } = useRouteMatch();

  return (
    <Box
      // transition="3s ease"
      // display={{ base: 'none', md: 'block' }}
      // bg={useColorModeValue('white', 'gray.900')}
      shadow="md"
      // w={{ base: 'full', md: '302px' }}
      w="70"
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <HStack
          marginTop="10"
          marginBottom="5"
          height="fit-content"
          borderRadius="lg"
          _hover={{ background: 'gray.100' }}
          padding="2"
          as="button"
        >
          <WrapItem>
            <Avatar size="md" name="Floppa" />
          </WrapItem>
          <WrapItem mx="10">
            <Container maxW="200px">
              <Text fontSize="md">floppa@gmail.com</Text>
            </Container>
          </WrapItem>
        </HStack>
      </Flex>
      <Flex
        spacing="30px"
        direction="column"
        justifyContent="space-between"
        height="85%"
      >
        {/* Home Section */}
        <Stack direction="column" mt="10" w="100%" align="center" spacing="4">
          <Button
            width="80%"
            align="left"
            justifyContent="flex-start"
            as="a"
            href={`${path}/`}
            textDecoration="none"
            _hover={{ textDecorationLine: 'none', bg: 'gray.200' }}
            bg="transparent"
          >
            <FiHome /> <Text mx="5">Home</Text>
          </Button>
          <Button
            width="80%"
            align="left"
            as="a"
            href={`${path}/profile`}
            textDecoration="none"
            justifyContent="flex-start"
            bg="transparent"
            _hover={{ textDecorationLine: 'none', bg: 'gray.200' }}
          >
            <FiUser /> <Text mx="5">Profile</Text>
          </Button>
        </Stack>
        {/* Jobs Section */}
        <Stack direction="column" my="10" w="100%" align="center" spacing="4">
          <Box width="80%" align="left" justifyContent="flex-start">
            <Text mt="4" ml="4" fontWeight="bold">
              Jobs
            </Text>
          </Box>
          <Button
            width="80%"
            align="left"
            justifyContent="flex-start"
            as="a"
            href={`${path}/post-job`}
            textDecoration="none"
            bg="transparent"
            _hover={{ textDecorationLine: 'none', bg: 'gray.200' }}
          >
            <FiPlusCircle /> <Text mx="5">Post</Text>
          </Button>
          <Button
            width="80%"
            align="left"
            justifyContent="flex-start"
            bg="transparent"
            as="a"
            href={`${path}/apply-job`}
            textDecoration="none"
            _hover={{ textDecorationLine: 'none', bg: 'gray.200' }}
          >
            <FiBookmark /> <Text mx="5">Apply</Text>
          </Button>
          <Button
            width="80%"
            align="left"
            justifyContent="flex-start"
            bg="transparent"
            as="a"
            href={`${path}/search-job`}
            textDecoration="none"
            _hover={{ textDecorationLine: 'none', bg: 'gray.200' }}
          >
            <FiSearch /> <Text mx="5">Search</Text>
          </Button>
        </Stack>

        <Stack direction="column" mt="10%" w="100%" align="center" spacing="4">
          <Button
            width="80%"
            align="left"
            justifyContent="flex-start"
            bg="transparent"
            as="a"
            href={`${path}/contact`}
            _hover={{ textDecorationLine: 'none', bg: 'gray.200' }}
            textDecoration="none"
          >
            <FiPhoneCall /> <Text mx="5">Contact</Text>
          </Button>
          <Button
            width="80%"
            align="left"
            justifyContent="flex-start"
            bg="transparent"
            as="a"
            _hover={{ textDecorationLine: 'none', bg: 'gray.200' }}
            href={`${path}/settings`}
            textDecoration="none"
          >
            <FiSettings /> <Text mx="5">Settings</Text>
          </Button>
          <Button
            width="80%"
            align="left"
            justifyContent="flex-start"
            bg="transparent"
          >
            <FiLogOut /> <Text mx="5">Logout</Text>
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Dashboard;
