export const allowedRoutesWitoutVerification = ["/", "/board", "/contact", "/otherpage/:userId", "/others/posts/:userId/:username", "/이상형월드컵", "/부동산", "/구인구직", "/사고팔기", "/생활", "/여행", "/유학", "/쉐어", "/렌트", "/매매", "/구인", "/구직", "/과외", "/자동차", "/생활용품", "/기타", "/대어", "/동호회", "/라이프스타일", "/친목", "/레스토랑", "/여행지", "/코스", "/학교후기", "/워홀후기", "/어학연수후기", "/취업후기", "/post/이상형월드컵/detail/:postId", "/post/부동산/detail/:postId", "/post/구인구직/detail/:postId", "/post/사고팔기/detail/:postId", "/post/생활/detail/:postId", "/post/여행/detail/:postId", "/post/유학/detail/:postId", "/search/이상형월드컵/:title/:suburb/:subCategory/:keywords", "/search/부동산/:title/:suburb/:subCategory/:keywords", "/search/구인구직/:title/:suburb/:subCategory/:keywords", "/search/사고팔기/:title/:suburb/:subCategory/:keywords", "/search/생활/:title/:suburb/:subCategory/:keywords", "/search/여행/:title/:suburb/:subCategory/:keywords", "/search/유학/:title/:suburb/:subCategory/:keywords"];

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