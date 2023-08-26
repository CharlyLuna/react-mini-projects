import React from 'react'

export const Pagination = ({ itemsPerPage, totalItems }) => {
  const totalPages = new Array(Math.ceil(totalItems / itemsPerPage)).fill(0)
  const pageNumbers = totalPages.map((_, index) => index + 1)

  return (
    <ul style={{ display: 'flex', listStyle: 'none', gap: '10px', justifyContent: 'center' }}>
      {
        pageNumbers.map((number) => (
          <li key={number}>
            <a href='#'>{number}</a>
          </li>
        ))
      }
    </ul>
  )
}
