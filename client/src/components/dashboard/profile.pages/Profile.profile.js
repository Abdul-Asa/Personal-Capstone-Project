import React from // , { useState }
'react';
import {
  Flex,
  FormControl,
  Stack,
  useColorModeValue,
  // IconButton,
  Avatar,
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
  // InputGroup,
  // InputLeftAddon,
  Textarea,
} from '@chakra-ui/react';
const ProfileProfile = ({ profileData, handleInput }) => {
  // const [profilePic, setProfilePic] = useState({});
  // const [imagePath, setPath] = useState('');

  // const handleFileChange = ({ target }) => {
  //   setProfilePic(target.files[0]);
  //   setPath(target.value);
  //   console.log(target.files[0]);
  // };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  // };
  return (
    <Stack spacing="20px">
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
            name="myPfp"
            accept="image/*"
            // defaultValue={imagePath}
            size="sm"
            fontWeight="medium"
            placeholder="Choose Image"
            _focus={{ shadow: 'none' }}
            // onChange={handleFileChange}
          />
        </Flex>
      </FormControl>
      <Text fontSize="xs" color={useColorModeValue('gray.500', 'gray.50')}>
        PNG, JPG, GIF up to 10MB
      </Text>
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
