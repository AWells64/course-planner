import { connect } from "react-redux";
import Courses from "../Components/Course"; 
import { completeCourse } from "../Data/actions/state"; 


const mapStateToProps = (state, {id}) => {
	const coursesArr = Object.values(state.courses);
	return {
		course: coursesArr.find(course => course.id === id),
		courses: coursesArr,
		completed: coursesArr.find(course => course.id === id) ? coursesArr.find(course => course.id === id).complete : null,
	}

}; 

const mapDispatchToProps = dispatch => {
	return {
		completeCourse: ( id ) => dispatch(completeCourse(id))
	};
}



export default connect(mapStateToProps, mapDispatchToProps)(Courses);