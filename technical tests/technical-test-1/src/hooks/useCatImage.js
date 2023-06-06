import { useEffect, useState } from 'react'
import { getRandomCatImgWithSomeWord } from '../services/facts'

const CAT_PREFIX_IMG_URL = 'https://cataas.com'

export const useCatImage = ({ fact }) => {
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ', 1)
    getRandomCatImgWithSomeWord(firstWord)
      .then((url) => setImageUrl(url))
  }, [fact])

  return {
    imageUrl: `${CAT_PREFIX_IMG_URL}${imageUrl}`
  }
}
