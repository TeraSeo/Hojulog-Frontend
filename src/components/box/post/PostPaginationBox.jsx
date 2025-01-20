import React from "react";
import { Box, Button } from "@mui/material";
import { primaryColor } from "../../../constant/Color";

const PostPaginationBox = ({ totalPage = 1, currentPage = 1, handlePageChange = () => {} }) => {
    const getDisplayedPages = () => {
        if (!totalPage || !currentPage) return [];
        
        const startPage = Math.max(1, Math.min(currentPage - 4, totalPage - 8)); 
        const endPage = Math.min(totalPage, startPage + 8); 
        
        const pages = [];
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }
        return pages;
    };

    const displayedPages = getDisplayedPages();

    return (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2, gap: 0.8 }}>
            {currentPage > 1 && (
                <Button
                    onClick={() => handlePageChange(currentPage - 1)}
                    variant="outlined"
                    sx={{
                        minWidth: "30px",
                        height: "30px",
                        fontSize: "12px",
                        padding: "4px",
                        fontWeight: "300",
                        color: primaryColor,
                        borderColor: primaryColor,
                    }}
                >
                    ˂
                </Button>
            )}
            {displayedPages.length > 0 ? (
                displayedPages.map((page) => (
                    <Button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        variant={page === currentPage ? "contained" : "outlined"}
                        sx={{
                            minWidth: "30px",
                            height: "30px",
                            fontSize: "12px",
                            padding: "4px",
                            fontWeight: "300",
                            backgroundColor: page === currentPage ? primaryColor : undefined,
                            color: page === currentPage ? "#fff" : primaryColor,
                            borderColor: primaryColor,
                            "&:hover": {
                                backgroundColor: page === currentPage ? primaryColor : "#f5f5f5",
                            },
                        }}
                    >
                        {page}
                    </Button>
                ))
            ) : (
                <Box /> // on no valid posts
            )}
            {currentPage < totalPage && (
                <Button
                    onClick={() => handlePageChange(currentPage + 1)}
                    variant="outlined"
                    sx={{
                        minWidth: "30px",
                        height: "30px",
                        fontSize: "12px",
                        padding: "4px",
                        fontWeight: "300",
                        color: primaryColor,
                        borderColor: primaryColor,
                    }}
                >
                    ˃
                </Button>
            )}
        </Box>
    );
};

export default PostPaginationBox;
