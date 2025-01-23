import axios from 'axios';

function postInquiry(inquiryData) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.post("http://localhost:8080/api/inquiry/create", inquiryData, {
        headers: {
            "Content-Type": "multipart/form-data",
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
        alert(error);
        return false;
    });    
}

function getInquiryById(inquiryId) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios
    .get("http://localhost:8080/api/inquiry/get/specific", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accessToken': accessToken,
            'refreshToken': refreshToken,
        },
        params: { inquiryId },
    })
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.error("Error fetching comments:", error);
        return []; 
    });
}

export { postInquiry, getInquiryById };