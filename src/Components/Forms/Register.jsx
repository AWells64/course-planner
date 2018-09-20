import React, { Component, Fragment } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: [
        { name: "Email:", value: "", type: "text" },
        { name: "Password:", value: "", type: "password" }
      ],
      formErrors: { email: "", password: "" },
      emailValid: true,
      passwordValid: true,
      formValid: false
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e, i) {
    let fields = this.state.fields.slice();
    fields[i].value = e.target.value;
    this.setState({ fields: fields }, () => {
      this.validateField(this.state.fields);
    });
    // console.log(this.state.emailValid)
  }

  onSubmit(e) {
    e.preventDefault();

    let newUserData = {
      name: "name",
      email: this.state.fields[0].value,
      password: this.state.fields[0].value
    };

    this.props.registerUser(newUserData);

    this.setState({
      email: "",
      password: ""
    });
  }

  validateField(fields) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let fieldsObj = {};

    fields.map((field, i) => {
      fieldsObj[field.name] = field.value;

      if (field.name === "Email:") {
        emailValid = field.value.match(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
        fieldValidationErrors.email = emailValid ? "" : "Email is invalid";
      } else if (field.name === "Password:") {
        passwordValid = field.value.length >= 6;
        fieldValidationErrors.password = passwordValid
          ? ""
          : "Password is too short";
      }
    });

    // console.log("email valid?" + emailValid);
    // console.log("password valid?" + passwordValid);
    // console.log(fieldsObj);

    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

  render() {
    return (
      <Fragment>
        <h2 style={mainHeader}>Dev Course Planner</h2>
        <hr style={hrStyle} />
        <div style={registerBackground}>
          <h2 style={headerText}>Register for an account</h2>
          <form onSubmit={e => this.onSubmit(e)}>
            {this.state.emailValid ? (
              ""
            ) : (
              <span className="alert alert-danger" style={err}>
                {this.state.formErrors.email}
              </span>
            )}
            {this.state.passwordValid ? (
              ""
            ) : (
              <span className="alert alert-danger" style={err}>
                {this.state.formErrors.password}
              </span>
            )}
            {this.state.fields.map((field, i) => (
              <div style={inputSpacing} key={i}>
                <label style={labelText}>{field.name}</label>
                <input
                  style={inputSize}
                  type={field.type}
                  value={field.value}
                  onChange={e => this.onChange(e, i)}
                />
              </div>
            ))}
            <input
              type="submit"
              style={submitButton}
              className="btn btn-danger form-control"
              value="Register"
              disabled={!this.state.formValid}
            />
          </form>
          <p style={login}>
            Already have an account? <a href="../">Log in here.</a>
          </p>
        </div>
      </Fragment>
    );
  }
}

const mainHeader = {
  fontFamily: "Bitter",
  textAlign: "center",
  backgroundColor: "#181819",
  padding: 20,
  color: "white",
  borderRadius: 1,
  marginBottom: 40
};

const hrStyle = {
  border: 0,
  height: 0 /* Firefox... */,
  //boxShadow: "0 0 10px 1px black",
  width: "99%"
};

const headerText = {
  color: "white",
  marginBottom: 40,
  textAlign: "center",
  fontFamily: "Bitter"
};

const labelText = {
  color: "white",
  marginTop: 20,
  fontFamily: "Bitter"
};

const registerBackground = {
  backgroundColor: "#181819",
  width: 500,
  alignItems: "center",
  justifyContent: "center",
  padding: 50,
  margin: "0 auto 0 auto",
  marginBottom: 40,
  boxShadow: "0px 2px 10px 1px rgba(0,0,0,0.75)"
};

const inputSize = {
  width: 400
};

const submitButton = {
  width: 400,
  marginTop: 50,
  fontFamily: "Bitter"
};

const inputSpacing = {
  display: "block",
  marginVertical: 10
};

const login = {
  fontFamily: "Bitter",
  paddingTop: 30,
  textAlign: "center"
};

const err = {
  fontFamily: "Bitter",
  margin: 10
};

export default Register;
