import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

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

class Courses extends Component {
  render() {
    const { courses } = this.props;
    return (
      <Fragment>
      <h2 style={mainHeader}>Dev Course Planner</h2>
      <hr style={hrStyle} />
        <h1 className="text-center">Available Courses</h1>
        {Object.values(courses).length ? (
          <ul className="list-group">
            {Object.values(courses).map((course, i) => (
              <li className="list-group-item row" id={course.id} key={i}>
                {/* <Link to={"/courses/" + course.id}>{course.title}</Link> */}
                <p className="col-xs-3">
                  <strong>Title:</strong> {course.title}
                </p>
                <p className="col-xs-5">
                  <strong>Description:</strong> {course.description}
                </p>
                <button className="col-xs-1.5 btn btn-primary">
                  View detail
                </button>
                <button className="col-xs-1.5 pull-right btn btn-success">
                  <strong>+</strong> Add to list
                </button>
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
