import React from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";

//import {Routes,Route} from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
// import Home from "./components/Home"

//import Home from "./pages/Home"
import PropertyDetails from './pages/PropertyDetails';
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import AdminSignUp from './pages/AdminSignUp';
import ForgotPassword from "./pages/ForgotPassword"
import Login from './pages/Login';
import Register from './pages/Register';


const App = () => {
  return (
  <div className='max-w-[1440px] mx-auto bg-white'>
  <div> 
    {/* <Register/> */}
  </div>
    <Header/>
    <BrowserRouter>
    <Routes>
      
      {/* <Route path="/home" element= { <Home/>} /> */}
      <Route path="/register" element= { <Register/>} />
      <Route path="/" element= { <Login/>} />
      <Route path='/property/:id' element={<PropertyDetails/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/signup" element={<Signup/>}/>

      <Route path="/Login" element={<Login/>}/>
      <Route path="/Register" element={<Register/>}/>


      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/AdminSignUp" element={<AdminSignUp/>}/>

   
 
    </Routes>
    </BrowserRouter>    
    <Footer/>
  </div>
  );
};

export default App;
