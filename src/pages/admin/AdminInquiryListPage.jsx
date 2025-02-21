import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getInquiryPageData } from "../../service/AdminService";
import { CommonPagePaddingXSize } from "../../constant/PaddingResponsiveSize";
import CategorySidebar from "../../components/bar/CategorySidebar";
import PageTitleText from "../../components/texts/PageTitleText";
import PostPaginationBox from "../../components/box/post/PostPaginationBox";
import SingleInquiryBoxByData from "../../components/box/admin/SingleInquiryBoxByData";

const AdminInquiryListPage = () => {
    const [inquiryData, setInquiryData] = useState({
        inquiries: [],
        pageSize: 1,
        currentPage: 1
    });

    useEffect(() => {
        fetchPageData(1);
    }, []);

    const fetchPageData = (page) => {
        getInquiryPageData(page)
            .then((data) => {
                setInquiryData({
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

    if (!inquiryData) {
        return <div>Loading...</div>;
    }

    return <Box sx={{ py: "10px", px: CommonPagePaddingXSize }}>
        <Grid container spacing={3}>
            <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
                <CategorySidebar />
            </Grid>

            <Grid item xs={12} md={9}>
                <PageTitleText title={"문의 리스트"} />

                {inquiryData.inquiries.map((inquiry, index) => (
                    <React.Fragment key={index}>
                        <Box>
                            <SingleInquiryBoxByData inquiry={inquiry} />
                        </Box>
                    </React.Fragment>
                ))}
                
                <PostPaginationBox totalPage={inquiryData.pageSize} currentPage={inquiryData.currentPage} handlePageChange={handlePageChange} />
            </Grid>
        </Grid>
    </Box>
}

export default AdminInquiryListPage;