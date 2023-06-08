import responseMoviesMocked from '../mocks/results.json'
import responseNoMoviesMocked from '../mocks/no-results.json'
import { useState } from 'react'

export const useMovies = ({ search }) => {
  const [responseMovies, setResponseMovies] = useState([])
  const movies = responseMovies.Search

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  const getMovies = () => {
    if (search) {
      setResponseMovies(responseMoviesMocked)
    } else {
      setResponseMovies(responseNoMoviesMocked)
    }
  }

  return {
    movies: mappedMovies,
    getMovies
  }
}
