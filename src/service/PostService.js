import axios from 'axios';

function postTechnology(postData) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    axios.post("http://localhost:8080/api/post/create/technology", postData, {
        headers: {
            "Content-Type": "multipart/form-data",
            'accessToken': accessToken,
            'refreshToken': refreshToken
        }
    })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error)
    });    
}

function postRestaurant(postData) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    axios.post("http://localhost:8080/api/post/add", {}, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accessToken': accessToken,
            'refreshToken': refreshToken
        }
    })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error)
    });    
}

function postEtc(postData) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    axios.post("http://localhost:8080/api/post/add", {}, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accessToken': accessToken,
            'refreshToken': refreshToken
        }
    })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error)
    });    
}

export { postTechnology, postRestaurant, postEtc };