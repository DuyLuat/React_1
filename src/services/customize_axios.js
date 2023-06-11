import axios from "axios";
const instance = axios.create({
  baseURL: "https://6482dff2f2e76ae1b95ba099.mockapi.io",
});

// Add a response interceptor
// instance.interceptors.response.use(
//   function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response.data;
//   },
//   function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
//   }
// );

export default instance;
