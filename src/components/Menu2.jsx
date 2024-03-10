import React from 'react'
// fa6 FaRegSquarePlus
import './menu2.css'
import { FaAngleDown, FaBilibili, FaCalendar, FaRegCircleUser, FaImage, FaRegCalendarCheck, FaRegSquarePlus, FaAngleLeft } from "react-icons/fa6";
import { FaRegImage } from "react-icons/fa6";
import { FaEllipsisVertical } from "react-icons/fa6";
import { FaRegCircleRight } from "react-icons/fa6";
import { FaJoget } from "react-icons/fa6";
import { FaFoursquare } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa6";
import { One } from '../charts/One';
import jurnall from '../images/r.png'
import { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import ListGroup from 'react-bootstrap/ListGroup';
// import Overlay from 'react-bootstrap/Overlay';
// import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
export const Menu2 = ({ handle }) => {
    const userData = JSON.parse(localStorage.getItem('datas'));
    const pp = userData.image
    const firstName = userData.firstName
    useEffect(() => {
        AOS.init();
    }, [])
    const [show, setShow] = useState(false);
    const target = useRef(null);
    // document.body.style.filter='blur(5px)'
    return (
        <div className='h-100 w-100   d-flex justify-content-center' id='blur'>
            <div className=' col-9 position-relative' style={{ marginTop: '35px' }} >
                          
                <div className='d-flex flex-wrap'>
                    <div className='col-6 d-flex justify-content-start' style={{ borderRight: '1px solid gray' }}>
                        <button className='border-0 rounded-2 animate__animated animate__jello text-white px-3 d-flex align-items-center' style={{ backgroundColor: "rgb(52,83,205)", fontSize: "13px", letterSpacing: '0px' }}><FaRegSquarePlus className='me-2 ' /> Transaction</button>
                    </div>
                    <div className='col-6  d-flex justify-content-end align-items-center'>
                        <div className='animate__animated animate__rollIn rounded-circle me-4 d-flex justify-content-center align-items-center' style={{ width: '40px', height: "40px", border: '1px solid rgb(140, 139, 139)', }}>

                            <FaRegBell className='fs-5' style={{ color: 'rgb(99, 99, 99)' }} />

                            {/* <OverlayTrigger trigger="click" placement="left" overlay={popoverLeft}>
      <Button>Holy guacamole!</Button>
    </OverlayTrigger> */}
                        </div>
                        <div className='animate__animated animate__rollIn rounded-circle me-1 grd d-flex justify-content-center align-items-center' style={{ width: '40px', height: "40px", border: '1px solid rgb(140, 139, 139)', }}>

                            <OverlayTrigger
                                // className='bg-danger'
                                trigger="click"
                                placement='bottom'
                                overlay={
                                    <Popover className='p-0 m-0 pop ' style={{ width: '800px',boxShadow:"0px 0px 5px gray" }}>
                                        <Popover.Body>
                                            <div className='col-12   m-0 p-0' >
                                                <div className='col-12 pb-2 d-flex align-items-center justify-content-start bt' style={{  }}>
                                                    <div className='     rounded-circle d-flex align-items-center justify-content-center' style={{ height: '50px', width: "50px", border: "1px solid black" }}>
                                                        <img src={pp} className='img-fluid' style={{ width: '90%' }} alt="" />
                                                    </div>
                                                    <div className='ms-3 d-flex align-items-center clc justify-content-between'  >
                                                        <div>
                                                            <h6 className='m-0 fw-bold' style={{ fontWeight: 500 }}>{firstName} {userData.lastName}</h6>
                                                            <p className='m-0' >{userData.email}</p>
                                                        </div>
                                                        <FaEllipsisVertical className='m-0' style={{ fontSize: '18px' }} />
                                                    </div>
                                                </div>

                                                <div className=' mt-1'>
                                                    <OverlayTrigger
                                                        trigger="click"
                                                        //   key={placement}
                                                        placement='left'
                                                        overlay={
                                                            <Popover className='' >
                                                                <Popover.Header as="h3" className='bg-white'>Spesific My Data</Popover.Header>
                                                                <Popover.Body>
                                                                    <ListGroup>
                                                                        <ListGroup.Item>
                                                                        <strong className='me-2'>Gender :</strong>
                                                                        {userData.gender}
                                                                            </ListGroup.Item>
                                                                        <ListGroup.Item disabled>
                                                                            <strong className='me-2 text-black'
                                                                            
                                                                            >Weight :</strong>
                                                                            {userData.weight}
                                                                        </ListGroup.Item>
                                                                        <ListGroup.Item>
                                                                        <strong className='me-2'>Height :</strong>
                                                                        {userData.height}
                                                                        </ListGroup.Item>
                                                                        <ListGroup.Item>
                                                                            
                                                                        <strong className='me-2'>Age :</strong>
                                                                        {userData.age}
                                                                            </ListGroup.Item>
                                                                    </ListGroup>
                                                                </Popover.Body>
                                                            </Popover>
                                                        }
                                                    >
                                                        <Button variant='none' className='mt-2 p-0 rounded-0   d-flex align-items-center justify-content-between pb-2  m-0 w-100 bt' style={{border:'none',borderBottom:'1px solid  rgb(181, 178, 178)'}}>
                                                            <FaAngleLeft className='ms-2 text-black' style={{ fontSize: "18px", fontWeight: 200 }} />
                                                            <div className=' d-flex justify-content-end  align-items-center'>
                                                                <div className='me-3 ' style={{ fontSize: "14px", letterSpacing: "1px" }}>
                                                                    <p className='m-0 text-end text-black ' style={{ fontWeight: 500 }}>

                                                                        Details for my profile
                                                                    </p>
                                                                    <p className='m-0 text-end text-black' style={{ fontWeight: 400 }}>
                                                                        show in for it
                                                                    </p>

                                                                </div>
                                                                {/* <FaRegCircleUser style={{fontSize:"25px"}}/> */}
                                                            </div>
                                                        </Button>
                                                    </OverlayTrigger>
                                                </div>

                                                {/* <strong>Holy guacamole!</strong> Check this info. */}
                                            </div>
                                        </Popover.Body>
                                    </Popover>
                                }
                            >
                                <Button variant="" className=' p-0 rounded-circle d-flex align-items-center justify-content-center' style={{ width: '40px', height: "40px" }}>
                                    <img src={pp} alt="" className='img-fluid' style={{ width: '90%' }} />
                                </Button>
                            </OverlayTrigger>
                        </div>
                    </div>
                </div>
                <div className=' d-flex   gap-4 justify-content-between flex-wrap mt-4'>
                    <div className='col-5 animate__bounceIn ktk rounded-3' style={{ height: '127px', width: '127px' }}>
                        <div className='bg-white d-flex justify-content-center align-items-center rounded-circle mt-2 ms-2' style={{ width: '40px', height: '40px' }}>
                            <FaRegImage className='ic-menu2' />
                        </div>
                        <div className=' mt-4 ms-2'>
                            <p className='m-0 fw-bold '><b>$</b> 1.300,90</p>
                            <p className='m-0'>Shopping</p>
                        </div>
                    </div>
                    <div className='col-5 animate__bounceIn ktk rounded-3' style={{ height: '127px', width: '127px' }}>
                        <div className='bg-white d-flex justify-content-center align-items-center rounded-circle mt-2 ms-2' style={{ width: '40px', height: '40px' }}>
                            <FaBilibili className='ic-menu2' />
                        </div>
                        <div className=' mt-4 ms-2'>
                            <p className='m-0 fw-bold '><b>$</b> 1.000,00</p>
                            <p className='m-0'>Games</p>
                        </div>
                    </div>
                    <div className='col-5 ktk animate__bounceIn rounded-3' style={{ height: '130px', width: '130px' }}>
                        <div className='bg-white d-flex justify-content-center align-items-center rounded-circle mt-2 ms-2' style={{ width: '40px', height: '40px' }}>

                            <FaJoget className='ic-menu2' />
                        </div>
                        <div className=' mt-4 ms-2'>
                            <p className='m-0 fw-bold '><b>$</b> 6.700,90</p>
                            <p className='m-0'>Traveling</p>
                        </div>
                    </div>
                    <div className='col-5 animate__bounceIn ktk rounded-3' style={{ height: '127px', width: '127px' }}>
                        <div className='bg-white d-flex justify-content-center align-items-center rounded-circle mt-2 ms-2' style={{ width: '40px', height: '40px' }}>
                            <   FaFoursquare className='ic-menu2' />
                        </div>
                        <div className=' mt-4 ms-2'>
                            <p className='m-0 fw-bold '><b>$</b> 1.100,90</p>
                            <p className='m-0'>Food</p>
                        </div>
                    </div>
                    <div className='bg-white animate__animated animate__rubberBand see-all py-2 rounded-2 col-12 d-flex justify-content-center  align-items-center' onClick={handle} style={{ cursor: 'pointer' }}>
                        See All
                        <i className='ms-2' style={{ fontSize: '16px' }}>
                            <FaRegCircleRight className='position-relative' style={{ bottom: "1px" }} />
                        </i>
                    </div>
                </div>
                <div className='mt-4 rounded-2 animate__animated animate__fadeIn  position-relative' style={{ backgroundColor: "rgb(52,82,205)", height: '259px' }}>
                    <div className='position-absolute px-3 d-flex align-items-center justify-content-between w-100' style={{ left: '0', top: '23px' }}  >

                        <p className='fs-6 fw-bold text-white'>Savings</p>
                        <p className='text-white'><FaRegCalendarCheck /> 2022</p>
                    </div>
                    <div className='position-absolute px-2 w-100' style={{ top: '0px' }}>
                        <One />
                    </div>
                </div>
                <div className=' mt-3 rounded-2' data-aos="zoom-in" style={{ height: '163px', backgroundColor: "rgb(52,82,205)" }}>
                    <div className=' h-50 d-flex align-items-center py-2 px-3 ' style={{ borderBottom: '1px solid rgba(255,255,255,0.4)' }}>
                        <div className='bg-danger me-2 col-4 rounded-3 d-flex align-items-center' style={{ height: '80%' }}>
                            <img src={jurnall} className='img-fluid rounded-3 h-100' alt="" />
                        </div>
                        <p className='m-0 text-white' style={{ lineHeight: '20px', fontWeight: 500, fontSize: '15px' }}>What will happen to .... <br /> prices are rising</p>
                    </div>
                    <div className=' h-50 d-flex align-items-center px-3 py-2  ' >
                        <div className='bg-danger me-2 col-4 rounded-3 ' style={{ height: '80%' }}>
                            <img src={jurnall} className='img-fluid rounded-3 h-100' alt="" />
                            {/* <img src="" alt="" /> */}
                        </div>
                        <p className='m-0 text-white' style={{ lineHeight: '20px', fontWeight: 500, fontSize: '15px' }}>What will happen to .... <br /> prices decrease</p>
                    </div>

                    {/* <Four/> */}
                </div>
                {/* <div><Four/></div> */}
                {/* <div className='fw-bold text-center position-absolute w-100' style={{bottom:30}}>
                    Created by <a href="https://github.com/Syahrezaimamw/" className='text-decoration-none ' target="_blank"style={{color:"rgb(52,83,205)"}}>&copy;  Rimayu</a>
                </div> */}
            </div>
        </div>
    )
}
