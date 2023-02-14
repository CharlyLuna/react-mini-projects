import { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'
import { TURNS, WINNER_COMBOS } from '../utils/constants'
import { resetStorage, saveGameToStorage } from '../logic/storage'

const initialBoard = Array(9).fill(null)
const initialTurn = TURNS.X

export const useTicTacToe = () => {
  const [board, setBoard] = useState(initialBoard)

  const [turn, setTurn] = useState(initialTurn)

  const [winner, setWinner] = useState(null)

  useEffect(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    boardFromStorage ? setBoard(JSON.parse(boardFromStorage)) : setBoard(initialBoard)
    const turnFromStorage = window.localStorage.getItem('turn')
    setTurn(turnFromStorage ?? initialTurn)
  }, [])

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
    // Save game
    saveGameToStorage(newBoard, newTurn)
    // check if theres a winner
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    resetStorage()
  }

  return {
    board,
    winner,
    turn,
    updateBoard,
    resetGame
  }
}
