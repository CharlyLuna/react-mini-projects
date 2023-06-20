import { useId } from 'react'
import { CartIcon } from './Icons'
import './Cart.css'
import { useCart } from '../hooks/useCart'
import { CartItem } from './CartItem'

export const Cart = () => {
  const { cart, clearCart, addToCart } = useCart()
  const cartCheckBoxId = useId()
  return (
    <>
      <label htmlFor={cartCheckBoxId} className='cart-button'>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartCheckBoxId} hidden />
      <aside className='cart'>
        <ul>
          {
            cart.map(product => (
              <CartItem
                key={product.id}
                {...product}
                addToCart={() => addToCart(product)}
              />
            ))
          }
        </ul>
        <button onClick={clearCart}>Clear</button>
      </aside>
    </>
  )
}
