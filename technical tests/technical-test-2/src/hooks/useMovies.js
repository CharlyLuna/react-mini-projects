import { useRef, useState } from 'react'
import { searchMovies } from '../services/movies'

export const useMovies = ({ search }) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const recentSearch = useRef('')

  const getMovies = async () => {
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
  }

  return {
    movies,
    loading,
    moviesError: error,
    getMovies
  }
}
