import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000'
})

const createUser = async (registerData) => {
  const resp = await api.post('/users', { "user": registerData });
  return resp.data
}

const loginUser = async (loginData) => {
  const resp = await api.post('/user_token', { "auth": loginData });
  return resp.data
}


export {
  createUser,
  loginUser,
};