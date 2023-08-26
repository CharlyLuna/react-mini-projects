import './Pagination.css'

export const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const totalPages = new Array(Math.ceil(totalItems / itemsPerPage)).fill(0)
  const pageNumbers = totalPages.map((_, index) => index + 1)

  return (
    <ul className='list'>
      {
        pageNumbers.map((number) => (
          <li key={number}>
            <button
              className={`${currentPage === number ? 'current-page' : ''}`}
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </li>
        ))
      }
    </ul>
  )
}
