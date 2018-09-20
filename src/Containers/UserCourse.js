import { connect } from "react-redux";
import Course from "../Components/Course"; 
import { deleteUserCourse, patchUserCourse } from '../Data/actions/api';  


const mapStateToProps = (state, {id}) => {
	const coursesArr = Object.values(state.currentUserCourses);
	return {
		course: coursesArr.find(course => course.id === id),
		courses: coursesArr,
		completed: coursesArr.find(course => course.id === id).complete,
	}

}; 

const mapDispatchToProps = dispatch => {
	return {
		deleteCourse: ( id ) => dispatch(deleteUserCourse(id)),
		completeCourse: ( id, complete ) => dispatch(patchUserCourse(id, complete))
	};
}



export default connect(mapStateToProps, mapDispatchToProps)(Course);