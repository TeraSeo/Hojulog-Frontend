export const formatTimeDifference = (createdAt) => {
    const now = new Date();
    const createdDate = new Date(createdAt);
    const diffInSeconds = Math.floor((now - createdDate) / 1000);

    const secondsInMinute = 60;
    const secondsInHour = 3600;
    const secondsInDay = 86400;
    const secondsInWeek = 604800;
    const secondsInYear = 31536000;

    if (createdAt === "" || createdAt === null || createdAt === undefined) return '0초전';

    if (diffInSeconds < secondsInMinute) {
        return `${diffInSeconds}초전`;
    } else if (diffInSeconds < secondsInHour) {
        const minutes = Math.floor(diffInSeconds / secondsInMinute);
        return `${minutes}분전`;
    } else if (diffInSeconds < secondsInDay) {
        const hours = Math.floor(diffInSeconds / secondsInHour);
        return `${hours}시간전`;
    } else if (diffInSeconds < secondsInWeek) {
        const days = Math.floor(diffInSeconds / secondsInDay);
        return `${days}일전`;
    } else if (diffInSeconds < secondsInYear) {
        const weeks = Math.floor(diffInSeconds / secondsInWeek);
        return `${weeks}주전`;
    } else {
        const years = Math.floor(diffInSeconds / secondsInYear);
        return `${years}년전`;
    }
};
