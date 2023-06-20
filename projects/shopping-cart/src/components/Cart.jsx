import { useId } from 'react'
import { CartIcon } from './Icons'
import './Cart.css'

export const Cart = () => {
  const cartCheckBoxId = useId()
  return (
    <>
      <label htmlFor={cartCheckBoxId} className='cart-button'>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartCheckBoxId} hidden />
      <aside className='cart'>
        <ul>
          <li>
            <img src='https://i.dummyjson.com/data/products/6/thumbnail.png' alt='MacBook Pro' />
            <div>
              <strong>MacBook Pro</strong>
            </div>
            <footer>
              <small>Quantity: 1</small>
              <button>+1</button>
            </footer>
          </li>
        </ul>
        <button>Clear</button>
      </aside>
    </>
  )
}
