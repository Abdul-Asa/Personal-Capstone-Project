import React from 'react'; //, { useState, useEffect }
import {
  FormControl,
  FormLabel,
  Select,
  Stack,
  useColorModeValue,
  Input,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/react';

const UserProfile = ({ profileData, handleInput }) => {
  // let date = '';
  // if (typeof profileData.dateOfBirth === 'string') {
  //   date = profileData.dateOfBirth;
  // }
  // date = date.substr(0, 10);
  // const getDate = (e, value) => {
  //   e.target.type = 'text';
  //   value = e.target.value;
  //   const array = value.split('-');
  //   const months = [
  //     'Jan',
  //     'Feb',
  //     'Mar',
  //     'Apr',
  //     'May',
  //     'Jun',
  //     'Jul',
  //     'Aug',
  //     'Sep',
  //     'Oct',
  //     'Nov',
  //     'Dec',
  //   ];
  //   if (array.length < 2) {
  //     e.target.value = '';
  //   } else {
  //     let day = array[2] + 'th';
  //     if (array[2].charAt(1) === '1') {
  //       day = array[2] + 'st';
  //     }
  //     if (array[2].charAt(1) === '2') {
  //       day = array[2] + 'nd';
  //     }
  //     if (array[2].charAt(1) === '3') {
  //       day = array[2] + 'rd';
  //     }
  //     if (day.charAt(0) === '0') {
  //       day = day.substr(1);
  //     }
  //     const date = `${day} ${months[array[1] - 1]}, ${array[0]}`;
  //     // console.log(date);
  //     e.target.value = date;
  //   }
  // };
  return (
    <Stack spacing="10px">
      <InputGroup
        display={{ base: 'block', md: 'flex' }}
        borderColor={useColorModeValue('gray.300', 'white')}
      >
        <Input
          placeholder="First Name"
          name="firstName"
          defaultValue={profileData.firstName}
          onChange={handleInput}
        ></Input>
        <Input
          ml={{ base: 'none', md: '3px' }}
          mt={{ base: '10px', md: '0' }}
          placeholder="Last Name"
          name="lastName"
          defaultValue={profileData.lastName}
          onChange={handleInput}
        ></Input>
      </InputGroup>
      <InputGroup borderColor={useColorModeValue('gray.300', 'white')}>
        <InputLeftAddon children="+234" />
        <Input
          type="tel"
          placeholder="Phone Number"
          name="phoneNumber"
          defaultValue={profileData.phoneNumber}
          onChange={handleInput}
        />
      </InputGroup>

      {/* <InputGroup borderColor={useColorModeValue('gray.300', 'white')}>
        <Input
          type="text"
          placeholder="Date of Birth"
          name="dateOfBirth"
          defaultValue={date}
          onChange={handleInput}
          onFocus={(e) => {
            e.target.type = 'date';
            // e.target.defaultValue = profileData.dateOfBirth;
            e.target.onchange = handleInput;
            // e.target.value.max = Date.now().year;
            console.log(typeof profileData.dateOfBirth);
          }}
          onBlur={getDate}
        />
      </InputGroup> */}
      <InputGroup borderColor={useColorModeValue('gray.300', 'white')}>
        <Input
          type="text"
          placeholder="Home Address"
          name="homeAddress"
          defaultValue={profileData.homeAddress}
          onChange={handleInput}
        />
      </InputGroup>
      <FormControl>
        <FormLabel>Which state are you based in?</FormLabel>
        <Select
          placeholder="Select State"
          borderColor={useColorModeValue('gray.300', 'white')}
          defaultValue={profileData.baseState}
          onChange={handleInput}
          name="baseState"
        >
          <option value="Lagos">Lagos</option>
          <option value="Abuja">Abuja</option>
          <option value="Kwara">Kwara</option>
          <option value="Port-Harcourt">Port-Harcourt</option>
        </Select>
      </FormControl>
    </Stack>
  );
};

export default UserProfile;
