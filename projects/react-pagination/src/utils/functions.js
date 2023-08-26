import axios from 'axios'

export const getUsersPage = async (page = 1) => {
  const res = await axios.get(`https://reqres.in/api/users?page=${page}`)
  return res.data
}

export const getPosts = async () => {
  const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')
  return posts?.map(post => (
    {
      id: post.id,
      title: post.title,
      description: post.body
    }
  ))
}
