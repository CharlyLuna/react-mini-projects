import { useFilters } from '../hooks/useFilters'
import './Footer.css'

export const Footer = () => {
  const { filters } = useFilters()
  return (
    <footer className='footer'>
      {JSON.stringify(filters)}
      {/* <h4>Simulation of tech test</h4>
      <h5>Shopping cart with useContext and useReducer</h5> */}
    </footer>
  )
}
