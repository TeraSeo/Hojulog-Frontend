export const formatTimeDifference = (createdAt) => {
    if (!createdAt) return "0초전";

    // Get the current time in Sydney
    const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Australia/Sydney" }));

    // Parse `createdAt` as a date (assumed to be UTC or local)
    const createdDate = new Date(createdAt);
    
    // Ensure it's converted to Sydney time
    const createdSydney = new Date(createdDate.toLocaleString("en-US", { timeZone: "Australia/Sydney" }));

    console.log("Now (Sydney):", now);
    console.log("Created At (Original):", createdAt);
    console.log("Created Date (Parsed):", createdDate);
    console.log("Created Date (Sydney Adjusted):", createdSydney);

    const diffInSeconds = Math.floor((now - createdSydney) / 1000);

    if (diffInSeconds < 60) return `${diffInSeconds}초전`;
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}분전`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}시간전`;
    if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}일전`;
    if (diffInSeconds < 31536000) return `${Math.floor(diffInSeconds / 604800)}주전`;
    
    return `${Math.floor(diffInSeconds / 31536000)}년전`;
};
