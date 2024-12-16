import React, { useEffect, useState } from "react";
import { Box, Grid, IconButton, Drawer, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AppTitle from "../texts/AppTitle";
import HeaderMenuItems from "./HeaderMenuItems";
import DrawerMenuItems from "../drawer/DrawerMenuItems";
import { validateToken } from "../../service/UserService";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    useEffect(() => {
        const checkAuthStatus = async () => {
            const isValid = await validateToken();
            setIsAuthenticated(isValid);

            const allowedRoutes = ["/", "/about", "/contact"];
            if (!isValid && !allowedRoutes.includes(location.pathname)) {
                navigate("/login");
            }
        };

        checkAuthStatus();
    }, [location.pathname, navigate]);

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        setIsAuthenticated(false);
        navigate("/login");
    };

    return (
        <Box
            sx={{
                backgroundColor: "#ffffff",
                boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.1)",
            }}
        >
            <Box
                sx={{
                    display: { xs: "none", md: "flex" },
                    justifyContent: "flex-end",
                    alignItems: "center",
                    padding: "0px 15px",
                    backgroundColor: "#f0f0f0",
                }}
            >
                <HeaderMenuItems
                    isAuthenticated={isAuthenticated}
                    handleLogout={handleLogout}
                />
            </Box>

            <Grid container alignItems="center" justifyContent="space-between" sx={{ py: "10px", px: {md: "140px", sm: "60px", xs: "20px"} }}>
                <Grid item xs={8} sm={8} md={4}>
                    <AppTitle />
                </Grid>

                {/* <Grid item md={8} sx={{ display: { xs: "none", md: "flex" } }}>
                    <HeaderNavigationMenuItems />
                </Grid> */}

                <Grid item xs={4} sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <IconButton onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                </Grid>
            </Grid>

            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                PaperProps={{
                    sx: { width: "80vw", maxWidth: "400px", padding: "20px" },
                }}
            >
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
                    <IconButton onClick={toggleDrawer(false)}>
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h6">메뉴</Typography>
                </Box>

                <DrawerMenuItems
                    isAuthenticated={isAuthenticated}
                    handleClose={toggleDrawer(false)}
                    handleLogout={handleLogout}
                />
            </Drawer>
        </Box>
    );
}

export default Header;
