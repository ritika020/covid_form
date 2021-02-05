import React from "react";
import "./form.css";

class first extends React.Component {
  render() {
    return (
      <div className="form__main">
        <div className="row y1">
          <div className="h1">Enroll Yourself</div>

          <div className="c1 col-12 p-0">
            Nisl, duis est vel pretium, rhoncus egestas in porta. Iaculis arcu
            odio tellus quis nam nullam nunc, risus vulputate. Nulla in lacus
            sed curabitur. Faucibus id non convallis morbi diam arcu vitae nunc
            aliquet. In in mauris sem volutpat eget. Amet dui dis mattis nunc
            nibh. Blandit nisl pharetra tincidunt mauris quis ullamcorper
            pellentesque turpis euismod. A, arcu lorem cras enim turpis
            suspendisse. Vestibulum cursus
          </div>
        </div>
        <div className="row y2">
          <div className="h2">Important Notice</div>

          <div className="c2 col-md-12 p-0">
            Nisl, duis est vel pretium, rhoncus egestas in porta. Iaculis arcu
            odio tellus quis nam nullam nunc, risus vulputate. Nulla in lacus
            sed curabitur. Faucibus id non convallis morbi diam arcu vitae nunc
            aliquet. In in mauris sem volutpat ege
          </div>
        </div>
        <form className="">
          <div className="row y3">
            <div className="form-group col-md-3 pl-0">
              <input
                type="text"
                class="form-control "
                id="Form_input1"
                placeholder="First Name"
                style={{ color: "#390969" }}
              />
            </div>
            <div className="form-group col-md-3 pl-0">
              <input
                type="text"
                class="form-control"
                id="Form_input2"
                placeholder="Middle Name"
              />
            </div>
            <div className="form-group col-md-3 pl-0">
              <input
                type="text"
                class="form-control"
                id="Form_input3"
                placeholder="Last Name"
              />
            </div>
            <div className="form-group col-md-3 pl-0">
              <input
                type="number"
                class="form-control"
                id="Form_input4"
                placeholder="Mobile Number"
              />
            </div>
          </div>
          <div className="row y4">
            <div className="form-group col-md-12 pl-0">
              <textarea
                class="form-control"
                id="Form_input5"
                placeholder="Address"
                rows="2"
                required
              ></textarea>
            </div>
          </div>
          <div className="row y5">
            <div className="form-group col-md-3 pl-0">
              <input
                type="text"
                class="form-control "
                id="Form_input6"
                placeholder="State"
              />
            </div>
            <div className="form-group col-md-3 pl-0">
              <input
                type="text"
                class="form-control"
                id="Form_input7"
                placeholder="District"
              />
            </div>
            <div className="form-group col-md-3 pl-0">
              <input
                type="text"
                class="form-control"
                id="Form_input8"
                placeholder="City/Gaon/Village"
              />
            </div>
            <div className="form-group col-md-3 pl-0">
              <input
                type="file"
                class="form-control"
                id="Form_input9"
                placeholder="Upload Images"
              />
            </div>
          </div>
          <div className="row y6">
            <div className="form-group col-md-2 pl-0">
              <input
                type="text"
                class="form-control "
                id="Form_input10"
                placeholder="RTX3090"
                style={{ height: "92px", width: "166px" }}
              />
            </div>
            <div className="form-group col-md-4 align-self-end pl-0">
              <input
                type="name"
                class="form-control "
                id="Form_input12"
                placeholder="Enter verification code"
              />
            </div>
          </div>
          <div className="row y7 d-flex justify-content-center">
            <button
              class="button"
              className="Form_submit"
              style={{ alignSelf: "center" }}
            >
              {" "}
              Submit Form
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default first;
