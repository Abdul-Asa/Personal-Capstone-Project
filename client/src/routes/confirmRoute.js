import { Route } from 'react-router-dom';
import { verifyUser } from '../utils/Actions';
import { Spinner, Center } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

function ConfirmRoute({ location, children, failureChild, ...rest }) {
  const [response, setresponse] = useState('loading');
  useEffect(() => {
    verifyUser(location.pathname).then((res) => {
      if (res.message === 'success') {
        setresponse('success');
      } else setresponse('failure');
    });
    console.log(response);
  }, [response, location]);

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

export default ConfirmRoute;
