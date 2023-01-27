import { useState } from 'react'
import './App.css'

const TURNS = {
  X: 'x',
  O: 'o'
}

// const RESULTS = {
//   WINNER: null,
//   TIE: false
// }

const Square = ({ children, updateBoard, index, isSelected }) => {
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

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

export const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)

  const [winner, setWinner] = useState(null)

  const checkWinner = (boardToCheck) => {
    // check all winner combos
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    return null
  }

  const checkEndGame = (boardToCheck) => {
    return boardToCheck.every((cell) => cell !== null)
  }

  const updateBoard = (index) => {
    // check if the position is empty
    if (board[index] || winner) return
    // update the board
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // set next turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // check if theres a winner
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset game</button>
      <section className='game'>
        {board.map((cell, index) => (
          <Square key={index} index={index} updateBoard={updateBoard}>{cell}</Square>
        ))}
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      {
        winner !== null && (
          <section className='winner'>
            <div className='text'>
              <h2>
                {
                  winner === false
                    ? 'TIE'
                    : 'The winner is:'
                }
              </h2>
              <header>
                {winner && <Square>{winner}</Square>}
              </header>
              <footer>
                <button onClick={resetGame}>Start new game</button>
              </footer>
            </div>
          </section>
        )
      }
    </main>
  )
}
