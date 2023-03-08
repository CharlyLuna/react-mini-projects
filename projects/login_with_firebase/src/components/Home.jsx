import { Button } from 'react-bootstrap'

export const Home = () => {
  return (
    <>
      <div className='p-4 box mt-3 text-center'>Hello, welcom</div>
      <div className='d-grid gap-2'>
        <Button variant='primary'>Log out</Button>
      </div>
    </>
  )
}
