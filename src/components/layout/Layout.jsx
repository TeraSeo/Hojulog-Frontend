import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <Box>
            <Header />
            <Box component="main" sx={{ minHeight: "calc(100vh - 120px)", padding: "20px" }}>
                <Outlet />
            </Box>
            <Footer />
        </Box>
    );
}

export default Layout;
