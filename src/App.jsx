import React, { Component, Fragment } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Data/store";
import Courses from "./Containers/Courses";
import Course from "./Containers/Course";
import UserCourses from "./Containers/UserCourses";
import Login from "./Containers/Login";
import Register from "./Containers/Register";
import PasswordReset from "./Components/Forms/PasswordReset";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Containers/HeaderContainer";

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <Fragment>
            <Header />
            <Route exact path="/" component={ Login } />
            <Route exact path="/register" component={ Register } />
            <Route exact path="/reset" component={ PasswordReset } />
            <Route exact path="/courses" component={ Courses } />
            <Route exact path="/courses/user" component={ UserCourses } />
            <Route exact path="/courses/:id" render={ ({ match }) => (
               <Course
                id={match.params.id}
                buttonDisplay={false}
               />
             )} />
          </Fragment>
        </Provider>
      </Router>
    );
  }
}

export default App;
