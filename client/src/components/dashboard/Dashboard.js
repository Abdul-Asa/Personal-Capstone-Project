import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Box,
  Flex,
  HStack,
  Text,
  WrapItem,
  Container,
  Skeleton,
  SkeletonCircle,
  Button,
  Stack,
  Spinner,
  AlertDialog,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogContent,
  Center,
} from '@chakra-ui/react';
import {
  FiHome,
  FiSettings,
  FiSearch,
  FiUser,
  FiPhoneCall,
  FiLogOut,
} from 'react-icons/fi';
import { CgWorkAlt } from 'react-icons/cg';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { logOutAction, getUserInfo } from '../../utils/Actions';

const Dashboard = ({ info, ...rest }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  let { path } = useRouteMatch();
  const history = useHistory();
  const [userInfo, setUserinfo] = useState({});
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Fetching...');
    const user = getUserInfo();
    user
      .then((data) => {
        setUserinfo(data);
        // setLoading(false);
      })
      .catch((err) => console.log(err));
  });
  return (
    <Box
      // transition="3s ease"
      // display={{ base: 'none', md: 'block' }}
      // bg={useColorModeValue('white', 'gray.900')}
      shadow="md"
      // w={{ base: 'full', md: '302px' }}
      w="335px"
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
            {userInfo === null ? (
              <SkeletonCircle />
            ) : (
              <Avatar
                size="md"
                name={userInfo.firstName}
                src={userInfo.image}
              />
            )}
          </WrapItem>
          <WrapItem mx="10">
            <Container maxW="200px">
              {userInfo === null ? (
                <Skeleton />
              ) : (
                <Text fontSize="md">{userInfo.email}</Text>
              )}
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
            <IoPaperPlaneOutline /> <Text mx="5">Post</Text>
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
            <CgWorkAlt /> <Text mx="5">Apply</Text>
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
            onClick={() => {
              setIsOpen(true);
              logOutAction();
              setTimeout(() => {
                setIsOpen(false);
                history.push('/');
              }, 1000);
            }}
          >
            <FiLogOut /> <Text mx="5">Logout</Text>
            <AlertDialog
              isOpen={isOpen}
              // leastDestructiveRef={cancelRef}
              // onClose={onClose}
            >
              <AlertDialogOverlay>
                <AlertDialogContent>
                  <AlertDialogHeader fontSize="lg" fontWeight="bold">
                    <Center>
                      <Text mx="20px">Logging out</Text>
                      <Spinner />
                    </Center>
                  </AlertDialogHeader>
                </AlertDialogContent>
              </AlertDialogOverlay>
            </AlertDialog>
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Dashboard;
