import { Avatar, Box, Typography, Button, Divider } from "@mui/material";
import React, { useState } from "react";
import { getResponseComment } from "../../../service/CommentService";

const ResponseCommentsBox = ({ responseCommentIds }) => {
    const [responseComments, setResponseComments] = useState([]);
    const [isCommentsVisible, setIsCommentsVisible] = useState(false);

    const showResponseComments = async () => {
        const fetchedComments = await Promise.all(
            responseCommentIds.map((responseCommentId) => getResponseComment(responseCommentId))
        );

        const validComments = fetchedComments.filter((comment) => comment !== null);
        setResponseComments(validComments);
        setIsCommentsVisible(true);
    };

    return (
        <Box sx={{ mt: 2, marginLeft: "68px" }}>
            {!isCommentsVisible ? (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Divider sx={{ width: "25px" }} />
                    <Typography
                    sx={{
                        fontSize: "12px",
                        color: "#888",
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                        ml: 1
                    }}
                    onClick={() => { showResponseComments(); }}
                    >
                    {`${responseCommentIds.length}개의 답글 보기`}
                    </Typography>
                </Box>
            ) : (
                responseComments.map((responseComment) => (
                    <Box
                        key={responseComment.commentId}
                        sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2 }}
                    >
                        <Avatar
                            src={responseComment.summarizedUserDto.profilePicture || ""}
                            alt={responseComment.summarizedUserDto.username}
                            sx={{ width: 32, height: 32 }}
                        />
                        <Box>
                            <Typography
                                sx={{
                                    fontWeight: "500",
                                    fontSize: "12px",
                                    color: "#333",
                                }}
                            >
                                {responseComment.summarizedUserDto.username}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "12px",
                                    color: "#555",
                                }}
                            >
                                {responseComment.content}
                            </Typography>
                        </Box>
                    </Box>
                ))
            )}
        </Box>
    );
};

export default ResponseCommentsBox;
