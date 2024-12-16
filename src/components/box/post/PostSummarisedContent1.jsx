import React from "react";
import { Typography, Paper } from "@mui/material";

const formatDate = (dateString) => {
    const createdAtDate = new Date(dateString);
    const currentYear = new Date().getFullYear();

    const options = {
        month: "2-digit",
        day: "2-digit",
        year: createdAtDate.getFullYear() !== currentYear ? "numeric" : undefined,
        timeZone: "Asia/Seoul",
    };

    return new Intl.DateTimeFormat("ko-KR", options).format(createdAtDate);
};

const PostSummariseContent1 = ({ pageData }) => {
    return <>
        {/* Header Row */}
        <Paper
            sx={{
                display: "flex",
                padding: "10px 15px",
                borderBottom: "2px solid #ddd",
                fontWeight: "bold",
                backgroundColor: "#f9f9f9",
                color: "#000",
            }}
        >
            <Typography
                sx={{
                    flex: "1 1 10%",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                }}
            >
                카테고리
            </Typography>
            <Typography sx={{ flex: "1 1 10%", whiteSpace: "nowrap" }}>지역</Typography>
            <Typography sx={{ flex: "1 1 50%", textAlign: "center", whiteSpace: "nowrap" }}>
                제목
            </Typography>
            <Typography sx={{ flex: "1 1 15%", textAlign: "center", whiteSpace: "nowrap" }}>
                글쓴이
            </Typography>
            <Typography sx={{ flex: "1 1 10%", textAlign: "center", whiteSpace: "nowrap" }}>
                조회
            </Typography>
            <Typography sx={{ flex: "1 1 15%", textAlign: "center", whiteSpace: "nowrap" }}>
                날짜
            </Typography>
        </Paper>

        {/* Posts */}
        {pageData.posts.length === 0 ? (
            <Typography variant="body1" sx={{ padding: 3, textAlign: "center" }}>
                No posts available.
            </Typography>
        ) : (
            pageData.posts.map((post, index) => (
                <Paper
                    key={index}
                    sx={{
                        display: "flex",
                        padding: "10px 15px",
                        borderBottom: "1px solid #eee",
                        backgroundColor: index % 2 === 1 ? "#f9f9f9" : "white",
                        "&:hover": { backgroundColor: "#f5f5f5", boxShadow: 1 },
                        transition: "all 0.2s ease-in-out",
                    }}
                >
                    {/* Category */}
                    <Typography
                        sx={{
                            flex: "1 1 10%",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            color: "textSecondary",
                        }}
                    >
                        {post.category}
                    </Typography>

                    {/* Suburb */}
                    <Typography
                        sx={{
                            flex: "1 1 10%",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            color: "textSecondary",
                        }}
                    >
                        멜버른
                    </Typography>

                    {/* Title */}
                    <Typography
                        sx={{
                            flex: "1 1 50%",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            fontWeight: post.category === "공지" ? "bold" : "normal",
                            color: post.category === "공지" ? "#d32f2f" : "inherit",
                        }}
                    >
                        {post.title}
                    </Typography>

                    {/* Username */}
                    <Typography
                        sx={{
                            flex: "1 1 15%",
                            textAlign: "center",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            color: "textSecondary",
                        }}
                    >
                        {post.username}
                    </Typography>

                    {/* View Count */}
                    <Typography
                        sx={{
                            flex: "1 1 10%",
                            textAlign: "center",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            color: "textSecondary",
                        }}
                    >
                        {post.viewCounts}
                    </Typography>

                    {/* Date */}
                    <Typography
                        sx={{
                            flex: "1 1 15%",
                            textAlign: "center",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            color: "textSecondary",
                        }}
                    >
                        {formatDate(post.createdAt)}
                    </Typography>
                </Paper>
            ))
        )}
    </>
}

export default PostSummariseContent1;