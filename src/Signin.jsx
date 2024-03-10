import React from 'react'
import { Login } from './Login'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './app.css'
import { getDatas } from './Datas'
import { Erorloading } from './Erorloading'
import Spinner from 'react-bootstrap/Spinner';
export const SignIn = () => {
  const [loading, setLoading] = useState(false)
  const [condition, setcondition] = useState(true)
  // const[reg,setReg]=useState([])
  const url = "https://65557ea384b36e3a431dce2b.mockapi.io/siswa"
  const [validated, setValidated] = useState(false)
  async function apia(email, password) {
    return await axios.get(url)
    .then(a => {
      let isi = a.data
      setLoading(false)
        let kk = isi.find((e) => e.email == email && e.password == password)
       if(kk != undefined) {
          setLoading(true)
          // getDatas(kk)
          localStorage.setItem('data', kk.email)
          setLoading(false)
          window.location.href = '/'
        }
        return kk
      })
    }
    
    function getapi(){
      return axios.get('https://dummyjson.com/users')
      .then(b=>{
        return b.data.users
      })
    }
    async function berhasil(email,password){
      let point=await getapi()
      setLoading(false)
      const feml= point.find((a)=>a.email==email && a.password==password)
      if(feml!=undefined){
        setLoading(true)
        // getDatas(feml.firstName)
        localStorage.setItem('data',feml.firstName)
        localStorage.setItem('img',feml.image)
        // setReg(feml)
        localStorage.setItem('datas',JSON.stringify(feml) )
        window.location.href='/'
      }
      // getDatas(feml)
      return feml
    }
    // async function ah(){
    //   let aw=await berhasil()
    //   getDatas(aw)
    // }
    // ah()
    // useEffect(()=>{
    // },[])
    // console.log( ah())
    // console.log(getDatas(berhasil()))
  return (
    <div className='bg-danger'>
      {loading == true ? <Erorloading /> : <></>}
      <Login judul='LOGIN' desk="Don't have account" dataa={apia} datadummy={berhasil} setloading={setLoading} validated={validated} setvalidated={setValidated} />
    </div>
  )
}
