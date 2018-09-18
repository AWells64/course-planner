import { connect } from "react-redux";
import Courses from "../Components/Courses";

const mapStateToProps = state => {
  return {
    courses: Object.values(state.courses)
  };
};

// const mapDispatchToProps = state => {
//   return {
//     addCourse: id => dispatch(addCourse(id))
//   };
// };

export default connect(mapStateToProps)(Courses);
