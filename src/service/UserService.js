import axios from 'axios';
import { serverRoute } from '../constant/Route';

function login(data) {
    return axios.post(`${serverRoute}/api/auth/login`, {}, 
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'method': 'otp',
                'email': data.email,
                'password': data.password
            },
            withCredentials: true
        }
    )
    .then(response => {
        if (response.status === 202) {
            localStorage.setItem('isAuthenticated', 'true'); 
            localStorage.setItem('email', data.email);
            return true;
        }
        return false;
    })
    .catch(error => {
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('email');
        return false;
    });
}

function register(data) {
    return axios.post(`${serverRoute}/api/auth/register`, data, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            const apiResponse = response.data;
            return apiResponse;
        })
        .catch(error => {
            if (error.response?.status === 409) {
                return { success: false, message: "동일한 이메일로 등록된 계정이 이미 있습니다!" };
            } else {
                return { success: false, message: "회원가입에 실패했습니다!" };
            }
        });
}

function sendOtp(email) {
    axios.post(`${serverRoute}/api/auth/send/otp`, null, {
        params: { email: email },
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
}


function checkIsOtpCorrect(email, code) {
    return axios.post(`${serverRoute}/api/auth/verify/otp`, null, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'method': 'otp',
            'email': email,
            'code': code
        },
        withCredentials: true
    })
    .then(response => {
        if (response.status === 200) {
            const accessToken = response.headers['accesstoken'];
            const refreshToken = response.headers['refreshtoken'];
            localStorage.setItem('accessToken', accessToken); 
            localStorage.setItem('refreshToken', refreshToken);
            return true;
        }

        return false;
    })
    .catch(error => {
        console.error("OTP verification failed:", error);
        return false;
    });
}

function validateToken() {
    const accessToken = localStorage.getItem('accessToken'); 
    const refreshToken = localStorage.getItem('refreshToken'); 

    if (!accessToken || !refreshToken) {
        return Promise.resolve(false);
    }

    return axios.post(`${serverRoute}/api/auth/validate/token`, null, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accessToken': accessToken,
            'refreshToken': refreshToken,
        },
        withCredentials: true
    })
    .then(response => {
        if (response.status === 200) {
            const newAccessToken = response.headers['accesstoken'];
            const newRefreshToken = response.headers['refreshtoken'];
            const userId = response.headers['userid'];

            if (newAccessToken != null) {
                localStorage.setItem('accessToken', newAccessToken);
            }
            if (newRefreshToken != null) {
                localStorage.setItem('refreshToken', newRefreshToken);
            }
            if (userId != null) {
                localStorage.setItem('userId', userId);
            }
            return true;
        } else if (response.status === 401) {
            return false;
        }
    })
    .catch(error => {
        return false;
    });
}

function getSpecificSummarisedUser(userId) {
    return axios.get(`${serverRoute}/api/user/get/summarised/specific`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "userId": userId
        }
    })
    .then((response) => {
            // const data = typeof response.data === "string" ? JSON.parse(response.data) : response.data;
            return response.data;
        }
    )
    .catch((error) => {
            console.log(error);
            return [];
        }
    )
}

function getSpecificSummarisedUserProfile(userId) {
    return axios.get(`${serverRoute}/api/user/get/summarized/specific/profile`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "userId": userId
        }
    })
    .then((response) => {
            return response.data;
        }
    )
    .catch((error) => {
            console.log(error);
            return [];
        }
    )
}

function getSpecificUser(userId) {
    return axios.get(`${serverRoute}/api/user/get/specific`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "userId": userId
        },
    })
    .then((response) => {
            return response.data;
        }
    )
    .catch((error) => {
            console.log(error);
            return null;
        }
    )
}

function getSpecificOwnUser() {
    const userId = localStorage.getItem('userId');
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.get(`${serverRoute}/api/own/user/get/specific`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accessToken': accessToken,
            'refreshToken': refreshToken,
            "userId": userId
        },
    })
    .then((response) => {
            return response.data;
        }
    )
    .catch((error) => {
            console.log(error);
            return null;
        }
    )
}

function updateUserInfo(userFormData, userId) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.put(`${serverRoute}/api/own/user/update`, userFormData, {
        headers: {
            "Content-Type": "multipart/form-data",
            'accessToken': accessToken,
            'refreshToken': refreshToken,
            'userId': userId
        }
    })
    .then((response) => {
            return response.data;
        }
    )
    .catch((error) => {
            console.log(error);
            return null;
        }
    )
}

function updateAttendance(userId) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.put(`${serverRoute}/api/own/user/update/attendance`, {}, {
        headers: {
            "Content-Type": "multipart/form-data",
            'accessToken': accessToken,
            'refreshToken': refreshToken,
            'userId': userId
        }
    })
    .then((response) => {
            return response.data;
        }
    )
    .catch((error) => {
            console.log(error);
            return null;
        }
    )
}

function viewSecretPost(viewerId, postId) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.put(`${serverRoute}/api/user/view/secret/post`, {}, {
        headers: {
            "Content-Type": "multipart/form-data",
            'accessToken': accessToken,
            'refreshToken': refreshToken,
        },
        params: {
            "viewerId": viewerId,
            "postId": postId
        }
    })
    .then((response) => {
            return response.data;
        }
    )
    .catch((error) => {
            console.log(error);
            return null;
        }
    )
}

function checkIsUserPaid(viewerId, postId) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.get(`${serverRoute}/api/user/check/is/paid`, {
        headers: {
            "Content-Type": "multipart/form-data",
            'accessToken': accessToken,
            'refreshToken': refreshToken,
        },
        params: {
            "viewerId": viewerId,
            "postId": postId
        }
    })
    .then((response) => {
            return response.data;
        }
    )
    .catch((error) => {
            console.log(error);
            return null;
        }
    )
}

function getTopRanks() {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.get(`${serverRoute}/api/user/get/top10/users`, {
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
            console.log(error);
            return null;
        }
    )
}

export { login, register, sendOtp, checkIsOtpCorrect, validateToken, getSpecificSummarisedUser, getSpecificSummarisedUserProfile, getSpecificUser, getSpecificOwnUser, updateUserInfo, updateAttendance, viewSecretPost, checkIsUserPaid, getTopRanks };