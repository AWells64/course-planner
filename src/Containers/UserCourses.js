import { connect } from "react-redux";
import UserCourses from "../Components/UserCourses"; 
import { completeCourse } from "../Data/actions/state"; 
import { getUserCourses } from "../Data/actions/api"; 

const mapStateToProps = (state) => {
	return {
		courses: Object.values(state.currentUserCourses),
	}

}; 

const mapDispatchToProps = dispatch => {
	return {
		completeCourse: ( id ) => dispatch(completeCourse(id)),
		onLoad: () => dispatch(getUserCourses()),
	};
}



export default connect(mapStateToProps, mapDispatchToProps)(UserCourses);