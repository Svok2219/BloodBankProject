import React, { useState } from 'react';
import {
    BrowserRouter as Router,
     Routes,
    Route,
    Link
  } from "react-router-dom";
  import './Login.css';
  import Button from '@mui/material/Button';
  import { useContext } from 'react';
  import {  useHistory, useLocation } from 'react-router-dom';

  import { Context } from '../../App';

  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";
import firebaseConfig from './firebase.config';
const Login = () => {
  const [Regmode,setRegmode]= useState(false);
const openReg =()=>{
  setRegmode(true);
const google = document.getElementById('google');
google.style.display='none';
const FB = document.getElementById('fb');
FB.style.display='none';
const CardMain0 = document.getElementById('cardFirst');
CardMain0.style.display='none';
const CardMain = document.getElementById('cardSecond');
CardMain.style.display='block';

}





//Authenitaaction start from here
  const location = useLocation();
  const History = useHistory();  
  const[Loggedin,setLoggedin]=useContext(Context)

    const SubmitFrom = () =>{
    setLoggedin(true)
    }

  
   if (Loggedin == true) {
      const { from } = location.state || { from: { pathname: "/" } };
      History.replace(from)
    }


    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);


  return (
        <div class=" vH-100 vh-100 overflow-auto overflow-md-hidden ">
            <nav class="navbar navbar-expand-lg navbar-light  px-5 py-3 " style={{backgroundColor:"#E5E5E5;"}}>
        <Link to="/" class="navbar-brand font-weight-bolder text-dark" style={{fontSize:"30px"}} >agn..IV</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div class="navbar-nav ml-auto font-weight-bold ">
            <Link to="/AskHelp" class="nav-link active mx-4 font-weight-bold" style={{color:"#EF4848"}} href="#">need blood? <span class="sr-only">(current)</span></Link>
            <Link  class="nav-link mx-4 font-weight-bold" style={{color:"#EF4848"}}  to="/Donors">Donors</Link>
            <Link  class="nav-link mx-4 font-weight-bold" style={{color:"#EF4848"}} to="/Applications" >Requests</Link>
            <Link to="/HelpSomeone" class="nav-link  mx-4 font-weight-bold" style={{color:"#EF4848"}}   >Wanna help?</Link>
            <Link to="/Login"><a class=""><button style={{borderRadius:"5px",backgroundColor:"#EF4848",color:"white",height:"46px",letterSpacing:"3px"}} class="btn loginBtn mx-4 px-4 w-75 w-md-
            " type="button" >
         Login
        </button></a> </Link> 
          </div>
        </div>
      </nav>

      <div class="LoginBody px-3 px-md-0    " align = "center"  alignItems = "center" >
      <div class="loginCard col-md-6 col-sm-12 mt-5  p-5"  id="CardMain0" >
      {Regmode ?  <h3 class="text-left text-black" style={{fontWeight:"bold",fontFamily: "Montserrat",fontStyle: "normal",fontSize:"30px",letterSpacing:"1px" }}>Create an Account</h3>
:    <h3 class="text-left text-black" style={{fontWeight:"bold",fontFamily: "Montserrat",fontStyle: "normal",fontSize:"40px",letterSpacing:"1px"        }}>Login</h3>
}

<div id="cardFirst">
<form action="">
  <div class="mb-3 mt-3 text-left">
    <label for="email" class="form-label">Email:</label>
    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
  </div>
  <div class="mb-3 text-left">
    <label for="pwd" class="form-label">Password:</label>
    <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
  </div>
  <div class="form-check my-3 inline-flex
d-md-flex justify-content-between ">
    <label class="form-check-label px-1 px-md-2" style={{cursor:"pointer"}}>
      <input class="form-check-input" type="checkbox" name="remember"/> Remember me
    </label>
    <span class="px-1 px-md-2" style={{cursor:"pointer",color:"#EA4335"}}>Forgot Password?</span>
  </div>
  <Button onClick={()=>SubmitFrom()} class="btn text-white  w-100 w-md-50 py-3 text-center my-3"  style={{backgroundColor:"#EF4848",fontSize:"24px",letterSpacing:"5px",fontWeight:"600"}} >Submit</Button>
<h5  onClick={()=>openReg()}>Dont have an account? <span style={{cursor:"pointer",color:"#EA4335"}}>Create an Acoount</span></h5>
</form>
</div>

<div id="cardSecond" style={{display:'none'}}>
<form action="">
  <div class="mb-3 mt-3 text-left">
    <label for="Name" class="form-label">Full Name:</label>
    <input type="text" class="form-control" id="email" placeholder="Enter Full Name" name="Name"/>
  </div>
  <div class="mb-3 text-left">
    <label for="password" class="form-label">Password:</label>
    <input type="password" class="form-control" id="password" placeholder="Enter password" name="password"/>
  </div>
  <div class="mb-3 text-left">
    <label for="email" class="form-label">E-mail:</label>
    <input type="email" class="form-control" id="email" placeholder="Enter E-mail" name="email"/>
  </div>
  <div class="mb-3 text-left">
    <label for="BG" class="form-label">Blood Group:</label>
    <input type="BG" class="form-control" id="BG" placeholder="Enter Your BG" name="BG"/>
  </div>
  <div class="mb-3 text-left">
    <label for="Address" class="form-label">Address:</label>
    <input type="text" class="form-control" id="Address" placeholder="Enter your Address" name="Address"/>
  </div>
  <div class="mb-3 mt-3 text-left">
    <label for="FBURL" class="form-label">FB ID Link:</label>
    <input type="text" class="form-control" id="FBURL" placeholder="Enter Facebook ID URL" name="FBURL"/>
  </div>
  <Button  class="btn text-white  w-100 w-md-50 py-3 text-center my-3"  style={{backgroundColor:"#EF4848",fontSize:"24px",letterSpacing:"5px",fontWeight:"600"}} >Create an Acoount</Button>
</form>
</div>

          </div> 

          <div id="fb" class="  mt-5 my-3" style={{display:'block'}}>
          <img class="col-md-5 col-sm-10 google "  src="https://imgur.com/dfMgNtB.png"/>
          </div>

          <div id="google" class="   my-3 " style={{display:'block'}}>
          <img class="col-md-5 col-sm-10 google "  src="https://imgur.com/K3Le0v2.png"/>
          </div>

           </div>
        </div>
    );
};

export default Login;