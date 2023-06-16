import { useContext } from 'react'
import { FiltersContext } from '../context/FiltersProvider'

export const useFilters = () => {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = (products) => {
    return products.filter(product => {
      return product.price >= filters.minPrice && (
        product.category === filters.category ||
        filters.category === 'all'
      )
    })
  }

  return { filterProducts, setFilters, filters }
}
