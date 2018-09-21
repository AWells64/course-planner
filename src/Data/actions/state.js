// function deleteCookie(cname) {
//     var d = new Date(); //Create an date object
//     d.setTime(d.getTime() - (1000*60*60*24)); //Set the time to the past. 1000 milliseonds = 1 second
//     var expires = "expires=" + d.toGMTString(); //Compose the expirartion date
//     window.document.cookie = cname+"="+"; "+expires;//Set the cookie with name and the expiration date
 
// }

export const logOutUser = () => {
    document.cookie = "token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
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

  export const setCourse = (data) => {
    return {
      type: "setCourse",
      course: data
    }
  }

  export const setUserCourses = (data) => {
      return {
          type: "setUserCourses",
          courses: data
      }
  }