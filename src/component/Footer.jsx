import { MDBFooter } from 'mdb-react-ui-kit'
import React from 'react'


function Footer() {
    
  return (
    <>
    <MDBFooter bgColor='info' className='text-center text-lg-left text-white fixed-bottom'>
      <div className='text-center p-3' >
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white text-decoration-none' href='https://CREDApp.com/'>
          CRUDApp.com
        </a>
      </div>
    </MDBFooter>
    
    </>
  )
}

export default Footer