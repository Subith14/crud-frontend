import React from 'react'
import { Container, Navbar } from 'react-bootstrap'


function Header() {
  return (
    <>
    <Navbar className="bg-info ">
        <Container className='d-flex justify-content-center fw-bold'>
          <Navbar.Brand  className='fs-2 text-white'>CRUD APPLICATION</Navbar.Brand>
        </Container>
      </Navbar>
    
    </>
  )
}

export default Header