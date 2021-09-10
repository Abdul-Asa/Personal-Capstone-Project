import React from 'react';
import {
  Heading,
  Stack,
  Box,
  Flex,
  Text,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import { BsFillBriefcaseFill, BsFillPersonFill } from 'react-icons/bs';
import { BiTimeFive } from 'react-icons/bi';
import { FaMoneyBill } from 'react-icons/fa';
const JobCard = ({ info, ...rest }) => {
  const reformDate = (date) => {
    let final = date.substr(0, 10);
    let day = final.substr(8, 2);
    let month = final.substr(5, 2);
    let year = final.substr(2, 2);
    final = day + '-' + month + '-' + year;
    return final;
  };
  const reformPrice = (price) => {
    if (price === '>150000') return 'Greater than 150k';
    if (price === '<10000') return 'Less than 10k';
    if (price === '10000<p<50000') return 'Between 10k & 50k';
    if (price === '50000<p<150000') return 'Between 50k & 150k';
    return 'Negotiate';
  };
  let title = '';
  let jobDescription = '';
  let createdAt = '';
  let image = '';
  let priceRange = '';
  let nameOfEmployer = '';
  let preferredProfessional = '';
  if (info) {
    title = info.title;
    if (!info.title) {
      title = 'N/A';
    }
    jobDescription = info.jobDescription;
    if (!info.jobDescription) {
      jobDescription = 'N/A';
    }
    image = info.image;
    if (!info.image) {
      image = '';
    }
    createdAt = reformDate(info.createdAt);
    if (!info.createdAt) {
      createdAt = 'N/A';
    }
    nameOfEmployer = info.nameOfEmployer;
    if (!info.nameOfEmployer) {
      nameOfEmployer = 'N/A';
    }

    priceRange = reformPrice(info.priceRange);
    if (!info.priceRange) {
      priceRange = 'N/A';
    }
    preferredProfessional = info.preferredProfessional;
    if (!info.preferredProfessional) {
      preferredProfessional = 'N/A';
    }
  }

  return (
    <Flex py="10" w="full" alignItems="center" justifyContent="center">
      <Box
        w="md"
        bg={useColorModeValue('white', 'gray.800')}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        mx="auto"
      >
        <Image
          w="full"
          h="300px"
          fit="cover"
          src={image}
          alt="avatar"
          fallbackSrc="https://res.cloudinary.com/padrone/image/upload/v1631107004/job%20description%20pics/download_hoop6z.png"
        />

        <Box py={5} px={5}>
          <Heading
            display="block"
            fontSize="2xl"
            color={useColorModeValue('gray.800', 'white')}
            fontWeight="bold"
          >
            {title}
          </Heading>
          <Box py={10}>{jobDescription}</Box>
          <Stack spacing="10%" mb="20px">
            <Flex alignItems="center">
              <BsFillPersonFill />
              <Text pl={2}>Posted By: {nameOfEmployer}</Text>
            </Flex>
            <Flex alignItems="center">
              <BsFillBriefcaseFill />
              <Text pl={2}>
                Preferred Professional: {preferredProfessional}
              </Text>
            </Flex>
            <Flex alignItems="center">
              <BiTimeFive />
              <Text pl={2}>Date created: {createdAt}</Text>
            </Flex>
            <Flex alignItems="center">
              <FaMoneyBill />
              <Text pl={2}>Price Range: {priceRange}</Text>
            </Flex>
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
};

export default JobCard;
