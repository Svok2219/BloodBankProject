import * as React from 'react';
import Donors from '../Donors/Donors';
import Navbar from '../Navbar/Navbar';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ModalDonor from '../Donors/ModalDonor';
import Applies from '../Applications/Applies';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Home = () => {
const[openDonor,setopenDonor]=React.useState(false);
const[openApplies,setopenApplies]=React.useState(false);

const handleOpenD=()=>{
  setopenDonor(true)
  setopenApplies(false)
}
const handleOpen=()=>{
  setopenDonor(false)
  setopenApplies(true)
}

    return (
        <section class=" ">
  
          <Navbar/>


          <div style={{marginTop:""}} class="container my-5">
<div class=" d-sm-flex justify-content-between ">
          <div class="dropdown">
         
  <button class="btn btn-outline-dark   dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  Choose a City
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-down-circle mx-1" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
</svg>  

</button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
<div class="dropdown pt-2 pt-md-0">
         
         <button class="btn btn-outline-dark   dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
         Choose a BG
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-down-circle mx-1" viewBox="0 0 16 16">
         <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
       </svg>  
       
       </button>
         <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
           <li><a class="dropdown-item" href="#">Action</a></li>
           <li><a class="dropdown-item" href="#">Another action</a></li>
           <li><a class="dropdown-item" href="#">Something else here</a></li>
         </ul>
       </div>
</div>
</div>

{openDonor &&  <ModalDonor/>}

{openApplies &&  <Applies/>}


<Box class="" >
        <Grid container spacing={3} align = "center" justify = "center" alignItems = "center" >
          <Grid item xs={12} md={4}>
            <Item  class="card card3 pt-3 my-5 relative" style={{width:"18rem"}}>
          <div class="BGImage text-center ">
        <span class="BGText text-bold text-light px-3 pt-2">B+</span>
         </div>
          <div class="relative ">
            <div class="cardImage ">
            </div>
            </div>
          <div class="text-content pt-2 ">
            <h2 class="text-center">David Goggins</h2>
            <hr/>
            <div class="d-flex justify-content-between px-4 overflow-auto">
            <table  rules="cols">
        <tr>
            <td class=" Hospital">Hospital</td>
            <td class=" Colon"><b>:</b></td>
            <td  class="text-left text-dark h6">Bondi Medical,Sreemongoal</td>
        </tr>
        <tr class="">
            <td class=" Hospital  my-5">Needs</td>
            <td class="text-center my-5"><b>:</b></td>
            <td class="text-left text-dark h6 my-5">in <span class="font-weight-bolder">4</span> hours</td>
        </tr>
        <tr>
            <td class=" Hospital">Address</td>
            <td class="text-center"><b>:</b></td>
            <td class="text-left text-dark h6">Rayarbazar pull,Shibgonj ,Sylhet</td>
        </tr>
    </table>
            </div>
            </div>
            <div class="overflow-hidden">
            <Button onClick={()=>handleOpen()} data-toggle="modal" data-target="#exampleModalCenter" type="button" class="btn btn-danger w-100  buttonD  pt-5 align-self-center overflow-hidden"><i class="fas fa-plus plusIcon text-light  "></i></Button>
            </div>
          
            
            </Item>
          </Grid>
          <Grid item xs={12} md={4}>
            
            <Item  class="card card3 pt-3 my-5 relative" style={{width:"18rem"}}>
          <div class="BGImage1  text-center">
        <span class="BGText text-bold text-light pl-0 ">
          <img class="w-100 img-fluid" src="https://imgur.com/83iekOE.png"/>
           </span>
         </div>
         <div class="BGImage2 text-center overflow-auto">
        <span class="BGText font-weight-bold text-light pl-2 pt-2 ">AB+</span>
         </div>
          <div class="relative ">
            <div class="cardImage2 ">
            </div>
            </div>
          <div class="text-content pt-2 ">
            <h2 class="text-center">David Goggins</h2>
            <hr/>
            <div class="d-flex justify-content-between px-4 overflow-auto">
            <table  rules="cols">
        <tr>
            <td class=" Hospital">Hospital</td>
            <td class=" Colon"><b>:</b></td>
            <td  class="text-left text-dark h6">Bondi Medical,Sreemongoal</td>
        </tr>
        <tr class="">
            <td class=" Hospital  my-5">Needs</td>
            <td class="text-center my-5"><b>:</b></td>
            <td class="text-left text-dark h6 my-5">in <span class="font-weight-bolder">4</span> hours</td>
        </tr>
        <tr>
            <td class=" Hospital">Address</td>
            <td class="text-center"><b>:</b></td>
            <td class="text-left text-dark h6">Rayarbazar pull,Shibgonj ,Sylhet</td>
        </tr>
    </table>
            </div>
            </div>
            <div class="d-flex justify-content-between ">
            <div class="overflow-hidden">
            <Button  type="button" class="btn    buttonP relative">
            <a class="no decoration" href="tel:+1-847-555-5555">
              <i class="fa fa-phone absolute " ></i>
              </a>
              </Button>
            </div>
            <div class="overflow-hidden">
            <Button onClick={()=>handleOpenD()} data-toggle="modal" data-target="#exampleModalCenter" type="button" class="btn   buttonY relative  ">
              <i class="fas fa-info absolute text-light"></i>
              </Button>
            </div>
          </div>
          </Item>
          </Grid>

          <Grid item xs={12} md={4}>
            <Item  class="card card3 pt-3 my-5 relative" style={{width:"18rem"}}>
          <div class="BGImage text-center ">
        <span class="BGText text-bold text-light px-3 pt-2">B+</span>
         </div>
          <div class="relative ">
            <div class="cardImage ">
            </div>
            </div>
          <div class="text-content pt-2 ">
            <h2 class="text-center">David Goggins</h2>
            <hr/>
            <div class="d-flex justify-content-between px-4 overflow-auto">
            <table  rules="cols">
        <tr>
            <td class=" Hospital">Hospital</td>
            <td class=" Colon"><b>:</b></td>
            <td  class="text-left text-dark h6">Bondi Medical,Sreemongoal</td>
        </tr>
        <tr class="">
            <td class=" Hospital  my-5">Needs</td>
            <td class="text-center my-5"><b>:</b></td>
            <td class="text-left text-dark h6 my-5">in <span class="font-weight-bolder">4</span> hours</td>
        </tr>
        <tr>
            <td class=" Hospital">Address</td>
            <td class="text-center"><b>:</b></td>
            <td class="text-left text-dark h6">Rayarbazar pull,Shibgonj ,Sylhet</td>
        </tr>
    </table>
            </div>
            </div>
            <div class="overflow-hidden">
            <Button onClick={()=>handleOpen()} data-toggle="modal" data-target="#exampleModalCenter" type="button" class="btn btn-danger w-100  buttonD  pt-5 align-self-center"><i class="fas fa-plus plusIcon text-light  "></i></Button>
            </div>
          </Item> 
          </Grid>


          <Grid item xs={12} md={4}>
            
            <Item  class="card card3 pt-3 my-5 relative" style={{width:"18rem"}}>
          {/* <div class="BGImage1  text-center">
        <span class="BGText text-bold text-light pl-0 ">
          <img class="w-100 img-fluid" src="https://imgur.com/83iekOE.png"/>
           </span>
         </div> */}
         <div class="BGImage2 text-center overflow-auto">
        <span class="BGText font-weight-bold text-light pl-2 pt-2 ">AB+</span>
         </div>
          <div class="relative ">
            <div class="cardImage2 ">
            </div>
            </div>
          <div class="text-content pt-2 ">
            <h2 class="text-center">David Goggins</h2>
            <hr/>
            <div class="d-flex justify-content-between px-4 overflow-auto">
            <table  rules="cols">
        <tr>
            <td class=" Hospital">Hospital</td>
            <td class=" Colon"><b>:</b></td>
            <td  class="text-left text-dark h6">Bondi Medical,Sreemongoal</td>
        </tr>
        <tr class="">
            <td class=" Hospital  my-5">Needs</td>
            <td class="text-center my-5"><b>:</b></td>
            <td class="text-left text-dark h6 my-5">in <span class="font-weight-bolder">4</span> hours</td>
        </tr>
        <tr>
            <td class=" Hospital">Address</td>
            <td class="text-center"><b>:</b></td>
            <td class="text-left text-dark h6">Rayarbazar pull,Shibgonj ,Sylhet</td>
        </tr>
    </table>
            </div>
            </div>
            <div class="d-flex justify-content-between ">
            <div class="overflow-hidden">
            <Button type="button" class="btn    buttonP relative">
              <a class="no decoration" href="tel:+1-847-555-5555">
              <i class="fa fa-phone absolute " ></i>
              </a>
              </Button>
            </div>
            <div class="overflow-hidden">
            <Button onClick={()=>handleOpenD()} data-toggle="modal" data-target="#exampleModalCenter" type="button" class="btn   buttonY relative  ">
              <i class="fas fa-info absolute text-light"></i>
              </Button>
            </div>
          </div>
          </Item>
          </Grid>

          <Grid item xs={12} md={4}>
            <Item  class="card card3 pt-3 my-5 relative" style={{width:"18rem"}}>
          <div class="BGImage text-center ">
        <span class="BGText text-bold text-light px-3 pt-2">B+</span>
         </div>
          <div class="relative ">
            <div class="cardImage ">
            </div>
            </div>
          <div class="text-content pt-2 ">
            <h2 class="text-center">David Goggins</h2>
            <hr/>
            <div class="d-flex justify-content-between px-4 overflow-auto">
            <table  rules="cols">
        <tr>
            <td class=" Hospital">Hospital</td>
            <td class=" Colon"><b>:</b></td>
            <td  class="text-left text-dark h6">Bondi Medical,Sreemongoal</td>
        </tr>
        <tr class="">
            <td class=" Hospital  my-5">Needs</td>
            <td class="text-center my-5"><b>:</b></td>
            <td class="text-left text-dark h6 my-5">in <span class="font-weight-bolder">4</span> hours</td>
        </tr>
        <tr>
            <td class=" Hospital">Address</td>
            <td class="text-center"><b>:</b></td>
            <td class="text-left text-dark h6">Rayarbazar pull,Shibgonj ,Sylhet</td>
        </tr>
    </table>
            </div>
            </div>
            <div class="overflow-hidden">
            <Button onClick={()=>handleOpen()} data-toggle="modal" data-target="#exampleModalCenter" type="button" class="btn btn-danger w-100  buttonD  pt-5 align-self-center"><i class="fas fa-plus plusIcon text-light  "></i></Button>
            </div>
          </Item> 
          </Grid>
          <Grid item xs={12} md={4}>
            <Item  class="card card3 pt-3 my-5 relative" style={{width:"18rem"}}>
          <div class="BGImage text-center ">
        <span class="BGText text-bold text-light px-3 pt-2">B+</span>
         </div>
          <div class="relative ">
            <div class="cardImage ">
            </div>
            </div>
          <div class="text-content pt-2 ">
            <h2 class="text-center">David Goggins</h2>
            <hr/>
            <div class="d-flex justify-content-between px-4 overflow-auto">
            <table  rules="cols">
        <tr>
            <td class=" Hospital">Hospital</td>
            <td class=" Colon"><b>:</b></td>
            <td  class="text-left text-dark h6">Bondi Medical,Sreemongoal</td>
        </tr>
        <tr class="">
            <td class=" Hospital  my-5">Needs</td>
            <td class="text-center my-5"><b>:</b></td>
            <td class="text-left text-dark h6 my-5">in <span class="font-weight-bolder">4</span> hours</td>
        </tr>
        <tr>
            <td class=" Hospital">Address</td>
            <td class="text-center"><b>:</b></td>
            <td class="text-left text-dark h6">Rayarbazar pull,Shibgonj ,Sylhet</td>
        </tr>
    </table>
            </div>
            </div>
            <div class="overflow-hidden">
            <Button onClick={()=>handleOpen()} data-toggle="modal" data-target="#exampleModalCenter" type="button" class="btn btn-danger w-100  buttonD  pt-5 align-self-center"><i class="fas fa-plus plusIcon text-light  "></i></Button>
            </div>
          </Item> 
          </Grid>


          <Grid item xs={12} md={4}>
            
            <Item  class="card card3 pt-3 my-5 relative" style={{width:"18rem"}}>
          {/* <div class="BGImage1  text-center">
        <span class="BGText text-bold text-light pl-0 ">
          <img class="w-100 img-fluid" src="https://imgur.com/83iekOE.png"/>
           </span>
         </div> */}
         <div class="BGImage2 text-center overflow-auto">
        <span class="BGText font-weight-bold text-light pl-2 pt-2 ">AB+</span>
         </div>
          <div class="relative ">
            <div class="cardImage2 ">
            </div>
            </div>
          <div class="text-content pt-2 ">
            <h2 class="text-center">David Goggins</h2>
            <hr/>
            <div class="d-flex justify-content-between px-4 overflow-auto">
            <table  rules="cols">
        <tr>
            <td class=" Hospital">Hospital</td>
            <td class=" Colon"><b>:</b></td>
            <td  class="text-left text-dark h6">Bondi Medical,Sreemongoal</td>
        </tr>
        <tr class="">
            <td class=" Hospital  my-5">Needs</td>
            <td class="text-center my-5"><b>:</b></td>
            <td class="text-left text-dark h6 my-5">in <span class="font-weight-bolder">4</span> hours</td>
        </tr>
        <tr>
            <td class=" Hospital">Address</td>
            <td class="text-center"><b>:</b></td>
            <td class="text-left text-dark h6">Rayarbazar pull,Shibgonj ,Sylhet</td>
        </tr>
    </table>
            </div>
            </div>
            <div class="d-flex justify-content-between ">
            <div class="overflow-hidden">
            <Button type="button" class="btn    buttonP relative">
              <a class="no decoration" href="tel:+1-847-555-5555">
              <i class="fa fa-phone absolute " ></i>
              </a>
              </Button>
            </div>
            <div class="overflow-hidden">
            <Button onClick={()=>handleOpenD()} data-toggle="modal" data-target="#exampleModalCenter" type="button" class="btn   buttonY relative  ">
              <i class="fas fa-info absolute text-light"></i>
              </Button>
            </div>
          </div>
          </Item>
          </Grid>

          <Grid item xs={12} md={4}>
            <Item  class="card card3 pt-3 my-5 relative" style={{width:"18rem"}}>
          <div class="BGImage text-center ">
        <span class="BGText text-bold text-light px-3 pt-2">B+</span>
         </div>
          <div class="relative ">
            <div class="cardImage ">
            </div>
            </div>
          <div class="text-content pt-2 ">
            <h2 class="text-center">David Goggins</h2>
            <hr/>
            <div class="d-flex justify-content-between px-4 overflow-auto">
            <table  rules="cols">
        <tr>
            <td class=" Hospital">Hospital</td>
            <td class=" Colon"><b>:</b></td>
            <td  class="text-left text-dark h6">Bondi Medical,Sreemongoal</td>
        </tr>
        <tr class="">
            <td class=" Hospital  my-5">Needs</td>
            <td class="text-center my-5"><b>:</b></td>
            <td class="text-left text-dark h6 my-5">in <span class="font-weight-bolder">4</span> hours</td>
        </tr>
        <tr>
            <td class=" Hospital">Address</td>
            <td class="text-center"><b>:</b></td>
            <td class="text-left text-dark h6">Rayarbazar pull,Shibgonj ,Sylhet</td>
        </tr>
    </table>
            </div>
            </div>
            <div class="overflow-hidden">
            <Button onClick={()=>handleOpen()} data-toggle="modal" data-target="#exampleModalCenter" type="button" class="btn btn-danger w-100  buttonD  pt-5 align-self-center"><i class="fas fa-plus plusIcon text-light  "></i></Button>
            </div>
          </Item> 
          </Grid>

          <Grid item xs={12} md={4}>
            
            <Item  class="card card3 pt-3 my-5 relative" style={{width:"18rem"}}>
          <div class="BGImage1  text-center">
        <span class="BGText text-bold text-light pl-0 ">
          <img class="w-100 img-fluid" src="https://imgur.com/83iekOE.png"/>
           </span>
         </div>
         <div class="BGImage2 text-center overflow-auto">
        <span class="BGText font-weight-bold text-light pl-2 pt-2 ">AB+</span>
         </div>
          <div class="relative ">
            <div class="cardImage2 ">
            </div>
            </div>
          <div class="text-content pt-2 ">
            <h2 class="text-center">David Goggins</h2>
            <hr/>
            <div class="d-flex justify-content-between px-4 overflow-auto">
            <table  rules="cols">
        <tr>
            <td class=" Hospital">Hospital</td>
            <td class=" Colon"><b>:</b></td>
            <td  class="text-left text-dark h6">Bondi Medical,Sreemongoal</td>
        </tr>
        <tr class="">
            <td class=" Hospital  my-5">Needs</td>
            <td class="text-center my-5"><b>:</b></td>
            <td class="text-left text-dark h6 my-5">in <span class="font-weight-bolder">4</span> hours</td>
        </tr>
        <tr>
            <td class=" Hospital">Address</td>
            <td class="text-center"><b>:</b></td>
            <td class="text-left text-dark h6">Rayarbazar pull,Shibgonj ,Sylhet</td>
        </tr>
    </table>
            </div>
            </div>
            <div class="d-flex justify-content-between ">
            <div class="overflow-hidden">
            <Button type="button" class="btn    buttonP relative">
              <a class="no decoration" href="tel:+1-847-555-5555">
              <i class="fa fa-phone absolute " ></i>
              </a>
              </Button>
            </div>
            <div class="overflow-hidden">
            <Button onClick={()=>handleOpenD()} data-toggle="modal" data-target="#exampleModalCenter" type="button" class="btn   buttonY relative  ">
              <i class="fas fa-info absolute text-light"></i>
              </Button>
            </div>
          </div>
          </Item>
          </Grid>

        </Grid>
      </Box>  



        </section>
    );
};

export default Home;