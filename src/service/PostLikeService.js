import axios from 'axios';

function addPostLike(postId) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    const userId = localStorage.getItem('userId') || "";

    if (userId === "") {
        return null;
    }

    return axios.post("http://localhost:8080/api/post-like/create", { postId, userId }, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accessToken': accessToken,
            'refreshToken': refreshToken,
        }
    })
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.log(error);
        return null;
    });
}

function removePostLike(postId) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    const userId = localStorage.getItem('userId') || "";

    if (userId === "") {
        return null;
    }

    return axios.delete("http://localhost:8080/api/post-like/delete", { params: { postId, userId }, headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'accessToken': accessToken,
        'refreshToken': refreshToken,
    }})
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.log(error);
        return null;
    });
}

export { addPostLike, removePostLike };