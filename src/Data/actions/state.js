export const logOutUser = () => {
    document.cookie = "token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
    return {
      type: "logOut",
    }
  }

export const removeUserCourse = id => {
    return {
      type: "deleteUserCourse",
      id: id
    };
  };
  
  export const completeUserCourse = (id, complete) => {
    return {
      type: "completeUserCourse",
      id: id,
      complete: complete
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

  export const setCourses = (data) => {
    return {
      type: "setCourses",
      courses: data
    }
  }

  export const setUserCourses = (data) => {
      return {
          type: "setUserCourses",
          courses: data
      }
  }