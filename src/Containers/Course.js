import { connect } from "react-redux";
import Course from "../Components/Course"; 
import { getCourse } from "../Data/actions/api";


const mapStateToProps = (state, {id}) => {
	const coursesArr = Object.values(state.courses);
	return {
		course: state.courses[id],
		courses: coursesArr,
		completed: state.courses[id] ? state.courses[id].completed : null,
		// completed: coursesArr.find(course => course.id === id) ? coursesArr.find(course => course.id === id).complete : null,
	}

}; 

const mapDispatchToProps = (dispatch, {id}) => {
	return {
		onLoad: () => dispatch(getCourse(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Course);