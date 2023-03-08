import { Login } from './components/Login'
import { Signup } from './components/Signup'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Col, Container, Row } from 'react-bootstrap'

function App () {
  return (
    <Container>
      <Row>
        <Col>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  )
}

export default App
