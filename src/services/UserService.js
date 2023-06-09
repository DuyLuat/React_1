import axios from "./customize_axios"; // không cần thiết phải import instance (axios chính là instance)
const fetchAllUser = () => {
  return axios.get("/address_info");
};

export { fetchAllUser };
