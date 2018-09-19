import { connect } from 'react-redux'; 
import Login from '../Components/Forms/Login'; 
import { loginUser } from '../Data/actions/api'; 

const mapStateToProps = (state, { id }) => ({
    loggedIn: state.loggedIn,
}); 

const mapDispatchToProps = dispatch => {
	return {
        loginUser: (data) => dispatch(loginUser(data))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);