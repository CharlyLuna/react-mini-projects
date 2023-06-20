import { useEffect, useReducer } from 'react'
import { cartInitialState, cartReducer } from '../reducers/cartReducer'

const init = () => {
  return JSON.parse(window.localStorage.getItem('cart')) || cartInitialState
}

export const useCartReducer = () => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState, init)

  useEffect(() => {
    const shoppingCart = JSON.stringify(state)
    window.localStorage.setItem('cart', shoppingCart)
  }, [state])

  const addToCart = (product) => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })

  const removeFromCart = (product) => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })

  const clearCart = () => dispatch({
    type: 'CLEAR_CART'
  })

  return {
    addToCart,
    removeFromCart,
    clearCart,
    state
  }
}
