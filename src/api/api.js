import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '2e62005f-2c3e-421a-8925-49a93d53638e',
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },

  // unfollow(userId) {
  //   return instance.delete(`follow/${userId}`).then((response) => {
  //     return response.data;
  //   });
  // },

  // follow(userId) {
  //   return instance.post(`follow/${userId}`).then((response) => {
  //     return response.data;
  //   });
  // },

  follow(userId) {
    return instance.post(`follow/${userId}`, {});
  },

  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },

  getProfile(userId) {
    console.warn('Obsolete method. Please use profileAPI object.');
    return profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status });
  },
};

export const authAPI = {
  getMe() {
    return instance.get(`auth/me`);
    // then((response) => {
    //   return response.data;
    // });
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};
