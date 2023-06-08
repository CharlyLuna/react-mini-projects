const ListOfMovies = ({ movies }) => {
  return (
    <ul className='movies'>
      {
        movies.map((movie) => (
          <li className='movie' key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={`Poster of ${movie.Title}`} />
          </li>
        ))
      }
    </ul>
  )
}

const NoMoviesFound = () => {
  return (
    <p>No movies were found</p>
  )
}

export const Movies = ({ movies }) => {
  const hasMovies = movies?.length > 0
  return (
    hasMovies
      ? (<ListOfMovies movies={movies} />)
      : (<NoMoviesFound />)
  )
}
