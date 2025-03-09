import axios from 'axios';
import { serverRoute } from '../constant/Route';

function getDetailedInquiryInfo(inquiryId) {
    const accessToken = localStorage.getItem('accessToken'); 
    const refreshToken = localStorage.getItem('refreshToken'); 

    if (!accessToken || !refreshToken) {
        return Promise.resolve(false);
    }

    return axios.get(`${serverRoute}/api/inquiry/get/detailed`, {
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

export { getDetailedInquiryInfo };