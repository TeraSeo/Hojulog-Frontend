import axios from 'axios';
import { serverRoute } from '../constant/Route';

function getPostsByPageNCondition(page, condition) {
    const userId = localStorage.getItem('userId');

    return axios.get(`${serverRoute}/api/post/get/whole-by-page-n-condition`, {
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

function getArticlePostsByPage(page) {
    return axios.get(`${serverRoute}/api/post/get/pageable/recent/article`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
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

function getWorldCupPostsByPage(page) {
    return axios.get(`${serverRoute}/api/post/get/pageable/recent/worldcup`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
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

function getPropertyPostsByPage(page) {
    return axios.get(`${serverRoute}/api/post/get/pageable/recent/property`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
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

function getJobPostsByPage(page) {
    return axios.get(`${serverRoute}/api/post/get/pageable/recent/job`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
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

function getTransactionPostsByPage(page) {
    return axios.get(`${serverRoute}/api/post/get/pageable/recent/transaction`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
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

function getSocietyPostsByPage(page) {
    return axios.get(`${serverRoute}/api/post/get/pageable/recent/society`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
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

function getTravelPostsByPage(page) {
    return axios.get(`${serverRoute}/api/post/get/pageable/recent/travel`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
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

function getStudyPostsByPage(page) {
    return axios.get(`${serverRoute}/api/post/get/pageable/recent/study`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
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

function getWorldCupPostsBySubCategoryNPage(subcategory, page) {
    return axios.get(`${serverRoute}/api/post/get/pageable/worldcup/subcategory`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
            "subCategory": subcategory
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

function getSharePostsByPage(page) {
    return axios.get(`${serverRoute}/api/post/get/pageable/property/subcategory`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
            "subCategory": "쉐어"
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

function getRentPostsByPage(page) {
    return axios.get(`${serverRoute}/api/post/get/pageable/property/subcategory`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
            "subCategory": "렌트"
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

function getPropertyTransactionPostsByPage(page) {
    return axios.get(`${serverRoute}/api/post/get/pageable/property/subcategory`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
            "subCategory": "매매"
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

function getRecruitmentPostsByPage(page) {
    return axios.get(`${serverRoute}/api/post/get/pageable/job/subcategory`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
            "subCategory": "구인"
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

function getJobSeekingPostsByPage(page) {
    return axios.get(`${serverRoute}/api/post/get/pageable/job/subcategory`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
            "subCategory": "구직"
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

function getJobTutoringPostsByPage(page) {
    return axios.get(`${serverRoute}/api/post/get/pageable/job/subcategory`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
            "subCategory": "과외"
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

function getCarPostsByPage(page) {
    return axios.get(`${serverRoute}/api/post/get/pageable/transaction/subcategory`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
            "subCategory": "자동차"
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

function getNecessitiesPostsByPage(page) {
    return axios.get(`${serverRoute}/api/post/get/pageable/transaction/subcategory`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
            "subCategory": "생활용품"
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

function getTransactionEtcPostsByPage(page) {
    return axios.get(`${serverRoute}/api/post/get/pageable/transaction/subcategory`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
            "subCategory": "기타"
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

function getClubPostsByPage(page) {
    return axios.get(`${serverRoute}/api/post/get/pageable/society/subcategory`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
            "subCategory": "동호회"
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

function getLifeStylePostsByPage(page) {
    return axios.get(`${serverRoute}/api/post/get/pageable/society/subcategory`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
            "subCategory": "라이프스타일"
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

function getFriendshipPostsByPage(page) {
    return axios.get(`${serverRoute}/api/post/get/pageable/society/subcategory`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
            "subCategory": "친목"
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

function getRestaurantPostsByPage(page) {
    return axios.get(`${serverRoute}/api/post/get/pageable/travel/subcategory`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
            "subCategory": "레스토랑"
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

function getPlacePostsByPage(page) {
    return axios.get(`${serverRoute}/api/post/get/pageable/travel/subcategory`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
            "subCategory": "여행지"
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

function getCoursePostsByPage(page) {
    return axios.get(`${serverRoute}/api/post/get/pageable/travel/subcategory`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
            "subCategory": "코스"
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

function getSchoolPostsByPage(page) {
    return axios.get(`${serverRoute}/api/post/get/pageable/study/subcategory`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
            "subCategory": "학교후기"
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

function getWorkingHolidayPostsByPage(page) {
    return axios.get(`${serverRoute}/api/post/get/pageable/study/subcategory`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
            "subCategory": "워홀후기"
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

function getLanguageStudyPostsByPage(page) {
    return axios.get(`${serverRoute}/api/post/get/pageable/study/subcategory`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
            "subCategory": "어학연수후기"
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

function getJobReviewPostsByPage(page) {
    return axios.get(`${serverRoute}/api/post/get/pageable/study/subcategory`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
            "subCategory": "취업후기"
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

function getWholeOwnArticles(page) {
    const userId = localStorage.getItem('userId') || "";
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.get(`${serverRoute}/api/post/get/pageable/own/articles`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "userId": userId,
            "accessToken": accessToken,
            "refreshToken": refreshToken
        },
        params: {
            "page": page,
            "size": 10,
        }
    })
    .then((response) => {
            return response.data;
        }
    )
    .catch((error) => {
            alert(error);
            console.log(error);
            return [];
        }
    )
}

function getWholeOwnPosts(page) {
    const userId = localStorage.getItem('userId') || "";
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.get(`${serverRoute}/api/post/get/pageable/own/posts`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "userId": userId,
            "accessToken": accessToken,
            "refreshToken": refreshToken
        },
        params: {
            "page": page,
            "size": 10,
        }
    })
    .then((response) => {
            return response.data;
        }
    )
    .catch((error) => {
            alert(error);
            console.log(error);
            return [];
        }
    )
}

function getWholeOthersArticles(page, userId) {
    return axios.get(`${serverRoute}/api/post/get/pageable/others/articles`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "userId": userId
        },
        params: {
            "page": page,
            "size": 10,
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

function getWholeOthersPosts(page, userId) {
    return axios.get(`${serverRoute}/api/post/get/pageable/others/posts`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "userId": userId
        },
        params: {
            "page": page,
            "size": 10,
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

function getWholeLikedPosts(page) {
    const userId = localStorage.getItem('userId') || "";

    return axios.get(`${serverRoute}/api/post/get/pageable/liked/posts`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "userId": userId
        },
        params: {
            "page": page,
            "size": 10,
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

function getRecent5WorldCupPosts() {
    return axios.get(`${serverRoute}/api/post/get/recent-5/worldcup/post`, {
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

function getRecent5JobPosts() {
    return axios.get(`${serverRoute}/api/post/get/recent-5/job/post`, {
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
    return axios.get(`${serverRoute}/api/post/get/recent-5/property/post`, {
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
    return axios.get(`${serverRoute}/api/post/get/recent-5/transaction/post`, {
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
    return axios.get(`${serverRoute}/api/post/get/recent-5/society/post`, {
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
    return axios.get(`${serverRoute}/api/post/get/recent-5/travel/post`, {
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
    return axios.get(`${serverRoute}/api/post/get/recent-5/study/post`, {
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

function getSpecificCandidateDtoList(postId) {
    const userId = localStorage.getItem('userId') || "";

    return axios.get(`${serverRoute}/api/post/get/specific/candidateDtoList`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'userId': userId
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

function getSpecificArticlePost(postId) {
    const userId = localStorage.getItem('userId') || "";

    return axios.get(`${serverRoute}/api/post/get/specific/article`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'userId': userId
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

function getSpecificWorldCupPost(postId) {
    const userId = localStorage.getItem('userId') || "";

    return axios.get(`${serverRoute}/api/post/get/specific/worldcup`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'userId': userId
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

function getSpecificUpdateWorldCupPost(postId) {
    return axios.get(`${serverRoute}/api/post/get/specific/update/worldcup`, {
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

function getSpecificPropertyPost(postId) {
    const userId = localStorage.getItem('userId') || "";

    return axios.get(`${serverRoute}/api/post/get/specific/property`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'userId': userId
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
    const userId = localStorage.getItem('userId') || "";

    return axios.get(`${serverRoute}/api/post/get/specific/job`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'userId': userId
        },
        params: {
            "postId": postId
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
    const userId = localStorage.getItem('userId') || "";

    return axios.get(`${serverRoute}/api/post/get/specific/transaction`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'userId': userId
        },
        params: {
            "postId": postId
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
    const userId = localStorage.getItem('userId') || "";

    return axios.get(`${serverRoute}/api/post/get/specific/society`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'userId': userId
        },
        params: {
            "postId": postId
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
    const userId = localStorage.getItem('userId') || "";

    return axios.get(`${serverRoute}/api/post/get/specific/travel`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'userId': userId
        },
        params: {
            "postId": postId
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
    const userId = localStorage.getItem('userId') || "";

    return axios.get(`${serverRoute}/api/post/get/specific/study`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'userId': userId
        },
        params: {
            "postId": postId
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

function getSpecificPost(postId) {
    return axios.get(`${serverRoute}/api/post/get/summarised/specific/post`, {
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

function postArticle(postData) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.post(`${serverRoute}/api/post/create/article`, postData, {
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

function postWorldCup(postData) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.post(`${serverRoute}/api/post/create/worldcup`, postData, {
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

function postProperty(postData) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.post(`${serverRoute}/api/post/create/property`, postData, {
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

    return axios.post(`${serverRoute}/api/post/create/job`, postData, {
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

    return axios.post(`${serverRoute}/api/post/create/transaction`, postData, {
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

    return axios.post(`${serverRoute}/api/post/create/society`, postData, {
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

    return axios.post(`${serverRoute}/api/post/create/travel`, postData, {
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

    return axios.post(`${serverRoute}/api/post/create/study`, postData, {
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

function updateArticle(postData) {
    const userId = localStorage.getItem('userId') || "";
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.put(`${serverRoute}/api/post/update/article`, postData, {
        headers: {
            "Content-Type": "multipart/form-data",
            'accessToken': accessToken,
            'refreshToken': refreshToken,
            "userId": userId
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

function updateWorldCup(postData) {
    const userId = localStorage.getItem('userId') || "";
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.put(`${serverRoute}/api/post/update/worldcup`, postData, {
        headers: {
            "Content-Type": "multipart/form-data",
            'accessToken': accessToken,
            'refreshToken': refreshToken,
            "userId": userId
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

function updateTravel(postData) {
    const userId = localStorage.getItem('userId') || "";
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.put(`${serverRoute}/api/post/update/travel`, postData, {
        headers: {
            "Content-Type": "multipart/form-data",
            'accessToken': accessToken,
            'refreshToken': refreshToken,
            "userId": userId
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

function updateProperty(postData) {
    const userId = localStorage.getItem('userId') || "";
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.put(`${serverRoute}/api/post/update/property`, postData, {
        headers: {
            "Content-Type": "multipart/form-data",
            'accessToken': accessToken,
            'refreshToken': refreshToken,
            "userId": userId
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

function updateJob(postData) {
    const userId = localStorage.getItem('userId') || "";
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.put(`${serverRoute}/api/post/update/job`, postData, {
        headers: {
            "Content-Type": "multipart/form-data",
            'accessToken': accessToken,
            'refreshToken': refreshToken,
            "userId": userId
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

function updateTransaction(postData) {
    const userId = localStorage.getItem('userId') || "";
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.put(`${serverRoute}/api/post/update/transaction`, postData, {
        headers: {
            "Content-Type": "multipart/form-data",
            'accessToken': accessToken,
            'refreshToken': refreshToken,
            "userId": userId
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

function updateStudy(postData) {
    const userId = localStorage.getItem('userId') || "";
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.put(`${serverRoute}/api/post/update/study`, postData, {
        headers: {
            "Content-Type": "multipart/form-data",
            'accessToken': accessToken,
            'refreshToken': refreshToken,
            "userId": userId
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

function updateSociety(postData) {
    const userId = localStorage.getItem('userId') || "";
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.put(`${serverRoute}/api/post/update/society`, postData, {
        headers: {
            "Content-Type": "multipart/form-data",
            'accessToken': accessToken,
            'refreshToken': refreshToken,
            "userId": userId
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

function getUpdatePropertyPostDto(postId) {
    const userId = localStorage.getItem('userId') || "";
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.get(`${serverRoute}/api/post/get/update/propertyDto`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accessToken': accessToken,
            'refreshToken': refreshToken,
            "userId": userId
        },
        params: {
            "postId": postId
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

function getUpdateArticleDto(postId) {
    const userId = localStorage.getItem('userId') || "";
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.get(`${serverRoute}/api/post/get/update/articleDto`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accessToken': accessToken,
            'refreshToken': refreshToken,
            "userId": userId
        },
        params: {
            "postId": postId
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

function getUpdateJobPostDto(postId) {
    const userId = localStorage.getItem('userId') || "";
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.get(`${serverRoute}/api/post/get/update/jobDto`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accessToken': accessToken,
            'refreshToken': refreshToken,
            "userId": userId
        },
        params: {
            "postId": postId
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

function getUpdateTransactionPostDto(postId) {
    const userId = localStorage.getItem('userId') || "";
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.get(`${serverRoute}/api/post/get/update/transactionDto`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accessToken': accessToken,
            'refreshToken': refreshToken,
            "userId": userId
        },
        params: {
            "postId": postId
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

function getUpdateTravelPostDto(postId) {
    const userId = localStorage.getItem('userId') || "";
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.get(`${serverRoute}/api/post/get/update/travelDto`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accessToken': accessToken,
            'refreshToken': refreshToken,
            "userId": userId
        },
        params: {
            "postId": postId
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

function getUpdateStudyPostDto(postId) {
    const userId = localStorage.getItem('userId') || "";
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.get(`${serverRoute}/api/post/get/update/studyDto`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accessToken': accessToken,
            'refreshToken': refreshToken,
            "userId": userId
        },
        params: {
            "postId": postId
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

function getUpdateSocietyPostDto(postId) {
    const userId = localStorage.getItem('userId') || "";
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.get(`${serverRoute}/api/post/get/update/societyDto`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accessToken': accessToken,
            'refreshToken': refreshToken,
            "userId": userId
        },
        params: {
            "postId": postId
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

function searchWorldCupPost(title, subCategory, suburb, keywords, page) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.get(`${serverRoute}/api/post/get/worldcup/by/search/option`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accessToken': accessToken,
            'refreshToken': refreshToken,
        },
        params: {
            "title": title, 
            "subCategory": subCategory,
            "suburb" : suburb,
            "keywords": keywords,
            "page": page,
            "size": 10
        },
        paramsSerializer: (params) => {
            return Object.keys(params)
                .map(key => {
                    if (Array.isArray(params[key])) {
                        return params[key]
                            .map(value => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
                            .join("&");
                    }
                    return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
                })
                .join("&");
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

function searchPropertyPost(title, subCategory, suburb, keywords, page) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.get(`${serverRoute}/api/post/get/property/by/search/option`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accessToken': accessToken,
            'refreshToken': refreshToken,
        },
        params: {
            "title": title, 
            "subCategory": subCategory,
            "suburb" : suburb,
            "keywords": keywords,
            "page": page,
            "size": 10
        },
        paramsSerializer: (params) => {
            return Object.keys(params)
                .map(key => {
                    if (Array.isArray(params[key])) {
                        return params[key]
                            .map(value => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
                            .join("&");
                    }
                    return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
                })
                .join("&");
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

function searchJobPost(title, subCategory, suburb, keywords, page) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.get(`${serverRoute}/api/post/get/job/by/search/option`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accessToken': accessToken,
            'refreshToken': refreshToken,
        },
        params: {
            "title": title, 
            "subCategory": subCategory,
            "suburb" : suburb,
            "keywords": keywords,
            "page": page,
            "size": 10
        },
        paramsSerializer: (params) => {
            return Object.keys(params)
                .map(key => {
                    if (Array.isArray(params[key])) {
                        return params[key]
                            .map(value => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
                            .join("&");
                    }
                    return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
                })
                .join("&");
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

function searchTransactionPost(title, subCategory, suburb, keywords, page) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.get(`${serverRoute}/api/post/get/transaction/by/search/option`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accessToken': accessToken,
            'refreshToken': refreshToken,
        },
        params: {
            "title": title, 
            "subCategory": subCategory,
            "suburb" : suburb,
            "keywords": keywords,
            "page": page,
            "size": 10
        },
        paramsSerializer: (params) => {
            return Object.keys(params)
                .map(key => {
                    if (Array.isArray(params[key])) {
                        return params[key]
                            .map(value => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
                            .join("&");
                    }
                    return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
                })
                .join("&");
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

function searchSocietyPost(title, subCategory, keywords, page) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.get(`${serverRoute}/api/post/get/society/by/search/option`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accessToken': accessToken,
            'refreshToken': refreshToken,
        },
        params: {
            "title": title, 
            "subCategory": subCategory,
            "keywords": keywords,
            "page": page,
            "size": 10
        },
        paramsSerializer: (params) => {
            return Object.keys(params)
                .map(key => {
                    if (Array.isArray(params[key])) {
                        return params[key]
                            .map(value => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
                            .join("&");
                    }
                    return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
                })
                .join("&");
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

function searchTravelPost(title, subCategory, keywords, page) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.get(`${serverRoute}/api/post/get/travel/by/search/option`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accessToken': accessToken,
            'refreshToken': refreshToken,
        },
        params: {
            "title": title, 
            "subCategory": subCategory,
            "keywords": keywords,
            "page": page,
            "size": 10
        },
        paramsSerializer: (params) => {
            return Object.keys(params)
                .map(key => {
                    if (Array.isArray(params[key])) {
                        return params[key]
                            .map(value => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
                            .join("&");
                    }
                    return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
                })
                .join("&");
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

function searchStudyPost(title, subCategory, keywords, page) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.get(`${serverRoute}/api/post/get/study/by/search/option`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accessToken': accessToken,
            'refreshToken': refreshToken,
        },
        params: {
            "title": title, 
            "subCategory": subCategory,
            "keywords": keywords,
            "page": page,
            "size": 10
        },
        paramsSerializer: (params) => {
            return Object.keys(params)
                .map(key => {
                    if (Array.isArray(params[key])) {
                        return params[key]
                            .map(value => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
                            .join("&");
                    }
                    return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
                })
                .join("&");
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

function deletePostById(postId) {
    const userId = localStorage.getItem('userId') || "";
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.delete(`${serverRoute}/api/post/delete/post`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accessToken': accessToken,
            'refreshToken': refreshToken,
            "userId": userId
        },
        params: {
            "postId": postId
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

function pinPost(postId) {
    const userId = localStorage.getItem('userId');
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.put(`${serverRoute}/api/post/pin/post`, {}, {
        headers: {
            "Content-Type": "multipart/form-data",
            'accessToken': accessToken,
            'refreshToken': refreshToken,
        },
        params: {
            "userId": userId,
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

function updateWorldCupVictory(candidateId) {
    return axios.put(`${serverRoute}/api/post/add/victory`, {}, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        params: {
            "candidateId": candidateId
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

export { getPostsByPageNCondition, getArticlePostsByPage, getWorldCupPostsByPage, getPropertyPostsByPage, getJobPostsByPage, getTransactionPostsByPage, getSocietyPostsByPage, getTravelPostsByPage, getWorldCupPostsBySubCategoryNPage, getStudyPostsByPage, getSharePostsByPage, getRentPostsByPage, getPropertyTransactionPostsByPage, getRecruitmentPostsByPage, getJobSeekingPostsByPage, getJobTutoringPostsByPage, getCarPostsByPage, getNecessitiesPostsByPage, getTransactionEtcPostsByPage, getClubPostsByPage, getLifeStylePostsByPage, getFriendshipPostsByPage, getRestaurantPostsByPage, getPlacePostsByPage, getCoursePostsByPage, getSchoolPostsByPage, getWorkingHolidayPostsByPage, getLanguageStudyPostsByPage, getJobReviewPostsByPage, getWholeOwnArticles, getWholeOwnPosts, getWholeOthersArticles, getWholeOthersPosts, getWholeLikedPosts, getRecent5WorldCupPosts, getRecent5JobPosts, getRecent5PropertyPosts, getRecent5TransactionPosts, getRecent5SocietyPosts, getRecent5TravelPosts, getRecent5StudyPosts, getSpecificCandidateDtoList, getSpecificArticlePost, getSpecificWorldCupPost, getSpecificUpdateWorldCupPost, getSpecificPropertyPost, getSpecificJobPost, getSpecificTransactionPost, getSpecificSocietyPost, getSpecificTravelPost, getSpecificStudyPost, getSpecificPost, postArticle, postWorldCup, postProperty, postJob, postTransaction, postSociety, postTravel, postStudy, updateProperty, updateJob, updateTransaction, updateSociety, updateArticle, updateWorldCup, updateTravel, updateStudy, getUpdatePropertyPostDto, getUpdateArticleDto, getUpdateJobPostDto, getUpdateTransactionPostDto, getUpdateTravelPostDto, getUpdateStudyPostDto, getUpdateSocietyPostDto, searchWorldCupPost, searchPropertyPost, searchJobPost, searchTransactionPost, searchSocietyPost, searchTravelPost, searchStudyPost, deletePostById, pinPost, updateWorldCupVictory };