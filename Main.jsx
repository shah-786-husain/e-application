import React from 'react'

function Main() {
  return (
    <div className='container-fluid mt-5'>
    <div className='row'>
    <div className='col-12 '>
    <div className='containter-fluid'>
    <span className='fw-bold'> Blood Bank Management System</span>
    </div>
<p >
Blood Bank Management System is a browser based solution that is designed to store, process, retrieve and analyze information concerned with the administrative, inventory management and clinical aspects of providing services within a blood bank. Donor Registration: The application allows the users to store the donor details in the application itself. As soon as a donor is registered, a unique identification number is assigned to him/her automatically which remains same throughout the life time of donor. Any subsequent donations made by the same donor automatically got linked up with the same identification number. Donor physical and medical details: System allows the user to store physical and medical details of the donor at the time of the registration which could later on be edited during the time of subsequent donations. Application also allows the users to check the eligibility criteria of the donors for making donations, depending on which a track of the deferred donors can be kept for the future referrals. TTI screening and Inventory management: The Application provides its users to organize and manage the inventory (Blood bags, blood component etc.) for their blood bank. User can store the records for blood bags present in the bank, the blood components created and imported in the bank. Every single unit/component will be assigned with a unique ID for which Bar code can be generated and can be pasted on the bags itself for later on identification. The end user is able to store the blood in quarantine till the time it has passed the TTI screening as per specified standards issued by NACO. After which the blood which has passed the tests will be moved to inventory with their unique identification numbers and the rejected blood will be processed to the discard samples for which the reports can be generated any time later on. Blood requisition and Cross matching: The Application allows the user to request for blood and blood transfusion for which the cross matching using the appropriate technique can be carried out and the results can further be processed and analyzed by the experts to issue the blood. Also various reports for blood requisition and the cross matching can be generated at run time. Secured environment and login facility: System provides the users a secured environment to work inside the application by accepting the log in ID’s and passwords from the users. Report generation: Various comprehensive reports can be generated any time by the end user to measure the performance parameters in the blood bank and also to analyses the inventory and other aspects in blood bank
</p>
  </div>
  </div>
    </div>
  )
}

export default Main;