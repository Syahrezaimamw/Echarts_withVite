import React from 'react'
import { useEffect } from 'react'
import { useState, useRef } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import './app.css'
import { Erorloading } from './Erorloading'
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom'
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
export const Login = ({ desk, judul, dataa, datadummy, setloading}) => {


  const [eye, setEye] = useState(<FaEyeSlash />)
  const [steye, Setsteye] = useState(true)
  const [data, setData] = useState({
    email: '',
    password: ''
  })
  async function Tc(a, b) {
    try {
      await dataa(a, b)
      await datadummy(a,b)
    } catch (err) {
      console.log(err.message)
    }
  }
 
  const vali=useRef()
  const vali2=useRef()
  const vali3=useRef()
  function klikto(e) {
    Tc(data.email, data.password)
    if(data.email!=''&&data.password!=''){

      setloading(true)
    }  
      valid()
    e.preventDefault()
  }
  function valid(){
    if(data.password==''){
      vali2.current.classList.add('togl')
      vali3.current.classList.add('togleye')
    }else{
      vali2.current.classList.remove('togl')
      vali3.current.classList.remove('togleye')
    }
    if(data.email==''){
      vali.current.classList.add('togl')
    }else{
      vali.current.classList.remove('togl')
    }
  }

  function handle(e) {
    const newData = { ...data }
    newData[e.target.id] = e.target.value
    setData(newData)
  }

  const valuepw = useRef(null)
  function eyee() {
    setEye(<FaEye />)
    valuepw.current.setAttribute('type', 'teks')
    Setsteye(!steye)
    setTimeout(() => {
      setEye(<FaEyeSlash />)
      valuepw.current.setAttribute('type', 'password')
      Setsteye(!steye)
    }, 500)
  }
  return (
    <>
      <div className='cont-content bg-danger vh-100  d-flex justify-content-center align-items-center'>
        <div className='cont-from rounded-2 pt-4 bg-dan pb-3 px-3 col-sm-7 col-11 col-md-5 col-lg-4 col-xl-3'>
          <div className='d-flex mb-5 justify-content-center mb-3'>
            <p className='p-0 m-0 text-center fs-3   text-login' style={{ fontWeight: 500 }}>{judul}</p>

          </div>
          <form action="" className=' d-flex ass flex-column position-relative'  >
            <div className='position-relative mb-5 d-flex flex-column'>
              <label htmlFor="email">Email</label>
              <input type="email" onChange={(e) => handle(e)} className=' border-0 pt-1  position-relative' id='email' value={data.email} placeholder='' />
              <span className='m-0 p-0' ref={vali}></span>
            </div>
            <div className='position-relative mb-4  d-flex flex-wrap'>
              <label htmlFor="password" className='col-12'>Password</label>
              <input type="password" onChange={(e) => handle(e)} className=' border-0 pt-1 col-11' id='password' value={data.password} placeholder='' ref={valuepw} />
              <i className='col-1 eye  d-flex justify-content-center align-items-center ' onClick={eyee} ref={vali3}>{eye}</i>

              <span className='m-0 p-0 span2'ref={vali2}></span>
            </div>
            <p className='pas text-end position-relative'>forgot password?</p>
            <div className='d-flex mb-2 flex-column align-items-center mt-4'>
              <button onClick={(e) => klikto(e)} className='rounded-pill py-2  text-white'><Link className='text-white text-decoration-none' >{judul}</Link></button>
              {judul == 'LOGIN' ? <p className='sign-up '><Link to='/signup' className='sign-up text-decoration-none '>{desk}</Link></p> : <p className='sign-up '><Link className='sign-up text-decoration-none ' to='/signin'>{desk}</Link></p>}

            </div>
          </form>
        </div>
      </div>
      {/* <Form noValidate validated={validated} onSubmit={handleSubmit}>
  
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              defaultValue="Mark"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              defaultValue="Otto"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Button type="submit">Submit form</Button>
      </Form> */}

    </>
  )
}
