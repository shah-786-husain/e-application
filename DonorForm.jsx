import React, { useState } from 'react'

function DonorForm() {
  const [name, setName]=useState();
    const [nameError, setNameError]=useState(false);
    const [fatherName, setFatherName]=useState();
    const [fatherNameError, setFatherNameError]=useState(false);
   const [email, setEmail]=useState();
    const [emailError, setEmailError]=useState(false);
    const emailRegex=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    const [phoneNumber, setPhoneNumber]=useState();
    const [phoneError, setPhoneError]=useState(false);
    const phoneRegex= /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
    
    
    const handleName=(e)=>{ 
       let name=e.target.value;
       if(name.length<4){
         setNameError(true);
       }
        else{
          setNameError(false);
  
        }
        setName(name);
  
    }
        const handleFatherName=(e)=>{
          let fatherName=e.target.value;
          if(fatherName.length<4){
            setFatherNameError(true);
          }
          else{
            setFatherNameError(false);
  
        }
        setFatherName(fatherName);
  
    }
    const handleEmail=(e)=>{
      let email=e.target.value;
      if(emailRegex.test(email)){
        setEmailError(false);
      }
      else{
        setEmailError(true);
      }
      setEmail(email);
    }
    const handlePhone=(e)=>{
      let phone=e.target.value;
      if(phoneRegex.test(phone)){
        setPhoneError(false);
      }
      else{
        setPhoneError(true);
      }
      setPhoneNumber(phone);
    }
  
  return (
    <>

    <div className='container mt-5'>
    <div className='row '>
    <div className='col-md-12'>
    <h2 className='text-center mt-5 text-danger'>Donor register here</h2>
     
    <form className="row g-3 needs-validation text-secondary mt-2 p-3   was-validated " novalidate>
    <div className='row'>

  <div className=" col-md-4 ">
  <label htmlFor="name" className="form-label">Name</label>
 <input type="text" className="form-control form-control-sm is-valid" id="name" placeholder='Enter your name' required aria-label=".form-control-sm example" value={name} onChange={handleName}/>
    </div>
  {nameError?<span className='text-danger'>Enter valid name</span>:null}
    
  <div className=" col-md-4">

  <label htmlFor="fatherName" className="form-label">Father Name</label>
  <input type="text" className="form-control form-control-sm is-valid" id="fatherName" placeholder='Enter father name' aria-label=".form-control-sm example" value={fatherName} onChange={handleFatherName} required/>
    </div>
  {fatherNameError?<span className='text-danger'>Enter valid father name</span>:null}
    
  <div className=" col-md-4">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email-Id</label>
  <input type="email" className="form-control form-control-sm is-invalid"  id="exampleFormControlInput1" placeholder="Enter your email" aria-label=".form-control-sm example" value={email} onChange={handleEmail} required/>
</div>
  {emailError?<span className='text-danger'>Enter valid email</span>:null}

</div>



    <div className='row mt-3'>
   <div className=" col-md-4">
  <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>
  <input type="text" className="form-control form-control-sm is-valid" id="exampleFormControlInput1" placeholder="Enter the phone number" aria-label=".form-control-sm example" value={phoneNumber} onChange={handlePhone} required/>
   
</div>
  {phoneError?<span className='text-danger'>Enter valid phone number</span>:null}


  <div className="col-md-4">
  <label htmlFor="validationCustom02" className="form-label">Age</label>
  <input className="form-control form-control-sm is-invalid" type="number" placeholder="Enter age" aria-label=".form-control-sm example" required/>
</div>
  <div className=" col-md-4">
  <label htmlFor="validationCustom02" className="form-label">Select Date</label>
  <input className="form-control form-control-sm" type="date"  aria-label=".form-control-sm example" required/>
</div>
</div>
<div className='row mt-3'>
  <div className=" col-md-4">
<label htmlFor="exampleFormControlTextarea1" className="form-label">Address</label>
  <textarea className="form-control form-control-sm is-invalid" id="exampleFormControlTextarea1" placeholder='Enter your address' rows="2" required></textarea>
</div>
  <div className=" col-md-4">
    <label htmlFor="validationCustom04" className="form-label">Select City</label>
    <select className="form-select form-select-sm is-valid" id="validationCustom04" required>
      <option  value="">Select</option>
      <option value="Saharanpur">Saharanpur</option>
      <option value="Muzaffar Nagar">Muzaffar Nagar</option>
      <option value="Aligarh">Aligarh</option>
      <option value="Noida">Noida</option>
    </select>
    </div>
  {/* Blood Group Section */}
  <div className=" col-md-4">
    <label htmlFor="validationCustom04" className="form-label">Blood Group</label>
    <select className="form-select form-select-sm" id="validationCustom04" required>
      <option value="">Select</option>
      <option value="O+">O+</option>
      <option value="O-">O-</option>
      <option value="A-">A-</option>
      <option value="A+">A+</option>
      <option value="B+">B+</option>
      <option value="B-">B-</option>
      <option value="AB+">AB+</option>
   </select>
    </div>
  </div>
  
  <div className="col mt-3 ">
    <button className="btn btn-sm  btn-danger" type="submit">Signup</button>
  </div>
</form>
    </div>
    </div>
    </div>


    
    
    </>
  )
}

export default DonorForm;