import React, { Component, Fragment } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Data/store";
import Courses from "./Containers/Courses";
import Course from "./Containers/Course"; 

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Courses />
          <Course /> 
        </Fragment>
      </Provider>
    );
  }
}

export default App;
