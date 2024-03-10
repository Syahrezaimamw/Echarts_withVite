import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
export const Erorloading = () => {
  return (
    <div><div className='position-absolute w-100 h-100  d-flex justify-content-center align-items-center'style={{backgroundColor:'rgba(0,0,0,0.5)',zIndex:99}}> <Spinner animation="border" className='load'  variant="" /></div></div>
  )
}
