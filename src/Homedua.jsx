import React from 'react'
import './home.css'
import { Sidebar } from './components/Sidebar'
// import Bar from './charts2/bar'
import { Bullet } from './charts2/Bullet'
import { Br } from './charts2/Br'
import { Tr } from './charts2/Tr'
import { FaMinus, FaPlus, FaServer,FaDatabase,FaCoins,FaEllipsis } from "react-icons/fa6";
export const Homedua = () => {
    document.body.style.backgroundColor = 'rgb(242,242,245)'
    return (
        <div className=' homedua vh-100 d-flex animate__animated animate__faster animate__fadeInRightBig' >
            <div className='col-2 vh-100 '> <Sidebar /></div>
            <div className='w-100 px-5 d-flex  flex-column justify-content-start align-items-center vh-100'>
                <div className='d-flex m col-11 gap-4 flex-wrap  ' style={{marginTop:'40px'}} >
                    <div className='col-12  d-flex justify-content-between'>
                        <div>
                            <h2 className='fw-bold m-0 mb-2' style={{ color: 'rgb(12,20,77)' }}>Sales</h2>
                            <p className='m-0'>Welcome to dashboard</p>
                        </div>
                        <div className='h-100 d-flex align-items-end'>
                            <button className='d-flex align-items-center text-white fw-bold rounded-1 py-2 px-3 border-0' style={{ backgroundColor: "rgb(52,83,205)", fontSize: "13px", letterSpacing: '0px' }}><FaPlus className='me-2' /> Add Widget</button>
                        </div>
                    </div>
                </div>
                <div className='col-11 d-flex justify-content-start '>

                    <div className='col-5   mt-5 ' style={{ height: "510px", alignSelf: 'start', }}>
                        <Tr/>

                    </div>
                    <div className=' mt-5 w-100' style={{ height: "510px" }}>
                        <div className=' d-flex justify-content-center' style={{ height: '70%' }}>
                            <div className='col-6 d-flex justify-content-center align-items-end h-100  border-1' style={{ }}>
                                <Br />
                            </div>

                            <div className='col-6 h-100 border-1 d-flex justify-content-center align-items-end' style={{ }}>
                                <Bullet />
                            </div>

                        </div>

                        <div className='d-flex justify-content-center  align-items-end gap-4' style={{  height: '30%' }}>
                            <div className='bggr-h  py-3 rounded-2 d-flex align-items-start' style={{ width: "280px", height: '80%' }}>
                                <div className='ms-3 w-100 d-flex flex-column justify-content-between  h-100 '>
                                    <div className='w-100  d-flex align-items-center'>
                                        <div className='rounded-2 gr gr-h text-white' style={{}}>+12%</div>
                                        <p className='m-0 ms-2 h-100 last'>from last Mounth</p>

                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <FaDatabase style={{fontSize:'18px'}} />
                                        <h4 className='m-0 ms-2'>$ 759</h4>
                                    </div>
                                    <p className='m-0 d-flex align-items-end justify-content-between clr  '>Total revenue
                                    <FaEllipsis className='me-4 text-white fs-5'/></p>


                                </div>
                            </div>
                            <div className='bggr-p rounded-2 d-flex align-items-start py-3 ' style={{ width: "280px", height: '80%' }}>
                                {/* <div className='rounded-circle ' style={{width:"45px", height:'45px',backgroundColor:'aqua'}}></div> */}
                                <div className='ms-3 d-flex flex-column justify-content-between w-100 h-100'>
                                    <div className='w-100  d-flex align-items-center' >
                                        <div className='rounded-2  gr gr-p' style={{}}>+20%</div>
                                        <p className='m-0 ms-2 h-100 last'>from last Year</p>

                                    </div>
                                    <div className='d-flex  align-items-center'>
                                        <FaCoins className='clr' style={{fontSize:'18px'}} />
                                        <h4 className='m-0 ms-2 clr'  >$ 689</h4>
                                    </div>
                                    <p className='m-0 d-flex align-items-end justify-content-between clr  '>Total revenue
                                    <FaEllipsis className='me-4 text-white fs-5'/></p>


                                </div>
                            </div>
                            {/* <div></div> */}
                        </div>
                    </div>
                </div>
                {/* <div className='col-4 bg-warning' style={{ height: '200px' }}>p</div>
                    <div className='col-4 bg-success' style={{ height: '200px' }}>p</div>
                    <div className='col-3 '>p</div>
                    <div className='col-3 bg-info'>p</div>
                    <div className='col-4 bg-warning' style={{ height: '200px' }}>p</div>
                    <div className='col-4 bg-success' style={{ height: '200px' }}>p</div> */}
            </div>
        </div>
    )
}
