import { useEffect, useState } from 'react'
import { getRandomAdvice } from '../services/advice'

export const useAdvice = () => {
  const [advice, setAdvice] = useState({
    advice: '',
    id: '0'
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getNewRandomAdvice()
  }, [])

  const getNewRandomAdvice = async () => {
    setIsLoading(true)
    const advice = await getRandomAdvice()
    setAdvice(advice)
    setIsLoading(false)
  }

  return {
    ...advice,
    isLoading,
    getNewRandomAdvice
  }
}
