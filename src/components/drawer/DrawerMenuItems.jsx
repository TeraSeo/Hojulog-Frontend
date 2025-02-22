import React from "react";
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import StoreIcon from "@mui/icons-material/Store";
import GroupIcon from "@mui/icons-material/Group";
import FlightIcon from "@mui/icons-material/Flight";
import SchoolIcon from "@mui/icons-material/School";
import ApartmentIcon from "@mui/icons-material/Apartment";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import NotificationButton from "../buttons/NotificationButton";

function DrawerMenuItems({ isAuthenticated, handleClose, handleLogout, newNotifications = 0 }) {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
        handleClose();
    };

    return (
        <Box>
            <List>
                <ListItem button onClick={() => handleNavigate("/")}>
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText primary="홈" secondary="메인 페이지로 이동" />
                </ListItem>
            </List>

            <Divider sx={{ my: 2 }} />

            <Typography variant="subtitle1" sx={{ color: "#ff5757", fontWeight: "bold", mb: 2 }}>
                카테고리
            </Typography>
            <List>
                <ListItem button onClick={() => handleNavigate("/부동산")}>
                    <ListItemIcon><ApartmentIcon /></ListItemIcon>
                    <ListItemText primary="부동산" secondary="부동산 매물 정보 확인하기" />
                </ListItem>
                <ListItem button onClick={() => handleNavigate("/구인구직")}>
                    <ListItemIcon><WorkIcon /></ListItemIcon>
                    <ListItemText primary="구인구직" secondary="구직 또는 구인 정보, 후기 찾기" />
                </ListItem>
                <ListItem button onClick={() => handleNavigate("/사고팔기")}>
                    <ListItemIcon><StoreIcon /></ListItemIcon>
                    <ListItemText primary="사고팔기" secondary="중고 물품 사고팔기" />
                </ListItem>
                <ListItem button onClick={() => handleNavigate("/생활")}>
                    <ListItemIcon><GroupIcon /></ListItemIcon>
                    <ListItemText primary="생활" secondary="라이프스타일 정보 찾기" />
                </ListItem>
                <ListItem button onClick={() => handleNavigate("/여행")}>
                    <ListItemIcon><FlightIcon /></ListItemIcon>
                    <ListItemText primary="여행" secondary="여행 정보 찾기" />
                </ListItem>
                <ListItem button onClick={() => handleNavigate("/유학")}>
                    <ListItemIcon><SchoolIcon /></ListItemIcon>
                    <ListItemText primary="유학" secondary="유학 및 학업 관련 후기 찾기" />
                </ListItem>
            </List>

            <Divider sx={{ my: 2 }} />

            {isAuthenticated ? (
                <List sx={{ mb: 4 }}>
                    <ListItem button onClick={() => handleNavigate("/launch")}>
                        <ListItemIcon><NoteAltIcon /></ListItemIcon>
                        <ListItemText primary="등록하기" />
                    </ListItem>
                    <ListItem button onClick={() => handleNavigate("/ranking")}>
                        <ListItemIcon><LeaderboardIcon sx={{ color: "#666" }} /></ListItemIcon>
                        <ListItemText primary="이주의 순위" sx={{ color: "#666", fontWeight: "bold" }} />
                    </ListItem>
                    <ListItem button onClick={() => handleNavigate("/mypage")}>
                        <ListItemIcon><AccountCircleIcon sx={{ color: "#666" }} /></ListItemIcon>
                        <ListItemText primary="마이페이지" sx={{ color: "#666", fontWeight: "bold" }} />
                    </ListItem>
                    <ListItem button onClick={() => handleNavigate("/customer/center")}>
                        <ListItemIcon><HeadsetMicIcon sx={{ color: "#666" }} /></ListItemIcon>
                        <ListItemText primary="고객센터" sx={{ color: "#666", fontWeight: "bold" }} />
                    </ListItem>

                    {/* 알림 버튼 with Badge */}
                    <NotificationButton />

                    <ListItem button onClick={() => handleLogout()}>
                        <ListItemIcon><LogoutIcon /></ListItemIcon>
                        <ListItemText primary="로그아웃" />
                    </ListItem>
                </List>
            ) : (
                <List sx={{ mb: 4 }}>
                    <ListItem button onClick={() => handleNavigate("/register")}>
                        <ListItemIcon><PersonAddIcon /></ListItemIcon>
                        <ListItemText primary="회원가입" />
                    </ListItem>
                    <ListItem button onClick={() => handleNavigate("/login")}>
                        <ListItemIcon><LockOpenIcon /></ListItemIcon>
                        <ListItemText primary="로그인" />
                    </ListItem>
                </List>
            )}
        </Box>
    );
}

export default DrawerMenuItems;