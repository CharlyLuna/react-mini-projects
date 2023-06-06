import { useEffect, useState } from 'react'
import './App.css'
import { getRandomCatImgWithSomeWord, getRandomFact } from './services/facts'

const CAT_PREFIX_IMG_URL = 'https://cataas.com'

export const App = () => {
  const [fact, setFact] = useState('')
  const [image, setImage] = useState('')

  useEffect(() => {
    getRandomFact()
      .then((fact) => setFact(fact))
  }, [])

  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ', 1)
    getRandomCatImgWithSomeWord(firstWord)
      .then((url) => setImage(url))
  }, [fact])

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main>
      <h1>Cat facts</h1>
      <button onClick={handleClick}>Get new fact</button>
      <section>
        {fact && <p>{fact}</p>}
        {image && (
          <img src={`${CAT_PREFIX_IMG_URL}${image}`} alt={`Random cat with the word ${fact} in it`} />
        )}
      </section>
    </main>
  )
}
