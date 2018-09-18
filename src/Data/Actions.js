export const deleteCourse = id => {
  return {
    type: "deleteCourse",
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
