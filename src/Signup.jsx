import React from 'react'
import { Login } from './Login'
import axios from 'axios'
import { Erorloading } from './Erorloading'
import { useEffect, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner';
import './app.css'
export const SignUp = () => {
    const url = "https://65557ea384b36e3a431dce2b.mockapi.io/siswa"
    const [loading, setLoading] = useState(false)
    const [validated, setValidated] = useState(false)
    async function getApi() {
        
        return await axios.get(url)
            .then(e => e.data)
    }
    async function berhasil(email, password) {
        if (email != '' && password != '') {
            let sus = await getApi()
            const dataBaru = sus.find((a) => a.email == email)
            if (dataBaru == undefined) {
                return await axios.post(url, {
                    email: email,
                    password: password
                })
                    .then(res => {
                        if (res.name == 'AxiosError') {
                            throw new Error('adsahd')
                        }
                        setLoading(false)
                        window.location.href = '/signin'

                    })
                } else if (dataBaru != undefined) {
                setLoading(false)
                setValidated(true)
                // alert('email sudah terigistrasi')
            }
        }
      
    }

    // <>
    // // async function datar(){

    // //    return await fetch('https://dummyjson.com/users')
    // //     .then(a=>a.json())
    // //     .then(a=>{
    // //         console.log(a.users)
    // //         return a.users
    // //     })
    // //     // return datas
    // // }
    // // async function  tmbh(an){
    // //     await fetch('https://65557ea384b36e3a431dce2b.mockapi.io/siswa',{
    // //         method: 'POST',
    // //         headers: { 'Content-Type': 'application/json' },
    // //         body:JSON.stringify(an)
    // //         // == isis.map((a)=>{
    // //             //         body: JSON.stringify(a )
                
    // //             //     })
    // //         })
    // //         .then(a=>a.json())
    // //         .then(a=>{
    // //             // console.log(a)
    // //             return a
    // //         })
    // //     }

    // //     async function fa(){
    // //         let isis=await datar()
    // //         isis.map(async(a)=>{
    // //             await tmbh(a)
    // //         })

    // //     }
    // // // console.log(isis)
    // // useEffect(()=>{
    // //     // datar()
    // //     // tmbh()
    // //     // fa()
    // // },[])
    // //   return axios.post('https://dummyjson.com/users',{
    // //   function postApi(){
    // //    return fetch('https://dummyjson.com/auth/login', {
    // //         method: 'POST',
    // //         headers: { 'Content-Type': 'application/json' },
    // //         body: JSON.stringify({

    // //           username: 'kminchelle',
    // //           password: '0lelplR',
    // //           // expiresInMins: 60, // optional
    // //         })
    // //       })
    // //       .then(res => res.json())
    // //       .then(console.log);
    // //   }
    // </>

    return (
        <div className='posiition-relative'>
            {
                loading === true ? <Erorloading /> : <></>
            }

            <Login judul='SIGN UP' desk='Back for login' dataa={berhasil} validated={validated} setloading={setLoading} />
        </div>
    )
}
