import React, { Component, Fragment } from 'react'; 
import DeleteCourse from './DeleteCourse';

class Course extends Component {

  render() {
    const { courses, deleteCourse } = this.props;

      return(
		<Fragment>
		  <h1>Your Courses Here</h1> 
			{Object.values(courses).length ? (
			  <ul className="list-group">
		        {Object.values(courses).map((course, i) => (
		          <li className="list-group-item" id={course.id} key={i}>
	                <p>Title: {course.title}</p>
	                <p>Description: {course.description}</p>
	                <p>Price: {course.price}</p>
                    <p>Rating: {course.rating}</p>
                    <p>Difficulty: {course.difficulty}</p>
                    <p>Link to course provider: {course.urlLink}</p>
                    <DeleteCourse onClick={deleteCourse} id={course.id} />  
                  </li>
                ))}
              </ul>
            ) : (
            <p>No courses found</p>
           )}
			</Fragment> 
		);
	}
}

export default Course; 