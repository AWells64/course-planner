import React, { Component, Fragment } from 'react'; 
import Course from '../Containers/Course'; 

class UserCourses extends Component {

  componentWillMount() {
    this.props.onLoad();
  }

  render() {
    const { courses, deleteCourse, completeCourse } = this.props;
      return(
		<Fragment>
		  <h1>Course List</h1> 
			{Object.values(courses).length ? (
        <ul className="list-group">
		        {Object.values(courses).map((course, i) => (
		          <Course key={course.id} id={course.id} course={course} />
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