import React from 'react';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Select,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
const JobProfile = ({ profileData, handleInput }) => {
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
          defaultValue={profileData.myProfession}
          onChange={handleInput}
          name="myProfession"
        >
          <option value="Software Engineer">Software Engineer</option>
          <option value="Website Developer">Website Developer</option>
          <option value="UI/UX Designer">UI/UX Designer</option>
          <option value="Accountant">Accountant</option>
          <option value="Mechanical Engineer">Mechanical Engineer</option>
          <option value="Baker">Baker</option>
          <option value="Fashion Designer">Fashion Designer</option>
          <option value="Teacher">Teacher</option>
          <option value="Professional driver">Professional Driver</option>
          <option value="Electrician">Electrician</option>
          <option value="Hokage">Hokage</option>
          <option value="Pirate">Pirate</option>
          <option value="Professional Yahoo guy">Professional Yahoo guy</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Choose additional occupations:</FormLabel>
        <Select
          placeholder="Select occupation"
          borderColor={useColorModeValue('gray.300', 'white')}
          defaultValue={profileData.myProfession2}
          onChange={handleInput}
          name="myProfession2"
        >
          <option value="Software Engineer">Software Engineer</option>
          <option value="Website Developer">Website Developer</option>
          <option value="UI/UX Designer">UI/UX Designer</option>
          <option value="Accountant">Accountant</option>
          <option value="Mechanical Engineer">Mechanical Engineer</option>
          <option value="Baker">Baker</option>
          <option value="Fashion Designer">Fashion Designer</option>
          <option value="Teacher">Teacher</option>
          <option value="Professional driver">Professional Driver</option>
          <option value="Electrician">Electrician</option>
          <option value="Hokage">Hokage</option>
          <option value="Pirate">Pirate</option>
          <option value="Professional Yahoo guy">Professional Yahoo guy</option>
        </Select>
        <Select
          placeholder="Select occupation"
          mt="10px"
          borderColor={useColorModeValue('gray.300', 'white')}
          defaultValue={profileData.myProfession3}
          onChange={handleInput}
          name="myProfession3"
        >
          <option value="Software Engineer">Software Engineer</option>
          <option value="Website Developer">Website Developer</option>
          <option value="UI/UX Designer">UI/UX Designer</option>
          <option value="Accountant">Accountant</option>
          <option value="Mechanical Engineer">Mechanical Engineer</option>
          <option value="Baker">Baker</option>
          <option value="Fashion Designer">Fashion Designer</option>
          <option value="Teacher">Teacher</option>
          <option value="Professional driver">Professional Driver</option>
          <option value="Electrician">Electrician</option>
          <option value="Hokage">Hokage</option>
          <option value="Pirate">Pirate</option>
          <option value="Professional Yahoo guy">Professional Yahoo guy</option>
        </Select>
      </FormControl>
    </Stack>
  );
};

export default JobProfile;
