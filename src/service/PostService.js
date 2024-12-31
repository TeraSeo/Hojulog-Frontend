import axios from 'axios';

function getPostsByPageNCondition(page, condition) {
    const userId = localStorage.getItem('userId');

    return axios.get("http://localhost:8080/api/post/get/whole-by-page-n-condition", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
            "condition": condition,
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

function getPropertyPostsByPage(page) {
    const userId = localStorage.getItem('userId');

    return axios.get("http://localhost:8080/api/post/get/pageable/recent/property", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
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

function getJobPostsByPage(page) {
    const userId = localStorage.getItem('userId');

    return axios.get("http://localhost:8080/api/post/get/pageable/recent/job", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
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

function getTransactionPostsByPage(page) {
    const userId = localStorage.getItem('userId');

    return axios.get("http://localhost:8080/api/post/get/pageable/recent/transaction", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
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

function getSocietyPostsByPage(page) {
    const userId = localStorage.getItem('userId');

    return axios.get("http://localhost:8080/api/post/get/pageable/recent/society", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
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

function getTravelPostsByPage(page) {
    const userId = localStorage.getItem('userId');

    return axios.get("http://localhost:8080/api/post/get/pageable/recent/travel", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
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

function getStudyPostsByPage(page) {
    const userId = localStorage.getItem('userId');

    return axios.get("http://localhost:8080/api/post/get/pageable/recent/study", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
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

function getRecent5JobPosts() {
    return axios.get("http://localhost:8080/api/post/get/recent-5/job/post", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
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

function getRecent5PropertyPosts() {
    return axios.get("http://localhost:8080/api/post/get/recent-5/property/post", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
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

function getRecent5TransactionPosts() {
    return axios.get("http://localhost:8080/api/post/get/recent-5/transaction/post", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
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

function getRecent5SocietyPosts() {
    return axios.get("http://localhost:8080/api/post/get/recent-5/society/post", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
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

function getRecent5TravelPosts() {
    return axios.get("http://localhost:8080/api/post/get/recent-5/travel/post", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
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

function getRecent5StudyPosts() {
    return axios.get("http://localhost:8080/api/post/get/recent-5/study/post", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
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

function getSpecificPropertyPost(postId) {
    const userId = localStorage.getItem('userId');

    return axios.get("http://localhost:8080/api/post/get/specific/property", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "postId": postId,
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

function getSpecificJobPost(postId) {
    const userId = localStorage.getItem('userId');

    return axios.get("http://localhost:8080/api/post/get/specific/job", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "postId": postId,
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

function getSpecificTransactionPost(postId) {
    const userId = localStorage.getItem('userId');

    return axios.get("http://localhost:8080/api/post/get/specific/transaction", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "postId": postId,
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

function getSpecificSocietyPost(postId) {
    const userId = localStorage.getItem('userId');

    return axios.get("http://localhost:8080/api/post/get/specific/society", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "postId": postId,
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

function getSpecificTravelPost(postId) {
    const userId = localStorage.getItem('userId');

    return axios.get("http://localhost:8080/api/post/get/specific/travel", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "postId": postId,
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

function getSpecificStudyPost(postId) {
    const userId = localStorage.getItem('userId');

    return axios.get("http://localhost:8080/api/post/get/specific/study", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "postId": postId,
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

function postProperty(postData) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.post("http://localhost:8080/api/post/create/property", postData, {
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
        return false;
    });    
}

function postJob(postData) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.post("http://localhost:8080/api/post/create/job", postData, {
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
        return false;
    });    
}

function postTransaction(postData) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.post("http://localhost:8080/api/post/create/transaction", postData, {
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
        return false;
    });    
}

function postSociety(postData) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.post("http://localhost:8080/api/post/create/society", postData, {
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
        return false;
    });    
}

function postTravel(postData) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.post("http://localhost:8080/api/post/create/travel", postData, {
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
        return false;
    });    
}

function postStudy(postData) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.post("http://localhost:8080/api/post/create/study", postData, {
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
        return false;
    });    
}


export { getPostsByPageNCondition, getPropertyPostsByPage, getJobPostsByPage, getTransactionPostsByPage, getSocietyPostsByPage, getTravelPostsByPage, getStudyPostsByPage, getRecent5JobPosts, getRecent5PropertyPosts, getRecent5TransactionPosts, getRecent5SocietyPosts, getRecent5TravelPosts, getRecent5StudyPosts, getSpecificPropertyPost, getSpecificJobPost, getSpecificTransactionPost, getSpecificSocietyPost, getSpecificTravelPost, getSpecificStudyPost, postProperty, postJob, postTransaction, postSociety, postTravel, postStudy };