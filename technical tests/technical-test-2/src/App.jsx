import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

function App () {
  const { handleChange, error, search } = useSearch()
  const { movies, getMovies } = useMovies({ search })

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies()
  }

  return (
    <div className='main-page'>
      <header>
        <h1>Movie search</h1>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='query' type='text' placeholder='The avengers movie' />
          <button type='submit'>Search</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
