import axios from "./customize_axios"; // không cần thiết phải import instance (axios chính là instance)

const fetchAllUser = (page) => {
  return axios.get(`/address_info?page=${page}&limit=10`);
};
const postCreateUser = (first_name, last_name, email) => {
  return axios.post("/address_info", { first_name, last_name, email });
};

const editUser = (id, first_name, last_name, email) => {
  return axios.put(`/address_info/${id}`, { first_name, last_name, email });
};
const deleteUser = (id) => {
  return axios.delete(`/address_info/${id}`);
};

export { fetchAllUser, postCreateUser, editUser, deleteUser };
