import React from 'react'
import './table.css'
import { FaRegSquarePlus } from "react-icons/fa6"
import { FaEllipsis } from "react-icons/fa6"
import spotify from '../images/spotify.png'
import stripe from '../images/stripe.png'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import axios from 'axios'
export const Table = () => {
  // <script>
  useEffect(() => {
    AOS.init();
  }, [])
  // AOS.init();
// </script>
  return (
    <div className='col-12 pb-2' >
        <p className='fw-bold m-0 mb-4 animate__animated animate__fadeInUp delay-4'style={{fontSize:"18px"}}>Transaction</p>
    <table className="col-12 " data-aos="zoom-in">
  <thead className=''  >
    <tr className='bx'>
      <th className="col py-2"> Operation</th>
      <th className="col">Purpose</th>
      <th className="col">Number</th>
      <th className="col">Invoice</th>
      <th className="col">Status</th>
      <th className="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr className='mt-6'>
      <td scope="row" className='py-3 d-flex align-items-center'> <div className='bg-dark rounded-circle me-2' style={{height:'33px',width:'33px'}}>
      <img src={stripe} alt="" className='img-fluid' />
        
        </div>  Stripe</td>
      <td>Deposit</td>
      <td>#734590</td>
      <td>-$370.00</td>
      <td>Pending <FaRegSquarePlus className='kp-o ms-2'/></td>
      <td><FaEllipsis/></td>
    </tr>
    <tr className='' >
      <td scope="row" className='py-3 d-flex align-items-center'> <div className='bg-white rounded-circle me-2' style={{height:'33px',width:'33px'}}>
      <img src={spotify} alt="" className='img-fluid' />
        
        </div>  Spotify</td>
      {/* <td scope="row" className='py-3'>Spotify</td> */}
      <td>Deposit</td>
      <td>#734590</td>
      <td>-$370.00</td>
      <td>Pending <FaRegSquarePlus className='kp-h ms-2'/></td>
      <td><FaEllipsis/></td>
    </tr>
     </tbody>
</table>
</div>
  )
}
