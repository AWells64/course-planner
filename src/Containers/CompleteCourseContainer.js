import { connect } from 'react-redux'; 
import Course from '../Components/Course'; 
import completeCourse from '../Data/actions/state'; 



const mapDispatchToProps = dispatch => {
	return{
		completeCourse: (id) => dispatch(completeCourse(id))
	};
}

const enhancer = connect(null, mapDispatchToProps);
export default enhancer(completeCourse);