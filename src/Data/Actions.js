export const deleteCourse = ( id ) => {
    return {
        type: "deleteCourse",
        id: id,
    };
}

export const completeCourse = ( id ) => {
	return {
		type: "completeCourse", 
		id: id, 
	};
} 

