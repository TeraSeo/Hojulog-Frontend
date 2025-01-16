import { Box, Typography, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getResponseComment } from "../../../service/CommentService";
import SingleResponseCommentBox from "./SingleResponseCommentBox";

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

    useEffect(() => {
        setIsCommentsVisible(false);
    }, [responseCommentIds]);

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
                    <SingleResponseCommentBox responseComment={responseComment} />
                ))
            )}
        </Box>
    );
};

export default ResponseCommentsBox;
