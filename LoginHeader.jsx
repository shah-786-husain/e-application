import React from 'react'
import { Link } from 'react-router-dom';

function LoginHeader() {
  return (
    <>
    <div className='container-fluid'>
     <nav className="navbar navbar-expand-lg bg-danger fixed-top">
  <div className="container-fluid">
    <Link className="navbar-brand text-light fw-bold fst-italic"  to="#">Blood Bank Management System</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav ms-auto ">
       <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link active text-light" aria-current="page" to="/adminsignup">Admin Signup</Link>
        </li>
       </ul>
    </div>
  </div>
</nav>
</div>
    </>
  )
}

export default LoginHeader;