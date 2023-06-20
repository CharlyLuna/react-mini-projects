import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    // Check if the product already is in the cart
    const productInCart = cart.findIndex(cartProduct => {
      return cartProduct.id === product.id
    })

    if (productInCart >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCart].quantity += 1
      return setCart(newCart)
    }
    // If not in the cart we add it with the extra attribute of quantity
    setCart(prevState => (
      [...prevState, { ...product, quantity: 1 }]
    ))
  }

  const removeFromCart = (product) => {
    setCart(prevState => prevState.filter(item => item.id !== product.id))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}
