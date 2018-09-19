export const removeUserCourse = id => {
    return {
      type: "deleteUserCourse",
      id: id
    };
  };
  
  export const completeCourse = id => {
    return {
      type: "completeCourse",
      id: id
    };
  };
  
  export const addCourse = id => {
    return {
      type: "addCourse",
      id: id
    };
  };

  export const loggedIn = () => {
      return {
          type: "logIn",
      }
  }

  export const setUserCourses = (data) => {
      return {
          type: "setUserCourses",
          courses: data
      }
  }