import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategorySidebar from "../../components/bar/CategorySidebar";
import PostPaginationBox from "../../components/box/post/PostPaginationBox";
import SummarizedInquiryTitleText from "../../components/texts/SummarizedInquiryTitleText";
import InquiryStatusText from "../../components/texts/InquiryStatusText";
import { getWholeInquiries } from "../../service/CustomerCenterService";
import { CommonPagePaddingXSize } from "../../constant/PaddingResponsiveSize";
import { TitleResponsiveFontSize1 } from "../../constant/FontSizeResponsive";

const InquiriesPage = () => {
    const [inquiriesPostPageData, setInquiriesPostPageData] = useState({
        inquiries: [],
        pageSize: 1,
        currentPage: 1
    });

    useEffect(() => {
        fetchPageData(1);
    }, []);

    const fetchPageData = (page) => {
        getWholeInquiries(page)
            .then((data) => {
                setInquiriesPostPageData({
                    inquiries: data.inquiries,
                    pageSize: data.pageSize,
                    currentPage: page
                });
            })
            .catch((error) => console.error("Error fetching posts:", error));
    };

    const handlePageChange = (value) => {
        fetchPageData(value);
    };
    
    if (!inquiriesPostPageData) {
        return <div>Loading...</div>;
    }

    return (
        <Box sx={{ py: "10px", px: CommonPagePaddingXSize }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
                    <CategorySidebar />
                </Grid>

                <Grid item xs={12} md={9}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, fontSize: TitleResponsiveFontSize1 }}>
                        문의 내역
                    </Typography>

                    {inquiriesPostPageData.inquiries.map((inquiry, index) => (
                        <Box sx={{
                            mt: 1.5,
                            border: "1px solid #ddd",
                            borderRadius: "8px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                            px: { md: 2, sm: 1.5, xs: 1 },
                            py: 2
                        }}>
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Box sx={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                    <SummarizedInquiryTitleText inquiryText={inquiry.title} inquiryId={inquiry.inquiryId} pt={0} />
                                </Box>
                                <Box sx={{ display: "flex", pr: 1, flexShrink: 0 }}>
                                    <InquiryStatusText isInquiryRead={inquiry.isSolved} />
                                </Box>
                            </Box>
                        </Box>
                    ))}
                    
                    <PostPaginationBox totalPage={inquiriesPostPageData.pageSize} currentPage={inquiriesPostPageData.currentPage} handlePageChange={handlePageChange} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default InquiriesPage;