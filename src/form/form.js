import React from "react";
import "./form.css";
//import ReCAPTCHA from "react-google-recaptcha";
import RaisedButton from "material-ui/RaisedButton";
import Recaptcha from "react-google-invisible-recaptcha";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { sendCovidForm } from "../DataService/CovidForm";

class first extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        firstName: "",
        middleName: "",
        sirname: "",
        contactNo: "",
        address: "",
        state: "",
        district: "",
        cityOrVillages: "",
        message: "",
        messageSent: false,
        fileUploadState: null,
        fileName: "",
        fileImages: [],
        images: "",
      },
    };
    this.hiddenFileInput = React.createRef(null);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  addNew = (event) => {
    event.preventDefault();
  };
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  // sendMessage=()=>{
  //   this.recaptcha.execute();
  // }
  onResolved = () => {
    this.setState({ messageSent: true });
  };

  // for handling file upload
  handleClick = (e) => {
    this.hiddenFileInput.current.click();
  };

  handleUpload = (e) => {
    console.log(e.target.files.length);
    const fileUploaded = e.target.files[0];
    console.log(fileUploaded);
    this.setState({
      fileUploadState: fileUploaded,
      fileName: fileUploaded.name,
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.recaptcha.execute();
    var formData = new FormData(e.target);
    const data = new FormData();
    data.append("firstName", this.state.firstName);
    data.append("middleName", this.state.middleName);
    data.append("sirname", this.state.sirname);
    data.append("contactNo", this.state.contactNo);
    data.append("state", this.state.state);
    data.append("message", this.state.message);
    data.append("cityOrVillages", this.state.cityOrVillages);
    data.append("district", this.state.district);
    // data["sirname"] = formData.get("sirname") || this.state.sirname;
    // data["middleName"] = formData.get("middleName") || this.state.middleName;
    // data["contactNo"] = formData.get("contactNo") || this.state.contactNo;
    // data["address"] =
    //   formData.get("address") || this.state.address;
    // data["state"] = formData.get("state") || this.state.state;
    // data["message"] = formData.get("message") || this.state.message;
    // data["cityOrVillages"] = formData.get("cityOrVillages") || this.state.cityOrVillages;
    // data["district"] = formData.get("district") || this.state.district;
    // let tempImages = [];
    // tempImages.push(this.state.fileUploadState);
    // data["myFiles"] = tempImages;
    data.append("myFiles", this.state.fileUploadState, this.state.fileName);
    console.log(data);
    sendCovidForm(data)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
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
              sed curabitur. Faucibus id non convallis morbi diam arcu vitae
              nunc aliquet. In in mauris sem volutpat eget. Amet dui dis mattis
              nunc nibh. Blandit nisl pharetra tincidunt mauris quis ullamcorper
              pellentesque turpis euismod. A, arcu lorem cras enim turpis
              suspendisse. Vestibulum cursus
            </div>
          </div>
          <div className="row form__y2">
            <div className="form__h2">Important Notice</div>

            <div className="form__c2 col-md-12 p-0">
              Nisl, duis est vel pretium, rhoncus egestas in porta. Iaculis arcu
              odio tellus quis nam nullam nunc, risus vulputate. Nulla in lacus
              sed curabitur. Faucibus id non convallis morbi diam arcu vitae
              nunc aliquet. In in mauris sem volutpat ege
            </div>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="row form__y3">
              <div className="form-group col-md-3 pl-0">
                <input
                  id="firstName"
                  name="firstName"
                  title="*ENTER CHARACTER VALUES ONLY"
                  pattern="[A-Za-z_ ]{1,32}"
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
                  id="middleName"
                  name="middleName"
                  onChange={this.handleChange}
                  type="text"
                  class="form-control"
                  title="*ENTER CHARACTER VALUES ONLY"
                  pattern="[A-Za-z_ ]{1,32}"
                  placeholder=" "
                  required
                />
                <span className="Form__span">Middle Name</span>
              </div>
              <div className="form-group col-md-3 pl-0">
                <input
                  name="sirname"
                  id="sirname"
                  onChange={this.handleChange}
                  type="text"
                  class="form-control"
                  title="*ENTER CHARACTER VALUES ONLY"
                  pattern="[A-Za-z_ ]{1,32}"
                  placeholder=" "
                  required
                />
                <span className="Form__span">Last Name</span>
              </div>
              <div className="form-group col-md-3 pl-0">
                <input
                  id="contactNo"
                  name="contactNo"
                  onChange={this.handleChange}
                  pattern="[1-9]{1}[0-9]{9}"
                  type="tel"
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
                  id="address"
                  name="address"
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
                  id="state"
                  name="state"
                  onChange={this.handleChange}
                  type="text"
                  class="form-control "
                  title="*ENTER CHARACTER VALUES ONLY"
                  pattern="[A-Za-z_ ]{1,32}"
                  placeholder=" "
                  required
                />
                <span className="Form__span">State</span>
              </div>
              <div className="form-group col-md-3 pl-0">
                <input
                  id="district"
                  name="district"
                  title="*ENTER CHARACTER VALUES ONLY"
                  pattern="[A-Za-z_ ]{1,32}"
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
                  id="village"
                  name="village"
                  onChange={this.handleChange}
                  type="text"
                  title="*ENTER CHARACTER VALUES ONLY"
                  pattern="[A-Za-z_ ]{1,32}"
                  class="form-control"
                  required
                  placeholder=" "
                />
                <span className="Form__span">City/Gaon/Village</span>
              </div>
              <div className="form-group col-md-3 pl-0">
                <button
                  className="btn"
                  type="button"
                  onClick={this.handleClick}
                >
                  Upload Image
                </button>
                <input
                  type="file"
                  required
                  ref={this.hiddenFileInput}
                  id="fileButton"
                  onChange={this.handleUpload}
                  style={{ display: "none" }}
                  // placeholder="Upload Images"
                />
                {this.state.fileUploadState != null && (
                  <p>{this.state.fileName}</p>
                )}
              </div>
            </div>
            {/* <div className="row form__y6">
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
          </div> */}
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
            {/* <RaisedButton
            label="Send"
            style={StyleSheet.button}
            onClick={this.sendMessage}
            /> */}
            <Recaptcha
              ref={(ref) => (this.recaptcha = ref)}
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
