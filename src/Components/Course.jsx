import React, { Component, Fragment } from 'react'; 
import DeleteCourse from './DeleteCourse';
import CompleteCourse from './CompleteCourse'; 

const mainHeader = {
  fontFamily: 'Bitter',
  textAlign: "center",
  backgroundColor: "black",
  color: "red",
  borderRadius: 5,
};

const hrStyle = {
    border: 0,
    height: 0, /* Firefox... */
    boxShadow: "0 0 10px 1px black",
    width: '99%',
};

class Course extends Component {

  render() {
    const { course, deleteCourse, completeCourse, completed } = this.props;

      return(
      	<Fragment>
      	<h2 style={mainHeader}>Dev Course Planner</h2>
			<hr style={hrStyle} />
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
      	</Fragment>	
        );
	}
}

export default Course; 