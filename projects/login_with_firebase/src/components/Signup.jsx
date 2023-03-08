import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Signup = () => {
  return (
    <>
      <div className='p-4 box'>
        <h2 className='mb-3'>Firebase Auth Signup</h2>
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
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className='p-4 box mt-3 text-center'>
        Already have an account? <Link to='/'>Log In</Link>
      </div>
    </>
  )
}
