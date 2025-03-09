import axios from 'axios';
import { serverRoute } from '../constant/Route';

function addPostBookmark(postId) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    const userId = localStorage.getItem('userId');

    return axios.post(`${serverRoute}/api/post-bookmark/create`, { postId, userId }, {
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

function removePostBookmark(postId) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    const userId = localStorage.getItem('userId');

    return axios.delete(`${serverRoute}/api/post-bookmark/delete`, { params: { postId, userId }, headers: {
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

export { addPostBookmark, removePostBookmark };