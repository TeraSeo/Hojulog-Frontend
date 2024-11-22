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

    axios.post("http://localhost:8080/api/post/create/restaurant", postData, {
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

function postEducation(postData) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    axios.post("http://localhost:8080/api/post/create/education", postData, {
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

function postLifestyle(postData) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    axios.post("http://localhost:8080/api/post/create/lifestyle", postData, {
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

function postEntertainment(postData) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    axios.post("http://localhost:8080/api/post/create/entertainment", postData, {
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

export { postTechnology, postRestaurant, postEducation, postLifestyle, postEntertainment };