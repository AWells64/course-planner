const deleteUserCourseFromList = (state, { id }) => {
  const newState = { ...state };
  const courses = { ...newState.currentUserCourses };
  delete courses[id];
  return {
    ...newState,
    courses
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
  console.log(action.courses);
  // return state;
  const convertedData = convertData(action.courses)

  return {
    ...state, 
    courses: convertedData
  }
};

const completeCourse = (state, { id }) => {
  let courses = { ...state.courses };
  courses[id].complete = true;
  return {
    ...state,
    courses
  };
};

const logUserIn = (state) => {
  let newState = { ...state };
  newState.loggedIn = true;
  return newState;
}

const setUserCoursesToList = (state, { courses }) => {
  let newState = { ...state };
  newState.currentUserCourses = courses;
  return newState;
}

// const addCourse = (state, {id}) => {
//   const newState = {...state}
//   const courses = {...newState.courses};
//   return {
//     ...newState,
//     courses
// 	};
// }

const reducer = (state, action) => {
  switch (action.type) {
    case "deleteUserCourse":
      return deleteUserCourseFromList(state, action);
    case "completeCourse":
      return completeCourse(state, action);
    // case "addCourse" : return addCourse(state, action);
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
