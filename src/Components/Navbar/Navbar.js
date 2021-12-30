import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light  px-5 py-3" style={{backgroundColor:"#EF4848"}}>
        <Link  class="navbar-brand font-weight-bolder text-dark" style={{fontSize:"30px"}} to="/">agn..IV</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div class="navbar-nav ml-auto text-white ">
          <Link to="/AskHelp" class="nav-link active mx-4 text-white" href="#">need blood? <span class="sr-only">(current)</span></Link>
            <Link  class="nav-link mx-4 text-white" to="/Donors">Donors</Link>
            <Link  class="nav-link mx-4 text-white"  to="/Applications">Requests</Link>
            <Link to="/HelpSomeone" class="nav-link  mx-4 text-white" >Wanna help?</Link>
            <Link to="/Login"> <button class="btn loginBtn mx-4 px-4  w-75 w-md-" type="button" >
         Login
        </button></Link> 
          </div>
        </div>
      </nav>
    );
};

export default Navbar;