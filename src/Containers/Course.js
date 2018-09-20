import { connect } from "react-redux";
import Courses from "../Components/Course"; 


const mapStateToProps = (state, {id}) => {
	const coursesArr = Object.values(state.courses);
	return {
		course: coursesArr.find(course => course.id === id),
		courses: coursesArr,
		completed: coursesArr.find(course => course.id === id) ? coursesArr.find(course => course.id === id).complete : null,
	}

}; 

export default connect(mapStateToProps)(Courses);