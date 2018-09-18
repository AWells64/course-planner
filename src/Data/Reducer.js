const deleteCourse = (state, { id }) => {
  const newState = { ...state };
  const courses = { ...newState.courses };
  delete courses[id];
  return {
    ...newState,
    courses
  };
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
    case "deleteCourse":
      return deleteCourse(state, action);
    case "completeCourse":
      return completeCourse(state, action);
    // case "addCourse" : return addCourse(state, action);
    case "logIn":
      return logUserIn(state);

    default:
      return state;
  }
};

export default reducer;
