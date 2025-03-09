import axios from 'axios';
import { serverRoute } from '../constant/Route';

function validateIsAdmin() {
    const accessToken = localStorage.getItem('accessToken'); 
    const refreshToken = localStorage.getItem('refreshToken'); 

    if (!accessToken || !refreshToken) {
        return Promise.resolve(false);
    }

    return axios.post(`${serverRoute}/api/admin/validate/token`, null, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accessToken': accessToken,
            'refreshToken': refreshToken
        },
        withCredentials: true
    })
    .then(response => {
        if (response.status === 200) {
            const isAdmin = response.data;
            if (isAdmin) {
                return true;
            }
            return false;
        } else if (response.status === 401) {
            return false;
        }
    })
    .catch(error => {
        return false;
    });
}

function getAdminData(page) {
    const accessToken = localStorage.getItem('accessToken'); 
    const refreshToken = localStorage.getItem('refreshToken'); 

    if (!accessToken || !refreshToken) {
        return Promise.resolve(false);
    }

    return axios.get(`${serverRoute}/api/admin/get/specific`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accessToken': accessToken,
            'refreshToken': refreshToken
        },
        params: {
            "page": page,
            "size": 10
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

function getUserInfo(userId) {
    const accessToken = localStorage.getItem('accessToken'); 
    const refreshToken = localStorage.getItem('refreshToken'); 

    if (!accessToken || !refreshToken) {
        return Promise.resolve(false);
    }

    return axios.get(`${serverRoute}/api/admin/get/user`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accessToken': accessToken,
            'refreshToken': refreshToken
        },
        params: {
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

function getUserPageData(page) {
    const accessToken = localStorage.getItem('accessToken'); 
    const refreshToken = localStorage.getItem('refreshToken'); 

    if (!accessToken || !refreshToken) {
        return Promise.resolve(false);
    }

    return axios.get(`${serverRoute}/api/admin/get/pageable/user`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accessToken': accessToken,
            'refreshToken': refreshToken
        },
        params: {
            "page": page,
            "size": 10
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

function getInquiryInfo(inquiryId) {
    const accessToken = localStorage.getItem('accessToken'); 
    const refreshToken = localStorage.getItem('refreshToken'); 

    if (!accessToken || !refreshToken) {
        return Promise.resolve(false);
    }

    return axios.get(`${serverRoute}/api/admin/get/inquiry`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accessToken': accessToken,
            'refreshToken': refreshToken
        },
        params: {
            "inquiryId": inquiryId
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

function getSpecificInquiryInfo(inquiryId) {
    const accessToken = localStorage.getItem('accessToken'); 
    const refreshToken = localStorage.getItem('refreshToken'); 

    if (!accessToken || !refreshToken) {
        return Promise.resolve(false);
    }

    return axios.get(`${serverRoute}/api/admin/get/specific/inquiry`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accessToken': accessToken,
            'refreshToken': refreshToken
        },
        params: {
            "inquiryId": inquiryId
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

function getInquiryPageData(page) {
    const accessToken = localStorage.getItem('accessToken'); 
    const refreshToken = localStorage.getItem('refreshToken'); 

    if (!accessToken || !refreshToken) {
        return Promise.resolve(false);
    }

    return axios.get(`${serverRoute}/api/admin/get/pageable/inquiry`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accessToken': accessToken,
            'refreshToken': refreshToken
        },
        params: {
            "page": page,
            "size": 10
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

function updateUser(userId, formData) {
    const accessToken = localStorage.getItem('accessToken'); 
    const refreshToken = localStorage.getItem('refreshToken'); 

    if (!accessToken || !refreshToken) {
        return Promise.resolve(false);
    }

    return axios.put(`${serverRoute}/api/admin/update/user`, 
        {
            userId,
            log: formData.log,
            role: formData.role,
            isLocked: formData.isLocked
        },
        {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accessToken': accessToken,
            'refreshToken': refreshToken
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

function replyInquiry(inquiryId, response) {
    const accessToken = localStorage.getItem('accessToken'); 
    const refreshToken = localStorage.getItem('refreshToken'); 

    if (!accessToken || !refreshToken) {
        return Promise.resolve(false);
    }

    return axios.put(`${serverRoute}/api/admin/update/inquiry`, 
        {
            inquiryId,
            response
        },
        {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accessToken': accessToken,
            'refreshToken': refreshToken
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

function provideLogThisWeek() {
    const accessToken = localStorage.getItem('accessToken'); 
    const refreshToken = localStorage.getItem('refreshToken'); 

    if (!accessToken || !refreshToken) {
        return Promise.resolve(false);
    }

    return axios.put(`${serverRoute}/api/admin/provide/logs/this-week`, 
        {},
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'accessToken': accessToken,
                'refreshToken': refreshToken
            }
        }
    )
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

export { validateIsAdmin, getAdminData, getUserInfo, getUserPageData, getInquiryInfo, getSpecificInquiryInfo, getInquiryPageData, updateUser, replyInquiry, provideLogThisWeek };