import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home2() {
const navigate=useNavigate();
  const handleClick=()=>{
    navigate("/form1");
  }
  return (
    <div style={{width:"30%" , height:"250px", border:"1 px solid red"}}>
         <lable htmlFor='name' >Name</lable>
      <input type='name'  id='name'/>
       <br/>
       <br/>
       <lable htmlFor='phone' >Phone</lable>
      <input type='text'  id='phone'/>
       <br/>
       <br/>
       <button type='' onClick={handleClick}>submit</button>

    
    </div>
  )
}

export default Home2;