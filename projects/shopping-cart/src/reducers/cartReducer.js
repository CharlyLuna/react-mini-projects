export const cartInitialState = []

export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { id } = action.payload
      const productInCart = state.findIndex(cartProduct => {
        return cartProduct.id === id
      })

      if (productInCart >= 0) {
        const newCart = structuredClone(state)
        newCart[productInCart].quantity += 1
        return newCart
      }
      // If not in the cart we add it with the extra attribute of quantity
      return [...state, { ...action.payload, quantity: 1 }]
    }
    case 'REMOVE_FROM_CART': {
      const { id } = action.payload
      return state.filter(item => item.id !== id)
    }
    case 'CLEAR_CART':
      return cartInitialState
    default:
      return state
  }
}
