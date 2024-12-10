import React, { useState } from "react";
import { Box } from "@mui/material";
import PostTab from "../../buttons/PostTab";
import PostHeader from "../../header/PostHeader";
import PostContentBox from "./PostContentBox";
import RecentLaunchesBox from "./RecentLaunchesBox";
import SummarisedProfileBox from "../profile/SummarisedProfileBox";
import PostCommentBox from "../comment/PostCommentsBox";

const TechnologyPostBox = ({ postData }) => {
    const [currentTab, setCurrentTab] = useState(0);

    return (
        <Box
            sx={{
                padding: 2,
                marginBottom: 2,
                display: "flex",
                flexDirection: "column",
            }}
        >
            <PostHeader postData={postData} />

            <PostTab currentTab={currentTab} setCurrentTab={setCurrentTab} />

            <Box
                sx={{
                    flexGrow: 1, 
                    overflowY: "auto", 
                    maxHeight: "100vh",
                    marginTop: 2,
                }}
            >
                {currentTab === 0 && <PostContentBox postData={postData} />}
                {currentTab === 1 && <PostCommentBox postId={postData.postId} />}
                {currentTab === 2 && <RecentLaunchesBox postIds={postData.recentLaunchedPostIds} />}
                {currentTab === 3 && <SummarisedProfileBox userId={postData.userId} />}
                
            </Box>
        </Box>
    );
};

export default TechnologyPostBox;
