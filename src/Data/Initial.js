const Initial = {
  users: {
    1: {
      id: "1", email: "name@test.com", password: "password123"
    }
  },
  courses: {
    1: {
      id: "1", 
      title: "React JS Course for Beginners", 
      description: "An introduction to react. This course is awesome because you will learn ReactJS hands on.", 
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
  }
};

export default Initial;