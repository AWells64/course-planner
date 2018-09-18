import React, { Component, Fragment } from "react";

class Register extends Component {
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

	}
	
	render() {
		return (
			<Fragment>
				<h2>Register for an account:</h2>
				<form onSubmit={(e) => this.onSubmit(e)}>
					{this.state.fields.map((field, i) => (
						<div key={i}>
							<label>{field.name}</label>
							<input 
								type="text" 
								value={field.value} 
								onChange={(e) => this.onChange(e, i)
							}/>
						</div>
					))}

					<input type="submit" />
				</form>
			</Fragment>
		)
	}
}

export default Register;