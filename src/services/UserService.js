import axios from 'axios';
const fetchAllUser = () => {
    return axios.get("https://6482dff2f2e76ae1b95ba099.mockapi.io/address_info");
}

export { fetchAllUser };