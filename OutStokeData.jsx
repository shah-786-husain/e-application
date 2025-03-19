import React from 'react'

function OutStokeData() {
  const outStokeData=[
    {
      bloodGroup:'A+', date:'20/10/2024'
    },
    {
      bloodGroup:'B+', date:'10/10/2024'
    },
    {
      bloodGroup:'B+', date:'10/10/2024'
    },
    {
      bloodGroup:'B+', date:'10/10/2024'
    },
    {
      bloodGroup:'B+', date:'10/10/2024'
    },
    {
      bloodGroup:'B+', date:'10/10/2024'
    },
    {
      bloodGroup:'B+', date:'10/10/2024'
    },
   ]
  return (
    <>
        <div className='container'>
        <div className='row mt-5'>
        <div className='col-md-6'>
        <div className='table-responsive'>
        <table className="table table-bordered border-secondary caption-top mt-2 text-center">
        <caption>
        <h2> Out Stoke Blood List </h2>

        </caption>
  <thead>
    <tr className='table-secondary'>
      <th scope="col">Blood Group</th>
      <th scope="col"> Date</th>
       </tr>
  </thead>
  
  {
    outStokeData.map((data)=>
      <tbody>
      <tr>
      <td>{data.bloodGroup}</td>
      <td>{data.date}</td>
      
     </tr>
  </tbody>

    )
  }
    
    
</table>
    
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default OutStokeData