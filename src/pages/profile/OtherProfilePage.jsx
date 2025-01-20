import { Avatar, Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSpecificUser } from "../../service/UserService";
import CategorySidebar from "../../components/bar/CategorySidebar";
import { SubTitleResponsiveFontSize1, TitleResponsiveFontSize } from "../../constant/FontSizeResponsive";
import HomeContainerBox from "../../components/box/home/HomeContainerBox";
import CommonOwnSummarizedPostBox from "../../components/box/post/CommonOwnSummarizedPostBox";

const OtherProfilePage = () => {
    const navigate = useNavigate();
    const { userId } = useParams();

    const [userData, setUserData] = useState();
    const [profilePictureUrl, setPrrofilePictureUrl] = useState("");

    useEffect(() => {
        getSpecificUser(parseInt(userId))
            .then((data) => {
                setUserData(data);
                setPrrofilePictureUrl(data.profilePicture);
            })
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <Box sx={{ py: "10px", px: { md: "120px", sm: "40px", xs: "0px" } }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
                    <CategorySidebar />
                </Grid>

                <Grid item xs={12} md={9}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: "20px",
                        }}
                    >
                        <Box sx={{ display: "flex", alignItems: "start", flex: 1 }}>
                            <Avatar
                                src={profilePictureUrl}
                                alt="User Profile"
                                sx={{ width: { md: "90px", sm: "80px", xs: "60px" }, height: { md: "90px", sm: "80px", xs: "60px" } }}
                            />
                            <Box sx={{ ml: 2 }}>
                                <Typography variant="h5" fontWeight="bold" sx={{ fontSize: TitleResponsiveFontSize }}>
                                    {userData.username}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    sx={{
                                        mb: "5px",
                                        wordBreak: "break-word",
                                        maxWidth: "100%",
                                        fontSize: SubTitleResponsiveFontSize1,
                                        pl: 0.5
                                    }}
                                >
                                    { userData.description === null ? "설명을 작성해 주세요." : userData.description }
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ my: 3 }}>
                        <HomeContainerBox title={userData.username + "님이 올린 게시물"} onDetailClicked={() => { navigate(`/others/posts/${userId}/${userData.username}`) }}>
                            {userData.uploadedPostIds.map((uploadedPostId, index) => (
                                <Box key={index}>
                                    <CommonOwnSummarizedPostBox postId={uploadedPostId} />
                                </Box>
                            ))}
                        </HomeContainerBox>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default OtherProfilePage;