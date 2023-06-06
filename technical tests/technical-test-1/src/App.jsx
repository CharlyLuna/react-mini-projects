import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMG_URL = 'https://cataas.com'

export const App = () => {
  const [fact, setFact] = useState('')
  const [image, setImage] = useState('')

  // Retrieve the fact when the page is rendered
  // One way to do it: with async/await (inside the useEffect)
  // const retrieveCatFacts = async () => {
  //   const data = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  //   const { fact } = await data.json()
  //   setFact(fact)
  // }
  // retrieveCatFacts()
  useEffect(() => {
    // Another way to do it: with then/catch
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then(({ fact }) => setFact(fact))
  }, [])

  // Retrieve the img when we have a new fact
  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ', 1)
    fetch(`https://cataas.com/cat/says/${firstWord}?json=true&width=200`)
      .then(res => res.json())
      .then(({ url }) => setImage(url))
  }, [fact])

  return (
    <main>
      <h1>Cat facts</h1>
      <section>
        {fact && <p>{fact}</p>}
        {image && (
          <img src={`${CAT_PREFIX_IMG_URL}${image}`} alt={`Random cat with the word ${fact} in it`} />
        )}
      </section>
    </main>
  )
}
