import { Route, Redirect } from 'react-router-dom';
import { getUser } from '../utils/Common';

function PrivateRoute({ children, ...rest }) {
  const user = getUser();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    />
  );
}

export default PrivateRoute;
