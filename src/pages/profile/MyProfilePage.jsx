import React, { useEffect, useState } from "react";
import { Box, Avatar, Typography, Grid } from "@mui/material";
import CategorySidebar from "../../components/bar/CategorySidebar";
import HomeContainerBox from "../../components/box/home/HomeContainerBox";
import { SubTitleResponsiveFontSize1, TitleResponsiveFontSize } from "../../constant/FontSizeResponsive";
import UpdateProfileButton from "../../components/buttons/UpdateProfileButton";
import RemoveAccountButton from "../../components/buttons/RemoveAccountButton";
import LogoutButton from "../../components/buttons/LogoutButton";
import { getSpecificOwnUser } from "../../service/UserService";
import CommonSummarizedPostBox from "../../components/box/post/CommonSummarizedPostBox";
import CommonOwnSummarizedPostBox from "../../components/box/post/CommonOwnSummarizedPostBox";
import { useNavigate } from "react-router-dom";

const MyProfilePage = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState();
    const [profilePictureUrl, setPrrofilePictureUrl] = useState("");

    useEffect(() => {
        getSpecificOwnUser()
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

                        <UpdateProfileButton userId={ userData.id } />
                    </Box>

                    <Box sx={{ my: 3 }}>
                        <HomeContainerBox title="내가 올린 게시물" onDetailClicked={() => { navigate("/own/posts") }}>
                            {userData.uploadedPostIds.map((uploadedPostId, index) => (
                                <Box key={index}>
                                    <CommonOwnSummarizedPostBox postId={uploadedPostId} />
                                </Box>
                            ))}
                        </HomeContainerBox>
                    </Box>

                    <Box sx={{ mt: 3 }}>
                        <HomeContainerBox title="내가 좋아요 한 게시물" onDetailClicked={() => { navigate("/liked/posts") }}>
                        {userData.likedPostIds.map((likedPostId, index) => (
                                <Box key={index}>
                                    <CommonSummarizedPostBox postId={likedPostId} />
                                </Box>
                            ))}
                        </HomeContainerBox>
                    </Box>

                    <Box sx={{ mt: 3 }}>
                        <HomeContainerBox title="고객센터 문의 내역" onDetailClicked={() => {}}>
                            { userData.requestedIds.length }
                        </HomeContainerBox>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            gap: "10px",
                            mt: 3,
                            justifyContent: "end"
                        }}
                    >
                        <RemoveAccountButton />
                        
                        <LogoutButton />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default MyProfilePage;