import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import '../Ask/Ask.css'
import {
    BrowserRouter as Router,
     Routes,
    Route,
    Link
  } from "react-router-dom";
  import Button from '@mui/material/Button';

 
const Ask = () => {
   
    return (
        <div class=" vH-100 vh-100 overflow-auto overflow-md-hidden">
        <nav class="navbar navbar-expand-lg navbar-light  px-5 py-3 " style={{backgroundColor:"#E5E5E5;"}}>
    <Link  class="navbar-brand font-weight-bolder text-dark" style={{fontSize:"30px"}} to="/">agn..IV</Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div class="navbar-nav ml-auto font-weight-bold ">
        <Link to="/AskHelp" class="nav-link active mx-4 font-weight-bold" style={{color:"#EF4848"}} href="#">need blood? <span class="sr-only">(current)</span></Link>
        <Link  class="nav-link mx-4 font-weight-bold" style={{color:"#EF4848"}}  to="/Donors">Donors</Link>
        <Link  class="nav-link mx-4 font-weight-bold" style={{color:"#EF4848"}} to="/Applications" >Requests</Link>
        <Link  class="nav-link  mx-4 font-weight-bold" style={{color:"#EF4848"}}  to="/HelpSomeone">Wanna help?</Link>
        <Link to="/Login"><a class=""><button style={{borderRadius:"5px",backgroundColor:"#EF4848",color:"white",height:"46px",letterSpacing:"3px"}} class="btn loginBtn mx-4 px-4 w-75 w-md-" type="button" >
     Login
    </button></a> </Link> 
      </div>
    </div>
  </nav>

  <div class="LoginBody px-3  " align = "center"  alignItems = "center" style={{marginTop:"10px"}}>
  <div class="loginCard col-md-6 col-sm-12 mt-5  p-5"  id="CardMain0" >
  
<h3 class="text-left text-black" style={{fontWeight:"bold",fontFamily: "Montserrat",fontStyle: "normal",fontSize:"30px",letterSpacing:"1px" }}>Ask for Blood <img style={{height:"40px"}} class=" img-fluid " src="https://imgur.com/Ml7aeYE.png"/> </h3>
<div id="cardFirst">
<form action="">
<div class="mb-3 mt-3 text-left">
<label for="Name" class="form-label">Name:</label>
<input type="Name" class="form-control" id="Name" placeholder="Enter email" name="email"/>
</div>
<div class="mb-3 text-left">
<label for="PO" class="form-label">Contact Number:</label>
<input type="Number" class="form-control" id="Number" placeholder="Enter Contact Phone Number" name="pswd"/>
</div>
<div class="mb-3 text-left">
<label for="Address" class="form-label">Address:</label>
<input type="Address" class="form-control" id="Address" placeholder="Enter Address" name="pswd"/>
</div>
<div class="mb-3 text-left">
<label for="Hospital" class="form-label">Hospital:</label>
<input type="Hospital Name" class="form-control" id="Hospital" placeholder="Enter Hospital Name" name="pswd"/>
</div>

<div class="form-group mb-3 text-left">
    <label for="exampleFormControlTextarea1">Explainaition :</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Explain the situation clearly"></textarea>
  </div>

  <h6 class="text-left">Choose Blood Group:</h6>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label class="form-check-label" for="inlineRadio1">A+</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label class="form-check-label" for="inlineRadio2">A-</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
  <label class="form-check-label" for="inlineRadio3">B+</label>
</div>

<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
  <label class="form-check-label" for="inlineRadio3">B-</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
  <label class="form-check-label" for="inlineRadio3">AB-</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
  <label class="form-check-label" for="inlineRadio3">AB+</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
  <label class="form-check-label" for="inlineRadio3">O+</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
  <label class="form-check-label" for="inlineRadio3">O-</label>
</div>
<Button  class="btn text-white  w-100 w-md-50 py-3 text-center my-3"  style={{backgroundColor:"#EF4848",fontSize:"24px",letterSpacing:"5px",fontWeight:"600"}} >Submit</Button>
</form>
</div>


      </div> 

  

       </div>
    </div>
    );
};

export default Ask;