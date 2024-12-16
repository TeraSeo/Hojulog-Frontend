import React from "react";
import { Box, Button } from "@mui/material";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; 
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import { useNavigate } from "react-router-dom";

function HeaderMenuItems({ isAuthenticated, handleLogout }) {
    const navigate = useNavigate();

    return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, px: "130px" }}>
            {isAuthenticated ? (
                <>
                    <Button
                        variant="text"
                        startIcon={<NoteAltIcon />}
                        sx={{
                            color: "#666",
                            fontSize: "14px",
                            fontWeight: "bold",
                            textTransform: "none",
                        }}
                        onClick={() => navigate("/launch")}
                    >
                        등록하기
                    </Button>

                    <Button
                        variant="text"
                        startIcon={<AccountCircleIcon />}
                        sx={{
                            color: "#666",
                            fontSize: "14px",
                            fontWeight: "bold",
                            textTransform: "none",
                        }}
                        onClick={() => navigate("/mypage")}
                    >
                        마이페이지
                    </Button>

                    <Button
                        variant="text"
                        startIcon={<HeadsetMicIcon />}
                        sx={{
                            color: "#666",
                            fontSize: "14px",
                            fontWeight: "bold",
                            textTransform: "none",
                        }}
                        onClick={() => navigate("/customer-center")}
                    >
                        고객센터
                    </Button>
                    <Button
                        variant="text"
                        startIcon={<LogoutIcon />}
                        sx={{
                            color: "#666",
                            fontSize: "14px",
                            fontWeight: "bold",
                            textTransform: "none",
                        }}
                        onClick={handleLogout}
                    >
                        로그아웃
                    </Button>
                </>
            ) : (
                <>
                    <Button
                        variant="text"
                        startIcon={<PersonAddIcon />}
                        sx={{
                            color: "#666",
                            fontSize: "14px",
                            fontWeight: "bold",
                            textTransform: "none",
                        }}
                        onClick={() => navigate("/register")}
                    >
                        회원가입
                    </Button>
                    <Button
                        variant="text"
                        startIcon={<LockOpenIcon />}
                        sx={{
                            color: "#666",
                            fontSize: "14px",
                            fontWeight: "bold",
                            textTransform: "none",
                        }}
                        onClick={() => navigate("/login")}
                    >
                        로그인
                    </Button>
                </>
            )}
        </Box>
    );
}

export default HeaderMenuItems;