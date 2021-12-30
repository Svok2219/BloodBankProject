import * as React from 'react';
import Navbar from '../Navbar/Navbar';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ModalDonor from './ModalDonor';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Donors() {

  const[modalISopen,setmodalISopen]=React.useState(false)
  const handleOpen=()=>{
    setmodalISopen(true)
  }

    return (
     <div class="overflow-hidden">
       <Navbar/>

       <Box class="my-5 mx-5" >
        <Grid container spacing={3} align = "center" justify = "center" alignItems = "center" >
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
            <Button onClick={()=>handleOpen()} data-toggle="modal" data-target="#exampleModalCenter" type="button" class="btn   buttonY relative  ">
              <i class="fas fa-info absolute text-light"></i>
              </Button>
            </div>
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
            <Button onClick={()=>handleOpen()} data-toggle="modal" data-target="#exampleModalCenter"  type="button" class="btn   buttonY relative  ">
              <i class="fas fa-info absolute text-light"></i>
              </Button>
            </div>
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
            <Button onClick={()=>handleOpen()} data-toggle="modal" data-target="#exampleModalCenter"  type="button" class="btn   buttonY relative  ">
              <i class="fas fa-info absolute text-light"></i>
              </Button>
            </div>
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
        <span class="BGText font-weight-bold text-light pl-3 pt-2 ">B-</span>
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
            <Button onClick={()=>handleOpen()} data-toggle="modal" data-target="#exampleModalCenter"  type="button" class="btn   buttonY relative  ">
              <i class="fas fa-info absolute text-light"></i>
              </Button>
            </div>
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
        <span class="BGText font-weight-bold text-light pl-2 pt-2 ">B+</span>
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
            <Button onClick={()=>handleOpen()} data-toggle="modal" data-target="#exampleModalCenter"  type="button" class="btn   buttonY relative  ">
              <i class="fas fa-info absolute text-light"></i>
              </Button>
            </div>
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
            <Button onClick={()=>handleOpen()} data-toggle="modal" data-target="#exampleModalCenter"  type="button" class="btn   buttonY relative  ">
              <i class="fas fa-info absolute text-light"></i>
              </Button>
            </div>
          </div>
          </Item>
          </Grid>
          </Grid>
          </Box>
          
          <ModalDonor/>
          
          </div>
    );
  }