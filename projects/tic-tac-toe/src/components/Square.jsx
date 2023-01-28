export const Square = ({ children, updateBoard, index, isSelected }) => {
  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} key={index} className={`square ${isSelected ? 'is-selected' : ''}`}>
      <span>
        {children}
      </span>
    </div>
  )
}
