import React from 'react'; 

const CompleteCourse = ({onClick, id, complete}) => {

	const buttonStyle = {
		 
		backgroundColor: complete ? "green" : "grey" 

		} 

	return(

		<button 
			style={buttonStyle}
			onClick={() => onClick(id)}><strong>Complete</strong> 
		</button>

	);
} 

export default CompleteCourse; 