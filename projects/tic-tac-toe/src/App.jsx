import './App.css'
import { Square, WinnerModal } from './components/'
import { useTicTacToe } from './hooks/useTicTacToe'
import { TURNS } from './utils/constants'

export const App = () => {
  const { resetGame, updateBoard, board, turn, winner } = useTicTacToe()

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
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}
