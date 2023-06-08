import { useEffect, useRef, useState } from 'react'

export const useSearch = () => {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  const handleChange = (e) => {
    const newQuery = e.target.value
    if (newQuery.startsWith(' ')) return
    setSearch(newQuery)
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
