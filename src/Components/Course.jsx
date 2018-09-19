import React, { Component, Fragment } from 'react'; 
import DeleteCourse from './DeleteCourse';
import CompleteCourse from './CompleteCourse'; 

const font = {
  fontFamily: 'Bitter',
}

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
  	        <p style={font}>Title: {course.title}</p>
  	        <p style={font}>Description: {course.description}</p>
  	        <p style={font}>Price: {course.price}</p>
  	        <p style={font}>Rating: {course.rating}</p> 
  	        <p style={font}>Difficulty: {course.difficulty}</p>
  	        <p style={font}>Link to course provider: {course.urlLink}</p>
	        <DeleteCourse onClick={deleteCourse} id={course.id} />
	        <CompleteCourse onClick={completeCourse} id={course.id} complete={course.complete} /> 
      	</li>	
      	</Fragment>	
        );
	}
}

export default Course; 