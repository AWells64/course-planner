import React, { Component, Fragment } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Data/store"
import Courses from "./Containers/Courses"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Courses />
        </Fragment>
      </Provider>
    );
  }
}

export default App;
