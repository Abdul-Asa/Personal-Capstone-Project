import React, { useState, useEffect } from 'react'; //, { useState, useEffect }
import {
  Heading,
  VStack,
  HStack,
  Box,
  Flex,
  Textarea,
  FormLabel,
  Skeleton,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogContent,
  Alert,
  AlertDescription,
  AlertTitle,
  CloseButton,
  AlertIcon,
  FormControl,
  Stack,
  useMediaQuery,
  Button,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Tr,
  Th,
  Td,
  Center,
  useToast,
  TableCaption,
  WrapItem,
  Text,
  Input,
  InputGroup,
  Select,
  Collapse,
} from '@chakra-ui/react';
import { FaFolderOpen, FaIdCard, FaPlus, FaTrash } from 'react-icons/fa';
import JobCard from './comps/Job.Card';
import UserCard from './comps/User.Card';
import {
  getJobsPosted,
  deleteJob,
  postNewjob,
  addJobImage,
  getJobApplicants,
} from '../../utils/Actions';
import { response } from 'express';

const Post = () => {
  const [openAccordion, setAccordion] = useState(false);
  const [jobsList, setJobsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [jobForm, setJobForm] = useState({
    title: '',
    jobDescription: '',
    preferredProfessional: '',
    priceRange: '',
  });
  const [applicantList, setApplicantList] = useState([]);

  const [isDesktop] = useMediaQuery('(min-width: 50em)');
  const [isOpen, setIsOpen] = useState(false);
  const [buttonLoader, setButtonLoader] = useState(false);
  const [deletedId, setDeletedId] = useState('');
  const [jobPic, setJobPic] = useState();
  const [error, setError] = useState({});
  const [showAlert, setAlert] = useState(false);
  const [showJobCard, setCardShow] = useState(false);
  const [showApplicants, setShowApplicants] = useState(false);

  const [toBeShown, setToBeShown] = useState('');

  const cancelRef = React.useRef();
  const toast = useToast();
  const onClose = () => setIsOpen(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setJobForm((inputDetails) => {
      return { ...inputDetails, [name]: value };
    });
  };
  const handleFileChange = ({ target }) => {
    setJobPic(target.files[0]);
  };
  const submitJobAction = () => {
    setButtonLoader(true);
    const posted = postNewjob(jobForm);
    posted.then((response) => {
      setError(response);
      console.log(response);
      setAlert(true);
      setButtonLoader(false);
      setLoading(true);
      setLoading(false);
      if (response.message === 'success') {
        setJobForm({
          title: '',
          jobDescription: '',
          preferredProfessional: '',
          priceRange: '',
        });
        if (jobPic) {
          const imageData = new FormData();
          imageData.append('image', jobPic);
          const image = addJobImage(imageData, response.job._id);
          image.then((res) => {
            console.log(res);
            setJobPic();
            setLoading(true);
            setLoading(false);
          });
        }
        setTimeout(() => {
          setAccordion(false);
          setAlert(false);
        }, 1500);
      }
    });
  };

  useEffect(() => {
    console.log('Fetching job...');
    const jobs = getJobsPosted();
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

  const deleteAction = (jobId) => {
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
      const deleted = deleteJob(jobId);
      deleted.then((data) => {
        setLoading(false);
        if (data.message === 'success') {
          toast({
            title: 'Success',
            position: 'top',
            description: 'Job deleted',
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
      <Heading m="30px">Post</Heading>
      <Stack spacing="30px" px={{ base: '3%', md: '40px' }}>
        <Flex alignItems="center" justify="space-between" width="100%">
          <Button
            borderRadius="full"
            size="lg"
            onClick={() => {
              setAccordion(!openAccordion);
            }}
          >
            <FaPlus />
            <Text ml="3">New job</Text>
          </Button>
        </Flex>
        <Collapse in={openAccordion} animateOpacity>
          <Stack spacing="10px" px="5%">
            <Input
              placeholder="Job Title"
              name="title"
              onChange={handleInput}
              value={jobForm.title}
            />
            <Textarea
              placeholder="Job description"
              width="full"
              maxH="100px"
              name="jobDescription"
              onChange={handleInput}
              value={jobForm.jobDescription}
            />
            <InputGroup display={{ base: 'block', md: 'flex' }}>
              <Select
                placeholder="Preferred Professional"
                name="preferredProfessional"
                onChange={handleInput}
                value={jobForm.preferredProfessional}
              >
                <option value="None">None</option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="Mechanical Engineer">Mechanical Engineer</option>
                <option value="Website Developer">Website Developer</option>
                <option value="UI/UX Designer">UI/UX Designer</option>
              </Select>
              <Select
                ml={{ base: 'none', md: '3px' }}
                mt={{ base: '10px', md: '0' }}
                placeholder="Price Range"
                name="priceRange"
                onChange={handleInput}
                value={jobForm.priceRange}
              >
                <option value="Negotiate">Negotiate on contact</option>
                <option value="<10000">Less than 10k</option>
                <option value="10000<p<50000">Between 10k and 50k</option>
                <option value="50000<p<150000">Between 50k and 150k</option>
                <option value=">150000">Greater than 150k</option>
              </Select>
            </InputGroup>
            <FormControl>
              <Flex justify="start">
                <FormLabel
                  isTruncated
                  width={{ base: '50%', md: 'fit-content' }}
                >
                  Job image description
                </FormLabel>
                <Input
                  type="file"
                  variant="outline"
                  name="myPfp"
                  accept="image/*"
                  width={{ base: '50%', md: '30%' }}
                  size="sm"
                  fontWeight="medium"
                  placeholder="Choose Image"
                  _focus={{ shadow: 'none' }}
                  onChange={handleFileChange}
                />
              </Flex>
            </FormControl>

            <Button
              colorScheme="telegram"
              onClick={submitJobAction}
              isLoading={buttonLoader}
            >
              Post Job
            </Button>
          </Stack>
          {showAlert && (
            <Alert
              status={error.message === 'success' ? 'success' : 'error'}
              mt="15px"
            >
              <AlertIcon />
              <AlertTitle mr={2}>
                {error.message === 'success' ? 'Success' : 'Error'}
              </AlertTitle>
              <AlertDescription>
                {error.message === 'success' ? '' : error.message}
              </AlertDescription>
              <CloseButton
                position="absolute"
                right="8px"
                top="8px"
                onClick={() => {
                  setAlert(false);
                }}
              />
            </Alert>
          )}
        </Collapse>

        <Flex px="10px">
          <Heading size="md">Jobs posted</Heading>
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
                                  id={index._id}
                                  colorScheme="telegram"
                                  variant="outline"
                                  onClick={(e) => {
                                    setApplicantList(true);
                                    // viewAppAction(e.target.id);
                                  }}
                                >
                                  View applicants
                                </Button>
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
                                  Delete
                                </Button>
                              </>
                            ) : (
                              <>
                                {' '}
                                <IconButton
                                  colorScheme="telegram"
                                  variant="outline"
                                  icon={<FaFolderOpen />}
                                />
                                <IconButton
                                  colorScheme="telegram"
                                  variant="outline"
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
                              isOpen={showApplicants}
                              onClose={() => setShowApplicants(false)}
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

                            <Modal
                              isOpen={showJobCard}
                              onClose={() => setCardShow(false)}
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
                                    Delete Job
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
                                        deleteAction({ jobId: deletedId });
                                      }}
                                      ml={3}
                                    >
                                      Delete
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
                    <Heading color="GrayText">No Jobs posted</Heading>
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

export default Post;
