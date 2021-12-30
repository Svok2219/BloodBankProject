import React from 'react';
import Navbar from '../Navbar/Navbar';
import '../Ask/Ask.css'
import {
    BrowserRouter as Router,
     Routes,
    Route,
    Link
  } from "react-router-dom";
  import Button from '@mui/material/Button';
const Help = () => {
    return (
        <div class=" vH-100 vh-100 overflow-auto overflow-md-hidden">
                        <nav class="navbar navbar-expand-lg navbar-light  px-5 py-3 " style={{backgroundColor:"#E5E5E5;"}}>
                    <Link  class="navbar-brand font-weight-bolder text-dark" style={{fontSize:"30px"}} to="/">agn..IV</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
                    <div class="navbar-nav ml-auto font-weight-bold ">
                        <Link  class="nav-link active mx-4 font-weight-bold" style={{color:"#EF4848"}} to="/AskHelp">need blood? <span class="sr-only">(current)</span></Link>
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
  <h3 class="text-left text-black" style={{fontWeight:"bold",fontFamily: "Montserrat",fontStyle: "normal",fontSize:"30px",letterSpacing:"1px" }}>Help by Blood <img style={{height:"70px"}} class=" img-fluid " src="https://imgur.com/mPQiShl.png"/> </h3>

   <form>              
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip"/>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
       Ready to bear own portal fee      </label>
    </div>
  </div>
  <Button  class="btn text-white  w-100 w-md-50 py-3 text-center my-3"  style={{backgroundColor:"#EF4848",fontSize:"24px",letterSpacing:"5px",fontWeight:"600"}} >Submit</Button>
</form>
</div>
</div>



    </div>
    );
};

export default Help;