import { connect } from "react-redux";
import Courses from "../Components/Courses";
import {postCourseToUser} from '../Data/actions/api';

const mapStateToProps = state => {
  return {
    courses: Object.values(state.courses)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCourseToUser: (id) => dispatch(postCourseToUser(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
