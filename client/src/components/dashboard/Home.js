import React from 'react';
import Dashboard from './Dashboard';
import Footer from '../landing page/Footer';
import { getUser } from '../../utils/Common';
import { Box, Center, Container, Heading, Text } from '@chakra-ui/react';
// import axios from 'axios';
// import { config } from '../../config';

const Home = () => {
  // const { BASEURL } = config;
  //   let header = {
  //     headers: {
  //       'auth-token': user.token,
  //     },
  //   };
  // const testAuth = () => {
  //   axios.get(`${BASEURL}/private`, header).then((response) => {
  //     console.log(response);
  //   });
  // };
  const user = getUser();

  return (
    <div>
      <Dashboard />
      <Box>
        <Box marginTop="10" maxWidth="container.sm" marginLeft="10%">
          <Heading as="h3" size="xl">
            Welcome, {user.name}
          </Heading>
        </Box>
        <Container
          backgroundColor="black"
          width="90%"
          padding="30px"
          borderRadius="10"
          textAlign="left"
          marginLeft="10%"
          marginRight="10%"
          color="white"
        >
          <Box>
            <Text as="h5">Set up your Profile</Text>
          </Box>
        </Container>
      </Box>

      <Footer />
    </div>
  );
};

export default Home;
