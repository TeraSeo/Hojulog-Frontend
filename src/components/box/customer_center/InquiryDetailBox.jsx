import { Box, Typography } from "@mui/material";
import React from "react";
import { PostResponsiveFontSize1, PostTitleFontSize, SubTitleResponsiveFontSize1 } from "../../../constant/FontSizeResponsive";
import ScrollableImageGallery from "../post/ScrollableImageGallery";
import PostProfileBox from "../post/PostProfileBox";

const InquiryDetailBox = ({ inquiryData }) => {
    return (
        <Box sx={{ p: 3, border: "1px solid #ccc", borderRadius: "8px", maxWidth: "600px", mx: "auto" }}>
            <Typography
                variant="body2"
                sx={{
                    fontSize: PostTitleFontSize,
                    fontWeight: "400",
                    textAlign: "start",
                    whiteSpace: "normal",
                    wordBreak: "break-word",
                    overflow: "hidden",
                    width: "100%",
                }}
            >
                {inquiryData.title || "No Title Available"}
            </Typography>

            <ScrollableImageGallery imageUrls={inquiryData.imageUrls} />

            <PostProfileBox userId={inquiryData.userId} />

            <Box>
                <Typography
                    variant="body2"
                    sx={{
                        fontWeight: "600",
                        textAlign: "start",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        fontSize: SubTitleResponsiveFontSize1,
                        pt: 1
                    }}
                >
                    문의내역
                </Typography>

                <Typography
                    variant="body2"
                    sx={{
                        fontWeight: "400",
                        textAlign: "start",
                        pt: 1,
                        whiteSpace: "pre-line",
                        wordWrap: "break-word",
                        overflow: "auto",
                        width: "100%",
                        fontSize: PostResponsiveFontSize1,
                    }}
                >
                    {inquiryData.description}
                </Typography>
            </Box>

            <Box sx={{ mt: 3 }}>
                <Typography variant="body2" sx={{ fontWeight: "600", mb: 1 }}>답변</Typography>
                
                <Typography
                    variant="body2"
                    sx={{
                        fontWeight: "400",
                        textAlign: "start",
                        whiteSpace: "pre-line",
                        wordWrap: "break-word",
                        overflow: "auto",
                        width: "100%",
                        fontSize: PostResponsiveFontSize1,
                    }}
                >
                    {inquiryData.response || "아직 답변이 없습니다."}
                </Typography>
            </Box>
        </Box>
    );
};

export default InquiryDetailBox;
