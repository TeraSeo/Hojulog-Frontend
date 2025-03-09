import React from "react";
import { 
    Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, 
    Paper, Button, Typography 
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const boardData = [
    { id: 10, title: "네이버 지도(v5) 임베드", author: "아잉맘", date: "2019-12-17", likes: 0 },
    { id: 9, title: "제목", author: "아잉맘", date: "2019-12-16", likes: 0 },
    { id: 8, title: "구글 지도 게시물에 임베드 하기", author: "아잉맘", date: "2019-12-16", likes: 0 },
    { id: 7, title: "아이폰 7 플러스", author: "아잉맘", date: "2018-05-14", likes: 0 },
    { id: 6, title: "분위기 최고네요~!", author: "아잉맘", date: "2018-04-17", likes: 8 },
    { id: 5, title: "진짜로 갑니다~", author: "아잉맘", date: "2018-04-17", likes: 0 },
    { id: 4, title: "앱 메뉴 이미지", author: "아잉맘", date: "2017-12-06", likes: 0 },
    { id: 3, title: "응원합니다!", author: "아잉맘", date: "2017-11-20", likes: 0 },
    { id: 2, title: "이번엔 가즈아아아아아아아!", author: "아잉맘", date: "2017-11-20", likes: 0 },
];

const BoardPage = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ maxWidth: "900px", margin: "auto", px: 2 }}>
            {/* Responsive Title */}
            <Typography 
                variant="h6" 
                sx={{ mb: 2,  fontWeight: "bold", fontSize: { xs: "18px", sm: "20px" } }}
            >
                자유게시판
            </Typography>
            
            {/* Responsive Table */}
            <TableContainer component={Paper} sx={{ boxShadow: 2 }}>
                <Table>
                    <TableHead>
                        <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                            <TableCell sx={{ fontWeight: "bold", fontSize: { xs: "12px", sm: "14px" }, p: { xs: 1, sm: 2 } }}>No</TableCell>
                            <TableCell sx={{ fontWeight: "bold", fontSize: { xs: "12px", sm: "14px" }, p: { xs: 1, sm: 2 } }}>제목</TableCell>
                            <TableCell sx={{ fontWeight: "bold", fontSize: { xs: "12px", sm: "14px" }, p: { xs: 1, sm: 2 } }}>글쓴이</TableCell>
                            <TableCell sx={{ fontWeight: "bold", fontSize: { xs: "12px", sm: "14px" }, p: { xs: 1, sm: 2 } }}>작성시간</TableCell>
                            <TableCell sx={{ fontWeight: "bold", fontSize: { xs: "12px", sm: "14px" }, p: { xs: 1, sm: 2 } }}>좋아요</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {boardData.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell sx={{ fontSize: { xs: "12px", sm: "14px" }, p: { xs: 1, sm: 2 } }}>{row.id}</TableCell>
                                <TableCell sx={{ fontSize: { xs: "12px", sm: "14px" }, p: { xs: 1, sm: 2 } }}>{row.title}</TableCell>
                                <TableCell sx={{ fontSize: { xs: "12px", sm: "14px" }, p: { xs: 1, sm: 2 } }}>{row.author}</TableCell>
                                <TableCell sx={{ fontSize: { xs: "12px", sm: "14px" }, p: { xs: 1, sm: 2 } }}>{row.date}</TableCell>
                                <TableCell sx={{ fontSize: { xs: "12px", sm: "14px" }, p: { xs: 1, sm: 2 } }}>{row.likes}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Responsive Button */}
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                <Button 
                    variant="contained" 
                    sx={{ 
                        backgroundColor: "#2196F3", 
                        color: "white", 
                        fontSize: { xs: "12px", sm: "14px" }, 
                        p: { xs: "4px 8px", sm: "6px 12px" },
                        width: { xs: "100%", sm: "auto" }
                    }}
                    onClick={() => {navigate("/launch/board")}}
                >
                    글쓰기
                </Button>
            </Box>
        </Box>
    );
};

export default BoardPage;
