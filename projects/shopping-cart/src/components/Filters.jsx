import { useId } from 'react'
import { useFilters } from '../hooks/useFilters'
import './Filters.css'

export const Filters = () => {
  const { setFilters, filters } = useFilters()
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangePrice = (e) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: e.target.value
    }))
  }

  const handleChangeCategory = (e) => {
    setFilters(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Minimum price:</label>
        <input
          onChange={handleChangePrice}
          type='range'
          id={minPriceFilterId}
          min={0}
          max={1000}
          value={filters.minPrice}
        />
        <span>{filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select onChange={handleChangeCategory} id={categoryFilterId}>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
          <option value='home-decoration'>Home-decoration</option>
        </select>
      </div>
    </section>
  )
}
