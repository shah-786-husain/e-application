import React from 'react'
import { Link } from 'react-router-dom';

function SignupFooter() {
  return (
    <>
 <div className='container-fluid'>

<div className='row mt-4'>
    <div className='col-12'>
    <nav className="navbar navbar-expand-lg bg-danger">
  <div className="container-fluid">
      <ul className="navbar-nav mx-auto">
      <li className="nav-item ">
          <Link className="nav-link text-light" to="#">
          <i className="fa-solid fa-phone"></i>&nbsp; +917906630474
          </Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link text-light" to="#">
          <i className="fa-regular fa-envelope"></i>&nbsp;
          shahhusain1996@gmail.com
           </Link>
        </li>
      <li className="nav-item ms-5">
          <Link className="nav-link disabled text-light fst-italic" aria-disabled="true">CopyRight@2024</Link>
        </li>
        </ul>
    </div>

</nav>
</div>
</div>
</div>
 

    </>
  )
}

export default SignupFooter;