import React, { useEffect, useRef, useState } from 'react'
import { One } from './charts/One'
import { Two } from './charts/Two'
import './app.css'
import './home.css'
import { Tree } from './charts/Tree'
import { FaAngleLeft,FaAngleRight, FaArrowDown, FaArrowUp, FaBorderAll, FaEllipsis, FaMagnifyingGlass, FaMinus, } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa6";
// import { FaWallet} from "react-icons/fa6";
import { Table } from './components/Table'
// import {getdatas} from'./Datas'
import { getDatas } from './Datas'
import { Menu2 } from './components/Menu2'
import { Sidebar } from './components/Sidebar'
export const Home = () => {
  const email = localStorage.getItem('data')
  const [sd,setSd]=useState('col-2 d-block ')
  const[conntainer,setContainer]=useState('d-flex w-100')
  const [angel,setAngel]=useState(<FaAngleLeft/>)
  const [condition,setCondition]=useState(true)
  const side=useRef('col-2 d-block')
  
  function Dr(e){
    if(condition==true){
      e.target.classList.add('sideDom')
      // setSd('d-none')
      setSd('d-none')
      setCondition(!condition)
      setAngel(<FaAngleRight/>)
    }else{
      e.target.classList.remove('sideDom')
      // e.target.style.left=-23
      setSd('d-block col-2' )
      setCondition(!condition)
      
      setAngel(<FaAngleLeft/>)
      // setSd('col-2 d-flex')
    }
  }
  const ch=useRef(null)
  // sds.current.classList.toggle('hilang-dom')
  // side.current.style.display='none'
  const sa=document.querySelector('.side-ini')
  function hnd(){
   setContainer('d-flex w-100 animate__animated animate__fadeOutLeftBig')
   setTimeout(()=>{
    window.location.href='/homedua'
   },590)
  }
  const sds=useRef(null)


  document.body.style.backgroundColor = 'rgb(242,242,245)'
  return (
    <div className={conntainer} ref={ch}>
      <div className={sd} ref={side}>
        <Sidebar />
      </div>
      <div className='w-100 px-5 position-relative'>
       <div className='side rounded-circle  d-flex justify-content-center align-items-center position-absolute fs-5' style={{height:'50px',width:'50px',top:25}} onClick={Dr}>
      {angel}
       </div>
        <div className=' d-flex flex-column justify-content-end' style={{ marginTop: '40px' }}>
          <div className='d-flex align-items-center'>

            <h4 className='m-0 fs-2 fw-bold animate__animated animate__fadeIn' style={{ color: 'rgb(12,20,77)' }}>Dashboard</h4>
            <div className='d-flex py-1 ms-5'>
              <div className=' ps-2 pe-2'><FaMagnifyingGlass /></div>
              <input type="text" className='border-0' placeholder='Search' style={{ backgroundColor: "transparent" }} />
            </div>
          </div>
          <div>
            <div className=' rounded-3 mt-5 py-4 d-flex animate__animated animate__fadeIn  ' style={{ height: '147px', backgroundColor: 'rgb(12,20,77)' }}>
              <div className='h-100 col-4 position-relative' style={{ borderRight: "1px solid white" }}>
                {/* <div className=' bg-danger' style={{height:'200px'}}> */}
                <Two />
                {/* </div> */}
              </div>
              <div className='h-100 col-4 d-flex justify-content-center' style={{ borderRight: "1px solid white" }}>
                <div className=' nonhilang flex-column justify-content-between col-10' ref={sds}>
                  <div className=''><FaRegCreditCard className='text-white fs-5 position-relative' style={{ bottom: '2px' }} /></div>
                  <div className=' '>
                    <div className='text-white d-flex d-flex align-items-center  fs-3' style={{ fontWeight: "500" }}><b className='me-2'>$</b> 12.567,90 <div className=' ms-3 d-flex justify-content-center align-items-center rounded-circle mt-1' style={{ height: '18px', width: "18px", backgroundColor: 'rgb(97,126,233)' }}><FaArrowUp className=' text-black' style={{ fontSize: "10px" }} />
                    </div>
                    </div>
                    <div className='d-flex  align-items-center '>
                      <div className='bg-white position-relative ' style={{ top: '2px', width: '9px', height: '9px', borderRadius: '2px' }}></div>
                      <p className='m-0 p-0 ps-2 ' style={{ color: 'rgba(255,255,255,0.7)' }}>Income</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='h-100 col-4 d-flex justify-content-center'>
                <div className=' d-flex flex-column justify-content-between col-10'>
                  <div className=' '><FaRegBookmark className='text-white  position-relative fs-5' style={{ bottom: '2px' }} /></div>
                  <div className=' '>
                    <div className='text-white d-flex d-flex align-items-center  fs-3' style={{ fontWeight: "500" }}><b className='me-2'>$</b> 10.387,13 <div className=' ms-3 d-flex justify-content-center align-items-center rounded-circle mt-1' style={{ height: '18px', width: "18px", backgroundColor: 'rgb(229,106,80)' }}><FaArrowDown className=' text-black' style={{ fontSize: "10px" }} />
                    </div>
                    </div>
                    <div className='d-flex align-items-center '>
                      <div className='position-relative d-flex justify-content-center align-items-center ' style={{ top: '2px', width: '10px', height: '10px', borderRadius: '2px' }}><FaBorderAll style={{ color: 'rgba(255,255,255,0.7)' }} /></div>
                      <p className='m-0 p-0 ps-2 ' style={{ color: 'rgba(255,255,255,0.7)' }}>Expences</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
            <div className=' d-flex justify-content-between contain-2 mt-4'>
              <div className='d-flex animate__animated delay-1 animate__fast animate__fadeInLeft '>
              <p className='m-0 p-0 fw-bold me-4 position-relative mb-0'style={{fontSize:"18px",bottom:'2px'}}> Expances</p>
              <div className='d-flex align-items-center me-4'style={{height:'fit-content'}}>
              <i className='d-flex align-items-center position-relative me-2' style={{top:"1px"}}><FaMinus style={{color:'rgb(12,20,77)'}}/></i>
                <p className='m-0 p-0'>Income</p>
              </div>
              <div className='d-flex  align-items-center' style={{height:'fit-content'}}>
              <i className='d-flex  align-items-center position-relative me-2' style={{top:"2px"}}><FaEllipsis/></i>
                <p className='m-0 p-0  ' >Expances</p>
              </div>
              </div>
              <div className='d-flex align-items-center animate__animated animate__fast delay-3 animate__fadeInRight  rounded-3 ' style={{border:"1px solid rgba(12,20,77,0.4) ",padding:'3px 3px 3px 4px'}}>
                <p className='m-0 me-1 ymd'>Year</p>
                <p  className='m-0 me-1 ymd'> Mounth</p>
                <p  className='m-0 text-white ymd px-2 rounded-2 py-1' style={{backgroundColor:'rgb(52,83,205)'}}>Day</p>
              </div>
            </div>

            <div className=' position-relative col-12  animate__animated delay-4  animate__fadeIn'>
              {/* p */}
              <Tree/>
            </div>
            <div className='mt-5 ' >
              <Table></Table>
            </div>
      </div>
      <div className='col-3 bg-white'>
        <Menu2 handle={hnd}/>
      </div>

    </div>
  )
}
