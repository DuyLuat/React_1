import axios from "./customize_axios"; // không cần thiết phải import instance (axios chính là instance)
const fetchAllUser = (page) => {
  return axios.get(`/address_info?page=${page}&limit=10`);
};

export { fetchAllUser };
