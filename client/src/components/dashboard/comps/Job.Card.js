import React from 'react';
import {
  Heading,
  Stack,
  Box,
  Flex,
  Text,
  Image,
  useColorModeValue,
  // VStack,
  // Avatar,
  // Wrap,
  // Divider,
  // chakra,

  // Link,
  // Container,
  // Skeleton,
} from '@chakra-ui/react';
import { BsFillBriefcaseFill, BsFillPersonFill } from 'react-icons/bs';
import { BiTimeFive } from 'react-icons/bi';
import { FaMoneyBill } from 'react-icons/fa';
const JobCard = ({ info, ...rest }) => {
  // const data = JSON.stringify(info);
  const reformDate = (date) => {
    let final = date.substr(0, 10);
    let day = final.substr(8, 2);
    let month = final.substr(5, 2);
    let year = final.substr(2, 2);
    final = day + '-' + month + '-' + year;
    return final;
  };
  return (
    <Flex
      bg={useColorModeValue('#F9FAFB', 'gray.600')}
      py="10"
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="md"
        bg={useColorModeValue('white', 'gray.800')}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        mx="auto"
      >
        <Image w="full" h={60} fit="cover" src={info.image} alt="avatar" />

        <Box py={5} px={5}>
          <Heading
            display="block"
            fontSize="2xl"
            color={useColorModeValue('gray.800', 'white')}
            fontWeight="bold"
          >
            {info.title}
          </Heading>
          <Box py={10}>{info.jobDescription}</Box>
          <Stack spacing="10%">
            <Flex alignItems="center">
              <BsFillPersonFill />
              <Text pl={2}>Posted By: {info.nameOfEmployer}</Text>
            </Flex>
            <Flex alignItems="center">
              <BsFillBriefcaseFill />
              <Text pl={2}>
                Preferred Professional: {info.preferredProfessional}
              </Text>
            </Flex>
            <Flex alignItems="center">
              <BiTimeFive />
              <Text pl={2}>Date created: {reformDate(info.createdAt)}</Text>
            </Flex>
            <Flex alignItems="center">
              <FaMoneyBill />
              <Text pl={2}>Price Range: {info.priceRange}</Text>
            </Flex>
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
};

export default JobCard;
