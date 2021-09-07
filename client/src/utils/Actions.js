import { removeUser, getUser } from './Common';
import { config } from '../config';
import axios from 'axios';

const { BASEURL } = config;
export const logOutAction = () => {
  removeUser();
};

export const getUserInfo = async () => {
  const user = getUser();
  const config = {
    headers: {
      token: user.token,
    },
  };
  if (user) {
    return await axios
      .get(`${BASEURL}/user/${user.id}`, config)
      .then((response) => {
        if (response.data.message === 'success') {
          return response.data.user;
        } else {
          return response.data.message;
        }
      });
  }
};

export const updateUser = async (data) => {
  const user = getUser();
  const config = {
    headers: {
      token: user.token,
    },
  };
  if (user) {
    return await axios
      .patch(`${BASEURL}/user/${user.id}`, data, config)
      .then((response) => {
        return response.data;
      });
  }
};

export const changePfp = async (data) => {
  const user = getUser();
  const config = {
    headers: {
      token: user.token,
    },
  };
  return await axios
    .patch(`${BASEURL}/user/profile-pic${user.id}`, data, config)
    .then((response) => {
      return response.data;
    });
};

export const changePassword = async (data) => {
  const user = getUser();
  const config = {
    headers: {
      token: user.token,
    },
  };
  if (user) {
    return await axios
      .patch(`${BASEURL}/user/reset-password/${user.id}`, data, config)
      .then((response) => {
        return response.data;
      });
  }
};

export const deleteAccount = async () => {
  const user = getUser();
  const config = {
    headers: {
      token: user.token,
    },
  };
  if (user) {
    return await axios
      .delete(`${BASEURL}/user/${user.id}`, config)
      .then((response) => {
        return response.data;
      });
  }
};

export const getJobsPosted = async () => {
  const user = getUser();
  const config = {
    headers: {
      token: user.token,
    },
  };
  if (user) {
    return await axios
      .get(`${BASEURL}/job/posted/${user.id}`, config)
      .then((response) => {
        return response.data;
      });
  }
};

export const deleteJob = async (data) => {
  const user = getUser();
  let token = user.token;

  if (user) {
    return await axios
      .delete(`${BASEURL}/job/delete/${user.id}`, {
        headers: {
          token: token,
        },
        data: data,
      })
      .then((response) => {
        return response.data;
      });
  }
};

export const postNewjob = async (data) => {
  const user = getUser();
  const config = {
    headers: {
      token: user.token,
    },
  };
  if (user) {
    return await axios
      .post(`${BASEURL}/job/post/${user.id}`, data, config)
      .then((response) => {
        return response.data;
      });
  }
};
