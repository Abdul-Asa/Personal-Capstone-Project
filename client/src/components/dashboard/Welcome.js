import React from 'react';
import {
  Heading,
  Stack,
  Box,
  // VStack,
  // Avatar,
  // Text,
  Button,
  Flex,
  // Grid,
  // GridItem,
  // HStack,
  // useColorModeValue,
  // WrapItem,
  // Center,
  // Link,
  // Wrap,
  // Badge,
  // Container,
  // VStack,
  // Box,
  // FormControl,
  // FormLabel,
  // FormHelperText,
  // Spacer,
  // Select,
  // Text,
  // StepButtons,
  // useColorModeValue,
  // Button,
  // useColorMode,
  // IconButton,
  // Breadcrumb,
  // BreadcrumbLink,
  // BreadcrumbItem,
  // useMediaQuery,
  // Input,
  // AlertDialog,
  // AlertDialogBody,
  // AlertDialogFooter,
  // AlertDialogHeader,
  // AlertDialogOverlay,
  // AlertDialogContent,
  // InputGroup,
  // InputLeftAddon,
  // Textarea,
} from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';
import UserCard from './comps/User.Card';
// import { MdWork } from 'react-icons/md';
// import { IoPaperPlane } from 'react-icons/io5';
// import floppete from './images/Floppete.jpeg';
// import { MdEmail, MdLocationOn, MdPhoneInTalk } from 'react-icons/md';
// import { BsFillBriefcaseFill } from 'react-icons/bs';
// // import { useRouteMatch } from 'react-router-dom';

const Welcome = ({ info }) => {
  // let { path } = useRouteMatch();
  return (
    <Stack spacing="20px">
      <Heading m="30px">Welcome, {info.firstName}</Heading>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={{ base: '30%', md: '5%' }}
        height="430px"
        padding="2%"
      >
        <Box
          // borderWidth="1px"
          // borderStyle="solid"
          // rounded="md"
          w="full"
          h="full"
        >
          <Flex justify="space-between">
            <Stack
              alignItems="center"
              spacing="15px"
              direction="row"
              m={{ base: '20px', md: '2' }}
            >
              <FaUser />
              <Heading size="md">Profile</Heading>
            </Stack>
            <Flex justify="flex-end" py="2%">
              <Button as="a" href="profile" variant="link" my="2">
                Edit profile {'>'}
              </Button>
            </Flex>
          </Flex>

          <UserCard info={info} marginBottom="30px" />
        </Box>
      </Stack>
      {/* <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={{ base: '30%', md: '5%' }}
        height="430px"
        padding="2%"
      >
        <Box
          // borderWidth="1px"
          // borderStyle="solid"
          // rounded="md"
          w="full"
          h="full"
        >
          <Stack
            alignItems="center"
            spacing="15px"
            direction="row"
            m={{ base: '20px', md: '2' }}
          >
            <FaUser />
            <Heading size="md">Profile</Heading>
          </Stack>
          <UserCard />
        </Box>
      </Stack> */}
    </Stack>
  );
};

export default Welcome;
