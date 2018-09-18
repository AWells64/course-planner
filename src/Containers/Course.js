import { connect } from "react-redux";
import Courses from "../Components/Course"; 
import { deleteCourse } from "../Data/Actions";  
import { completeCourse } from "../Data/Actions"; 

const mapStateToProps = (state, {id}) => {
	const coursesArr = Object.values(state.courses);
	return {
		course: coursesArr.find(course => course.id === id),
		courses: coursesArr,
		completed: coursesArr.find(course => course.id === id).complete,
	}

}; 

const mapDispatchToProps = dispatch => {
	return {
		deleteCourse: ( id ) => dispatch(deleteCourse(id)), 
		completeCourse: ( id ) => dispatch(completeCourse(id))
	};
}



export default connect(mapStateToProps, mapDispatchToProps)(Courses);