import React from 'react'
import { FaAngleLeft,FaRegClock, FaRegFile,} from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { FaRegCircleRight } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import { FaRegHardDrive } from "react-icons/fa6";
import { FaPadlet } from "react-icons/fa6";
import { FaRegFileLines } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa6";
import levro from '../images/levro.png'
export const Sidebar = () => {
  return (
    <div className='sidebar position-relative  h-100 w-100' style={{backgroundColor:'rgb(242,242,245)',borderRight:'1px solid rgb(12,20,77)',cursor:'pointer'}}>
   
      {/* //menu */}
  <div className='h-100  d-flex flex-column justify-content-start'>
    <div className='logo  d-flex justify-content-start ' >
      <div className='col-7 d-flex justify-content-center align-items-center ' style={{marginTop:'35px',marginLeft:"43px"}}>
      {/* <img src={levro} alt="" className='img-fluid  ' /> */}
      <h1 className='fw-bold m-0' >Logo <sub className=''><FaPadlet className='position-relative' style={{bottom:'20px',color: "rgb(52,83,205)"}}/></sub> </h1>

      </div>
    </div>
    <div className='menu  ' style={{marginTop:'60px'}} >
      <ul className='list-unstyled' style={{marginLeft:"40px"}}>
        <li><i className=''><FaHouse className='' style={{color:'rgb(52,83,205)'}}/></i>Dashboard</li>
        <li><i className=''><FaRegCreditCard className=''/></i>Cards</li>
        <li><i className=''><FaRegCircleRight className=''/></i>Send Money</li>
        <li><i className=''><FaRegStar className=''/></i>Tasks</li>
        <li><i className=''><FaRegClock className=''/></i>HIstory</li>
        <li><i className=''><FaRegUser className=''/></i>Users</li>
        <li><i className=''><FaRegFile className=''/></i>Documents</li>
      </ul>
      <ul className='list-unstyled mt-5' style={{marginLeft:"40px"}}>
        <li className='libdg'><a><i><FaRegHardDrive/></i> Task</a> <div className='bdg'>3</div></li>
        <li className='libdg'><a><i><FaRegCreditCard/></i>Payments</a> <div className='bdg'>3</div></li>
        <li className='libdg'><a><i><FaRegFileLines/></i>Project</a> <div className='bdg'>7</div></li>
      </ul>
    </div>
  </div>
  </div>
  
  )
}
