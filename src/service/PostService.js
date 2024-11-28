import axios from 'axios';

function getWholePosts() {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.get("http://localhost:8080/api/post/get/whole", {
        headers: {
            "Content-Type": "multipart/form-data",
            'accessToken': accessToken,
            'refreshToken': refreshToken,
        }
    })
    .then((response) => {
            return response.data;
        }
    )
    .catch((error) => {
            return [];
        }
    )
}

function postTechnology(postData) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.post("http://localhost:8080/api/post/create/technology", postData, {
        headers: {
            "Content-Type": "multipart/form-data",
            'accessToken': accessToken,
            'refreshToken': refreshToken,
        }
    })
    .then(response => {
        if (response.data) {
            return true;
        }
        return false;
    })
    .catch(error => {
        console.log(error);
        return false;
    });    
}

function postRestaurant(postData) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.post("http://localhost:8080/api/post/create/restaurant", postData, {
        headers: {
            "Content-Type": "multipart/form-data",
            'accessToken': accessToken,
            'refreshToken': refreshToken
        }
    })
    .then(response => {
        if (response.data) {
            return true;
        }
        return false;
    })
    .catch(error => {
        console.log(error);
        return false;
    });    
}

function postEducation(postData) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.post("http://localhost:8080/api/post/create/education", postData, {
        headers: {
            "Content-Type": "multipart/form-data",
            'accessToken': accessToken,
            'refreshToken': refreshToken
        }
    })
    .then(response => {
        if (response.data) {
            return true;
        }
        return false;
    })
    .catch(error => {
        console.log(error);
        return false;
    });  
}

function postLifestyle(postData) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.post("http://localhost:8080/api/post/create/lifestyle", postData, {
        headers: {
            "Content-Type": "multipart/form-data",
            'accessToken': accessToken,
            'refreshToken': refreshToken
        }
    })
    .then(response => {
        if (response.data) {
            return true;
        }
        return false;
    })
    .catch(error => {
        console.log(error);
        return false;
    });
}

function postEntertainment(postData) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.post("http://localhost:8080/api/post/create/entertainment", postData, {
        headers: {
            "Content-Type": "multipart/form-data",
            'accessToken': accessToken,
            'refreshToken': refreshToken
        }
    })
    .then(response => {
        if (response.data) {
            return true;
        }
        return false;
    })
    .catch(error => {
        console.log(error);
        return false;
    });    
}

const normalizeEmptyStringsToNull = (data) => {
  return Object.fromEntries(
    Object.entries(data).map(([key, value]) => [key, value === "" ? null : value])
  );
};

export { getWholePosts, postTechnology, postRestaurant, postEducation, postLifestyle, postEntertainment, normalizeEmptyStringsToNull };