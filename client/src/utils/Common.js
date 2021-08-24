export const getUser = () => {
  const user = JSON.parse(localStorage.getItem('currentUser'));
  if (user) return user;
  else return null;
};

// remove the token and user from the session storage
export const removeUser = () => {
  return localStorage.removeItem('currentUser');
};

// set the token and user from the session storage
export const setUser = (data) => {
  return localStorage.setItem('currentUser', JSON.stringify(data));
};
