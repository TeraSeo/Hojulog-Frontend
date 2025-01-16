import { Box } from "@mui/material";
import React, { useState } from "react";
import CommentUsernameText from "../../texts/CommentUsernameText";
import CommentContentText from "../../texts/CommentContentText";
import CreatedAtText from "../../texts/CreatedAtText";
import { addCommentLike, removeCommentLike } from "../../../service/CommentLikeService";
import CommentLikeButton from "../../buttons/CommentLikeButton";
import CommentProfileBox from "./CommentProfileBox";

const SingleResponseCommentBox = ({ responseComment }) => {
    const { commentId, content, wholeLikedUserLength, isCurrentUserLiked, createdAt } = responseComment;
    const { id, username, profilePicture } = responseComment.summarizedUserDto;
    const profilePictureUrl = profilePicture || ""; 

    const [ wholeLikesCount, setWholeLikesCount ] = useState(wholeLikedUserLength);
    const [ isLiked, setIsLiked ] = useState(isCurrentUserLiked);

    const handleLikeClicked = async () => {
        if (!isLiked) {
          const wholeLikes = await addCommentLike(commentId);
          setWholeLikesCount(wholeLikes);
          setIsLiked(true);
        }
        else {
          const wholeLikes = await removeCommentLike(commentId);
          setWholeLikesCount(wholeLikes);
          setIsLiked(false);
        }
      }

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
              >

            <Box
                key={commentId}
                sx={{ display: "flex", alignItems: "center", gap: 1.5, mt: 1.5 }}
            >
                <CommentProfileBox userId={id} profilePictureUrl={profilePictureUrl} username={username} />

                <Box>
                    <CommentUsernameText username={username} />
                    <CommentContentText content={content} />

                    <CreatedAtText createdAt={createdAt} pl={0} />
                </Box>

            </Box>

            <CommentLikeButton isLiked={isLiked} handleLikeClicked={handleLikeClicked} wholeLikesCount={wholeLikesCount} />
        </Box>
    );
}

export default SingleResponseCommentBox;