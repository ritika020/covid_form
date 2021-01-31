import React from 'react';
import "./form.css"



class first extends React.Component{
    render()
    {
        return (
  
            <div className="container form__main">
         <div className="row">
            <div className="h1">
                Enroll Yourself
            </div>

            <div className="c1 col-12">
                Nisl, duis est vel pretium, rhoncus egestas in porta. Iaculis arcu odio tellus quis nam nullam nunc, risus vulputate. Nulla in lacus sed curabitur. Faucibus id non convallis morbi diam arcu vitae nunc aliquet. In in mauris sem volutpat eget. Amet dui dis mattis nunc nibh. Blandit nisl pharetra tincidunt mauris quis ullamcorper pellentesque turpis euismod. A, arcu lorem cras enim turpis suspendisse. Vestibulum cursus 
            </div>
            </div>
            <div className="row">
      <div className="h2">
                Important Notice
            </div>

            <div className="c2 col-12">
                Nisl, duis est vel pretium, rhoncus egestas in porta. Iaculis arcu odio tellus quis nam nullam nunc, risus vulputate. Nulla in lacus sed curabitur. Faucibus id non convallis morbi diam arcu vitae nunc aliquet. In in mauris sem volutpat ege
            </div>
            </div>
            <form className="row">
                     <div className="row">
                         
                     <div className="form-group col-md-2">
                     <input type="name" class="form-control " id="Form_input" placeholder="First Name"/>
                     </div>
                     <div className="form-group col-md-2">
                     <input type="name" class="form-control" id="Form_input" placeholder="Middle Name"/>
                     </div>
                     <div className="form-group col-md-2">
                     <input type="name" class="form-control" id="Form_input" placeholder="Last Name"/>
                     </div>
                     <div className="form-group col-md-2">
                     <input type="name" class="form-control" id="Form_input" placeholder="Mobile Number"/>
                     </div>
                     </div>
                     <div className="row">
                             
                     <div className="form-group col-md-12">
                     <input type="name" class="form-control " id="Form_input" placeholder="Address"/>
                     </div>
                     </div>
                     <div className="row">
    
                     <div className="form-group col-md-4">
                     <input type="name" class="form-control " id="Form_input" placeholder="State"/>
                     </div>
                     <div className="form-group col-md-4">
                     <input type="name" class="form-control" id="Form_input" placeholder="District"/>
                     </div>
                     <div className="form-group col-md-4">
                     <input type="name" class="form-control" id="Form_input" placeholder="City/Gaon/Village"/>
                     </div>
                     <div className="form-group col-md-4">
                     <input type="name" class="form-control" id="Form_input" placeholder="Upload Images"/>
                     </div>
                     </div>
                     <button className="Form_submit" > Submit Form</button>
            </form>
          </div>  
      );

    }



}

export default first;


