const Initial = {
  users: {
    1: {
      id: "1", email: "name@test.com", password: "password123"
    }
  },

  loggedin: false,

  courses: {
    1: {
      id: "1", 
      title: "React JS Course for Beginners", 
      description: "An introduction to react.", 
      complete: false, 
      price: "9.99", 
      rating: 10, 
      difficulty: "Beginners",
      urlLink: "https://www.udemy.com/perfect-react-js-course/",  
      score: 10,
    },
    2: {
      id: "2", 
      title: "Redux for beginners", 
      description: "An introduction to redux", 
      complete: false, 
      price: "0", 
      rating: 10, 
      difficulty: "Difficult", 
      score: 10,
    }
  },
  currentUserCourses: {
    1: {
      id: "1", 
      title: "React JS Course for Beginners", 
      description: "An introduction to react.", 
      complete: false, 
      price: "9.99", 
      rating: 10, 
      difficulty: "Beginners",
      urlLink: "https://www.udemy.com/perfect-react-js-course/",  
      score: 10,
    },
    // 2: {
    //   //
    // },
    // 3: {
    //   //
    // },
  }
};

export default Initial;