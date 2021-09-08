import React from 'react';
import { Center, Heading, Text, Flex, Stack } from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

const Confirmation = () => {
  return (
    <Center minH="90vh" alignItems="center">
      <Stack spacing="10">
        <Flex>
          <FaCheckCircle size="40px" />
          <Heading ml="10px">Your acount has been registered</Heading>
        </Flex>
        <Center>
          <Text as="a" href="/login">
            Go to Login
          </Text>
        </Center>
      </Stack>
    </Center>
  );
};

export default Confirmation;
