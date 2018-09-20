const deleteUserCourseFromList = (state, { id }) => {
  const newState = { ...state };
  let updatedUserCourses = { ...newState.currentUserCourses };
  delete updatedUserCourses[id];
  return {
    ...newState,
    currentUserCourses: updatedUserCourses
  };
};

const convertData = (courses) => {
  let data = {};
  courses.map((course, i) => {
    data[course.id] = course;
  })
  return data;
};

const setCourses = (state, action) => {
  // return state;
  const convertedData = convertData(action.courses)

  return {
    ...state, 
    courses: convertedData
  }
};

const completeUserCourseInList = (state, { id, complete }) => {
  let currentUserCourses = { ...state.currentUserCourses };
  currentUserCourses[id].complete = complete;
  return {
    ...state,
    currentUserCourses
  };
};

const logUserIn = (state) => {
  let newState = { ...state };
  newState.loggedIn = true;
  return newState;
}

const logUserOut = (state) => {
  let newState = { ...state };
  newState.loggedIn = false;
  return newState; 
}

const setUserCoursesToList = (state, { courses }) => {
  let newState = { ...state };
  let newUserCourses = convertData(courses);
  newState.currentUserCourses = newUserCourses;
  return newState;
}


const reducer = (state, action) => {
  switch (action.type) {
    case "deleteUserCourse":
      return deleteUserCourseFromList(state, action);
    case "completeUserCourse":
      return completeUserCourseInList(state, action);
    case "logOut": 
      return logUserOut(state);
    case "logIn":
      return logUserIn(state);
    case "setUserCourses":
      return setUserCoursesToList(state, action);
    case "setCourses":
      return setCourses(state, action);
    default:
      return state;
  }
};

export default reducer;
