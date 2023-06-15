import { useState } from 'react'
import './Filters.css'
export const Filters = ({ changeFilters }) => {
  const [minPrice, setMinPrice] = useState(0)

  const handleChangePrice = (e) => {
    setMinPrice(e.target.value)
    changeFilters(prevState => ({
      ...prevState,
      minPrice: e.target.value
    }))
  }

  const handleChangeCategory = (e) => {
    changeFilters(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor='price'>Minimum price:</label>
        <input onChange={handleChangePrice} type='range' id='price' min={0} max={1000} />
        <span>{minPrice}</span>
      </div>
      <div>
        <label htmlFor='category'>Category</label>
        <select onChange={handleChangeCategory} id='category'>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
          <option value='home-decoration'>Home-decoration</option>
        </select>
      </div>
    </section>
  )
}
