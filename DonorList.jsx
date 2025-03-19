import React from 'react'
import { Link } from 'react-router-dom';
import DonorData from './DonorData';

function DonorList() {
  return (
    <>
<div className='container-fluid'>
<div className='row'>
<div className='col-12'>
<nav className="navbar navbar-expand-lg bg-danger fixed-top">
<div className="container-fluid">
<Link className="navbar-brand text-white fw-bold fst-italic"  to="#">Blood Bank Management System</Link>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse " id="navbarNav">
<ul className="navbar-nav ms-auto mt-2">
<li className="nav-item ">
<Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
</li>
<li className="nav-item">
<Link className="nav-link active text-white" aria-current="page" to="/exchangebloodlist">Exchange Blood List</Link>
</li>
<li className="nav-item  ">
<Link className="nav-link active text-white" aria-current="page" to="/donorstoke">Donor Stoke</Link>
</li>
<li className="nav-item  ">
<Link className="nav-link active text-white" aria-current="page" to="/outbloodstoke">Out Blood Stoke</Link>
</li>
 <li className="nav-item">
          <Link className="nav-link active fw-bold" aria-current="page" to="/adminlogin">Logout</Link>
        </li>
</ul>
</div>
</div>
</nav>
</div>
</div>

</div>

<DonorData/>
<div className='container-fluid'> 
<div className='row mt-5'>
    <div className='col-12'>
<div className='container-fluid'>
<nav className="navbar navbar-expand-lg bg-danger">
<div className="container-fluid">
<ul className="navbar-nav mx-auto">
<li className="nav-item ">
<Link className="nav-link  text-white fst-italic">CopyRight@2024</Link>
</li>
</ul>
</div>

</nav>
</div>
</div>
</div>
</div>

    </>
  )
}

export default DonorList;