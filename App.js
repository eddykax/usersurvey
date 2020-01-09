import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
//const FormValid = ({ FormErrors }) => {
//  let valid = true;
//  Object.values(FormErrors).forEach(val => {
//   val.length > 0 && (valid = false);
// });
//// return valid;
//};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      LastName: "",
      Email: "",
      Country: "",
      firstnameError: "",
      LastNameError: "",
      EmailError: "",
      CountryError: ""
    };
  }

  validate = () => {
    let firstnameError = "";
    let LastNameError = "";
    let EmailError = "";
    // let CountryError= "";

    if (!this.state.name) {
      firstnameError = "name cannot be blank";
    }
    if (!this.state.name) {
      LastNameError = "name cannot be blank";
    }
    if (!this.state.Email.includes("@")) {
      EmailError = "invalid email";
    }

    if (EmailError || firstnameError || LastNameError) {
      this.setState({ EmailError, firstnameError, LastNameError });

      return false;
    }

    return true;
    alert("The form is being submitted!!!");
  };

  handleSubmit = e => {
    e.preventDefault();
    const FormValid = this.validate();

    if (FormValid) {
      console.log(`
        ---SUBMITTING---
        First Name: ${this.state.firstname}
        Last Name: ${this.state.LastName}
        Email: ${this.state.Email}
        Country: ${this.state.Country}
            
      `);
      alert(`
      ---SUBMITTING---
        First Name: ${this.state.firstname}
        Last Name: ${this.state.LastName}
        Email: ${this.state.Email}
        Country: ${this.state.Country}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
    this.setState({
      firstname: "",
      LastName: "",
      Email: "",
      Country: ""
    });
  };
  handleChange /* e => {
    e.preventDefault();
    const { name, value } = e.target;
    let firstnameError = "";
    let LastNameError = "";
    let EmailError = ""; */ = event => {
    event.preventDefault();
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  /*  if (!this.state.firstname) {
      firstnameError = value.length < 3 ? "Please input your name" : "";
    }
    if (!this.state.LastName) {
      LastNameError = value.length < 3 ? "Please input your name" : "";
    }
    if (!this.state.Email.includes("@wfp")) {
      EmailError = "Invalid";
    } */
  //if (!this.state.Country) {
  //   CountryError = value.length < 3 ? "please select a country" : "";
  /* // }
    this.setState(
      { firstnameError, LastNameError, EmailError, [name]: value },
      () => console.log(this.state)
    );
  };
 */
  render() {
    return (
      <div className="Wrapper">
        <header className="App-header">
          <h1>Library and Research Centre User Survey(EN)</h1>
          <p>
            Thank you for participating in this survey, to enable us understand
            user experience and improve where necessary
          </p>
          <div>
            For Any questions contact us at{" "}
            <a
              className="App-link"
              href="global.libraryresearchservice@wfp.org"
              target="_blank"
            >
              global.libraryresearchservice@wfp.org
            </a>
          </div>
        </header>
        <div className="formlayout">
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="QUESTIONAIRE">
              <h2 id="QUESTIONAIRE">QUESTIONAIRE</h2>
            </div>
            <div className="QUESTIONAIRE">
              1.Did you recently make use of the Library and Research Centre
              (LRC) services or premises?<br></br>
              <span>
                <input type="radio" name="yes" value="yes" /> Yes <br></br>
                <input type="radio" name="No" value="no" /> No
              </span>
              <br></br> <br></br>
              2.Why have you not made use of the LRC services?<br></br>
              <span>
                <input
                  type="checkbox"
                  name="chooseone"
                  value="The services are in English whereas I am fluent in another language (specify in the comment below)"
                />
                The services are in English whereas I am fluent in another
                language (specify in the comment below)<br></br>
                <input
                  type="checkbox"
                  name="chooseone"
                  value="I did not think of consulting the LRC when I should have"
                />
                I did not think of consulting the LRC when I should have
                <br></br>
                <input
                  type="checkbox"
                  name="chooseone"
                  value="I did not get a satisfactory reply from the LRC"
                />
                I did not get a satisfactory reply from the LRC
              </span>
              <br></br>
              <br></br>
              3.Add a comment to help us improve the LRC’s general services
              <span>
                <input
                  className="ComMent"
                  placeholder="Enter your Comment here"
                  type="text"
                  name="Comment"
                  height="70%"
                  //noValidate
                  // onChange={this.handleChange}
                />
              </span>
              <br></br>
              4.Which language(s) would you use to access publications? (check
              all that apply)
              <span>
                <input type="checkbox" name="chooseone" value="Arabic" />
                Arabic<br></br>
                <input type="checkbox" name="chooseone" value="English" />
                English<br></br>
                <input type="checkbox" name="chooseone" value="French" />
                French<br></br>
                <input type="checkbox" name="chooseone" value="Portuguese" />
                Portuguese<br></br>
                <input type="checkbox" name="chooseone" value="Spanish" />
                Spanish<br></br>
                <input type="checkbox" name="chooseone" value="Other" />
                <input type="text" name="other" value="" placeholder="Other" />
                <br></br>
              </span>
              5.We have recently automated several functions in the LRC through
              the use of an email bot. The bot manages subscriptions. Which best
              describes your opinion?<br></br>
              <span>
                <input
                  type="radio"
                  name="chooseone"
                  value="I have not used the email bot"
                />
                I have not used the email bot<br></br>
                <input
                  type="radio"
                  name="chooseone"
                  value="I am unable to use the services when delivered by the bot"
                />
                I am unable to use the services when delivered by the bot
                <br></br>
                <input
                  type="radio"
                  name="chooseone"
                  value="I am happy about using the bot"
                />
                I am happy about using the bot
              </span>
              <br></br>
              <br></br>
              6.Add a comment to help us improve the bot <br></br>
              <span>
                <input
                  className="ComMent"
                  placeholder="Enter your Comment here"
                  type="text"
                  name="Comment"
                  height="70%"
                  //noValidate
                  // onChange={this.handleChange}
                />
              </span>{" "}
              <br></br>
              7.We have recently started distributing books using the Amazon
              Cloud Reader in Kindle format. Which best describes your opinion?
              <br></br>
              <span>
                <input
                  type="radio"
                  name="chooseone"
                  value="I am pleased with the books I have read using this service"
                />
                I am pleased with the books I have read using this service
                <br></br>
                <input
                  type="radio"
                  name="chooseone"
                  value="I cannot read books in a browser, I would prefer using a Kindle device or app"
                />
                I cannot read books in a browser, I would prefer using a Kindle
                device or app<br></br>
                <input
                  type="radio"
                  name="chooseone"
                  value="I cannot read e-books. I need to read them on paper"
                />
                I cannot read e-books. I need to read them on paper
                <input
                  type="radio"
                  name="chooseone"
                  value="I did not manage to access books using this service"
                />
                I did not manage to access books using this service
                <input
                  type="radio"
                  name="chooseone"
                  value="I have not used the service"
                />
                I have not used the service
              </span>
              <br></br>
              <br></br>
              6.Add a comment to help us improve the Amazon Cloud Reader E-book
              service <br></br>
              <span>
                <input
                  className="ComMent"
                  placeholder="Enter your Comment here"
                  type="text"
                  name="Comment"
                  height="70%"
                  //noValidate
                  //onChange={this.handleChange}
                />
              </span>{" "}
              <br></br>
              <b style={{ color: "Blue" }}>Are you A WFP Employee?</b>
              <div>
                <b>NO</b>&nbsp;&nbsp;
                <label class="switch">
                  <input type="checkbox"></input>
                  <span class="slider round"></span>
                </label>
                &nbsp;&nbsp;<b>YES</b>
              </div>
              <p
                style={{
                  color: "black",
                  fontSize: "20px",
                  textDecoration: "underline"
                }}
              >
                <strong>
                  <i>DETAILS OF THE EMPLOYEE</i>
                </strong>
              </p>
              <div id="Register">
                <div className="FULL NAME">
                  <label htmlFor="FULL NAME">FIRST NAME</label>
                  <input
                    className="firstname"
                    placeholder="FIRST NAME"
                    type="text"
                    name="firstname"
                    noValidate
                    onChange={this.handleChange}
                  />
                  <div style={{ fontSize: 12, color: "red" }}>
                    {this.firstnameError}
                  </div>
                  <label htmlFor="Last Name"> LAST NAME</label>
                  <input
                    className="Lastname"
                    placeholder="LAST NAME"
                    type="text"
                    name="LastName"
                    noValidate
                    onChange={this.handleChange}
                  />
                  <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.LastNameError}
                  </div>
                </div>
                <div className="EMAIL">
                  <label htmlFor="EMAIL">EMAIL</label>
                  <input
                    className="Email"
                    placeholder="EMAIL"
                    type="text"
                    name="EMAIL"
                    noValidate
                    onChange={this.handleChange}
                  />
                  <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.EmailError}
                  </div>
                </div>
                <div className="DIVISION">
                  <label htmlFor="DIVISION">DIVISION</label>
                  <input
                    className="Division"
                    placeholder="DIVISION"
                    type="text"
                    name="DIVISION"
                    noValidate
                    onChange={this.handleChange}
                  />
                </div>
                <div className="Country">
                  <label htmlFor="Country">Country</label>
                  <select
                    id="country"
                    name="Country"
                    placeholder="Country"
                    requireds
                  >
                    <option value="Country">Country</option>
                    <option value="America">America</option>
                    <option value="Italy">Italy</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Canada">Canada</option>
                    <option value="Japan">Japan</option>
                  </select>
                </div>
                <br></br>
              </div>
              <div className="SubmitForm">
                <button type="submit" id="SUBMIT">
                  SUBMIT SURVEY
                </button>
                <br></br>
                <br></br>
              </div>
              <small style={{ textAlign: "center" }}>
                Thank you for your time rendered
              </small>
              <br></br>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default App;
