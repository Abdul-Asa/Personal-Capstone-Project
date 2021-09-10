import React, { useState } from 'react';
import {
  Center,
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
  AlertIcon,
  AlertDescription,
  Box,
  FormControl,
  CloseButton,
} from '@chakra-ui/react';

import { useHistory } from 'react-router-dom';
import { setUser, getUser } from '../../utils/Common';
import { loginAction } from '../../utils/Actions';

const Login = () => {
  let history = useHistory();
  const user = getUser();
  if (user) {
    history.push('/user/home');
  }
  const [error, setError] = useState({ message: '' });
  const [alert, showAlert] = useState(false);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [loading, setLoading] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setLoginInfo((inputDetails) => {
      return { ...inputDetails, [name]: value };
    });
  };
  const submitLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    loginAction(loginInfo).then((response) => {
      setError(response);
      setLoading(false);
      showAlert(true);
      console.log(error);
      if (response.message === 'success') {
        setUser(response);
        history.push('user/home');
      }
    });
  };

  return (
    <Center h="100vh" alignItems="center" bg="blackAlpha.900">
      <Box
        w="full"
        h="fit-content"
        bg="white"
        rounded="xl"
        shadow="xl"
        color="gray.800"
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
          >
            <FormControl>
              <FormLabel>Email:</FormLabel>
              <Input
                pr="4.5rem"
                type="email"
                borderColor="gray.500"
                placeholder="Enter password"
                value={loginInfo.email}
                onChange={handleInput}
                name="email"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password:</FormLabel>
              <InputGroup>
                <Input
                  pr="4.5rem"
                  type={show ? 'text' : 'password'}
                  placeholder="Enter password"
                  value={loginInfo.password}
                  borderColor="gray.500"
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
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>{' '}
            <Center pt="8">
              <Button
                width="full"
                variant="solid"
                onClick={submitLogin}
                isLoading={loading}
                colorScheme="twitter"
              >
                Login
              </Button>
            </Center>
            {alert && (
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
            )}
          </Stack>
          <Flex
            justify="space-evenly"
            py="15px"
            align="center"
            direction={{ base: 'column', md: 'row' }}
          >
            <Text color="GrayText">Don't have an account?</Text>
            <Text color="GrayText" as="a" href="/signup">
              Sign up
            </Text>
          </Flex>
        </Stack>
      </Box>
    </Center>
  );
};

export default Login;
