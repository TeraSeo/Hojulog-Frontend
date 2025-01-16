export const allowedRoutesWitoutVerification = ["/", "/about", "/contact", "/otherpage/:userId", "/부동산", "/구인구직", "/사고팔기", "/생활", "/여행", "/유학", "/post/부동산/detail/:postId", "/post/구인구직/detail/:postId", "/post/사고팔기/detail/:postId", "/post/생활/detail/:postId", "/post/여행/detail/:postId", "/post/유학/detail/:postId"];

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