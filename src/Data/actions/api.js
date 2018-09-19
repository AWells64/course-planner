import axios from '../../axios';
import { loggedIn } from './state';

export const registerUser = (newUser) => dispatch => {
    axios.post('/auth/register/', newUser).then(() => {
        console.log('request sent');
    });
};

export const loginUser = (userDetails) => dispatch => {
    axios.post('/auth/login/', userDetails).then(({data}) => {
        document.cookie = "token=" + data;
        dispatch(loggedIn());
    });
}

