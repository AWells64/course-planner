import React, { Component, Fragment } from 'react'; 
import DeleteCourse from './DeleteCourse';
import CompleteCourse from './CompleteCourse'; 

class Course extends Component {

  render() {
    const { course, deleteCourse, completeCourse, completed } = this.props;

      return(
		<li className="list-group-item" id={course.id} >
	        <p>Title: {course.title}</p>
	        <p>Description: {course.description}</p>
	        <p>Price: {course.price}</p>
	        <p>Rating: {course.rating}</p> 
	        <p>Difficulty: {course.difficulty}</p>
	        <p>Link to course provider: {course.urlLink}</p>
	        <DeleteCourse onClick={deleteCourse} id={course.id} />
	        <CompleteCourse onClick={completeCourse} id={course.id} complete={course.complete} /> 
      	</li>		
        );
	}
}

export default Course; 