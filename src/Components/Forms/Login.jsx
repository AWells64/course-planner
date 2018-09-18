import React, { Component, Fragment } from "react";

const headerText = {
    color: "white",
    marginBottom: 40,
    textAlign: "center",
    fontFamily: 'Bitter',
};

const labelText = {
    color: "white",
    marginTop: 20,
    fontFamily: 'Bitter',
};

const registerBackground = {
	backgroundColor: "black",
	width: 500,
	alignItems: "center",
	justifyContent: "center",
	padding: 50,
};

const inputSize = {
	width: 400,
};

const submitButton = {
	width: 400,
	marginTop: 50,
	fontFamily: 'Bitter',
};

const inputSpacing = {
	display: "block",
	marginVertical: 10,
}

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fields: [
				// {name: "id", value: ""},
				// {name: "Name", value: ""},
				{name: "Email:", value: ""},
				{name: "Password:", value: ""},

			],
		};
		this.onChange = this.onChange.bind(this);
	}	

	onChange(e, i) {
		let fields = this.state.fields.slice();
		fields[i].value = e.target.value;
		this.setState({fields: fields});
		// console.log(fields)
	}

	onSubmit(e) {
		e.preventDefault();

		let userData = {
			email: this.state.fields[0].value,
			password: this.state.fields[0].value,
		};

		this.props.loginUser(userData);

		this.setState({
			email: "",
			password: "",
		})
	}
	
	render() {
		return (
			<Fragment>
			<div style={registerBackground}>
				<h2 style={headerText}>Sign In</h2>
				<form onSubmit={(e) => this.onSubmit(e)}>
					{this.state.fields.map((field, i) => (
						<div style={inputSpacing} key={i}>
							<label style={labelText}>{field.name}</label>
							<input style={inputSize}
								type="text" 
								value={field.value} 
								onChange={(e) => this.onChange(e, i)
							}/>
						</div>
					))}

					<input type="submit" style={submitButton} className="btn btn-danger" value="Sign in" />
				</form>
				</div>
			</Fragment>
		)
	}
}

export default Login;