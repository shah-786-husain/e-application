import React from 'react'

function DonorData() {
  const donorData=[
    {
      name:'Arman Khan', fatherName:'Ashlam Khan', age:'25',phonenumber:'7907730476',
      address:'Deoband, Saharanpur, UP, 247554',
      email:'armankhan@gmail.com', city:'Saharanpur',bloodGroup:'O+',date:'06/10/2024'
    },
    {
      name:'Salman Khan', fatherName:'Yushuf Khan', age:'27',phonenumber:'7907730486',
      address:'Deoband, Saharanpur, UP, 247554',
      email:'salman@gmail.com', city:'Saharanpur',bloodGroup:'O-',date:'08/10/2024'
    },
    {
      name:'Salman Khan', fatherName:'Yushuf Khan', age:'27',phonenumber:'7907730486',
      address:'Deoband, Saharanpur, UP, 247554',
      email:'salman@gmail.com', city:'Saharanpur',bloodGroup:'O-',date:'08/10/2024'
    },
    {
      name:'Salman Khan', fatherName:'Yushuf Khan', age:'27',phonenumber:'7907730486',
      address:'Deoband, Saharanpur, UP, 247554',
      email:'salman@gmail.com', city:'Saharanpur',bloodGroup:'O-',date:'08/10/2024'
    },
    {
      name:'Salman Khan', fatherName:'Yushuf Khan', age:'27',phonenumber:'7907730486',
      address:'Deoband, Saharanpur, UP, 247554',
      email:'salman@gmail.com', city:'Saharanpur',bloodGroup:'O-',date:'08/10/2024'
    },
    {
      name:'Salman Khan', fatherName:'Yushuf Khan', age:'27',phonenumber:'7907730486',
      address:'Deoband, Saharanpur, UP, 247554',
      email:'salman@gmail.com', city:'Saharanpur',bloodGroup:'O-',date:'08/10/2024'
    },
    {
      name:'Salman Khan', fatherName:'Yushuf Khan', age:'27',phonenumber:'7907730486',
      address:'Deoband, Saharanpur, UP, 247554',
      email:'salman@gmail.com', city:'Saharanpur',bloodGroup:'O-',date:'08/10/2024'
    },
  ]
  return (
    <div className='container-fluid '>
    <div className='row'>
    <div className='col-md-12'>
   
    <div className='table-responsive'>
    <table className="table caption-top table-bordered border-secondary mt-5 text-center table-hover">
    <caption className='mt-5'>Donor List</caption>

  <thead>
    <tr className='table-primary'>
      <th scope="col">Name</th>
      <th scope="col">Father Name</th>
      <th scope="col">Age</th>
      <th scope="col">Phone number</th>
      <th scope="col">Address</th>
      <th scope="col">Email-Id</th>
      <th scope="col">City</th>
      <th scope="col">Blood Group</th>
      <th scope="col">Date</th>
      

    </tr>
  </thead>
  
  {
    donorData.map((data)=>
      <tbody>
      <tr>
      <td>{data.name}</td>
      <td>{data.fatherName}</td>
      <td>{data.age}</td>
      <td>{data.phonenumber}</td>
      <td>{data.address}</td>
      <td >{data.email}</td>
      <td>{data.city}</td>
      <td>{data.bloodGroup}</td>
      <td >{data.date}</td>
     </tr>
  </tbody>

    )
  }
    
    
</table>
    
    </div>
    </div>
    </div>
    </div>
    
    
  )
}

export default DonorData;