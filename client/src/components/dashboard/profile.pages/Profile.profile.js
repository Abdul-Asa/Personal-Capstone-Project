import React, { useState, useEffect } from 'react';
import {
  Flex,
  FormControl,
  Stack,
  useColorModeValue,
  Button,
  Avatar,
  Input,
  Alert,
  AlertDescription,
  AlertTitle,
  CloseButton,
  AlertIcon,
  Text,
  Spinner,
  FormLabel,
  // WrapItem,
  // AlertDialog,
  // AlertDialogBody,
  // AlertDialogFooter,
  // AlertDialogHeader,
  // AlertDialogOverlay,
  // AlertDialogContent,
  // InputGroup,
  // InputLeftAddon,
  Textarea,
} from '@chakra-ui/react';
import { config } from '../../../utils/config';
import axios from 'axios';
import { getUser } from '../../../utils/Common';
import { getUserInfo } from '../../../utils/Actions';

const { BASEURL } = config;

const ProfileProfile = ({ profileData, handleInput }) => {
  const [error, setError] = useState({});
  const [showAlert, setAlert] = useState(false);
  const [profilePic, setProfilePic] = useState({});
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState({});

  const handleFileChange = ({ target }) => {
    setProfilePic(target.files[0]);
    // setPath(target.value);
    console.log(target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const imageData = new FormData();
    imageData.append('image', profilePic);
    const user = getUser();
    const config = {
      headers: {
        token: user.token,
      },
    };
    await axios
      .patch(`${BASEURL}/user/profile-pic/${user.id}`, imageData, config)
      .then((res) => {
        setError(res.data);
        setAlert(true);
        setLoading(false);
      })
      .catch((err) => {
        console.log('err', err);
      });
  };
  useEffect(() => {
    console.log('Updating image...');
    const user = getUserInfo();
    user
      .then((data) => {
        setImage(data.image);
      })
      .catch((err) => console.log(err));
  }, [loading]);

  return (
    <Stack spacing="20px">
      <FormControl>
        <FormLabel>Profile picture</FormLabel>
        <Flex alignItems="center" mt={1}>
          <Avatar
            boxSize="80px"
            bg={useColorModeValue('gray.100', 'gray.800')}
            src={image}
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
            name="myPfp"
            accept="image/*"
            // defaultValue={imagePath}
            size="sm"
            fontWeight="medium"
            placeholder="Choose Image"
            _focus={{ shadow: 'none' }}
            onChange={handleFileChange}
          />
          <Button onClick={handleSubmit} ml="10px">
            Change
          </Button>
        </Flex>
      </FormControl>
      <Text fontSize="xs" color={useColorModeValue('gray.500', 'gray.50')}>
        PNG, JPG, GIF up to 10MB
      </Text>
      {loading && <Spinner />}
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

      <FormLabel>Profile description</FormLabel>
      <Textarea
        placeholder="Edit your profile"
        width="full"
        maxH="100px"
        name="myProfile"
        borderColor={useColorModeValue('gray.300', 'white')}
        defaultValue={profileData.myProfile}
        onChange={handleInput}
      />
    </Stack>
  );
};

export default ProfileProfile;
