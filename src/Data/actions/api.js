import axios from '../../axios';

export const registerUser = (newUser) => dispatch => {
    axios.post('/auth/register/', newUser).then(() => {
        console.log('request sent');
    })
}