import axios from 'axios';

export default axios.create({
     baseURL: "http://homestead.test/api/",
     // use your own key
     params: {"key": "4fdea06a65ba1491091c0db709faf0cce944067a"},

     headers: {"Accept": "application/json"},
});