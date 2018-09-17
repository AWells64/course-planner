import { connect } from 'react-redux';
import Course from '../Components/Course';
import { deleteCourse } from '../Data/Actions';


const mapDispatchToProps = dispatch => {
    return{
        deleteCourse: ( id ) => dispatch(deleteCourse(id))
    };
}

const enhancer = connect(null, mapDispatchToProps);
export default enhancer(deleteCourse);