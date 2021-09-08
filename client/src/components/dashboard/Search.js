import React, { useState, useEffect } from 'react';
import {
  Heading,
  Stack,
  Spinner,
  Box,
  Center,
  Button,
  Flex,
  useMediaQuery,
  useToast,
  IconButton,
} from '@chakra-ui/react';
import { getAllJobs, applyToJob } from '../../utils/Actions';
import JobCard from './comps/Job.Card';
import { FaArrowLeft, FaArrowRight, FaInbox } from 'react-icons/fa';

const Search = () => {
  const [loading, setLoading] = useState(true);
  const [jobList, setJobs] = useState([]);
  const [currentCard, setCurrentCard] = useState();
  const [pages, setPages] = useState(0);
  const [Rdisabled, setRDisabled] = useState(false);
  const [Ldisabled, setLDisabled] = useState(false);
  const [Adisabled, setADisabled] = useState(false);

  const [isDesktop] = useMediaQuery('(min-width: 50em)');
  // const [error, setError] = useState({});
  const toast = useToast();

  const nextCard = () => {
    if (pages === jobList.length - 1) {
      setRDisabled(true);
      return console.log('No more cards');
    } else {
      setLDisabled(false);
      setRDisabled(false);
      setPages(pages + 1);
      console.log(pages);
    }
  };
  const prevCard = () => {
    if (pages === 0) {
      setLDisabled(true);
      return console.log('No prev cards');
    } else {
      setLDisabled(false);
      setRDisabled(false);
      setPages(pages - 1);
    }
    console.log(pages);
  };
  const applyAction = () => {
    setLDisabled(true);
    setRDisabled(true);
    setADisabled(true);
    applyToJob({ jobId: currentCard._id }).then((response) => {
      setLDisabled(false);
      setRDisabled(false);
      setADisabled(false);
      toast({
        title: response.message === 'success' ? 'Success' : 'Error',
        position: 'top',
        description: response.message === 'success' ? '' : response.message,
        status: response.message === 'success' ? 'success' : 'error',
        duration: 5000,
        isClosable: true,
      });
    });
  };
  //setCurrent(list[page])
  useEffect(() => {
    console.log('Fetching jobs...');
    const job = getAllJobs();
    job
      .then((data) => {
        setJobs(data.jobs);
        setCurrentCard(data.jobs[0]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [loading]);

  useEffect(() => {
    setCurrentCard(jobList[pages]);
  }, [pages, jobList]);

  return (
    <Stack spacing="40px">
      <Heading m="30px">Search</Heading>
      <Stack>
        {loading ? (
          <Center>
            <Spinner size="xl" />
          </Center>
        ) : (
          <>
            {jobList.length === 0 ? (
              <Center color="GrayText">
                <FaInbox size="40px" />
                <Heading pl="15px">Empty</Heading>
              </Center>
            ) : (
              <>
                {isDesktop ? (
                  <>
                    <Flex
                      justify="space-between"
                      alignItems="center"
                      marginX="10%"
                    >
                      <Center>
                        <IconButton
                          onClick={prevCard}
                          size="lg"
                          icon={<FaArrowLeft />}
                          isDisabled={Ldisabled}
                        />
                      </Center>
                      <JobCard info={currentCard} />
                      <Center>
                        <IconButton
                          onClick={nextCard}
                          size="lg"
                          icon={<FaArrowRight />}
                          isDisabled={Rdisabled}
                        />
                      </Center>
                    </Flex>
                    <Center>
                      <Button
                        isDisabled={Adisabled}
                        rounded="xl"
                        colorScheme="green"
                        mb="40px"
                        width="30%"
                        height="50px"
                        onClick={applyAction}
                      >
                        Apply
                      </Button>
                    </Center>
                    <Box></Box>
                  </>
                ) : (
                  <Stack>
                    <Center>
                      <JobCard info={currentCard} />
                    </Center>
                    <Flex justify="space-evenly">
                      <IconButton
                        onClick={prevCard}
                        size="lg"
                        icon={<FaArrowLeft />}
                        isDisabled={Ldisabled}
                      />
                      <Button
                        isDisabled={Adisabled}
                        rounded="xl"
                        colorScheme="green"
                        mb="40px"
                        width="30%"
                        height="50px"
                        onClick={applyAction}
                      >
                        Apply
                      </Button>
                      <IconButton
                        onClick={nextCard}
                        size="lg"
                        icon={<FaArrowRight />}
                        isDisabled={Rdisabled}
                      />
                    </Flex>
                  </Stack>
                )}
              </>
            )}
          </>
        )}
      </Stack>
    </Stack>
  );
};

export default Search;
