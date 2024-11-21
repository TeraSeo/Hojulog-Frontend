const normalizeSubCategory = (subCategory) => {
    return subCategory
        .toUpperCase()
        .replace(/-/g, "_")
        .replace(/\(.*?\)/g, "");
};

export { normalizeSubCategory };