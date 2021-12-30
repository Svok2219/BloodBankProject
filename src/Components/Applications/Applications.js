import React from 'react';
import Navbar from '../Navbar/Navbar';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Applies from './Applies';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Applications = () => {

  const[modalISopen,setmodalISopen]=React.useState(false)
  const handleOpen=()=>{
    setmodalISopen(true)
  }


    return (
        <div>
            <Navbar/>

            <Box class="my-5 mx-5" >
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
          <div class="BGImage text-center ">
        <span class="BGText text-bold text-light px-3 pt-2">AB-</span>
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

       


          </Grid>
          </Box>
        
          <Applies/>

        </div>
    );
};

export default Applications;