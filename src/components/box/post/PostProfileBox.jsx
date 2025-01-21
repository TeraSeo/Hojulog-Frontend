import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import CommentUsernameText from "../../texts/CommentUsernameText";
import { getSpecificSummarisedUserProfile } from "../../../service/UserService";
import ProfileBox from "../profile/ProfileBox";

const PostProfileBox = ({ userId }) => {
    const [profileData, setProfileData] = useState();

    useEffect(() => {
        fetchProfileData(userId);
      }, []);

    const fetchProfileData = (userId) => {
        getSpecificSummarisedUserProfile(userId)
            .then((data) => {
                setProfileData(data);
            })
            .catch((error) => console.error("Error fetching posts:", error));
    };

    if (!userId || !profileData) {
        return <Box />
    }

    return <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, my: 1 }}>
        <ProfileBox userId={userId} profilePictureUrl={profileData.profilePicture} username={profileData.username} />
        <CommentUsernameText username={profileData.username} />
    </Box>
}

export default PostProfileBox;