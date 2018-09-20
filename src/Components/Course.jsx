import React, { Component, Fragment } from 'react'; 
import DeleteCourse from './DeleteCourse.jsx';
import CompleteCourse from './CompleteCourse.jsx'; 
import { Link } from "react-router-dom";


const font = {
  fontFamily: 'Bitter',
}

const linkBackBtn = { 

  marginTop: 10,
  marginRight: 20,
  color: 'black', 
}; 

class Course extends Component {

  render() {
    const { course, deleteCourse, completeCourse, completed, loggedIn } = this.props;

      return course ?(
      	<Fragment>
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
            <Link to={"/courses"}>
              <button 
              className="col-xs-1.5 pull-right btn btn-secondary" 
              style={linkBackBtn}
              ><strong>Back</strong>
              </button> 
            </Link> 
      	</Fragment>	
        ) : null;
	}
}

export default Course; 