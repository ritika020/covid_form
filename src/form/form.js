import React from 'react';
import "./form.css"



class first extends React.Component{
    render()
    {
        return (
  
            <div className="container form__main">
         <div className="row y1">
            <div className="h1">
                Enroll Yourself
            </div>

            <div className="c1 col-12">
                Nisl, duis est vel pretium, rhoncus egestas in porta. Iaculis arcu odio tellus quis nam nullam nunc, risus vulputate. Nulla in lacus sed curabitur. Faucibus id non convallis morbi diam arcu vitae nunc aliquet. In in mauris sem volutpat eget. Amet dui dis mattis nunc nibh. Blandit nisl pharetra tincidunt mauris quis ullamcorper pellentesque turpis euismod. A, arcu lorem cras enim turpis suspendisse. Vestibulum cursus 
            </div>
            </div>
            <div className="row y2">
      <div className="h2">
                Important Notice
            </div>

            <div className="c2 col-12">
                Nisl, duis est vel pretium, rhoncus egestas in porta. Iaculis arcu odio tellus quis nam nullam nunc, risus vulputate. Nulla in lacus sed curabitur. Faucibus id non convallis morbi diam arcu vitae nunc aliquet. In in mauris sem volutpat ege
            </div>
            </div>
            <form className="row">
                     <div className="row y3">
                         
                     <div className="form-group col-md-3">
                     <input type="name" class="form-control " id="Form_input" placeholder="First Name" style={{color:"#390969"}}/>
                     </div>
                     <div className="form-group col-md-3">
                     <input type="name" class="form-control" id="Form_input" placeholder="Middle Name"/>
                     </div>
                     <div className="form-group col-md-3">
                     <input type="name" class="form-control" id="Form_input" placeholder="Last Name"/>
                     </div>
                     <div className="form-group col-md-3">
                     <input type="name" class="form-control" id="Form_input" placeholder="Mobile Number"/>
                     </div>
                     </div>
                     <div className="row y4">
                             
                     <div className="form-group col-md-12">
                     <input type="name" class="form-control " id="Form_input" placeholder="Address" style={{width:"100%"}}/>
                     </div>
                     </div>
                     <div className="row y5">
    
                     <div className="form-group col-md-3">
                     <input type="name" class="form-control " id="Form_input" placeholder="State"/>
                     </div>
                     <div className="form-group col-md-3">
                     <input type="name" class="form-control" id="Form_input" placeholder="District"/>
                     </div>
                     <div className="form-group col-md-3">
                     <input type="name" class="form-control" id="Form_input" placeholder="City/Gaon/Village"/>
                     </div>
                     <div className="form-group col-md-3">
                     <input type="name" class="form-control" id="Form_input" placeholder="Upload Images"/>
                     </div>
                     </div>
                     <div className="row y6">
                             
                             <div className="form-group col-md-3">
                             <input type="name" class="form-control " id="Form_input" placeholder="RTX3090" style={{height:"92px",width:"166px"}}/>
                             </div>
                             <div className="form-group col-md-4">
                             <input type="name" class="form-control " id="Form_input" placeholder="Enter verification code" style={{marginLeft:"68px"}}/>
                             </div>
                             </div>
                            
                     <button className="Form_submit" > Submit Form</button>
            </form>
          </div>  
      );

    }



}

export default first;

