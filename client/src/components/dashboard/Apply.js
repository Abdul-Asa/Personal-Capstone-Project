import React, { useState, useEffect } from 'react';
import {
  Heading,
  HStack,
  Box,
  Flex,
  Skeleton,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogContent,
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
  useToast,
  Text,
} from '@chakra-ui/react';
import { FaIdCard, FaPlus, FaTrash } from 'react-icons/fa';
import JobCard from './comps/Job.Card';
import { getJobsApplied, unApplyfromJob } from '../../utils/Actions';

const Apply = () => {
  const [jobsList, setJobsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDesktop] = useMediaQuery('(min-width: 50em)');
  const [isOpen, setIsOpen] = useState(false);
  const [deletedId, setDeletedId] = useState('');
  const [showJobCard, setCardShow] = useState(false);
  const [toBeShown, setToBeShown] = useState('');

  const cancelRef = React.useRef();
  const toast = useToast();
  const onClose = () => setIsOpen(false);

  useEffect(() => {
    console.log('Fetching job...');
    const jobs = getJobsApplied();
    jobs
      .then((data) => {
        setJobsList(data.jobs);
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

  const unapplyAction = (jobId) => {
    setLoading(true);
    if (!jobId.jobId) {
      toast({
        title: 'Error',
        position: 'top',
        description: 'Try again',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      setLoading(false);
    } else {
      const unapplied = unApplyfromJob(jobId);
      unapplied.then((data) => {
        setLoading(false);
        if (data.message === 'success') {
          toast({
            title: 'Success',
            position: 'top',
            description: 'Unapplied from job',
            status: 'success',
            duration: 5000,
            isClosable: true,
          });
        } else {
          toast({
            title: 'Error',
            position: 'top',
            description: 'Try again',
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
        }
      });
    }
  };

  return (
    <Stack spacing="20px">
      <Heading m="30px">Apply</Heading>
      <Stack spacing="30px" px={{ base: '3%', md: '40px' }}>
        <Flex alignItems="center" justify="space-between" width="100%">
          <Button borderRadius="full" size="lg" >
            <FaPlus />
            <Text ml="3" as='a' href="search-job" >Apply job</Text>
          </Button>
        </Flex>

        <Flex px="10px">
          <Heading size="md">Jobs Applied to</Heading>
        </Flex>
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
                    <Th w="30%">Title</Th>
                    <Th w="10%">Date created</Th>
                    <Th justifyContent="center"></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {jobsList.map((index, no) => {
                    return (
                      <Tr key={no}>
                        <Td px="10px" isNumeric>
                          {no + 1}.
                        </Td>
                        <Td isTruncated>{index.title}</Td>
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
                                    setToBeShown(jobsList[e.target.id]);
                                  }}
                                >
                                  View card
                                </Button>
                                <Button
                                  id={index._id}
                                  colorScheme="red"
                                  onClick={(e) => {
                                    setIsOpen(true);
                                    setDeletedId(e.target.id);
                                  }}
                                >
                                  Unapply
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
                                    setToBeShown(jobsList[e.target.id]);
                                  }}
                                  icon={<FaIdCard />}
                                />
                                <IconButton
                                  id={index._id}
                                  colorScheme="red"
                                  icon={<FaTrash />}
                                  onClick={(e) => {
                                    setIsOpen(true);
                                    setDeletedId(e.target.id);
                                  }}
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
                                  <JobCard info={toBeShown} my="40px" />
                                </ModalBody>
                              </ModalContent>
                            </Modal>
                            <AlertDialog
                              isOpen={isOpen}
                              leastDestructiveRef={cancelRef}
                              onClose={onClose}
                              size="sm"
                            >
                              <AlertDialogOverlay>
                                <AlertDialogContent>
                                  <AlertDialogHeader
                                    fontSize="lg"
                                    fontWeight="bold"
                                  >
                                    Unapply from Job
                                  </AlertDialogHeader>

                                  <AlertDialogBody>
                                    Are you sure? You can't undo this action
                                    afterwards.
                                  </AlertDialogBody>

                                  <AlertDialogFooter>
                                    <Button ref={cancelRef} onClick={onClose}>
                                      Cancel
                                    </Button>
                                    <Button
                                      colorScheme="red"
                                      onClick={() => {
                                        onClose();
                                        unapplyAction({ jobId: deletedId });
                                      }}
                                      ml={3}
                                    >
                                      Unapply
                                    </Button>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialogOverlay>
                            </AlertDialog>
                          </HStack>
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
              {jobsList.length === 0 && (
                <Box>
                  <Center height="200px">
                    <Heading color="GrayText">No Jobs Applied to</Heading>
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

export default Apply;
