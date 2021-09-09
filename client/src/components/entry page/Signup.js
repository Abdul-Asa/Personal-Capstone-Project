import {
  Center,
  HStack,
  Heading,
  Input,
  Button,
  InputRightElement,
  Text,
  Flex,
  FormLabel,
  InputGroup,
  Stack,
  Alert,
  Checkbox,
  CheckboxGroup,
  AlertIcon,
  AlertDescription,
  Box,
  FormControl,
  CloseButton,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { setUser, getUser } from '../../utils/Common';
import { loginAction } from '../../utils/Actions';
import axios from 'axios';
import { config } from '../../config';
import './css/EntryPage.css';

const Signup = () => {
  const { BASEURL } = config;
  let history = useHistory();
  const user = getUser();
  if (user) {
    history.push('/user/home');
  }
  const [error, setError] = useState('');
  const [signupInfo, setSignupInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    hasAgreed: false,
    over18: false,
  });
  const handleInput = (e) => {
    if (e.target.name === 'hasAgreed') {
      const { checked } = e.target;
      return setSignupInfo((inputDetails) => {
        return { ...inputDetails, [name]: value };
      });
    }
    const { name, value } = e.target;
    setSignupInfo((inputDetails) => {
      return { ...inputDetails, [name]: value };
    });
  };
  const submitSignup = (e) => {
    e.preventDefault();
    // axios.post(`${BASEURL}/auth/signup`, signupInfo).then((response) => {
    //   if (response.data.message === 'success') {
    //     setError(response.data.link);
    //     // history.push('/login');
    //   } else {
    //     setError(response.data.message);
    //   }
    // });
    console.log(signupInfo);
  };

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Center h="100vh" alignItems="center" bg="blackAlpha.900">
      <Box
        w="full"
        h="fit-content"
        bg="white"
        rounded="xl"
        shadow="xl"
        mx={{ base: '5%', md: '35%' }}
        p={{ base: '0', md: '2' }}
      >
        <Stack spacing="10px">
          <Center my="6">
            <Heading as="a" href="/" _hover={{ textDecoration: 'none' }}>
              Padrone
            </Heading>
          </Center>
          <Stack
            pl={{ base: '6', md: '10' }}
            pr={{ base: '10%', md: '30' }}
            spacing="3"
            pb={10}
          >
            <FormControl isRequired>
              <FormLabel>First Name:</FormLabel>
              <Input
                pr="4.5rem"
                type="text"
                placeholder="Enter First name"
                value={signupInfo.firstName}
                onChange={handleInput}
                name="firstName"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Last Name:</FormLabel>
              <Input
                pr="4.5rem"
                type="text"
                placeholder="Enter Last name"
                value={signupInfo.lastName}
                onChange={handleInput}
                name="lastName"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email:</FormLabel>
              <Input
                pr="4.5rem"
                type="email"
                placeholder="Enter password"
                value={signupInfo.email}
                onChange={handleInput}
                name="email"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password:</FormLabel>
              <InputGroup>
                <Input
                  pr="4.5rem"
                  type={show ? 'text' : 'password'}
                  placeholder="Enter password"
                  value={signupInfo.password}
                  onChange={handleInput}
                  name="password"
                />{' '}
                <InputRightElement width="4.5rem">
                  <Button
                    h="1.75rem"
                    size="sm"
                    onClick={handleClick}
                    variant="unstyled"
                  >
                    {show ? 'Show' : 'Hide'}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <CheckboxGroup colorScheme="green" alignItems="center">
              <FormControl pt="10px" isRequired>
                <Flex>
                  <Checkbox
                    name="hasAgreed"
                    checked={signupInfo.hasAgreed}
                    onChange={handleInput}
                  />
                  <FormLabel ml="10px">Agree to Terms & Conditions</FormLabel>
                </Flex>
              </FormControl>
            </CheckboxGroup>
            <Center pt="8">
              <Button
                width="full"
                variant="solid"
                onClick={submitSignup}
                // isLoading={loading}
              >
                Sign Up
              </Button>
            </Center>
            {/* {alert && (
              <Alert status={error.message === 'success' ? 'success' : 'error'}>
                <AlertIcon />
                <AlertDescription>{error.message}</AlertDescription>
                <CloseButton
                  position="absolute"
                  right="8px"
                  top="8px"
                  onClick={() => showAlert(false)}
                />
              </Alert>
            )} */}
          </Stack>
        </Stack>
      </Box>
    </Center>
    // <div className="entry-page">
    //   <a className="page-header" href="/">
    //     <i className="fas fa-parking"></i>
    //     <p className="page-header-text">Padrone</p>
    //   </a>
    //   <div className="card">
    //     <h1 className="form-header">Sign Up</h1>
    //     <form onSubmit={submitSignup}>
    //       <div className="form-group">
    //         <label className="form-label">First Name:</label>
    //         <input
    //           type="text"
    //           className="form-control"
    //           id="firstName"
    //           placeholder="Enter first name"
    //           name="firstName"
    //           value={signupInfo.firstName}
    //           onChange={handleInput}
    //         />
    //       </div>
    //       <div className="form-group">
    //         <label className="form-label">Last Name:</label>
    //         <input
    //           type="text"
    //           className="form-control"
    //           id="lastName"
    //           placeholder="Enter last name"
    //           name="lastName"
    //           value={signupInfo.lastName}
    //           onChange={handleInput}
    //         />
    //       </div>
    //       <div className="form-group">
    //         <label className="form-label">Email:</label>
    //         <input
    //           type="email"
    //           className="form-control"
    //           id="email"
    //           placeholder="Enter email"
    //           name="email"
    //           value={signupInfo.email}
    //           onChange={handleInput}
    //         />
    //       </div>
    //       <div className="form-group">
    //         <label className="form-label">Password:</label>
    //         <input
    //           type="password"
    //           className="form-control"
    //           id="password"
    //           placeholder="Enter password"
    //           name="password"
    //           value={signupInfo.password}
    //           onChange={handleInput}
    //         />
    //       </div>
    //       <p>{error}</p>
    //       <button className="entry-btn">Sign up</button>
    //     </form>
    //   </div>
    // </div>
  );
};

export default Signup;
