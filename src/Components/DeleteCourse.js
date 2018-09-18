import React from "react";

const DeleteCourse = ({ onClick, id }) => {

  return <button className="col-xs-1 pull-right" 
            onClick={() => onClick(id)} 
            ><strong>Delete</strong> 
          </button>;
};

export default DeleteCourse;