export const getPaginationRange = (currentPage, pageSize) => {

    if (pageSize <= 10) {
        return [1, pageSize];
    } else if (currentPage <= 5) {
        return [1, 10];
    } else if (currentPage > pageSize - 5) {
        return [pageSize - 9, pageSize];
    } else {
        return [currentPage - 4, currentPage + 5];
    }
};