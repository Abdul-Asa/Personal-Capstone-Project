import React, { useState, useEffect } from 'react';

import {
  IconButton,
  Avatar,
  FormControl,
  Textarea,
  Input,
  useToast,
  HStack,
  Button,
  Box,
  Flex,
  useColorModeValue,
  Heading,
  Container,
  Stack,
  Center,
  Text,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import Navbar from './Navbar';
import { send } from 'emailjs-com';
import { getUser } from '../../utils/Common';
import { BsPersonBoundingBox, BsMoon } from 'react-icons/bs';
import { MdDevices } from 'react-icons/md';
import { FaGithub, FaInstagram, FaPaypal } from 'react-icons/fa';

const LandingPage = () => {
  let history = useHistory();
  const user = getUser();
  if (user) {
    history.push('/user/home');
  }
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
  });
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [valid, setValid] = useState(true);
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
    if (toSend.message.length > 3 && toSend.from_name) {
      setValid(false);
    } else {
      setValid(true);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    let templateParams = {
      from_name: toSend.from_name,
      to_name: 'Abdullah',
      message_html: toSend.message,
    };
    setLoading(true);
    send(
      'service_ii6pb52',
      'template_49og8wv',
      templateParams,
      'user_Z9MQoCSrbuXlA5RmPqD2K'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setLoading(false);
        toast({
          title: 'Success',
          position: 'bottom',
          description: 'Message sent',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        setToSend({
          from_name: '',
          to_name: '',
          message: '',
        });
      })
      .catch((err) => {
        console.log('FAILED...', err);
        setLoading(false);
        toast({
          title: 'Failed',
          position: 'bottom',
          description: 'Try again later',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      });
  };
  return (
    <Box
      minH="100vh"
      bg={useColorModeValue('whiteAlpha.50', 'gray.900')}
      transition="0.3s ease"
      as="section"
    >
      <Navbar />
      <Center>
        <Stack>
          <Center>
            <Box
              mx={{ base: '2', md: '40' }}
              textAlign="center"
              my={{ base: '18%', md: '10%' }}
            >
              <Heading
                size="2xl"
                color={useColorModeValue('gray.800', 'whiteAlpha.900')}
              >
                Tinder...but for jobs? Hello
              </Heading>
              <Heading
                size="3xl"
                color={useColorModeValue('telegram.700', 'telegram.500')}
              >
                Padrone
              </Heading>
              <Center mx={{ base: '2', md: '10%', lg: '30%' }} mt="5">
                <Text
                  fontSize={{ base: '22px', md: '30px' }}
                  color={useColorModeValue('GrayText', 'whiteAlpha.900')}
                >
                  Find qualified employees to carry out your jobs or connect
                  with multiple employers and offer your services
                </Text>
              </Center>
              <Center>
                <HStack spacing={{ base: '20px', md: '10' }} mt="20px">
                  <Button
                    as="a"
                    href="/login"
                    size="lg"
                    variant="outline"
                    width="120px"
                    colorScheme={useColorModeValue('telegram', '')}
                    _hover={{
                      textDecoration: 'none',
                      bg: 'telegram.500',
                      color: 'white',
                    }}
                  >
                    Login
                  </Button>
                  <Button
                    size="lg"
                    as="a"
                    colorScheme={useColorModeValue('telegram', '')}
                    href="/signup"
                    variant="outline"
                    width="120px"
                    _hover={{
                      textDecoration: 'none',
                      bg: 'telegram.500',
                      color: 'white',
                    }}
                  >
                    Signup
                  </Button>
                </HStack>
              </Center>
            </Box>
          </Center>
          <Center>
            <Box
              mx={{ base: '2', md: '40' }}
              textAlign="center"
              mb={{ base: '18%', md: '10%' }}
            >
              <Heading
                size="2xl"
                color={useColorModeValue('gray.800', 'whiteAlpha.900')}
              >
                Lots of cool features
              </Heading>
              <Center mx={{ base: '2', md: '10%' }} mt="5">
                <Text
                  fontSize={{ base: '22px', md: '30px' }}
                  color={useColorModeValue('GrayText', 'whiteAlpha.900')}
                >
                  Padrone boasts a bunch of features for easy and everyday use
                </Text>
              </Center>
              <Center>
                <Stack
                  spacing={{ base: '20px', md: '5%' }}
                  direction={{ base: 'column', md: 'row' }}
                  mt="5%"
                >
                  <Flex w="full" alignItems="center" justifyContent="center">
                    <Box
                      bg={useColorModeValue('white', 'gray.800')}
                      shadow="md"
                      rounded="lg"
                      borderWidth="1px"
                      p={5}
                    >
                      <Box px={4} py={2} maxW="400px" h="180px">
                        <Flex align="center" justify="center">
                          <BsPersonBoundingBox size="30px" />
                          <Text
                            ml="10px"
                            color={useColorModeValue('gray.800', 'white')}
                            fontWeight="bold"
                            textTransform="uppercase"
                          >
                            User Authentication
                          </Text>
                        </Flex>
                        <Container
                          mt={3}
                          color={useColorModeValue('gray.600', 'gray.200')}
                        >
                          Padrone features a secure authentication system.
                          Verification is also needed for new users to prevent
                          fake/spam accounts
                        </Container>
                      </Box>
                    </Box>
                  </Flex>
                  <Flex
                    w="full"
                    alignItems="center"
                    justifyContent="center"
                    minH="180px"
                  >
                    <Box
                      bg={useColorModeValue('white', 'gray.800')}
                      shadow="md"
                      rounded="lg"
                      borderWidth="1px"
                      p={5}
                    >
                      <Box px={4} py={2} maxW="sm" h="180px" maxW="400px">
                        <Flex align="center" justify="center">
                          <BsMoon size="30px" />
                          <Text
                            ml="10px"
                            color={useColorModeValue('gray.800', 'white')}
                            fontWeight="bold"
                            textTransform="uppercase"
                          >
                            Light and Dark Mode
                          </Text>
                        </Flex>
                        <Container
                          mt={3}
                          color={useColorModeValue('gray.600', 'gray.200')}
                        >
                          Change the theme of the UI to your choice. Optimized
                          for both light and dark color modes.
                        </Container>
                      </Box>
                    </Box>
                  </Flex>
                  <Flex w="full" alignItems="center" justifyContent="center">
                    <Box
                      bg={useColorModeValue('white', 'gray.800')}
                      shadow="md"
                      rounded="lg"
                      borderWidth="1px"
                      p={5}
                    >
                      <Box px={4} py={2} h="180px" maxW="400px">
                        <Flex align="center" justify="center">
                          <MdDevices size="30px" />
                          <Text
                            ml="10px"
                            color={useColorModeValue('gray.800', 'white')}
                            fontWeight="bold"
                            textTransform="uppercase"
                          >
                            Responsive Design
                          </Text>
                        </Flex>
                        <Container
                          mt={3}
                          color={useColorModeValue('gray.600', 'gray.200')}
                        >
                          Padrone is designed to look amazing regardless of the
                          device it is being viewed on
                        </Container>
                      </Box>
                    </Box>
                  </Flex>
                </Stack>
              </Center>
            </Box>
          </Center>
          <Center bg={useColorModeValue('gray.800', 'white')}>
            <Box
              mx={{ base: '2', md: '40' }}
              textAlign="center"
              my={{ base: '18%', md: '10%' }}
            >
              <Heading size="2xl" color={useColorModeValue('white', 'Black')}>
                Support Padrone 💖
              </Heading>
              <Center mx={{ base: '2', md: '10%' }} mt="5">
                <Text
                  fontSize={{ base: '22px', md: '30px' }}
                  color={useColorModeValue('whiteAlpha.900', 'gray.800')}
                >
                  I devoted a lot of time, effort, and heart to make Padrone a
                  reality. You can show some love by leaving a star on the
                  github repo or following me on Instagram. (Shameless plug 👀)
                </Text>
              </Center>
              <Center>
                <HStack spacing={{ base: '20px', md: '10' }} mt="50px">
                  <IconButton
                    icon={<FaGithub size="40px" />}
                    color={useColorModeValue('white', 'gray.800')}
                    variant="ghost"
                    _hover={{ bg: 'gray.500' }}
                  />
                  <IconButton
                    icon={<FaInstagram size="40px" />}
                    variant="ghost"
                    color={useColorModeValue('white', 'gray.800')}
                    _hover={{ bg: 'gray.500' }}
                  />
                  <IconButton
                    icon={<FaPaypal size="40px" />}
                    variant="ghost"
                    color={useColorModeValue('white', 'gray.800')}
                    _hover={{ bg: 'gray.500' }}
                  />
                </HStack>
              </Center>
            </Box>
          </Center>
          <Center>
            <Box
              mx={{ base: '2', md: '40' }}
              textAlign="center"
              mt={{ base: '18%', md: '10%' }}
            >
              <Heading
                size="2xl"
                color={useColorModeValue('gray.800', 'whiteAlpha.900')}
              >
                Project Management
              </Heading>
              <Center mx={{ base: '2', md: '10%' }} mt="5">
                <Text
                  fontSize={{ base: '22px', md: '30px' }}
                  color={useColorModeValue('GrayText', 'whiteAlpha.900')}
                >
                  Here are the few tools that I used when working on this
                  project.
                </Text>
              </Center>
              <Center>
                <Flex
                  flexDirection={{ base: 'column', md: 'row' }}
                  mt="20px"
                  justify="space-around"
                  alignItems="center"
                  w="full"
                >
                  <Avatar
                    boxSize="100px"
                    name="Excalidraw"
                    bg="gray.100"
                    src="https://res.cloudinary.com/padrone/image/upload/v1631200136/landing%20page%20logos/excali_cx40wv.png"
                    p="2"
                    as="a"
                    href="https://excalidraw.com/"
                  />
                  <Avatar
                    boxSize="100px"
                    name="Chakra"
                    as="a"
                    href="https://chakra-ui.com/"
                    bg="gray.100"
                    p="2"
                    src="https://res.cloudinary.com/padrone/image/upload/v1631200319/landing%20page%20logos/rzylUjaf_gw5haj.jpg"
                  />
                  <Avatar
                    as="a"
                    href="https://www.mongodb.com/"
                    boxSize="100px"
                    name="Atlas"
                    bg="gray.100"
                    p="2"
                    src="https://res.cloudinary.com/padrone/image/upload/v1631200407/landing%20page%20logos/603c5eb831820c3ce6a8f057_603a1586fa052d17fc2a6929_MongoDBAtlas_ifeh84.png"
                  />
                  <Avatar
                    as="a"
                    href="https://www.heroku.com/free"
                    boxSize="100px"
                    bg="gray.100"
                    name="Heroku"
                    src="https://res.cloudinary.com/padrone/image/upload/v1631200622/landing%20page%20logos/salesforce-heroku_zoyccp.png"
                    p="2"
                  />
                  <Avatar
                    as="a"
                    href="https://cloudinary.com/"
                    boxSize="100px"
                    bg="gray.100"
                    name="Cloudinary"
                    src="https://res.cloudinary.com/padrone/image/upload/v1631200739/landing%20page%20logos/cloudinary_web_favicon_cxbio9.png"
                    p="2"
                  />
                </Flex>
              </Center>
            </Box>
          </Center>
          <Center>
            <Box
              mx={{ base: '2', md: '40' }}
              textAlign="center"
              my={{ base: '18%', md: '10%' }}
            >
              <Heading
                size="2xl"
                color={useColorModeValue('gray.800', 'whiteAlpha.900')}
              >
                Let's join ideas
              </Heading>
              <Center mx={{ base: '2', md: '10%' }} mt="5">
                <Text
                  fontSize={{ base: '22px', md: '30px' }}
                  color={useColorModeValue('GrayText', 'whiteAlpha.900')}
                >
                  I hope to add more feautures to Padrone in the future. If you
                  have any ideas, want to share your thoughts or even
                  collaborate with me, just reach out
                </Text>
              </Center>
              <Center mt="20px">
                <FormControl w="60%">
                  <Input
                    mb="4"
                    pr="4.5rem"
                    type="text"
                    placeholder="Your name/email"
                    name="from_name"
                    borderColor={useColorModeValue('twitter.600', 'gray.100')}
                    value={toSend.from_name}
                    onChange={handleChange}
                  />
                  <Textarea
                    mb="4"
                    placeholder="Message..."
                    borderColor={useColorModeValue('twitter.600', 'gray.100')}
                    maxH="150px"
                    value={toSend.message}
                    onChange={handleChange}
                    name="message"
                  />
                  <Button
                    width="full"
                    colorScheme="twitter"
                    onClick={onSubmit}
                    isLoading={loading}
                    isDisabled={valid}
                  >
                    Submit
                  </Button>
                </FormControl>
              </Center>
            </Box>
          </Center>
          <Center
            bg={useColorModeValue('gray.800', 'white')}
            as="footer"
            bottom="0"
          >
            <Box mx={{ base: '2', md: '40' }} textAlign="center" h="150px">
              <Center h="full" alignItems="center">
                <Stack>
                  <Text
                    color={useColorModeValue('white', 'gray.600')}
                    fontSize={['12px', '17px']}
                  >
                    Made with ❤️ by Abdullah Shehu
                  </Text>
                  <Text
                    color={useColorModeValue('white', 'gray.600')}
                    fontSize={['12px', '17px']}
                  >
                    © 2021 Abdullah Shehu. All rights reserved.
                  </Text>
                </Stack>
              </Center>
            </Box>
          </Center>
        </Stack>
      </Center>
    </Box>
    // <>
    //   <div>
    //     <h1>Home</h1>
    //   </div>
    //   <Footer />
    // </>
  );
};

export default LandingPage;
