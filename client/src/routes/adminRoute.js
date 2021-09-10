import { Route } from 'react-router-dom';
import { getUserInfo } from '../utils/Actions';
import { Spinner, Center } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

function AdminRoute({ children, failureChild, ...rest }) {
  const [response, setresponse] = useState('loading');
  useEffect(() => {
    getUserInfo().then((data) => {
      if (data.role === 'admin') {
        setresponse('success');
      } else {
        setresponse('failure');
      }
    });
  }, [response]);

  return (
    <Route
      {...rest}
      render={() => {
        return (
          <>
            {response === 'loading' && (
              <Center h="100vh" alignItems="center">
                <Spinner
                  boxSize="100px"
                  thickness="10px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                />
              </Center>
            )}
            {response === 'success' && children}
            {response === 'failure' && failureChild}
          </>
        );
      }}
    />
  );
}

export default AdminRoute;
