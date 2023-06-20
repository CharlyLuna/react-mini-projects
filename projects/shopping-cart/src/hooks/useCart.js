import { useContext } from 'react'
import { CartContext } from '../context/CartProvider'

export const useCart = () => {
  const { cart, addToCart, clearCart, removeFromCart } = useContext(CartContext)

  if (cart === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }

  const checkIfProductIsInCart = (product) => {
    const isInCart = cart.find(cartProduct => {
      return cartProduct.id === product.id
    })
    return !!isInCart
  }

  return {
    cart,
    addToCart,
    clearCart,
    checkIfProductIsInCart,
    removeFromCart
  }
}
