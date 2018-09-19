import { connect } from "react-redux";
import Courses from "../Components/Courses";
import {postCourseToUser, getCourses} from '../Data/actions/api';

const mapStateToProps = state => {
  return {
    courses: Object.values(state.courses)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCourseToUser: (id) => dispatch(postCourseToUser(id)),
    onLoad: () => dispatch(getCourses()) 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
