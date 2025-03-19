import React from 'react'
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='container-fluid'>
    <div className='row'>
    <div className='col-12'>
     <nav className="navbar navbar-expand-lg bg-danger">
    <div className="container-fluid">
    
      <ul className="navbar-nav mx-auto">
      <li className="nav-item ">
          <Link className="nav-link text-white" href="#">
          <i className="fa-solid fa-phone"></i>&nbsp; +917906630474
          </Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link text-white" href="#">
          <i className="fa-regular fa-envelope"></i>&nbsp;
          shahhusain1996@gmail.com
           </Link>
        </li>
      <li className="nav-item">
          <Link className="nav-link disabled text-white fst-italic" aria-disabled="true">CopyRight@2024</Link>
        </li>
        
        </ul>
    </div>
  
</nav>
</div></div>
    </div>
  )
}

export default Footer;