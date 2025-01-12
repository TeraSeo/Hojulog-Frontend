export const allowedRoutesWitoutVerification = ["/", "/about", "/contact", "/realestate", "/jobs", "/marketplace", "/community", "/travel", "/studyabroad", "/post/realestate/detail/:postId", "/post/jobs/detail/:postId", "/post/marketplace/detail/:postId", "/post/community/detail/:postId", "/post/travel/detail/:postId", "/post/studyabroad/detail/:postId"];

const ConvertCateogryToUrlCategory = (category) => {
    if (category === "부동산") {
        return "realestate";
    }
    else if (category === "구인구직") {
        return "jobs";
    }
    else if (category === "사고팔기") {
        return "marketplace";
    }
    else if (category === "생활") {
        return "community";
    }
    else if (category === "여행") {
        return "travel";
    }
    else if (category === "유학") {
        return "studyabroad";
    }
    return "";
};

export { ConvertCateogryToUrlCategory };