import DividerMobile from './assets/pattern-divider-mobile.svg'
import DividerDesktop from './assets/pattern-divider-desktop.svg'
import DiceIcon from './assets/icon-dice.svg'
import { Attribution } from './components/Attribution'
import { useAdvice } from './hooks/useAdvice'

export const App = () => {
  const { advice, id, isLoading, getNewRandomAdvice } = useAdvice()

  return (
    <>
      <main className='flex justify-center'>
        <div className='absolute top-1/2 -translate-y-1/2 flex flex-col justify-center w-full max-w-md md:max-w-lg gap-6 text-center bg-dark-grayish-blue m-6 py-10 rounded-md'>
          <h1 className='text-primary-green'>ADVICE #{id}</h1>
          <p className='text-2xl px-6 md:px-12 text-primary-cyan'>{isLoading ? '...' : `“${advice}”`}</p>
          <img
            className='px-6 md:hidden pb-8' src={DividerMobile} alt=''
          />
          <img className='px-10 hidden md:block pb-8' src={DividerDesktop} alt='' />

          <button onClick={getNewRandomAdvice} className='dice-button'>
            <img className='h-7 w-auto' src={DiceIcon} alt='dice icon' />
          </button>
        </div>
      </main>
      <footer className='absolute flex justify-center bottom-0 w-full'>
        <Attribution />
      </footer>
    </>
  )
}

export default App
