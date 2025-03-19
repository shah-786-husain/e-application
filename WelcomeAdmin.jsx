import React from 'react'
import logo2 from '../images/logo2.png';
import { Link } from 'react-router-dom';
function WelcomeAdmin() {
  return (
    <>
      <div className='container'>
      <div className='row'>
      <div className='col-12'>

      <h2 className='  mt-5'>Dashboard</h2>
      
      <span>Welcome Admin</span>

       </div>
       </div>
       <div className='row'>
      <div className='col-12'>
      <img src={logo2} className='img-fluid w-25 '  alt='blood-image'/>
       
      </div>
      </div>
  <div className="row">
    <div className="col-12">
    <ul className="nav flex-column">
  <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="/donorlist">Donor List</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/donorstoke">donor stoke</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/exchangebloodlist">Out blood List</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link " to="/outbloodstoke">Exchange blood List</Link>
  </li>
</ul>
    <div/>
    <div/>
    </div>
    
    
  </div>
  
      
      </div>
      
    </>
  )
}

export default WelcomeAdmin;