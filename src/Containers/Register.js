import { connect } from 'react-redux'; 
import Register from '../Components/Forms/Register'; 
import { registerUser } from '../Data/actions/api'; 

const mapDispatchToProps = dispatch => {
	return {
        registerUser: (data) => dispatch(registerUser(data))
	};
};

export default connect(null, mapDispatchToProps)(Register);