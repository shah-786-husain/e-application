import React from 'react'
import { useNavigate } from 'react-router-dom';

function Form() {
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate(-1);
  }
  return (
    <div style={{width:"30%" , height:"250px", border:"1 px solid red"}}>
      <lable htmlFor='email' >Email</lable>
      <input type='email'  id='email'/>
       <br/>
       <br/>
       <lable htmlFor='pass' >Password</lable>
      <input type='password'  id='pass'/>
       <br/>
       <br/>
       <button type='' onClick={handleClick}>submit</button>

    </div>
  )
}

export default Form;