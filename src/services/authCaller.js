import * as config from  '../../config.json';
import axios from 'axios';
import authService from "./auth.service";

const token = 'sometoken';

const createHeaders = () => {
  const {token} = authService.userValue
  return {
        'Authorization': `Bearer ${token}`
  }
}

const authCaller = axios.create({
  baseURL: config.apiServerUrlDevelopment,
  withCredentials: true,
  headers: {
     'Authorization': `Bearer ${token}`
  }


});

export default authCaller;


// const addAuthHeader = (config) => {
//   const { token } = authService.userValue;
//   Object.assign(config, {
//     withCredentials: true,
//     baseURL: import.meta.env.VITE_API_URL,
//     headers: {
//       'Authorization': `Bearer ${token}`
//     }
//   });
//   return config;
// }

// const authHttp = axios.create({

// });

// authHttp.interceptors.request.use(function (config) {
//   return addAuthHeader(config);;
// }, function (error) {
//   return Promise.reject(error);
// });


// authHttp.interceptors.response.use(function (response) {
//   return response;
// }, async function (error) {
//   const { config } = error;
//   if (!config) {
//     return Promise.reject(error);
//   }

//   const authError = error.response.status >= 400 && error.response.status < 404


//   if (authError && !config._retry) {
//     try {
//       await authService.refreshToken();
//       config._retry = true;
//       return authHttp(addAuthHeader(config))

//     } catch {
//       console.log("Caught", error.config);
//       return Promise.reject(error);
//     }
//   }
//   return Promise.reject(error);
// });

// export default authHttp;


