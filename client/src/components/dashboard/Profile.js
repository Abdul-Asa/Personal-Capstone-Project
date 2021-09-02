import React, { useState } from 'react';
import {
  Heading,
  VStack,
  Box,
  Flex,
  FormControl,
  FormLabel,
  FormHelperText,
  Select,
  Stack,
  useColorModeValue,
  Button,
  // IconButton,
  Avatar,
  useMediaQuery,
  Input,
  // Spacer,
  Text,
  // WrapItem,
  // AlertDialog,
  // AlertDialogBody,
  // AlertDialogFooter,
  // AlertDialogHeader,
  // AlertDialogOverlay,
  // AlertDialogContent,
  InputGroup,
  InputLeftAddon,
  Textarea,
} from '@chakra-ui/react';
import { FaCaretRight } from 'react-icons/fa';

const Profile = () => {
  const [isDesktop] = useMediaQuery('(min-width: 915px)');
  const getDate = (e, value) => {
    e.target.type = 'text';
    value = e.target.value;
    const array = value.split('-');
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    if (array.length < 2) {
      e.target.value = '';
    } else {
      let day = array[2] + 'th';
      if (array[2].charAt(1) === '1') {
        day = array[2] + 'st';
      }
      if (array[2].charAt(1) === '2') {
        day = array[2] + 'nd';
      }
      if (array[2].charAt(1) === '3') {
        day = array[2] + 'rd';
      }
      if (day.charAt(0) === '0') {
        day = day.substr(1);
      }
      const date = `${day} ${months[array[1] - 1]}, ${array[0]}`;
      console.log(date);
      e.target.value = date;
    }
  };
  const progress = [
    { page: 0, title: 'User Information', caret: <FaCaretRight /> },
    { page: 1, title: 'Profile Description', caret: <FaCaretRight /> },
    { page: 2, title: 'Job Description', caret: <FaCaretRight /> },
    { page: 3, title: 'Qualifications', caret: '' },
  ];

  // const jobs = [];
  const [current, setCurrent] = useState(progress[0]);
  const nextPage = () => {
    if (current.page === 3) {
      return console.log('No next page');
    }
    setCurrent(progress[current.page + 1]);
  };
  const prevPage = () => {
    if (current.page === 0) {
      return console.log('No previous page');
    }
    setCurrent(progress[current.page - 1]);
  };

  const UserInfo = (props) => {
    return (
      <Stack spacing="10px">
        <InputGroup
          display={{ base: 'block', md: 'flex' }}
          borderColor={useColorModeValue('gray.300', 'white')}
        >
          <Input placeholder="First Name"></Input>
          <Input
            ml={{ base: 'none', md: '3px' }}
            mt={{ base: '10px', md: '0' }}
            placeholder="Last Name"
          ></Input>
        </InputGroup>
        <InputGroup borderColor={useColorModeValue('gray.300', 'white')}>
          <InputLeftAddon children="+234" />
          <Input type="tel" placeholder="Phone Number" />
        </InputGroup>

        <InputGroup borderColor={useColorModeValue('gray.300', 'white')}>
          <Input
            type="text"
            placeholder="Date of Birth"
            onFocus={(e) => {
              e.target.type = 'date';
            }}
            onBlur={getDate}
          />
        </InputGroup>
        <InputGroup borderColor={useColorModeValue('gray.300', 'white')}>
          <Input type="text" placeholder="Home Address" />
        </InputGroup>
        <FormControl>
          <FormLabel>Which state are you based in?</FormLabel>
          <Select
            placeholder="Select State"
            borderColor={useColorModeValue('gray.300', 'white')}
          >
            <option value="option1">Lagos</option>
            <option value="option1">Abuja</option>
            <option value="option2">Kwara</option>
            <option value="option3">Port-Harcourt</option>
          </Select>
        </FormControl>
      </Stack>
    );
  };

  const ProfileInfo = (props) => {
    return (
      <Stack spacing="20px">
        <Textarea
          placeholder="Edit your profile"
          width="full"
          maxH="100px"
          borderColor={useColorModeValue('gray.300', 'white')}
        />
        <FormControl>
          <Flex alignItems="center" mt={1}>
            <Avatar
              boxSize="80px"
              bg={useColorModeValue('gray.100', 'gray.800')}
              // src={(e) => e.target.value}
              // icon={
              //   <Icon
              //     as={FaUser}
              //     boxSize={9}
              //     mt={3}
              //     rounded="full"
              //     color={useColorModeValue('gray.300', 'gray.700')}
              //   />
              //}
            />
            <Input
              type="file"
              ml={5}
              variant="outline"
              size="sm"
              fontWeight="medium"
              placeholder="Choose Image"
              _focus={{ shadow: 'none' }}
            />
          </Flex>
        </FormControl>
        <Text fontSize="xs" color={useColorModeValue('gray.500', 'gray.50')}>
          PNG, JPG, GIF up to 10MB
        </Text>
      </Stack>
    );
  };

  const JobInfo = (props) => {
    return (
      <Stack spacing="20px">
        <FormControl>
          <FormLabel>
            Choose your main occupation:
            <FormHelperText>
              This should be the field you have the most experience in
            </FormHelperText>
          </FormLabel>
          <Select
            placeholder="Select main occupation"
            borderColor={useColorModeValue('gray.300', 'white')}
          >
            <option value="option1">Software Engineer</option>
            <option value="option2">Website Developer</option>
            <option value="option3">UI/UX Designer</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Choose additional occupations:</FormLabel>
          <Select
            placeholder="Select occupation"
            borderColor={useColorModeValue('gray.300', 'white')}
          >
            <option value="option1">Software Engineer</option>
            <option value="option1">Mechanical Engineer</option>
            <option value="option2">Website Developer</option>
            <option value="option3">UI/UX Designer</option>
          </Select>
          <Select
            placeholder="Select occupation"
            mt="10px"
            borderColor={useColorModeValue('gray.300', 'white')}
          >
            <option value="option1">Software Engineer</option>
            <option value="option1">Mechanical Engineer</option>
            <option value="option2">Website Developer</option>
            <option value="option3">UI/UX Designer</option>
          </Select>
        </FormControl>
      </Stack>
    );
  };

  const Qualifications = (props) => {
    return (
      <Stack spacing="20px">
        <FormControl>
          <FormLabel>Select the highest degree you have earned:</FormLabel>
          <Select
            placeholder="Select highest degree earned"
            borderColor={useColorModeValue('gray.300', 'white')}
          >
            <option value="option1">None</option>
            <option value="option2">Secondary School Certificate</option>
            <option value="option3">Bachelors Degree</option>
            <option value="option3">Masters</option>
            <option value="option3">PhD</option>
            <option value="option3">Presidential Certificate</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Upload proof of document</FormLabel>
          <Input type="file" border="none" multiple />
        </FormControl>
        <FormControl>
          <FormLabel>Upload your CV or other credentials</FormLabel>
          <Input type="file" border="none" multiple />
        </FormControl>
      </Stack>
    );
  };

  return (
    <Stack spacing="20px">
      <Heading m="30px">Profile</Heading>
      <VStack width="100%" alignItems="self-start">
        <Box marginX="7%">
          {isDesktop ? (
            <Flex direction="row" alignItems="center">
              {progress.map((index) => {
                return (
                  <Flex key={index.page} align="center">
                    <Button
                      size={current.page === index.page ? 'md' : 'sm'}
                      mx="5px"
                      onClick={() => setCurrent(progress[index.page])}
                      variant={current.page === index.page ? 'solid' : 'link'}
                      // color="gray.700"
                    >
                      {index.title}
                    </Button>
                    {index.caret}
                  </Flex>
                );
              })}
            </Flex>
          ) : (
            <Heading size="sm">{current.title}</Heading>
          )}
          <Box my="35px">
            {current.title === 'User Information' && <UserInfo />}
            {current.title === 'Profile Description' && <ProfileInfo />}
            {current.title === 'Job Description' && <JobInfo />}
            {current.title === 'Qualifications' && <Qualifications />}
          </Box>
          <Stack direction="row" spacing="10px">
            {current.page !== 0 && (
              <Button onClick={prevPage} variant="outline">
                Back
              </Button>
            )}
            {current.page === 3 ? (
              <Button colorScheme="messenger">Submit</Button>
            ) : (
              <Button onClick={nextPage}>Next</Button>
            )}
          </Stack>
        </Box>
      </VStack>{' '}
    </Stack>
  );
};

export default Profile;
