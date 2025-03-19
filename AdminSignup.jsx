import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignupHeader from './SignupHeader';
import SignupFooter from './SignupFooter';


function AdminSignup() {
    const [name, setName]=useState();
  const [nameError, setNameError]=useState(false);
 const [email, setEmail]=useState();
    const [emailError, setEmailError]=useState(false);
    const emailRegex=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    const [phoneNumber, setPhoneNumber]=useState();
    const [phoneError, setPhoneError]=useState(false);
    const phoneRegex= /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
     const [password,setPassword]=useState();
        const [passwordError,setPasswordError]=useState(false);
        const passwordRegex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
      
      
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
      const handlePassword=(e)=>{
        let password=e.target.value;
        if(passwordRegex.test(password)){
          setPasswordError(false);
        }
        else{
          setPasswordError(true);
        }
        setPassword(password);
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

  const navigate=useNavigate();
// const userDetails={
//   name:"",
//   phone:"",
//   email:"",
//   password:""
// }
// const [data,setData]=useState(userDetails);
//   const handleInput=(e)=>{
//    const name=e.target.value;
//    const value=e.target.value;
//    console.log(name);
//    console.log(value);
//    setData({...data, [name]:value})
//   }
  
  // const handleSubmit=(e)=>{
  //  e.preventDefault();
  //  localStorage.setIteme("user",JSON.stringify(data))
  
  const handleClick=()=>{
   navigate("/adminlogin");
  }
  //   const handleSubmit=()=>{
  //  navigate("/adminlogin");

  //   }
  return (
    <>
  <SignupHeader/>
   <div className='container mt-5'>
   <div className="row mt-5">
   <div className="col-md-6 mt-5">
<h3 className='mt-3 text-danger'> Register here</h3>
</div>
</div>
 <div className=" row g-3 needs-validation text-secondary p-3   was-validated" novalidate>
<div className=" col-sm-8 col-md-6 col-lg-5 col-xl-5">
<label htmlFor="exampleInputName" className="form-label">Name</label>
 <input type="text" name='name'  className="form-control  form-control-sm " id="exampleInputName" aria-describedby="NameHelp" value={name} onChange={handleName} required/>
</div>
{ nameError?<span className='text-danger'>Name must be 4 characters</span>:null}
 <div className="col-sm-8 col-md-6 col-lg-5 col-xl-5">
  <label htmlFor="exampleInputPhone" className="form-label">Phone Number</label>
   <input type="text"  name='phone'     className="form-control form-control-sm" id="exampleInputPhone" aria-describedby="PhoneHelp" value={phoneNumber} onChange={handlePhone} required/>
</div>
   {phoneError?<span className='text-danger'>Enter valid phone number</span>:null}
  <div className="col-sm-8 col-md-6 col-lg-5 col-xl-5">

    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
      <input type="email"  name='email'  className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={handleEmail} required/>
</div>
{emailError?<span className='text-danger'>Enter valid email</span>:null}
<div className="col-sm-8 col-md-6 col-lg-5 col-xl-5">

    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" name='password'  className="form-control form-control-sm  " id="exampleInputPassword1" value={password} onChange={handlePassword} required />
      </div>
      {passwordError?<span className='text-danger'>Enter valid password</span>:null}
      <div className="col-12">
   <button type="submit"   className="btn btn-sm btn-danger  mt-3" onClick={()=>handleClick()}>
    Signup
    </button>
  </div>

  </div>
  </div> 
  
  <SignupFooter/>

</>
  )
}

export default AdminSignup;