import React from "react";
import DescriptionText from "../../texts/DescriptionText";
import PostMedia from "../../media/PostMedia";
import PostActions from "../../buttons/PostActions";
import { Typography } from "@mui/material";

const PostContentBox = ({postData}) => {
    return <>
        <Typography variant="h6" sx={{ px: 2 }} gutterBottom>
            What is {postData.title}?
        </Typography>
        <DescriptionText description={postData.description} />
        <PostMedia postData={postData} />
        <PostActions postData={postData} />
    </>
}

export default PostContentBox;