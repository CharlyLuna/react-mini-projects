import axios from 'axios'

export const getUsersPage = async (page = 1) => {
  const res = await axios.get(`https://reqres.in/api/users?page=${page}`)
  return res.data
}
