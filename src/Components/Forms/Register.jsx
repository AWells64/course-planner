import React, { Component, Fragment } from "react";
import Header from "../Header";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: [
        // {name: "id", value: ""},
        // {name: "Name", value: ""},
        { name: "Email:", value: "" },
        { name: "Password:", value: "" }
      ]
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e, i) {
    let fields = this.state.fields.slice();
    fields[i].value = e.target.value;
    this.setState({ fields: fields });
    // console.log(fields)
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

  render() {
    return (
      <Fragment>
        <Header />
        <div style={registerBackground}>
          <h2 style={headerText}>Register for an account</h2>
          <form onSubmit={e => this.onSubmit(e)}>
            {this.state.fields.map((field, i) => (
              <div style={inputSpacing} key={i}>
                <label style={labelText}>{field.name}</label>
                <input
                  style={inputSize}
                  type="text"
                  value={field.value}
                  onChange={e => this.onChange(e, i)}
                />
              </div>
            ))}

            <input
              type="submit"
              style={submitButton}
              className="btn btn-danger"
              value="Register"
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
	fontFamily: 'Bitter',
	textAlign: "center",
	backgroundColor: "#181819",
	padding: 20, 
	color: "white",
	borderRadius: 1,
	marginBottom: 40, 
};

const hrStyle = {
    border: 0,
    height: 0, /* Firefox... */
    //boxShadow: "0 0 10px 1px black",
    width: '99%',

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
  borderRadius: 1,
	boxShadow: '0px 2px 10px 1px rgba(0,0,0,0.75)', 
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

const font = {
  fontFamily: "Bitter"
};

const login = {
  fontFamily: "Bitter",
  paddingTop: 30,
  textAlign: "center"
};

export default Register;
