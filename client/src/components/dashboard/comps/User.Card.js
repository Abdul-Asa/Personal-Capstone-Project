import {
  Heading,
  Stack,
  Box,
  VStack,
  Avatar,
  Text,
  Divider,
  Flex,
  Skeleton,
} from '@chakra-ui/react';
import React from 'react';
// import floppete from './images/Floppete.jpeg';
import { MdEmail, MdLocationOn, MdPhoneInTalk } from 'react-icons/md';
import { BsFillBriefcaseFill } from 'react-icons/bs';

const UserCard = ({ info, ...rest }) => {
  let jobs = '';
  let phoneNumber = '';
  let degree = '';
  let baseState = '';
  let email = '';
  let profile = '';
  if (info) {
    if (info.myProfession3) {
      jobs =
        info.myProfession +
        ', ' +
        info.myProfession2 +
        ' and ' +
        info.myProfession3;
    }
    if (info.myProfession2 && !info.myProfession3) {
      jobs = info.myProfession + ' and ' + info.myProfession2;
    }
    if (!info.myProfession2) {
      jobs = info.myProfession;
    }
    if (!info.myProfession) {
      jobs = 'N/A';
    }
    phoneNumber = '+234' + info.phoneNumber;
    if (!info.phoneNumber) {
      phoneNumber = 'N/A';
    }
    degree = info.highestDegree;
    if (!info.highestDegree) {
      degree = 'N/A';
    }
    baseState = info.baseState + ', Nigeria';
    if (!info.baseState) {
      baseState = 'N/A';
    }
    email = info.email;
    if (!info.email) {
      email = 'N/A';
    }
    profile = info.myProfile;
    if (!info.myProfile) {
      profile = 'Edit your profile description';
    }
  }

  return (
    <Box
      shadow="lg"
      rounded="lg"
      borderWidth="0.5px"
      {...rest}
      marginBottom="40px"
    >
      <Stack my="5%">
        <Flex ml="10%" alignItems="center">
          {info ? (
            <Avatar
              boxSize={{ base: '70px', md: '140px' }}
              src={info.image}
              borderWidth="1px"
              borderColor="gray.300"
            />
          ) : (
            <Skeleton />
          )}

          <VStack
            alignItems="flex-start"
            padding={{ base: '15px', md: '25px' }}
          >
            <Box>
              {info ? (
                <Heading size="lg">
                  {info.firstName} {info.lastName}
                </Heading>
              ) : (
                <Skeleton />
              )}
            </Box>
            <Box>
              <Text fontWeight="600">{jobs} </Text>
            </Box>
          </VStack>
        </Flex>
        <Divider width="90%" alignSelf="center" />

        <Box
          fontSize="md"
          width="100%"
          px="10%"
          pt="20px"
          minHeight="150px"
          borderStyle="dotted"
        >
          {profile}
        </Box>
        <Divider width="90%" alignSelf="center" />
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-around"
          px="10%"
          pt="20px"
        >
          <Stack alignItems="center" pb="5%">
            <MdEmail />
            <Text fontSize="sm" align="center">
              {email}
            </Text>
          </Stack>
          <Stack alignItems="center" pb="5%">
            <MdPhoneInTalk />
            <Text fontSize="sm" align="center">
              {phoneNumber}
            </Text>
          </Stack>
          <Stack alignItems="center" pb="5%">
            <BsFillBriefcaseFill />
            <Text fontSize="sm" align="center">
              {degree}
            </Text>
          </Stack>
          <Stack alignItems="center" pb="5%">
            <MdLocationOn />
            <Text fontSize="sm" align="center">
              {baseState}
            </Text>
          </Stack>
        </Flex>
        {/* <Box px="10%" pt="20px">
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
        </Box> */}
      </Stack>
    </Box>
  );
};

export default UserCard;
