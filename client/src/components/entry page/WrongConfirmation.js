import React from 'react';
import { Center, Heading, Text, Flex, Stack } from '@chakra-ui/react';
import { ImCross } from 'react-icons/im';

const WrongConfirmation = () => {
  return (
    <Center minH="90vh" alignItems="center">
      <Stack spacing="10">
        <Flex>
          <ImCross size="40px" />
          <Heading ml="10px">
            There was a problem confirming your account
          </Heading>
        </Flex>
        <Center>Try again later</Center>
        <Center>
          <Text as="a" href="/">
            Go back home
          </Text>
        </Center>
      </Stack>
    </Center>
  );
};

export default WrongConfirmation;
