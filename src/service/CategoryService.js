const normalizeSubCategory = (category, subCategory) => {
    const normalizedSubCat = subCategory
        .toUpperCase()
        .replace(/-/g, "_")
        .replace(/\(.*?\)/g, "");
    
    if (normalizedSubCat === 'ETC') {
        return category.toUpperCase() + "_" + normalizedSubCat;
    }
    return normalizedSubCat;
};

export { normalizeSubCategory };