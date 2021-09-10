import React, { useState, useEffect } from 'react';
import {
  Heading,
  HStack,
  Box,
  Skeleton,
  Stack,
  useMediaQuery,
  Button,
  IconButton,
  Table,
  Thead,
  Tbody,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Tr,
  Th,
  Td,
  Center,
} from '@chakra-ui/react';
import { FaIdCard } from 'react-icons/fa';
import UserCard from '../comps/User.Card';
import { adminInfo } from '../../../utils/Actions';

const Admin = () => {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDesktop] = useMediaQuery('(min-width: 50em)');
  const [showJobCard, setCardShow] = useState(false);
  const [toBeShown, setToBeShown] = useState('');

  useEffect(() => {
    console.log('Fetching users...');
    const users = adminInfo();
    users
      .then((data) => {
        setUserList(data.users);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [loading]);

  const reformDate = (date) => {
    let final = date.substr(0, 10);
    let day = final.substr(8, 2);
    let month = final.substr(5, 2);
    let year = final.substr(2, 2);
    final = day + '/' + month + '/' + year;
    return final;
  };

  return (
    <Stack spacing="20px">
      <Heading m="30px">Admin</Heading>
      <Stack spacing="30px" px={{ base: '3%', md: '40px' }}>
        <Stack shadow="sm" rounded="sm" borderWidth="0.5px" overflowX="auto">
          {loading ? (
            <Stack width="full">
              <Skeleton height="50px" />
              <Skeleton height="50px" />
              <Skeleton height="50px" />
              <Skeleton height="50px" />
            </Stack>
          ) : (
            <>
              <Table size="lg" maxH="320px">
                <Thead>
                  <Tr>
                    <Th w="7%" px="10px" isNumeric>
                      No.
                    </Th>
                    <Th w="30%">User name</Th>
                    <Th w="10%">Date created</Th>
                    <Th justifyContent="center"></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {userList.map((index, no) => {
                    return (
                      <Tr key={no}>
                        <Td px="10px" isNumeric>
                          {no + 1}.
                        </Td>
                        <Td isTruncated>
                          {index.firstName} {index.laststName}
                        </Td>
                        <Td>{reformDate(index.createdAt)}</Td>
                        <Td>
                          <HStack justify="space-evenly" pl="20%">
                            {isDesktop ? (
                              <>
                                <Button
                                  id={no}
                                  colorScheme="telegram"
                                  variant="outline"
                                  onClick={(e) => {
                                    setCardShow(true);
                                    setToBeShown(userList[e.target.id]);
                                  }}
                                >
                                  View card
                                </Button>
                              </>
                            ) : (
                              <>
                                <IconButton
                                  id={no}
                                  colorScheme="telegram"
                                  variant="outline"
                                  onClick={(e) => {
                                    setCardShow(true);
                                    setToBeShown(userList[e.target.id]);
                                  }}
                                  icon={<FaIdCard />}
                                />
                              </>
                            )}

                            <Modal
                              isOpen={showJobCard}
                              onClose={() => setCardShow(false)}
                              size="xl"
                              scrollBehavior="inside"
                            >
                              <ModalOverlay />
                              <ModalContent>
                                <ModalHeader />
                                <ModalCloseButton />
                                <ModalBody>
                                  <UserCard info={toBeShown} my="40px" />
                                </ModalBody>
                              </ModalContent>
                            </Modal>
                          </HStack>
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
              {userList.length === 0 && (
                <Box>
                  <Center height="200px">
                    <Heading color="GrayText">No Users 😓</Heading>
                  </Center>
                </Box>
              )}
            </>
          )}
        </Stack>
        <Box></Box>
      </Stack>
    </Stack>
  );
};

export default Admin;
