import React, { useState } from 'react';
import LoginHeader from './LoginHeader';
import LoginFooter from './LoginFooter';
import '../components/css/adminLogin.css';
import { useNavigate } from 'react-router-dom';





function AdminLogin() {
  // const handleSubmit=(e)=>{
  //   e.preventDefault();
  //  }
  const [email,setEmail]=useState();
  const [emailError,setEmailError]=useState(false);
  const emailRegex=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    const [password,setPassword]=useState();
    const [passwordError,setPasswordError]=useState(false);
    const passwordRegex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
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

  const navigate=useNavigate();

  const handleClick=()=>{
    navigate('/dashboard');
  }
  return (
   <>
 <LoginHeader/>
   
   <div className='container mt-5'>
    <div className='row '>
    <div className='col-md-12 mt-5'>
    <h3 className='mt-1 text-danger'>Login here</h3>
    </div>
    </div>
    <div className="row g-3 needs-validation text-secondary p-3   was-validated  " novalidate>
   <div className="col-10 col-sm-7 col-md-5 col-lg-4 col-xl-3 mx-auto">
    <div className='row'>
    <div className='col-md-12'>
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email" className="form-control form-control-sm "  id="email" value={email} onChange={handleEmail} aria-describedby="emailHelp" required/>
    </div>
    {emailError?<span className='text-danger'>Enter valid email</span>:null}
    </div>
    <div className='row'>
    <div className='col-md-12'>
    <label htmlFor="password" className="form-label mt-2">Password</label>
    <input type="password" className="form-control form-control-sm" id="password" value={password} onChange={handlePassword} required/>
    </div>
    {passwordError?<span className='text-danger'>Enter valid password</span>:null}
    </div>
    <div className='row'>
    <div className='col-12'>
    <button type="submit" className="btn btn-sm btn-danger mt-2" onClick={()=>handleClick()}>
    Login
   </button>
   </div>
   </div>
   </div>
</div>

</div>
    

<LoginFooter/>

    </>
  )
}

export default AdminLogin;