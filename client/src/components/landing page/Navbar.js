import React, { useState } from 'react';
import {
  Icon,
  Box,
  Flex,
  HStack,
  Button,
  useColorModeValue,
  Spacer,
  Collapse,
  Heading,
  IconButton,
  useColorMode,
} from '@chakra-ui/react';
import { FaGithub, FaInstagram, FaSun, FaMoon } from 'react-icons/fa';
import { HiX, HiOutlineMenu } from 'react-icons/hi';
const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box position="sticky" top="0" width="100%" shadow="md" zIndex="overlay">
      <Flex
        align="center"
        w="full"
        px="4"
        bg={useColorModeValue('gray.800', 'white')}
        borderBottomWidth="1px"
        borderColor={useColorModeValue('gray.800', 'white')}
        h="80px"
        minW="300px"
      >
        <Flex alignItems="center" ml={{ base: '1', md: '5' }}>
          <LogoIcon
            boxSize={8}
            color={useColorModeValue('white', 'gray.800')}
          />
          <Heading
            color={useColorModeValue('white', 'gray.800')}
            ml="10px"
            display={{ base: 'none', md: 'block' }}
          >
            Padrone
          </Heading>
        </Flex>
        <Spacer />
        <Flex
          alignItems="center"
          mr={{ base: '2', md: '20' }}
          display={{ base: 'none', md: 'block' }}
        >
          <HStack>
            <IconButton
              as="a"
              href="https://github.com/Abdul-Asa/Personal-Capstone-Project"
              icon={<FaGithub size="20px" />}
              target="_blank"
              color={useColorModeValue('white', 'gray.800')}
              variant="ghost"
              _hover={{
                bg: 'gray.500',
                color: useColorModeValue('white', 'gray.800'),
                cursor: 'pointer',
              }}
            />
            <IconButton
              as="a"
              href="https://www.instagram.com/_abdul_.s/"
              icon={<FaInstagram size="20px" />}
              variant="ghost"
              color={useColorModeValue('white', 'gray.800')}
              _hover={{
                bg: 'gray.500',
                color: useColorModeValue('white', 'gray.800'),
                cursor: 'pointer',
              }}
              target="_blank"
            />
            <IconButton
              icon={
                colorMode === 'light' ? (
                  <FaSun size="20px" />
                ) : (
                  <FaMoon size="20px" />
                )
              }
              variant="ghost"
              color={useColorModeValue('white', 'gray.800')}
              _hover={{ bg: 'gray.500' }}
              onClick={toggleColorMode}
            />
          </HStack>
        </Flex>
        <Flex
          alignItems="center"
          mr={{ base: '2', md: '10' }}
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
        >
          <HStack spacing="10px">
            <Button
              variant="solid"
              as="a"
              bg={useColorModeValue('whiteAlpha.900', 'gray.800')}
              borderWidth="1px"
              href="/login"
              _hover={{
                textDecoration: 'none',
                bg: 'transparent',
                color: useColorModeValue('whiteAlpha.900', 'gray.800'),
                borderColor: 'telegram.800',
              }}
            >
              Login
            </Button>
            <Button
              as="a"
              href="/signup"
              bg={useColorModeValue('whiteAlpha.900', 'gray.800')}
              borderWidth="1px"
              _hover={{
                textDecoration: 'none',
                bg: 'transparent',
                color: useColorModeValue('whiteAlpha.900', 'gray.800'),
                borderColor: 'telegram.800',
              }}
            >
              Signup
            </Button>
          </HStack>
        </Flex>
        <Flex
          alignItems="center"
          mr={{ base: '2', md: '20' }}
          display={{ base: 'block', md: 'none' }}
        >
          <IconButton
            icon={
              openMenu ? <HiX size="20px" /> : <HiOutlineMenu size="20px" />
            }
            onClick={() => setOpenMenu(!openMenu)}
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            bg={useColorModeValue('whiteAlpha.900', 'gray.800')}
          />
        </Flex>
      </Flex>
      <Collapse in={openMenu} animateOpacity>
        <Box
          bg={useColorModeValue('gray.800', 'white')}
          h="80px"
          display={{ base: 'block', md: 'none' }}
        >
          <Flex alignItems="center" h="full" justify="space-evenly">
            <IconButton
              as="a"
              href="https://github.com/Abdul-Asa/Personal-Capstone-Project"
              icon={<FaGithub size="20px" />}
              target="_blank"
              color={useColorModeValue('white', 'gray.800')}
              variant="ghost"
              _hover={{
                bg: 'gray.500',
                color: useColorModeValue('white', 'gray.800'),
                cursor: 'pointer',
              }}
            />
            <IconButton
              as="a"
              href="https://www.instagram.com/_abdul_.s/"
              icon={<FaInstagram size="20px" />}
              variant="ghost"
              color={useColorModeValue('white', 'gray.800')}
              _hover={{
                bg: 'gray.500',
                color: useColorModeValue('white', 'gray.800'),
                cursor: 'pointer',
              }}
              target="_blank"
            />
            <IconButton
              icon={
                colorMode === 'light' ? (
                  <FaSun size="20px" />
                ) : (
                  <FaMoon size="20px" />
                )
              }
              variant="ghost"
              color={useColorModeValue('white', 'gray.800')}
              _hover={{ bg: 'gray.500' }}
              onClick={toggleColorMode}
            />
          </Flex>{' '}
        </Box>
      </Collapse>
    </Box>
  );
};

