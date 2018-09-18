import { connect } from "react-redux";
import UserCourses from "../Components/UserCourses"; 
import { deleteCourse } from "../Data/actions/state";  
import { completeCourse } from "../Data/actions/state"; 

const mapStateToProps = (state) => {
	return {
		courses: Object.values(state.courses),
	}

}; 

const mapDispatchToProps = dispatch => {
	return {
		deleteCourse: ( id ) => dispatch(deleteCourse(id)), 
		completeCourse: ( id ) => dispatch(completeCourse(id))
	};
}



export default connect(mapStateToProps, mapDispatchToProps)(UserCourses);