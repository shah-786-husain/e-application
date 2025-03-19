import React from 'react'
import '../components/css/slider.css';
import img1 from '../images/img1.jpg';
import Logo1 from '../images/Logo1.png';
import logo3 from '../images/logo3.jpg';
function Slider() {
  return (
    <div className='container'>
    <div className='row mt-5'>
    
    <div className='col-md-12 mt-5'>
    <div id="carouselExampleRide" className="carousel slide sm-mt-5 mt-4 " data-bs-ride="true" >
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className="img-fluid  d-block " alt="donor-image"/>
    </div>
    <div className="carousel-item">
      <img src={Logo1} className="img-fluid  d-block " alt="life-image"/>
    </div>
    <div className="carousel-item">
      <img src={logo3} className="img-fluid d-block" alt="blood-image"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
</div>
</div>




  
  )
}

export default Slider;