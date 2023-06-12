import { useCallback, useEffect, useRef, useState } from 'react'
import debounce from 'just-debounce-it'

export const useSearch = () => {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  const debouncedGetMovies = useCallback(
    debounce(({ search, getMovies }) => {
      console.log({ search })
      getMovies({ search })
    }, 300), []
  )

  const handleChange = ({ event, getMovies }) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return
    setSearch(newQuery)
    debouncedGetMovies({ getMovies, search: newQuery })
  }

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    if (search === '') {
      setError('No se puede buscar una pelicula vacia')
      return
    }
    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con un número')
      return
    }
    setError(null)
  }, [search])

  return {
    handleChange,
    error,
    search
  }
}
