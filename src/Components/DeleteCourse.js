import React from "react";

const DeleteCourse = ({ onClick, id }) => {

  return <button className="btn btn-danger pull-right" 
            onClick={() => onClick(id)} 
            ><strong>Delete</strong> 
          </button>;
};

export default DeleteCourse;