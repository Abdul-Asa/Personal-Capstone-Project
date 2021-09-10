import React from 'react';
import { Center, Heading, Flex, Stack, Text } from '@chakra-ui/react';
import { ImCross } from 'react-icons/im';
const WrongUser = () => {
  return (
    <Center minH="80vh" alignItems="center">
      <Stack spacing="10">
        <Flex direction={{ base: 'column', md: 'row' }} align="center">
          <ImCross size="40px" />
          <Heading ml="10px" textAlign="center">
            You don't have the authority to view this page
          </Heading>
        </Flex>
        <Text textAlign="center">
          Contact the developer if you want administrator access
        </Text>
      </Stack>
    </Center>
  );
};

export default WrongUser;
