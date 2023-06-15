import { Filters } from './Filters'

export const Header = ({ changeFilters }) => {
  return (
    <header>
      <h1>Shopping cart 🛒</h1>
      <Filters changeFilters={changeFilters} />
    </header>
  )
}
