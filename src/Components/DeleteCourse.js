import React from "react";

const DeleteCourse = ({ onClick, id }) => {

  return <button 
            onClick={() => onClick(id)} 
            > Delete
          </button>;
};

export default DeleteCourse;