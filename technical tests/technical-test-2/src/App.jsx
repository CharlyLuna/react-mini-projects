import { useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

function App () {
  const [sort, setSort] = useState(false)
  const { handleChange, error, search } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies({ search })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className='main-page'>
      <header>
        <h1>Movie search</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(event) => handleChange({ event, getMovies })}
            value={search}
            name='query'
            type='text'
            placeholder='The avengers movie'
          />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type='submit'>Search</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        {
          loading ? (<p>Loading...</p>) : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
