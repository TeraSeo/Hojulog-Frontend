import React from "react";
import { ProfileImageHeightResponiveSize } from "../../../constant/ComponentSizeResponsive";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProfileBox = ({ userId, profilePictureUrl, username }) => {
    const navigate = useNavigate();
    
    const handleProfileClicked = () => {
        navigate(`/otherpage/${userId}`);
    }
    
    return <Avatar
        onClick={() => {handleProfileClicked();}}
        src={profilePictureUrl}
        alt={username}
        sx={{
        width: ProfileImageHeightResponiveSize,
        height: ProfileImageHeightResponiveSize,
        }}
    />;
}

export default ProfileBox;