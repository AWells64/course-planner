import { connect } from "react-redux";
import UserCourses from "../Components/UserCourses"; 
import { deleteCourse } from "../Data/actions/state";  
import { completeCourse } from "../Data/actions/state"; 
import { getUserCourses } from "../Data/actions/api"; 

const mapStateToProps = (state) => {
	return {
		courses: Object.values(state.courses),
	}

}; 

const mapDispatchToProps = dispatch => {
	return {
		deleteCourse: ( id ) => dispatch(deleteCourse(id)), 
		completeCourse: ( id ) => dispatch(completeCourse(id)),
		onLoad: () => dispatch(getUserCourses()),
	};
}



export default connect(mapStateToProps, mapDispatchToProps)(UserCourses);