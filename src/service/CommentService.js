import axios from 'axios';
import { serverRoute } from '../constant/Route';

function createComment(content, postId) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    const userId = localStorage.getItem('userId') || "";

    if (userId === "") {
        return false;
    }

    return axios.post(`${serverRoute}/api/comment/create`, { content, postId, userId }, {
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

function createResponseComment(content, parentCommentId) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    const userId = localStorage.getItem('userId') || "";

    if (userId === "") {
        return false;
    }

    return axios.post(`${serverRoute}/api/comment/response/create`, { content, parentCommentId, userId }, {
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
    const userId = localStorage.getItem('userId') || "";

    return axios
    .get(`${serverRoute}/api/comment/get/specific`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'userId': userId
        },
        params: { postId },
    })
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.error("Error fetching comments:", error);
        return []; 
    });
}

function getResponseComment(responseCommentId) {
    const userId = localStorage.getItem('userId') || "";

    return axios
    .get(`${serverRoute}/api/comment/get/response/comment`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'userId': userId
        },
        params: { responseCommentId },
    })
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.error("Error fetching comments:", error);
        return []; 
    });
}

function removeCommentById(commentId) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.delete(`${serverRoute}/api/comment/delete`, { params: { commentId }, headers: {
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

export { createComment, createResponseComment, getCommentsByPostId, getResponseComment, removeCommentById };