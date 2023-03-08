import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuthContext } from '../context/UserAuthContext'

export const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserAuthContext)

  if (!user) {
    return <Navigate to='/' />
  }
  return children
}
