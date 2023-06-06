import { useEffect, useState } from 'react'
import { getRandomCatImgWithSomeWord } from '../services/facts'

export const useCatImage = ({ fact }) => {
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ', 1)
    getRandomCatImgWithSomeWord(firstWord)
      .then((url) => setImageUrl(url))
  }, [fact])

  return {
    imageUrl
  }
}
