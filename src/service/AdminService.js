import axios from 'axios';

function validateIsAdmin() {
    const accessToken = localStorage.getItem('accessToken'); 
    const refreshToken = localStorage.getItem('refreshToken'); 

    if (!accessToken || !refreshToken) {
        return Promise.resolve(false);
    }

    return axios.post("http://localhost:8080/api/admin/validate/token", null, {
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

    return axios.get("http://localhost:8080/api/admin/get/specific", {
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

export { validateIsAdmin, getAdminData };