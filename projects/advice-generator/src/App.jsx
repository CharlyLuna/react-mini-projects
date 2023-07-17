import DividerMobile from './assets/pattern-divider-mobile.svg'
import DiceIcon from './assets/icon-dice.svg'
import { Attribution } from './components/Attribution'

export const App = () => {
  return (
    <>
      <main className='flex justify-center'>
        <div className='absolute top-1/2 -translate-y-1/2 flex flex-col md:w-[30%] justify-center gap-6 text-center bg-dark-grayish-blue m-6 py-10 rounded-md'>
          <h1 className='text-primary-green'>ADVICE #45</h1>
          <p className='text-xl px-6 md:px-12 text-primary-cyan'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sint quidem consequuntur a dolore sit, doloremque asperiores aliquid voluptas</p>
          <img className='px-6 md:px-12 pb-8' src={DividerMobile} alt='' />
          <button className='absolute flex bg-primary-green h-[70px] w-[70px] md:w-16 md:h-16 justify-center items-center rounded-full -bottom-[12%] left-1/2 -translate-x-1/2'>
            <img className='h-7 w-auto' src={DiceIcon} alt='' />
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
