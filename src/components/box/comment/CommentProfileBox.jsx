import React from "react";
import { CommentProfileImageHeightResponiveSize } from "../../../constant/ComponentSizeResponsive";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CommentProfileBox = ({ userId, profilePictureUrl, username }) => {
    const navigate = useNavigate();

    const handleProfileClicked = () => {
        navigate(`/otherpage/${userId}`);
    }

    return <Avatar
        onClick={() => {handleProfileClicked();}}
        src={profilePictureUrl}
        alt={username}
        sx={{
        width: CommentProfileImageHeightResponiveSize,
        height: CommentProfileImageHeightResponiveSize,
        }}
    />;
}

export default CommentProfileBox;