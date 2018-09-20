import React from 'react'; 

const CompleteCourse = ({onClick, id, complete}) => {

	// const buttonClass = {
		 
	// 	className: complete ? "btn btn-success" : "btn btn-secondary" 

	// 	} 

	return(

		<button 
			className={complete ? "btn btn-success" : "btn btn-warning"}
			onClick={() => onClick(id, complete)}><strong>{complete ? "Completed" : "Mark Complete"}</strong> 
		</button>

	);
} 

export default CompleteCourse; 