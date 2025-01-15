import { Avatar, Box, Typography, Divider } from "@mui/material";
import React, { useState } from "react";
import { getResponseComment } from "../../../service/CommentService";
import { CommentProfileImageHeightResponiveSize } from "../../../constant/ComponentSizeResponsive";
import CommentUsernameText from "../../texts/CommentUsernameText";
import CommentContentText from "../../texts/CommentContentText";

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
        <Box sx={{ mt: 1, marginLeft: "55px" }}>
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
                        sx={{ display: "flex", alignItems: "center", gap: 1.5, mt: 1.5 }}
                    >
                        <Avatar
                            src={responseComment.summarizedUserDto.profilePicture || ""}
                            alt={responseComment.summarizedUserDto.username}
                            sx={{ width: CommentProfileImageHeightResponiveSize, height: CommentProfileImageHeightResponiveSize }}
                        />
                        <Box>
                            <CommentUsernameText username={responseComment.summarizedUserDto.username} />
                            <CommentContentText content={responseComment.content} />
                        </Box>
                    </Box>
                ))
            )}
        </Box>
    );
};

export default ResponseCommentsBox;
