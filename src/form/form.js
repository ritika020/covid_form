import React from "react";
import "./form.css";
//import ReCAPTCHA from "react-google-recaptcha";
import RaisedButton from "material-ui/RaisedButton";
import Recaptcha from 'react-google-invisible-recaptcha';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


class first extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        firstName: "",
        middleName: "",
        lastName: "",
        mobNum: "",
        add: "",
        state:"",
        district:"",
        city:"",
        message:"",
        messageSent: false
        }
        
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  addNew = (event) => {
    event.preventDefault();
  };
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  sendMessage=()=>{
    this.recaptcha.execute();
  }
  onResolved=()=>{
    this.setState({messageSent: true});
    console.log(this.state)
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    const {
      firstName,
        middleName,
        lastName,
        mobNum,
        add,
        state,
        district,
        city,
     
    } = this.state.data;
    if (!isNaN(firstName)) {
      alert("Firstname contains number");
    }
    if (!isNaN(middleName)) {
      alert("Middle name contains number");
    }
    if (!isNaN(lastName)) {
      alert("Lastname contains number");
    }
    // console.log(this.state);
  }
  render() {
    return (
      <MuiThemeProvider>

      <div className="form__main">
        <div className="row form__y1">
          <div className="form__h1">Enroll Yourself</div>

          <div className="form__c1 col-12 p-0">
            Nisl, duis est vel pretium, rhoncus egestas in porta. Iaculis arcu
            odio tellus quis nam nullam nunc, risus vulputate. Nulla in lacus
            sed curabitur. Faucibus id non convallis morbi diam arcu vitae nunc
            aliquet. In in mauris sem volutpat eget. Amet dui dis mattis nunc
            nibh. Blandit nisl pharetra tincidunt mauris quis ullamcorper
            pellentesque turpis euismod. A, arcu lorem cras enim turpis
            suspendisse. Vestibulum cursus
          </div>
        </div>
        <div className="row form__y2">
          <div className="form__h2">Important Notice</div>

          <div className="form__c2 col-md-12 p-0">
            Nisl, duis est vel pretium, rhoncus egestas in porta. Iaculis arcu
            odio tellus quis nam nullam nunc, risus vulputate. Nulla in lacus
            sed curabitur. Faucibus id non convallis morbi diam arcu vitae nunc
            aliquet. In in mauris sem volutpat ege
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="row form__y3">
            <div className="form-group col-md-3 pl-0">
              <input
              
              name="firstName"
                onChange={this.handleChange}
                type="text"
                class="form-control"
                 placeholder=" "
                required
                style={{ color: "#390969" }}
              />
              <span className="Form__span">First Name</span>

            </div>
            <div className="form-group col-md-3 pl-0">
              <input
                name="middleName"
                onChange={this.handleChange}
                type="text"
                class="form-control"
                 placeholder=" "
                required
              />
              <span className="Form__span">Middle Name</span>

            </div>
            <div className="form-group col-md-3 pl-0">
              <input
              name="lastName"
                onChange={this.handleChange}
                type="text"
                class="form-control"
                placeholder=" "
                required
              />
              <span className="Form__span">Last Name</span>

            </div>
            <div className="form-group col-md-3 pl-0">
              <input
              name="mobNum"
                onChange={this.handleChange}
              
                type="number"
                class="form-control"
                placeholder=" "
                required
              />                            
              <span className="Form__span">Mobile Number</span>

            </div>
          </div>
          <div className="row form__y4">
            <div className="form-group col-md-12 pl-0">
              <textarea
              name="add"
                onChange={this.handleChange}
              
                class="form-control"
                placeholder=" "
                rows="2"
                required
              ></textarea>                                         
               <span className="Form__span">Address</span>

            </div>
          </div>
          <div className="row form__y5">
            <div className="form-group col-md-3 pl-0">
              <input
              name="state"
                onChange={this.handleChange}
              
                type="text"
                class="form-control "
                placeholder=" "
                required
              />
              <span className="Form__span">State</span>

            </div>
            <div className="form-group col-md-3 pl-0">
              <input
              name="district"
                onChange={this.handleChange}
              
                type="text"
                class="form-control"
                required
                placeholder=" "
              />                           
               <span className="Form__span">District</span>

            </div>
            <div className="form-group col-md-3 pl-0">
              <input
              name="village"
                onChange={this.handleChange}
              
                type="text"
                class="form-control"
                required
                placeholder=" "
              />                           
               <span className="Form__span">City/Gaon/Village</span>

            </div>
            <div className="form-group col-md-3 pl-0">
              <input
              
                type="file"
                class="form-control"
                required
                placeholder="Upload Images"
              />                             
              <span className="Form__span">Upload Images</span>

            </div>
          </div>
          <div className="row form__y6">
            <div className="form-group col-md-2 pl-0">
              <input
                type="text"
                class="form-control "
                placeholder="RTX3090"
                style={{ height: "92px", width: "166px" }}
              />
            </div>
            <div className="form-group col-md-4 align-self-end pl-0">
              <input
                type="name"
                class="form-control "
                id="Form_input12"
                placeholder=" "
              />                            
              <span className="Form__span">Enter verification code</span>

            </div>
          </div>
          <div className="row form__y7 d-flex justify-content-center">
            <button
              class="button"
              className="Form_submit"
              style={{ alignSelf: "center" }}
            >
              {" "}
              Submit Form
            </button>

          </div>
          <RaisedButton
            label="Send"
            style={StyleSheet.button}
            onClick={this.sendMessage}
            />
            <Recaptcha
              ref={ref=>this.recaptcha=ref}
              sitekey="6LcS8U0aAAAAAGaOUd9LRVKHnhDBzShPHgZ8gErf"
              onResolved={this.onResolved}
              />

        </form>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default first;
