import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

const CAT_PREFIX_IMG_URL = 'https://cataas.com'

export const App = () => {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = () => {
    refreshFact()
  }

  return (
    <main>
      <h1>Cat facts</h1>
      <button onClick={handleClick}>Get new fact</button>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && (
          <img src={`${CAT_PREFIX_IMG_URL}${imageUrl}`} alt={`Random cat showing the first word of the fact: ${fact}`} />
        )}
      </section>
    </main>
  )
}
