import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ children, ...rest }) {
  const authentication = () => {
    return JSON.parse(localStorage.getItem('currentUser'));
  };

  const user = authentication();
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
