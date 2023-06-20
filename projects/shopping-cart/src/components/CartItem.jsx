
export const CartItem = ({ title, price, quantity, thumbnail, addToCart }) => {
  return (
    <li>
      <img src={thumbnail} alt='MacBook Pro' />
      <div>
        <strong>{title}</strong> -{price}
      </div>
      <footer>
        <small>Quantity: {quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}
