import React, { useEffect, useState } from 'react'
import { getUsersPage } from '../utils/functions'
import { UserCard } from '../components/UserCard'

export const ExampleReactQuery = () => {
  const [rawUsers, setRawUsers] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    getUsersPage(page).then(({ data }) => setRawUsers(data))
  }, [page])

  // Maping of the data
  const users = rawUsers?.map(user => ({
    id: user.id,
    name: user.first_name,
    lastName: user.last_name,
    avatar: user.avatar
  }))

  // TODO: Add pagination with react query

  return (
    <div>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  )
}
