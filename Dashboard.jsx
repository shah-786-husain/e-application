import React from 'react'
import { Link } from 'react-router-dom';
import WelcomeAdmin from './WelcomeAdmin';

function Dashboard() {
  return (
    <>
   <div className='container-fluid '>
   <div className='row'>
    <div className='col-12'>
<nav className="navbar navbar-expand-lg bg-danger fixed-top">
<div className="container-fluid">
<Link className="navbar-brand text-white fw-bold fst-italic "  to="#">Blood Bank Management System</Link>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse " id="navbarNav">
<ul className="navbar-nav ms-auto ">
<li className="nav-item  ">
<Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
</li>
 <li className="nav-item ">
          <Link className="nav-link active fw-bold" aria-current="page" to="/adminlogin">Logout</Link>
        </li>
</ul>
</div>
</div>
</nav>
</div>
</div>
<div>
</div>
<div className='container-fluid  mt-5 w-75 h-50'>
<WelcomeAdmin/>
</div>
<div>
<div className='container-fluid'>
<div className='row'>
    <div className='col-12'>
<nav className="navbar navbar-expand-lg bg-danger">
<div className="container-fluid">
<ul className="navbar-nav">
<li className="nav-item ms-5 ">
<Link className="nav-link text-white" to="#">
<i className="fa-solid fa-phone"></i>&nbsp; +917906630474
</Link>
</li>
<li className="nav-item ms-3 ">
<Link className="nav-link text-white" to="#">
<i className="fa-regular fa-envelope"></i>&nbsp;
shahhusain1996@gmail.com
</Link>
</li>
<li className="nav-item ms-5">
<Link className="nav-link disabled text-white fst-italic" aria-disabled="true">CopyRight@2024</Link>
</li>
</ul>
</div>

</nav>
</div>
</div>
</div>
</div></div>

    </>
  )
}

export default Dashboard;