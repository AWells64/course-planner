const deleteCourse = (state, {id}) => {
  const newState = {...state}
  const courses = {...newState.courses};
  delete courses[id];
  return {
    ...newState,
    courses
	};
  }; 

const reducer = (state, action) => {
  switch (action.type) {

  	case "deleteCourse" : return deleteCourse(state, action);

    default: return state;
  }
}; 


export default reducer;