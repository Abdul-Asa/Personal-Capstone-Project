import React, { useState, useEffect } from 'react';
import {
  Heading,
  VStack,
  Box,
  Flex,
  // FormControl,
  // FormLabel,
  // FormHelperText,
  // Select,
  Stack,
  // useColorModeValue,
  Button,
  // IconButton,
  useMediaQuery,
  // Spacer,
  Spinner,
  Alert,
  AlertDescription,
  AlertTitle,
  CloseButton,
  AlertIcon,
  AlertDialog,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogBody,
  Center,
  Text,
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
import { FaCaretRight } from 'react-icons/fa';
import { getUserInfo, updateUser } from '../../utils/Actions';
import UserProfile from './profile.pages/User.profile';
import ProfileProfile from './profile.pages/Profile.profile';
import JobProfile from './profile.pages/Job.profile';
import QualificationsProfile from './profile.pages/Qualifications.profile';

const Profile = () => {
  const [isDesktop] = useMediaQuery('(min-width: 915px)');
  const [userInfo, setUserinfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({});
  const [showAlert, setAlert] = useState(false);
  const [disabled, changeDisabled] = useState(true);

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

  const handleInput = (e) => {
    const { name, value } = e.target;
    delete userInfo.status;
    delete userInfo._id;
    delete userInfo.email;
    delete userInfo.hasAgreed;
    delete userInfo.password;
    delete userInfo.confirmationCode;
    delete userInfo.createdAt;
    delete userInfo.updatedAt;
    delete userInfo.hasAgreed;
    delete userInfo.__v;
    changeDisabled(false);
    setUserinfo((inputDetails) => {
      return { ...inputDetails, [name]: value };
    });
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

  return (
    <Stack spacing="20px">
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
            {current.title === 'User Information' && (
              <UserProfile profileData={userInfo} handleInput={handleInput} />
            )}
            {current.title === 'Profile Description' && (
              <ProfileProfile
                profileData={userInfo}
                handleInput={handleInput}
              />
            )}
            {current.title === 'Job Description' && (
              <JobProfile profileData={userInfo} handleInput={handleInput} />
            )}
            {current.title === 'Qualifications' && (
              <QualificationsProfile
                profileData={userInfo}
                handleInput={handleInput}
              />
            )}
          </Box>

          <Stack direction="row" spacing="10px">
            {current.page !== 0 && (
              <Button onClick={prevPage} variant="outline">
                Back
              </Button>
            )}
            {current.page === 3 ? (
              <Button
                colorScheme="messenger"
                disabled={disabled}
                onClick={() => {
                  // console.log(userInfo);
                  setLoading(true);
                  const resp = updateUser(userInfo);
                  resp
                    .then((data) => {
                      console.log(data);
                      setError(data);
                      setAlert(true);
                      setTimeout(() => {
                        setLoading(false);
                      }, 1000);
                      changeDisabled(true);
                    })
                    .catch((err) => console.log(err));
                }}
              >
                Submit
              </Button>
            ) : (
              <Button onClick={nextPage}>Next</Button>
            )}
          </Stack>

          {showAlert && (
            <Alert
              status={error.message === 'success' ? 'success' : 'error'}
              mt="15px"
            >
              <AlertIcon />
              <AlertTitle mr={2}>
                {error.message === 'success' ? 'Success' : 'Error'}
              </AlertTitle>
              <AlertDescription>
                {error.message === 'success' ? '' : error.message}
              </AlertDescription>
              <CloseButton
                position="absolute"
                right="8px"
                top="8px"
                onClick={() => {
                  setAlert(false);
                }}
              />
            </Alert>
          )}
        </Box>
      </VStack>{' '}
    </Stack>
  );
};

export default Profile;
