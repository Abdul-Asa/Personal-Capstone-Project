import React, { useState } from 'react';
import {
  Heading,
  Stack,
  Box,
  Flex,
  Spacer,
  Text,
  Button,
  useColorMode,
  IconButton,
  Input,
  WrapItem,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogContent,
} from '@chakra-ui/react';
import { FaSun, FaMoon, FaCaretDown, FaCaretUp, FaTrash } from 'react-icons/fa';

const Settings = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [openAccordion, setAccordion] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();
  const [passwordForm, setPasswordForm] = useState({
    oldPassword: '',
    newPassword: '',
  });

  const toggleAccordion = () => {
    setAccordion(!openAccordion);
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setPasswordForm((inputDetails) => {
      return { ...inputDetails, [name]: value };
    });
  };

  const changePassword = () => {
    console.log(passwordForm);
  };

  return (
    <Stack spacing="40px">
      <Heading m="30px">Settings</Heading>
      <Stack
        paddingLeft={{ base: 0, md: '45px' }}
        alignItems={{ base: 'center', md: 'flex-start' }}
        direction="column"
        spacing="20px"
      >
        <Flex
          width="80%"
          justify="space-between"
          borderWidth="1px"
          padding="10px"
          borderColor="gray.200"
          borderRadius="md"
          alignItems="center"
        >
          <Text>Color Mode:</Text>
          <WrapItem alignItems="center">
            <Text mx={{ base: '3px', md: '8px' }}>
              {colorMode === 'light' ? 'Light Mode' : 'Dark Mode'}
            </Text>
            <IconButton
              icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
              size="sm"
              // alignSelf="flex-end"
              onClick={toggleColorMode}
            />
          </WrapItem>
        </Flex>{' '}
        <Flex
          width="80%"
          // justify="space-between"
          borderWidth="1px"
          padding="10px"
          borderColor="gray.200"
          borderRadius="md"
          alignItems="center"
        >
          <Box width="100%">
            <Flex alignItems="center" justify="space-between" width="100%">
              <Text>Change Password</Text>
              <Spacer />

              <IconButton
                icon={openAccordion ? <FaCaretUp /> : <FaCaretDown />}
                size="sm"
                // transition="1s ease"
                // alignSelf="flex-end"
                onClick={toggleAccordion}
              />
            </Flex>
            {openAccordion && (
              <Stack spacing="10px" marginTop="5%">
                <Input
                  placeholder="Old Password"
                  size="sm"
                  defaultValue={passwordForm.oldPassword}
                  onChange={handleInput}
                  name="oldPassword"
                />
                <Input
                  placeholder="New Password"
                  size="sm"
                  defaultValue={passwordForm.newPassword}
                  onChange={handleInput}
                  name="newPassword"
                />
                <Button variant="outline" onClick={changePassword}>
                  Change
                </Button>
              </Stack>
            )}
          </Box>
          {/* <AccordionPanel>Hello Here</AccordionPanel> */}
        </Flex>
        <Flex
          width="80%"
          justify="space-between"
          borderWidth="1px"
          padding="10px"
          borderColor="gray.200"
          borderRadius="md"
          alignItems="center"
        >
          <Text>Delete Account</Text>
          <IconButton
            icon={<FaTrash />}
            variant="solid"
            _hover={{ bg: 'red.500', color: 'white' }}
            size="sm"
            alignSelf="flex-end"
            onClick={() => {
              setIsOpen(true);
            }}
          />
          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
            size="sm"
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Delete User
                </AlertDialogHeader>

                <AlertDialogBody>
                  Are you sure? You can't undo this action afterwards.
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme="red" onClick={onClose} ml={3}>
                    Delete
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default Settings;
