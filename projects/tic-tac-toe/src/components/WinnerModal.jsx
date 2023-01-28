import { Square } from './Square'

export const WinnerModal = ({ winner, resetGame }) => {
  if (winner === null) return null

  const winnerMessage = winner === false ? 'TIE' : 'The winner is:'

  return (
    <section className='winner'>
      <div className='text'>
        <h2>{winnerMessage}</h2>
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
