import React, { useState, useEffect } from 'react';
import {
  IconButton,
  Box,
  Flex,
  useColorModeValue,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  useDisclosure,
  useMediaQuery,
  Heading,
  Spinner,
  AlertDialog,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogBody,
  Center,
  Text,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import Welcome from './Welcome';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { getUserInfo } from '../../utils/Actions';
import Dashboard from './Dashboard';
import Admin from './admin/Admin';
import AdminRoute from '../../routes/adminRoute';
import Settings from './Settings';
import Profile from './Profile';
import Post from './Post';
import Search from './Search';
import Apply from './Apply';
import WrongUser from './admin/WrongUser';

const Home = () => {
  const [userInfo, setUserinfo] = useState({});
  const [loading, setLoading] = useState(true);

  let { path } = useRouteMatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [isDesktop] = useMediaQuery('(min-width: 48em)');
  useEffect(() => {
    console.log('Fetching...');
    const user = getUserInfo();
    user
      .then((data) => {
        setUserinfo(data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((err) => console.log(err));
  }, [loading]);
  return (
    <Box
      minH="100vh"
      bg={useColorModeValue('whiteAlpha.50', 'gray.900')}
      transition="0.3s ease"
      as="section"
    >
      {isDesktop ? (
        <Dashboard />
      ) : (
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton zIndex="overlay" />
            <Dashboard w="full" />
          </DrawerContent>
        </Drawer>
      )}
      <Box ml={{ base: 0, md: '335px' }} transition=".3s ease">
        <Flex
          as="header"
          align="center"
          justify={isDesktop ? 'center' : 'space-between'}
          w="full"
          px="4"
          bg={useColorModeValue('white', 'gray.800')}
          borderBottomWidth="1px"
          borderColor={useColorModeValue('inherit', 'gray.700')}
          h="14"
          minW="300px"
        >
          <IconButton
            aria-label="Menu"
            display={{ base: 'inline-flex', md: 'none' }}
            onClick={onOpen}
            icon={<FiMenu />}
            size="sm"
          />
          <Heading fontFamily="Helvetica Neue" fontSize="xl">
            Padrone
          </Heading>
          <Box></Box>
        </Flex>

        <Box as="main" p="4">
          <Box
            borderWidth="2px"
            borderStyle="solid"
            rounded="md"
            minH="650px"
            minW="280px"
            shadow="md"
            overflow="auto"
          >
            <Switch>
              <Route exact path={`${path}/`}>
                <AlertDialog isOpen={loading}>
                  <AlertDialogOverlay>
                    <AlertDialogContent>
                      <AlertDialogHeader fontSize="lg" fontWeight="bold">
                        <Center>
                          <Text mx="20px">Loading</Text>
                          <Spinner />
                        </Center>
                      </AlertDialogHeader>
                      <AlertDialogBody>
                        <Center>Just a moment </Center>
                      </AlertDialogBody>
                    </AlertDialogContent>
                  </AlertDialogOverlay>
                </AlertDialog>
                <Welcome info={userInfo} />
              </Route>
              <Route path={`${path}/profile`}>
                <Profile />
              </Route>
              <Route path={`${path}/settings`}>
                <Settings />
              </Route>
              <AdminRoute path={`${path}/admin`} failureChild={<WrongUser />}>
                <Admin />
              </AdminRoute>
              <Route path={`${path}/post-job`}>
                <Post />
              </Route>
              <Route path={`${path}/apply-job`}>
                <Apply />
              </Route>
              <Route path={`${path}/search-job`}>
                <Search />
              </Route>
            </Switch>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
