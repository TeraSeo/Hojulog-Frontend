import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import CategorySidebar from "../../components/bar/CategorySidebar";
import InquiryMainInfoForm from "../../components/forms/customer_center/InquiryMainInfoForm";
import InquiryMediaUploadForm from "../../components/forms/customer_center/InquiryMediaUploadForm";
import { primaryColor } from "../../constant/Color";
import { useNavigate } from "react-router-dom";
import { postInquiry } from "../../service/CustomerCenterService";

const CustomerCenterPage = () => {
    const [isMainValid, setIsMainValid] = useState(false);
    const [mainInfoData, setMainInfoData] = useState({});
    const [mediaData, setMediaData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async () => {
        const userId = localStorage.getItem('userId');
        const formData = new FormData();
    
        const inquiryData = {
          ...mainInfoData,
          "userId": userId
        };
    
        formData.append(
          "inquiryDto",
          new Blob([JSON.stringify(inquiryData)], { type: "application/json" })
        );
    
        mediaData.selectedImages.forEach((file) => formData.append("images", file));

        setIsLoading(true);
        const isCreated = await postInquiry(formData);
        if (isCreated) {
            navigate("/");
        } else {
            setError("제출에 실패했습니다. 다시 제출 해주세요.");
            setIsLoading(false);
        }
      };

    return <Box sx={{ py: "0px", px: { md: "120px", sm: "40px", xs: "0px" } }}>
        <Grid container spacing={3}>
            <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
                <CategorySidebar />
            </Grid>
            <Grid item xs={12} md={9}>
                <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
                    <Typography variant="h5" gutterBottom>
                        고객센터문의
                    </Typography>
                    <Typography variant="body2" color="textSecondary" gutterBottom>
                        제목, 설명, 이미지를 제출해주세요.
                    </Typography>

                    <InquiryMainInfoForm onDataChange={(data) => setMainInfoData(data)} setIsFormValid={setIsMainValid}  />
                    <InquiryMediaUploadForm onMediaChange={(media) => setMediaData(media)} />

                    <Box sx={{ mt: 3, display: "flex", justifyContent: "end" }}>
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
                    </Box>

                    {error && (
                        <Typography color="error" align="center" sx={{ marginBottom: 2 }}>
                        {error}
                        </Typography>
                    )}
                </Paper>
            </Grid>
        </Grid>
    </Box>;
}

export default CustomerCenterPage;