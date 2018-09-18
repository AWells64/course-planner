import React, { Component, Fragment } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Data/store";
import Courses from "./Containers/Courses";
import Course from "./Containers/Course";
import Login from "./Components/Forms/Login";
import Register from "./Components/Forms/Register";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <h1 className="page-header text-center">Dev Course Planner</h1>
          <Register />
          <Login />
          <Courses />
          <Course />
        </Fragment>
      </Provider>
    );
  }
}

export default App;
