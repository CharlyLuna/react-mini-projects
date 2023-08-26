import React, { useEffect, useState } from 'react'
import { getPosts } from '../utils/functions'
import { Post } from '../components/Post'
import { Pagination } from '../components/Pagination'

export const ExampleWithoutLibraries = () => {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  useEffect(() => {
    const retrievePosts = async () => {
      try {
        setIsLoading(true)
        const data = await getPosts()
        setPosts(data)
      } catch (e) {
        throw new Error(e)
      } finally {
        setIsLoading(false)
      }
    }
    retrievePosts()
  }, [])

  const paginate = (page) => {
    setCurrentPage(page)
  }

  const indexOfLastPost = currentPage * itemsPerPage
  const indexOfFirstPost = indexOfLastPost - itemsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <>
      <h1 style={{ fontSize: '1.5rem' }}>Page selection</h1>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={posts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      <div>
        {
        isLoading
          ? <div>Loading...</div>
          : (
              currentPosts?.map(post => (
                <Post key={post.id} post={post} />
              ))
            )
      }
      </div>
    </>
  )
}
