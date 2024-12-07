import axios from 'axios';

function createComment(content, postId) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.post("http://localhost:8080/api/comment/create", { content, postId }, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
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

function getCommentsByPostId(postId) {
    const userId = localStorage.getItem('userId');

    return axios
    .get("http://localhost:8080/api/comment/get/specific", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: { postId, userId },
    })
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.error("Error fetching comments:", error);
        return []; 
    });
}

export { createComment, getCommentsByPostId };