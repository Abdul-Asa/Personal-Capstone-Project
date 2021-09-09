import React from 'react';
import { Heading, Stack, Box, Button, Flex, Skeleton } from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';
import UserCard from './comps/User.Card';

import { useRouteMatch } from 'react-router-dom';

const Welcome = ({ info }) => {
  let { path } = useRouteMatch();

  return (
    <Stack spacing="20px">
      {!info ? (
        <Skeleton height="20px" />
      ) : (
        <Heading m="30px">Welcome, {info.firstName}</Heading>
      )}

      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={{ base: '30%', md: '5%' }}
        height="430px"
        padding="2%"
      >
        <Box
          // borderWidth="1px"
          // borderStyle="solid"
          // rounded="md"
          w="full"
          h="full"
        >
          <Flex justify="space-between">
            <Stack
              alignItems="center"
              spacing="15px"
              direction="row"
              m={{ base: '20px', md: '2' }}
            >
              <FaUser />
              <Heading size="md">Profile</Heading>
            </Stack>
            <Flex justify="flex-end" py="2%">
              <Button as="a" href={`${path}profile`} variant="link" my="2">
                Edit profile {'>'}
              </Button>
            </Flex>
          </Flex>
          <UserCard info={info} />
          <Box>-</Box>{' '}
        </Box>
      </Stack>
    </Stack>
  );
};

export default Welcome;
