import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import GoogleButton from 'react-google-button'

export const Login = () => {
  return (
    <>
      <div className='p-4 box'>
        <h2 className='mb-3'>Firebase Auth Login</h2>
        <Form onSubmit={() => {}}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Control
              type='email'
              placeholder='Email address'
              onChange={() => {}}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Control
              type='password'
              placeholder='Password'
              onChange={() => {}}
            />
          </Form.Group>

          <div className='d-grid gap-2'>
            <Button variant='primary' type='Submit'>
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        <div>
          <GoogleButton
            className='g-btn'
            type='dark'
            onClick={() => {}}
          />
        </div>
      </div>
      <div className='p-4 box mt-3 text-center'>
        Don't have an account? <Link to='/signup'>Sign up</Link>
      </div>
    </>
  )
}
