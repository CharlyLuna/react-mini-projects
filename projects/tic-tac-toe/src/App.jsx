import './App.css'

// const TURNS = {
//   x: 'x',
//   o: 'o'
// }

const board = Array(9).fill(null)

export const App = () => {
  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <section className='game'>
        {board.map((cell, index) => (
          <div key={index}>
            <span>
              {JSON.stringify(cell)}
            </span>
          </div>
        ))}
      </section>
    </main>
  )
}
