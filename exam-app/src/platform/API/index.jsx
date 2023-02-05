import axios from "axios";

const Api = 'https://crudcrud.com/api/d5ba9fc326b145f389e1cbdcea717f0a/'

export const PostUsers = (data) => {
    return axios.post(`${Api}users`, data)
}
export const GetUsers = () => {
    return axios.get(`${Api}users`)
}

