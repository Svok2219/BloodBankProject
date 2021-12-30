import React from 'react';

const ModalDonor = () => {
  
    return (
    
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="false">

        <div class="modal-dialog modal-dialog-centered " style={{maxWidth:"900px"}} role="document">
         
        {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
 <div class="modal-content ModalDonor px-md-5  overflow-hidden"  >
            <div class=" d-md-flex justify-content-center align-items-center ">
            <div class="col-12 col-md-4  align-items-center    text-center">
            <i class="far fa-user-circle pt-3 pt-md-0" style={{color:"#EAA903",fontSize:"200px"}}></i>
             </div>
            

            <div class="col-12 col-md-8 d-md-flex align-items-center text-center pt-5 ">
             <div class="align-center justify-content-center"><div class="VR text-light d-none d-md-block "></div></div>
            <hr class="d-block d-md-none color-light light "/>
            <div class="cardText align-items-center text-center ">
            <h2 class=" absolute top-5 pl-md-3 Grp">AB+</h2> <hr/>
            <h6 class="  pl-md-3 NM">Mr. David Goggins</h6> <hr/> 
            <div  class="d-flex text-center NM pl-1"><i class="fa fa-map-marker-alt pr-1" aria-hidden="true"></i>
             <div class="vr px-1 text-center"></div><span class="overflow-auto"> Amborkhana , thaki1 ,5taka</span></div>
             <hr/>
             <div class="d-flex text-center NM pl-1"><i class="fas fa-phone-alt pr-1"></i>
             <div class="vr px-1 text-center"></div><span class="overflow-auto"> +8801791310785</span></div>
            <hr/>
            <div  class="d-flex text-center NM pl-1 ">
            <i class="fas fa-mug-hot pr-1" style={{color:"#EAA903",fontSize:"33px"}}></i>

            <div class="vr px-1 text-left "></div><div  class="overflow-auto">https://www.facebook.com/profile.php?id=100073964103728</div></div>
            <hr/>
            <p class="joinedText ">Joined On:<span class="text-light ">27/06/2021</span></p>
            </div>
            </div>
             </div>
          </div>
        </div>
      </div>
    );
};

export default ModalDonor;