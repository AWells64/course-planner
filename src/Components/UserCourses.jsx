import React, { Component, Fragment } from 'react'; 
import UserCourse from '../Containers/UserCourse';
import Header from './Header'; 

const mainHeader = {
  fontFamily: 'Bitter',
  textAlign: "center",
  backgroundColor: "#181819",
  padding: 20, 
  color: "white",
  borderRadius: 1,
};

const hrStyle = {
    border: 0,
    height: 0, /* Firefox... */
    boxShadow: "0 0 8px 1px black",
    width: '99%',
};

class UserCourses extends Component {

  componentWillMount() {
    this.props.onLoad();
  }

  render() {
    const { courses, deleteCourse, completeCourse } = this.props;
      return(
		<Fragment>
			{Object.values(courses).length ? (
        <ul className="list-group">
		        {Object.values(courses).map((course, i) => (
		          <UserCourse key={course.id} id={course.id} course={course} />
            ))}
        </ul>
      ) : (
        <p>No courses found</p>
      )}
			</Fragment> 
		);
	}
}

export default UserCourses; 