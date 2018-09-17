import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class Courses extends Component {
  render() {
    const { courses } = this.props;
    return (
      <Fragment>
        <h1>Dev Course Planner</h1>
        {Object.values(courses).length ? (
          <ul className="list-group">
            {Object.values(courses).map((course, i) => (
              <li className="list-group-item" id={course.id} key={i}>
                {/* <Link to={"/courses/" + course.id}>{course.title}</Link> */}
                <p>Title: {course.title}</p>
                <p>Description: {course.description}</p>
                <p>Price: {course.price}</p>
                <p>Rating: {course.rating}</p>
                <p>Difficulty: {course.difficulty}</p>
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

export default Courses;