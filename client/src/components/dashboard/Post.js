import React from //, { useState, useEffect }
'react';
import {
  Heading,
  // VStack,
  // Box,
  Flex,
  // FormControl,
  // FormLabel,
  // FormHelperText,
  // Select,
  Stack,
  // useColorModeValue,
  // Button,
  // IconButton,
  // useMediaQuery,
  // Spacer,
  // Spinner,
  // chakra,
  // Icon,
  // useColorModeValue,
  // useBreakpointValue,
  // SimpleGrid,
  // ButtonGroup,
  // IconButton,
  // Alert,
  // AlertDescription,
  // AlertTitle,
  // CloseButton,
  // AlertIcon,
  // AlertDialog,
  // AlertDialogHeader,
  // AlertDialogOverlay,
  // AlertDialogContent,
  // AlertDialogBody,
  // Center,
  // Text,
  Table,
  Thead,
  Tbody,
  // Tfoot,
  Tr,
  // Th,
  Td,
  // TableCaption,
  // WrapItem,
  // AlertDialog,
  // AlertDialogBody,
  // AlertDialogFooter,
  // AlertDialogHeader,
  // AlertDialogOverlay,
  // AlertDialogContent,
  // InputGroup,
  // InputLeftAddon,
} from '@chakra-ui/react';
// import { AiFillEdit, AiTwotoneLock } from 'react-icons/ai';
// import { BsBoxArrowUpRight, BsFillTrashFill } from 'react-icons/bs';

const Post = () => {
  // const data = [
  //   { title: 'Fix broken sink', created: '7 days ago' },
  //   { title: 'Car repair', created: '3 days ago' },
  //   { title: 'Build website', created: '1 day ago' },
  // ];
  return (
    <Stack spacing="40px">
      <Heading m="30px">Posted jobs</Heading>
      <Stack>
        <Flex>
          <Stack px="40px" direction="row">
            <Heading size="md">Jobs posted</Heading>
          </Stack>
        </Flex>
        <Table width="full">
          <Thead>
            <Tr>
              <Td>Title</Td>
              <Td>Created</Td>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Cow</Td>
              <Td>Cow</Td>
              <Td>Cow</Td>
              <Td>Cow</Td>
            </Tr>
            <Tr>
              <Td>Cow</Td>
              <Td>Cow</Td>
              <Td>Cow</Td>
              <Td>Cow</Td>
            </Tr>
            <Tr>
              <Td>Cow</Td>
              <Td>Cow</Td>
              <Td>Cow</Td>
              <Td>Cow</Td>
            </Tr>
          </Tbody>
        </Table>
      </Stack>
    </Stack>
  );
};

export default Post;
