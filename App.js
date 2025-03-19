import React from 'react'
import Home from './components/Home';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Dashboard from './components/Dashboard';
import DonorRegister from './components/DonorRegister';
import DonorRegisterForExchange from './components/DonorRegisterForExchange';
import OutBloodStoke from './components/OutBloodStoke';
import DonorList from './components/DonorList';
import DonorStoke from './components/DonorStoke';
import ExchangeBloodList from './components/ExchangeBloodList';
import AdminSignup from './components/AdminSignup';
import AdminLogin from './components/AdminLogin';
import Home2 from './components/Home2';
import Form1 from './components/Form1';
import SignupHeader from './components/SignupHeader';
import SignupFooter from './components/SignupFooter';
import LoginHeader from './components/LoginHeader';
import LoginFooter from './components/LoginFooter';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/adminlogin' element={<AdminLogin/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/adminsignup' element={<AdminSignup/>} />
        <Route path='/signupheader' element={<SignupHeader/>} />
        <Route path='/signupfooter' element={<SignupFooter/>} />
        <Route path='/loginheader' element={<LoginHeader/>} />

        <Route path='/loginfooter' element={<LoginFooter/>} />
      
        <Route path='/registerdonor' element={<DonorRegister/>} />
        <Route path='/exchangedonor' element={<DonorRegisterForExchange/>} />
        <Route path='/donorlist' element={<DonorList/>} />
        <Route path='/donorstoke' element={<DonorStoke/>} />
        <Route path='/exchangebloodlist' element={<ExchangeBloodList/>} />
        <Route path='/outbloodstoke' element={<OutBloodStoke/>} />
        <Route path='/home2' element={<Home2/>} />
        <Route path='/form1' element={<Form1/>} />


      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;