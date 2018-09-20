import { connect } from 'react-redux';
import Header from "../Components/Header";
import { logOutUser } from "../Data/actions/state";

const mapStateToProps = (state, { id }) => ({
    loggedIn: state.loggedIn,
}); 

const mapDispatchToProps = dispatch => {
	return {
        logOut: () => dispatch(logOutUser())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);