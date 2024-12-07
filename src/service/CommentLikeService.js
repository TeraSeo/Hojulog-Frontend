import axios from 'axios';

function addCommentLike(commentId) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    const userId = localStorage.getItem('userId');

    return axios.post("http://localhost:8080/api/comment-like/create", { commentId, userId }, {
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
    });
}

function removeCommentLike(commentId) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    const userId = localStorage.getItem('userId');

    return axios.delete("http://localhost:8080/api/comment-like/delete", { params: { commentId, userId }, headers: {
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
    });
}

export { addCommentLike, removeCommentLike };