import { connect } from "react-redux";
import Courses from "../Components/Course"; 
import { deleteCourse } from '../Data/actions/state';  

const mapStateToProps = state => {
	return {
		courses: Object.values(state.courses),
	}
}; 

const mapDispatchToProps = dispatch => {
	return {
		deleteCourse: ( id ) => dispatch(deleteCourse(id))
	}
};



export default connect(mapStateToProps, mapDispatchToProps)(Courses);