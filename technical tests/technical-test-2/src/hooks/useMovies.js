import { useMemo, useRef, useState, useCallback } from 'react'
import { searchMovies } from '../services/movies'

export const useMovies = ({ search, sort }) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const recentSearch = useRef('')

  const getMovies = useCallback(async ({ search }) => {
    if (recentSearch.current === search) return
    try {
      setLoading(true)
      setError(null)
      const responseMovies = await searchMovies(search)
      setMovies(responseMovies)
      recentSearch.current = search
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [])

  // useMemo: Memorizar computaciones que hemos hecho, que queremos evitar
  // que se hagan, a no ser que cambien las dependencias que le indicamos
  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return {
    movies: sortedMovies,
    loading,
    moviesError: error,
    getMovies
  }
}
