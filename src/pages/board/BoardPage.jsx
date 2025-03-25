import React, { useEffect, useState } from "react";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getArticlePostsByPage } from "../../service/PostService";
import PostPaginationBox from "../../components/box/post/PostPaginationBox";
import BoardBox from "../../components/box/post/board/BoardBox";
import PageTitleText from "../../components/texts/PageTitleText";
import { BoardSubtitleResponsiveFont } from "../../constant/FontSizeResponsive";

const BoardPage = () => {
    const navigate = useNavigate();
    const [postPageData, setPostPageData] = useState({
            posts: [],
            pageSize: 1,
            currentPage: 1
        });

    useEffect(() => {
        fetchPageData(1);
    }, []);

    const fetchPageData = (page) => {
        getArticlePostsByPage(page)
            .then((data) => {
                setPostPageData({
                    posts: data.posts,
                    pageSize: data.pageSize,
                    currentPage: page
                });
            })
            .catch((error) => console.error("Error fetching posts:", error));
    };

    const handlePageChange = (value) => {
        fetchPageData(value);
    };

    return (
        <Box sx={{ maxWidth: "900px", margin: "auto", px: 2 }}>
            <PageTitleText title={"자유게시판"} />
            
            <TableContainer component={Paper} sx={{ boxShadow: 2 }}>
                <Table>
                    <TableHead>
                        <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                            <TableCell sx={{ fontWeight: "bold", fontSize: BoardSubtitleResponsiveFont, p: { xs: 1, sm: 2 } }}>No</TableCell>
                            <TableCell sx={{ fontWeight: "bold", fontSize: BoardSubtitleResponsiveFont, p: { xs: 1, sm: 2 } }}>제목</TableCell>
                            <TableCell sx={{ fontWeight: "bold", fontSize: BoardSubtitleResponsiveFont, p: { xs: 1, sm: 2 } }}>글쓴이</TableCell>
                            <TableCell sx={{ fontWeight: "bold", fontSize: BoardSubtitleResponsiveFont, p: { xs: 1, sm: 2 } }}>작성시간</TableCell>
                            <TableCell sx={{ fontWeight: "bold", fontSize: BoardSubtitleResponsiveFont, p: { xs: 1, sm: 2 } }}>조회수</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {postPageData.posts.map((post, index) => (
                            <BoardBox boardData={post} index={index} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                <Button 
                    variant="contained" 
                    sx={{ 
                        backgroundColor: "#2196F3", 
                        color: "white", 
                        fontSize: BoardSubtitleResponsiveFont, 
                        p: { xs: "4px 8px", sm: "6px 12px" },
                        width: { xs: "100%", sm: "auto" }
                    }}
                    onClick={() => {navigate("/launch/board")}}
                >
                    글쓰기
                </Button>
            </Box>

            <PostPaginationBox totalPage={postPageData.pageSize} currentPage={postPageData.currentPage} handlePageChange={handlePageChange} />
        </Box>
    );
};

export default BoardPage;
