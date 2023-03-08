import { useContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import { UserAuthContext } from './UserAuthContext'
import { auth } from '../firebase'

export const UserAuthProvider = ({ children }) => {
  const [user, setUser] = useState('')

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
    const status = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })

    return () => {
      status()
    }
  }, [])

  return (
    <UserAuthContext.Provider value={{ signUp, logIn, user }}>
      {children}
    </UserAuthContext.Provider>
  )
}

export const useUserAuth = () => {
  return useContext(UserAuthContext)
}
