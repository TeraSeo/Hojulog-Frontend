import React, { useState, useRef, useEffect } from "react";
import { Paper, Typography, Grid,Box, Button } from "@mui/material";
import { getUpdateTravelPostDto, updateTravel } from "../../../service/PostService";
import { useNavigate, useParams } from "react-router-dom";
import { primaryColor } from "../../../constant/Color";
import EditRestaurantMainInfoForm from "../../../components/forms/post/travel/EditRestaurantMainInfoForm";

const EditRestaurantPostPage = () => {
    const { postId } = useParams();
    const [isMainValid, setIsMainValid] = useState(false);
    const [mainInfoData, setMainInfoData] = useState(null);
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        fetchPostData(postId);
    }, []);

    const fetchPostData = (postId) => {
        getUpdateTravelPostDto(postId)
            .then((data) => {
                setMainInfoData(data);
            })
            .catch((error) => console.error("Error fetching posts:", error));
    };

    const mainInfoRef = useRef(null);
    const submitRef = useRef(null);

    useEffect(() => {
    if (isPreviewOpen) {
        handlePreview();
    }
    }, []);

    const handleSubmit = async () => {
    const userId = localStorage.getItem('userId');
    const formData = new FormData();

    const travelData = {
        ...mainInfoData,
        "category": "여행",
        "subCategory": "레스토랑",
        "userId": userId,
        "blogContents": mainInfoData.blogContents.map((blog) => {
        if (blog.type === "image") {
            if (blog.file) {
                return {
                    type: "image", 
                    imageUrl: blog.file.name, 
                    };
            }
        } else if (blog.type === "description") {
            return {
            type: "description", 
            content: blog.content, 
            fontSize: blog.fontSize || 16, 
            fontWeight: blog.fontWeight || 400, 
            };
        }
        return blog;
        }),
    };

    formData.append(
        "updateTravelPostDto",
        new Blob([JSON.stringify(travelData)], { type: "application/json" })
    );

    mainInfoData.blogContents
        .filter((blog) => blog.type === "image" && blog.file)
        .forEach((imageBlog) => {
        formData.append("images", imageBlog.file);
        });

    setIsLoading(true);
    const isCreated = await updateTravel(formData);
        if (isCreated) {
            navigate("/own/posts");
        } else {
            setError("제출에 실패했습니다. 다시 제출 해주세요.");
            setIsLoading(false);
        }
    };

    const handlePreview = () => {
        setIsPreviewOpen(true);
    };

    const handleClosePreview = () => {
        setIsPreviewOpen(false);
    };

    if (mainInfoData === null) {
        return <div>Loading...</div>;
    }

    return (
    <Paper
        elevation={3}
        sx={{ padding: 4, margin: 4, maxWidth: 800, mx: "auto", backgroundColor: "#f7f9fc" }}
    >
        <Typography variant="h4" gutterBottom align="center" sx={{ color: primaryColor, mb: 2 }}>
        레스토랑(카페, 펍) 정보 수정하기
        </Typography>

        <Grid container spacing={4}>
        <Grid item xs={12} ref={mainInfoRef}>
            <EditRestaurantMainInfoForm
            onDataChange={(data) => setMainInfoData(data)}
            setIsFormValid={setIsMainValid}
            mainInfoData={mainInfoData}
            />
        </Grid>
        <Grid item xs={12} ref={submitRef}>
            <Box textAlign="right">
            <Button
                type="button"
                variant="outlined"
                sx={{ marginRight: 2, color: primaryColor, borderColor: primaryColor }}
                size="large"
                onClick={handlePreview}
            >
                미리보기
            </Button>
            <Button
                type="submit"
                variant="contained"
                sx={{ backgroundColor: primaryColor, color: "#FFF" }}
                size="large"
                disabled={!isMainValid || isLoading}
                onClick={handleSubmit}
            >
                {isLoading ? "제출중..." : "제출"}
            </Button>

            {error && (
                <Typography color="error" align="center" sx={{ marginBottom: 2 }}>
                {error}
                </Typography>
            )}
            </Box>
        </Grid>
        </Grid>
    </Paper>
    );
};

export default EditRestaurantPostPage;