import React from 'react';
import {
  Heading,
  Stack,
  Box,
  VStack,
  Avatar,
  Text,
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
// import { MdWork } from 'react-icons/md';
// import { IoPaperPlane } from 'react-icons/io5';
import floppete from './Floppete.jpeg';
import { MdEmail, MdLocationOn, MdPhoneInTalk } from 'react-icons/md';
import { BsFillBriefcaseFill } from 'react-icons/bs';
// import { useRouteMatch } from 'react-router-dom';

const Welcome = () => {
  // let { path } = useRouteMatch();

  return (
    <Stack spacing="20px">
      <Heading m="30px">Welcome, Floppa</Heading>
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

          <UserCard />
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

const UserCard = (props) => {
  return (
    <Box shadow="lg" rounded="lg" borderWidth="0.5px">
      <Stack my="5%">
        <Flex ml="10%" alignItems="center">
          <Avatar
            boxSize={{ base: '70px', md: '140px' }}
            src={floppete}
            borderWidth="1px"
            borderColor="gray.300"
          />
          <VStack
            alignItems="flex-start"
            padding={{ base: '15px', md: '25px' }}
          >
            <Box>
              <Heading size="lg">Floppa Sogga</Heading>
            </Box>
            <Box>
              <Text fontWeight="600">
                Graphic Designer and Professional Pet
              </Text>
            </Box>
          </VStack>
        </Flex>
        <Box fontSize="md" width="100%" px="10%" pt="20px">
          Hi there! I'm a wild caracal popular known has Big Floppa. I am one of
          the many personas that make up Floppa alongside Kimbo, Greg and Adolf.
          My guise is that of a female hence the nickname 'Floppete'. I hope I
          can tempt you to waste tons of hours watching videos of oversized
          housecats on Youtube
        </Box>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-around"
          px="10%"
          pt="20px"
        >
          <Stack alignItems="center" pb="5%">
            <MdEmail />
            <Text fontSize="sm" align="center">
              floppa@gmail.com
            </Text>
          </Stack>
          <Stack alignItems="center" pb="5%">
            <MdPhoneInTalk />
            <Text fontSize="sm" align="center">
              0800000000
            </Text>
          </Stack>
          <Stack alignItems="center" pb="5%">
            <BsFillBriefcaseFill />
            <Text fontSize="sm" align="center">
              Masters Degree
            </Text>
          </Stack>
          <Stack alignItems="center" pb="5%">
            <MdLocationOn />
            <Text fontSize="sm" align="center">
              Lagos, Nigeria
            </Text>
          </Stack>
        </Flex>
        <Box px="10%" pt="20px">
          <Heading size="sm">Other credentials</Heading>
          <Flex justify="space-between" px="10%" pt="20px">
            <Stack alignItems="center">
              <Text>CV</Text>
            </Stack>
            <Stack alignItems="center">
              <Text>CV</Text>
            </Stack>
            <Stack alignItems="center">
              <Text>CV</Text>
            </Stack>
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
};
