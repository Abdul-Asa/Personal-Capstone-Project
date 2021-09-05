import React from 'react';
import {
  FormControl,
  FormLabel,
  Select,
  Stack,
  useColorModeValue,
  // Button,
  // Avatar,
  // useMediaQuery,
  Input,
  // Spacer,
  // Spinner,
  // AlertDialog,
  // AlertDialogHeader,
  // AlertDialogOverlay,
  // AlertDialogContent,
  // AlertDialogBody,
  // Center,
  // Text,
  // WrapItem,
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
const QualificationsProfile = ({ profileData, handleInput }) => {
  return (
    <Stack spacing="20px">
      <FormControl>
        <FormLabel>Select the highest degree you have earned:</FormLabel>
        <Select
          placeholder="Select highest degree earned"
          borderColor={useColorModeValue('gray.300', 'white')}
          defaultValue={profileData.highestDegree}
          onChange={handleInput}
          name="highestDegree"
        >
          <option value="None">None</option>
          <option value="Secondary School cert.">
            Secondary School Certificate
          </option>
          <option value="Bachelors">Bachelors Degree</option>
          <option value="Masters">Masters</option>
          <option value="PhD">PhD</option>
          <option value="Stutern Certificate">Presidential Certificate</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Upload proof of document</FormLabel>
        <Input type="file" border="none" multiple />
      </FormControl>
      {/* <FormControl>
        <FormLabel>Upload your CV or other credentials</FormLabel>
        <Input type="file" border="none" multiple />
      </FormControl> */}
    </Stack>
  );
};
export default QualificationsProfile;