const LogoIcon = ({ color, ...rest }) => {
  return (
    <Icon viewBox="0 0 32 32" {...rest}>
      <path
        d="M1.001 15.11l-0.001 0c0 0 0 0.003 0.001 0.007 0.003 0.114 0.016 0.225 0.039 0.333 0.006 0.051 0.013 0.107 0.020 0.169 0.006 0.055 0.013 0.115 0.021 0.178 0.011 0.075 0.023 0.155 0.035 0.24 0.025 0.168 0.053 0.355 0.085 0.555 0.040 0.189 0.082 0.393 0.128 0.611 0.021 0.109 0.052 0.22 0.082 0.334s0.061 0.231 0.093 0.352c0.017 0.060 0.030 0.121 0.050 0.182s0.039 0.122 0.058 0.185 0.080 0.251 0.121 0.381c0.010 0.032 0.021 0.065 0.031 0.097 0.012 0.032 0.024 0.065 0.036 0.097 0.024 0.065 0.049 0.131 0.073 0.197 0.050 0.132 0.1 0.266 0.152 0.403 0.058 0.134 0.116 0.27 0.176 0.408 0.030 0.069 0.060 0.138 0.090 0.208s0.067 0.138 0.1 0.207c0.068 0.138 0.137 0.278 0.207 0.42 0.072 0.14 0.153 0.279 0.23 0.42 0.039 0.070 0.079 0.141 0.118 0.212s0.085 0.139 0.128 0.209c0.086 0.139 0.174 0.279 0.262 0.42 0.37 0.554 0.782 1.101 1.237 1.619 0.46 0.515 0.959 1.003 1.485 1.453 0.533 0.443 1.092 0.847 1.662 1.204 0.574 0.353 1.161 0.654 1.74 0.912 0.147 0.060 0.292 0.119 0.436 0.178 0.072 0.028 0.143 0.060 0.215 0.085s0.144 0.051 0.216 0.076 0.284 0.102 0.424 0.146c0.142 0.042 0.281 0.083 0.419 0.124 0.069 0.020 0.137 0.042 0.205 0.059s0.137 0.033 0.205 0.050c0.135 0.033 0.268 0.065 0.399 0.097 0.132 0.025 0.261 0.050 0.389 0.075 0.063 0.012 0.126 0.024 0.188 0.036 0.031 0.006 0.062 0.012 0.093 0.018 0.031 0.004 0.062 0.009 0.093 0.013 0.123 0.017 0.243 0.034 0.36 0.050 0.059 0.008 0.116 0.016 0.174 0.024s0.114 0.011 0.17 0.017c0.112 0.010 0.221 0.019 0.327 0.029s0.208 0.020 0.308 0.022c0.007 0 0.013 0 0.020 0.001 0.018 1.020 0.85 1.841 1.874 1.841 0.016 0 0.032-0.001 0.047-0.001v0.001c0 0 0.003-0 0.007-0.001 0.114-0.003 0.225-0.016 0.333-0.039 0.051-0.006 0.107-0.012 0.169-0.020 0.055-0.006 0.115-0.014 0.178-0.021 0.075-0.011 0.155-0.023 0.24-0.035 0.168-0.025 0.355-0.053 0.555-0.085 0.189-0.040 0.393-0.082 0.611-0.128 0.109-0.021 0.22-0.052 0.334-0.082s0.231-0.061 0.352-0.093c0.060-0.017 0.121-0.030 0.182-0.050s0.122-0.039 0.185-0.058 0.251-0.080 0.381-0.121c0.032-0.010 0.065-0.021 0.097-0.031 0.032-0.012 0.065-0.024 0.097-0.036 0.065-0.024 0.131-0.049 0.197-0.073 0.132-0.050 0.266-0.1 0.403-0.152 0.134-0.058 0.27-0.116 0.408-0.176 0.069-0.030 0.138-0.060 0.208-0.090s0.138-0.067 0.207-0.1c0.138-0.068 0.278-0.137 0.42-0.207 0.14-0.072 0.279-0.153 0.42-0.23 0.070-0.039 0.141-0.078 0.212-0.118s0.139-0.085 0.209-0.128c0.139-0.087 0.279-0.174 0.42-0.262 0.553-0.37 1.101-0.781 1.619-1.237 0.515-0.46 1.003-0.959 1.453-1.485 0.443-0.533 0.847-1.092 1.204-1.662 0.353-0.574 0.654-1.161 0.912-1.74 0.060-0.147 0.119-0.292 0.178-0.436 0.029-0.072 0.060-0.143 0.085-0.215s0.051-0.145 0.076-0.216 0.102-0.284 0.146-0.424c0.042-0.142 0.083-0.281 0.124-0.419 0.020-0.069 0.042-0.137 0.059-0.205s0.033-0.137 0.050-0.205c0.033-0.135 0.065-0.268 0.097-0.398 0.025-0.132 0.050-0.262 0.075-0.389 0.012-0.063 0.024-0.126 0.036-0.189 0.006-0.031 0.012-0.062 0.017-0.093 0.004-0.031 0.009-0.062 0.013-0.093 0.017-0.123 0.034-0.243 0.050-0.36 0.008-0.058 0.016-0.116 0.024-0.174s0.011-0.114 0.017-0.17c0.010-0.112 0.019-0.221 0.029-0.327s0.020-0.208 0.022-0.308c0.001-0.016 0.001-0.031 0.002-0.046 1.032-0.004 1.867-0.842 1.867-1.875 0-0.016-0.001-0.032-0.001-0.047h0.001c0 0-0-0.003-0.001-0.007-0.003-0.114-0.016-0.225-0.039-0.333-0.006-0.051-0.013-0.107-0.020-0.169-0.006-0.055-0.013-0.115-0.021-0.178-0.011-0.075-0.023-0.155-0.035-0.24-0.025-0.168-0.053-0.355-0.085-0.555-0.040-0.189-0.082-0.393-0.128-0.611-0.021-0.109-0.052-0.22-0.082-0.334s-0.061-0.231-0.093-0.352c-0.017-0.060-0.030-0.121-0.050-0.182s-0.039-0.122-0.058-0.185-0.080-0.251-0.121-0.381c-0.010-0.032-0.021-0.065-0.031-0.097-0.012-0.032-0.024-0.065-0.036-0.097-0.024-0.065-0.049-0.13-0.073-0.197-0.050-0.132-0.1-0.266-0.152-0.403-0.058-0.134-0.116-0.27-0.176-0.408-0.030-0.069-0.060-0.138-0.090-0.208s-0.067-0.138-0.1-0.207c-0.068-0.138-0.137-0.278-0.207-0.42-0.072-0.14-0.153-0.279-0.23-0.42-0.039-0.070-0.079-0.141-0.118-0.212s-0.085-0.139-0.128-0.209c-0.086-0.139-0.174-0.279-0.262-0.42-0.37-0.553-0.782-1.101-1.237-1.619-0.46-0.515-0.959-1.003-1.485-1.453-0.533-0.443-1.092-0.847-1.662-1.204-0.574-0.353-1.161-0.654-1.74-0.912-0.147-0.060-0.292-0.119-0.436-0.178-0.072-0.029-0.143-0.060-0.215-0.086s-0.144-0.051-0.216-0.076-0.284-0.102-0.424-0.146c-0.142-0.042-0.281-0.083-0.419-0.124-0.069-0.020-0.137-0.042-0.205-0.059s-0.137-0.033-0.205-0.050c-0.135-0.033-0.268-0.065-0.399-0.097-0.132-0.025-0.262-0.050-0.389-0.075-0.063-0.012-0.126-0.024-0.189-0.036-0.031-0.006-0.062-0.012-0.093-0.017-0.031-0.004-0.062-0.009-0.093-0.013-0.123-0.017-0.243-0.034-0.36-0.050-0.059-0.008-0.116-0.016-0.174-0.024s-0.114-0.011-0.17-0.017c-0.112-0.010-0.221-0.019-0.327-0.029s-0.208-0.020-0.308-0.022c-0.025-0.001-0.049-0.002-0.074-0.003-0.019-1.019-0.85-1.839-1.874-1.839-0.016 0-0.032 0.001-0.047 0.001l-0-0.001c0 0-0.003 0-0.007 0.001-0.114 0.003-0.225 0.016-0.333 0.039-0.051 0.006-0.107 0.012-0.169 0.020-0.055 0.007-0.115 0.014-0.178 0.021-0.075 0.011-0.155 0.023-0.24 0.035-0.168 0.025-0.355 0.053-0.555 0.085-0.189 0.039-0.393 0.082-0.611 0.128-0.109 0.021-0.22 0.052-0.334 0.082s-0.231 0.061-0.352 0.093c-0.060 0.017-0.121 0.030-0.182 0.050s-0.122 0.039-0.185 0.058-0.251 0.080-0.38 0.121c-0.032 0.010-0.065 0.021-0.097 0.031-0.032 0.012-0.065 0.024-0.097 0.036-0.065 0.024-0.131 0.049-0.197 0.073-0.132 0.050-0.266 0.1-0.403 0.152-0.134 0.058-0.27 0.116-0.408 0.176-0.069 0.030-0.138 0.060-0.208 0.090s-0.138 0.067-0.207 0.1c-0.138 0.068-0.278 0.137-0.42 0.207-0.14 0.072-0.279 0.153-0.42 0.23-0.070 0.039-0.141 0.078-0.212 0.118s-0.139 0.085-0.209 0.128c-0.139 0.087-0.279 0.174-0.42 0.262-0.553 0.37-1.101 0.781-1.619 1.237-0.515 0.46-1.003 0.959-1.453 1.485-0.443 0.533-0.847 1.092-1.204 1.662-0.353 0.574-0.654 1.161-0.912 1.74-0.060 0.147-0.119 0.292-0.178 0.436-0.029 0.072-0.060 0.143-0.086 0.215s-0.051 0.145-0.076 0.216-0.102 0.284-0.146 0.424c-0.042 0.142-0.083 0.281-0.124 0.419-0.020 0.069-0.042 0.137-0.059 0.205s-0.033 0.137-0.050 0.205c-0.033 0.135-0.065 0.268-0.097 0.399-0.025 0.132-0.050 0.262-0.075 0.389-0.012 0.063-0.024 0.126-0.036 0.188-0.006 0.031-0.012 0.062-0.017 0.093-0.004 0.031-0.009 0.062-0.013 0.093-0.017 0.123-0.034 0.243-0.050 0.36-0.008 0.058-0.016 0.116-0.024 0.174s-0.011 0.114-0.017 0.17c-0.010 0.112-0.019 0.221-0.029 0.327s-0.020 0.208-0.022 0.308c-0.001 0.016-0.001 0.032-0.002 0.047-1.007 0.033-1.814 0.859-1.814 1.873 0 0.016 0.001 0.032 0.001 0.047zM3.154 13.208c0.001-0.006 0.003-0.011 0.004-0.017 0.019-0.095 0.048-0.192 0.075-0.291s0.055-0.201 0.084-0.306c0.015-0.052 0.027-0.106 0.045-0.158s0.035-0.106 0.053-0.16 0.072-0.218 0.109-0.331c0.009-0.028 0.019-0.056 0.028-0.085 0.011-0.028 0.022-0.056 0.033-0.084 0.022-0.056 0.044-0.113 0.066-0.171 0.045-0.114 0.090-0.231 0.136-0.35 0.052-0.116 0.104-0.234 0.158-0.354 0.027-0.060 0.053-0.12 0.080-0.18s0.060-0.119 0.089-0.179c0.061-0.12 0.122-0.241 0.184-0.364 0.064-0.121 0.136-0.241 0.205-0.363 0.035-0.061 0.070-0.122 0.105-0.183s0.076-0.12 0.114-0.181c0.077-0.12 0.154-0.241 0.232-0.363 0.329-0.477 0.692-0.949 1.094-1.396 0.406-0.442 0.845-0.861 1.307-1.247 0.468-0.379 0.958-0.722 1.455-1.026 0.502-0.299 1.014-0.552 1.516-0.769 0.127-0.050 0.254-0.099 0.379-0.148 0.063-0.024 0.124-0.050 0.186-0.072s0.125-0.042 0.188-0.063 0.246-0.085 0.368-0.121c0.123-0.034 0.244-0.068 0.363-0.102 0.060-0.016 0.118-0.035 0.177-0.049s0.118-0.027 0.177-0.040c0.117-0.027 0.231-0.053 0.344-0.079 0.114-0.020 0.226-0.040 0.336-0.059 0.055-0.010 0.109-0.019 0.162-0.029 0.027-0.005 0.053-0.010 0.080-0.014 0.027-0.003 0.054-0.006 0.080-0.010 0.106-0.013 0.209-0.026 0.311-0.038 0.050-0.006 0.1-0.013 0.149-0.019s0.099-0.008 0.147-0.012c0.096-0.007 0.19-0.014 0.282-0.021s0.179-0.015 0.265-0.015c0.171-0.004 0.332-0.007 0.48-0.011 0.137 0.005 0.262 0.010 0.376 0.014 0.056 0.002 0.109 0.003 0.159 0.005 0.062 0.004 0.12 0.008 0.175 0.011 0.062 0.004 0.119 0.008 0.171 0.011 0.095 0.015 0.193 0.023 0.293 0.023 0.014 0 0.027-0.001 0.041-0.001 0.004 0 0.007 0 0.007 0v-0.001c0.912-0.023 1.663-0.697 1.803-1.575 0.016 0.004 0.031 0.007 0.047 0.010 0.095 0.019 0.192 0.048 0.291 0.075s0.201 0.055 0.306 0.084c0.052 0.015 0.106 0.027 0.158 0.045s0.106 0.035 0.16 0.053 0.218 0.072 0.331 0.109c0.028 0.009 0.056 0.019 0.085 0.028 0.028 0.011 0.056 0.022 0.084 0.033 0.056 0.022 0.113 0.044 0.171 0.066 0.114 0.045 0.231 0.090 0.35 0.136 0.116 0.052 0.234 0.104 0.354 0.158 0.060 0.027 0.12 0.053 0.18 0.080s0.119 0.060 0.179 0.089c0.12 0.061 0.241 0.122 0.364 0.184 0.121 0.064 0.241 0.136 0.363 0.205 0.061 0.035 0.122 0.070 0.183 0.105s0.12 0.076 0.181 0.114c0.12 0.077 0.241 0.154 0.363 0.232 0.477 0.329 0.949 0.692 1.396 1.094 0.442 0.406 0.861 0.845 1.247 1.307 0.379 0.468 0.722 0.958 1.026 1.455 0.299 0.502 0.552 1.014 0.769 1.516 0.050 0.127 0.099 0.254 0.148 0.379 0.024 0.063 0.050 0.124 0.072 0.186s0.042 0.125 0.063 0.188 0.085 0.246 0.121 0.368c0.034 0.123 0.068 0.244 0.102 0.363 0.016 0.060 0.035 0.118 0.049 0.177s0.027 0.119 0.040 0.177c0.027 0.117 0.053 0.231 0.079 0.344 0.020 0.114 0.040 0.226 0.059 0.336 0.010 0.055 0.019 0.109 0.029 0.163 0.005 0.027 0.009 0.053 0.014 0.080 0.003 0.027 0.006 0.054 0.010 0.080 0.013 0.106 0.026 0.209 0.038 0.311 0.006 0.050 0.013 0.1 0.019 0.149s0.008 0.099 0.012 0.147c0.007 0.096 0.014 0.19 0.020 0.282s0.015 0.179 0.015 0.265c0.004 0.171 0.008 0.332 0.011 0.48-0.005 0.137-0.009 0.262-0.014 0.376-0.002 0.056-0.003 0.109-0.005 0.159-0.004 0.062-0.008 0.12-0.011 0.175-0.004 0.062-0.008 0.119-0.011 0.171-0.015 0.095-0.023 0.193-0.023 0.293 0 0.014 0.001 0.027 0.001 0.041-0 0.004-0 0.007-0 0.007h0.001c0.023 0.901 0.681 1.644 1.543 1.798-0.002 0.009-0.004 0.017-0.006 0.026-0.019 0.095-0.048 0.192-0.075 0.291s-0.055 0.201-0.084 0.306c-0.015 0.052-0.027 0.106-0.045 0.158s-0.035 0.106-0.053 0.16-0.072 0.218-0.109 0.331c-0.009 0.028-0.019 0.056-0.028 0.085-0.011 0.028-0.022 0.056-0.033 0.084-0.022 0.056-0.044 0.113-0.066 0.171-0.045 0.114-0.090 0.231-0.136 0.349-0.052 0.116-0.104 0.234-0.158 0.354-0.027 0.060-0.053 0.12-0.080 0.18s-0.060 0.119-0.089 0.179c-0.061 0.12-0.122 0.241-0.184 0.364-0.064 0.121-0.136 0.241-0.205 0.363-0.035 0.061-0.070 0.122-0.105 0.183s-0.076 0.12-0.114 0.181c-0.077 0.12-0.154 0.241-0.232 0.363-0.329 0.477-0.692 0.949-1.094 1.396-0.406 0.442-0.845 0.861-1.307 1.247-0.468 0.379-0.958 0.722-1.455 1.026-0.502 0.299-1.014 0.552-1.516 0.769-0.127 0.050-0.254 0.099-0.379 0.148-0.063 0.024-0.124 0.050-0.186 0.072s-0.125 0.042-0.188 0.063-0.246 0.085-0.368 0.121c-0.123 0.034-0.244 0.068-0.363 0.102-0.060 0.016-0.118 0.035-0.177 0.049s-0.118 0.027-0.177 0.040c-0.117 0.027-0.231 0.053-0.344 0.079-0.114 0.020-0.226 0.040-0.336 0.059-0.055 0.010-0.109 0.019-0.162 0.029-0.027 0.005-0.053 0.009-0.080 0.014-0.027 0.003-0.054 0.006-0.080 0.010-0.106 0.013-0.209 0.026-0.311 0.038-0.050 0.006-0.1 0.013-0.149 0.019s-0.099 0.008-0.147 0.012c-0.096 0.007-0.19 0.014-0.282 0.020s-0.179 0.015-0.265 0.015c-0.171 0.004-0.332 0.008-0.48 0.011-0.137-0.005-0.262-0.009-0.376-0.014-0.056-0.002-0.109-0.003-0.159-0.005-0.062-0.004-0.12-0.008-0.175-0.011-0.062-0.004-0.119-0.008-0.171-0.011-0.095-0.015-0.193-0.023-0.293-0.023-0.014 0-0.027 0.001-0.041 0.001-0.004-0-0.007-0-0.007-0v0.001c-0.908 0.023-1.656 0.691-1.801 1.563-0.094-0.019-0.189-0.047-0.287-0.074-0.099-0.027-0.201-0.055-0.306-0.084-0.052-0.015-0.106-0.027-0.158-0.045s-0.106-0.035-0.161-0.053-0.218-0.072-0.331-0.11c-0.028-0.009-0.056-0.019-0.085-0.028-0.028-0.011-0.056-0.022-0.084-0.033-0.056-0.022-0.113-0.044-0.171-0.066-0.114-0.045-0.231-0.090-0.35-0.136-0.116-0.052-0.234-0.104-0.354-0.158-0.060-0.027-0.12-0.053-0.18-0.080s-0.119-0.060-0.179-0.089c-0.12-0.061-0.241-0.122-0.364-0.184-0.121-0.064-0.241-0.136-0.363-0.205-0.061-0.035-0.122-0.070-0.183-0.105s-0.12-0.076-0.181-0.114c-0.12-0.077-0.241-0.154-0.363-0.232-0.477-0.329-0.949-0.692-1.396-1.094-0.443-0.407-0.862-0.845-1.247-1.307-0.379-0.468-0.722-0.958-1.026-1.455-0.299-0.502-0.552-1.014-0.769-1.516-0.050-0.128-0.099-0.254-0.148-0.379-0.024-0.063-0.050-0.124-0.072-0.186s-0.042-0.125-0.063-0.188-0.085-0.246-0.121-0.368c-0.034-0.123-0.068-0.244-0.102-0.363-0.016-0.060-0.035-0.118-0.049-0.177s-0.027-0.118-0.040-0.177-0.053-0.231-0.079-0.344c-0.020-0.114-0.040-0.226-0.059-0.336-0.010-0.055-0.019-0.109-0.029-0.162-0.005-0.027-0.010-0.053-0.014-0.080-0.003-0.027-0.006-0.054-0.010-0.080-0.013-0.106-0.026-0.209-0.038-0.311-0.006-0.050-0.013-0.1-0.019-0.149s-0.008-0.099-0.012-0.147c-0.007-0.096-0.014-0.19-0.021-0.282s-0.015-0.179-0.015-0.265c-0.004-0.171-0.008-0.332-0.011-0.48 0.005-0.137 0.010-0.262 0.014-0.375 0.002-0.056 0.003-0.109 0.005-0.159 0.004-0.062 0.008-0.12 0.011-0.175 0.004-0.062 0.008-0.119 0.011-0.171 0.015-0.095 0.022-0.193 0.022-0.293 0-0.014-0.001-0.027-0.001-0.041 0-0.004 0-0.007 0-0.007h-0.001c-0.023-0.919-0.707-1.674-1.595-1.807z"
        fill={color}
      />
    </Icon>
  );
};

export default Navigation;
