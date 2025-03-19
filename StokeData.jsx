import React from 'react'

function StokeData() {
 const stokeData=[
  {
    bloodGroup:'A+', bloodUnitQuantity:'2U'
  },
  {
    bloodGroup:'B+', bloodUnitQuantity:'1U'
  },
  {
    bloodGroup:'B+', bloodUnitQuantity:'1U'
  },
  {
    bloodGroup:'B+', bloodUnitQuantity:'1U'
  },
  {
    bloodGroup:'B+', bloodUnitQuantity:'1U'
  },
  {
    bloodGroup:'B+', bloodUnitQuantity:'1U'
  },
  {
    bloodGroup:'B+', bloodUnitQuantity:'1U'
  },
 ]
  return (
    <>
      <div className='container'>
      <div className='row'>
      <div className='col-md-6'>
      
      <div className='table-responsive'>
     <table className="table table-bordered border-secondary  mt-5 caption-top text-center table-hover">
    <caption className='mt-5 bordered border-danger'>Blood Stoke List</caption>

  <thead>
    <tr className='table-secondary'>
      <th scope="col">Blood Group</th>
      <th scope="col"> Blood Unit quantity</th>
       </tr>
  </thead>
  
  {
    stokeData.map((data)=>
      <tbody>
      <tr>
      <td>{data.bloodGroup}</td>
      <td>{data.bloodUnitQuantity}</td>
      
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

export default StokeData;