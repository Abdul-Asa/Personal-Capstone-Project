import React from 'react';
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
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import Welcome from './Welcome';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Dashboard from './Dashboard';
import Contact from './Contact';
import Settings from './Settings';
import Profile from './Profile';

const Home = () => {
  // const { colorMode, toggleColorMode } = useColorMode();
  let { path } = useRouteMatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [isDesktop] = useMediaQuery('(min-width: 48em)');
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
      <Box ml={{ base: 0, md: '305px' }} transition=".3s ease">
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
            // height="00px"
            overflow="auto"
          >
            <Switch>
              <Route exact path={`${path}/`}>
                <Welcome />
              </Route>
              <Route path={`${path}/profile`}>
                <Profile />
              </Route>
              <Route path={`${path}/settings`}>
                <Settings />
              </Route>
              <Route path={`${path}/contact`}>
                <Contact />
              </Route>
              <Route path={`${path}/post-job`}>
                <Contact />
              </Route>
              <Route path={`${path}/apply-job`}>
                <Contact />
              </Route>
              <Route path={`${path}/search-job`}>
                <Contact />
              </Route>
            </Switch>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
