import React from 'react'

export const UserCard = ({ user }) => {
  return (
    <div style={{ display: 'flex', backgroundColor: 'blue', gap: '2rem', margin: '20px', padding: '10px', borderRadius: '5px' }}>
      <img src={user.avatar} alt={`${user} avatar`} />
      <h1>{user.name} {user.lastName}</h1>
    </div>
  )
}
