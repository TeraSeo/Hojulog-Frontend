import axios from 'axios';

function login(data) {
    return axios.post("http://localhost:8080/api/auth/login", {}, 
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
    return axios.post("http://localhost:8080/api/auth/register", data, {
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
                return { success: false, message: "Account has already been registered with this email" };
            } else {
                return { success: false, message: "Failed to register account" };
            }
        });
}

function sendOtp(email) {
    axios.post(`http://localhost:8080/api/auth/send/otp`, null, {
        params: { email: email },
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
}


function checkIsOtpCorrect(email, code) {
    return axios.post("http://localhost:8080/api/auth/verify/otp", null, {
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

    return axios.post("http://localhost:8080/api/auth/validate/token", null, {
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
    return axios.get("http://localhost:8080/api/user/get/summarised/specific", {
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
    return axios.get("http://localhost:8080/api/user/get/summarized/specific/profile", {
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
    return axios.get("http://localhost:8080/api/user/get/specific", {
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

    return axios.get("http://localhost:8080/api/own/user/get/specific", {
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

    return axios.put("http://localhost:8080/api/own/user/update", userFormData, {
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

    return axios.put("http://localhost:8080/api/user/view/secret/post", {}, {
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

    return axios.get("http://localhost:8080/api/user/check/is/paid", {
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

export { login, register, sendOtp, checkIsOtpCorrect, validateToken, getSpecificSummarisedUser, getSpecificSummarisedUserProfile, getSpecificUser, getSpecificOwnUser, updateUserInfo, viewSecretPost, checkIsUserPaid };