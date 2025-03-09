import axios from 'axios';
import { serverRoute } from '../constant/Route';

function addCommentLike(commentId) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    const userId = localStorage.getItem('userId') || "";

    if (userId === "") {
        return null;
    }

    return axios.post(`${serverRoute}/api/comment-like/create`, { commentId, userId }, {
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

function removeCommentLike(commentId) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    const userId = localStorage.getItem('userId') || "";

    if (userId === "") {
        return null;
    }

    return axios.delete(`${serverRoute}/api/comment-like/delete`, { params: { commentId, userId }, headers: {
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

export { addCommentLike, removeCommentLike };