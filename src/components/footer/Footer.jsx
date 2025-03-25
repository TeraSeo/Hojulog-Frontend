import React from "react";
import { Box, Typography, Link, Grid, IconButton } from "@mui/material";
import { primaryColor, secondaryColor } from "../../constant/Color";
import StorefrontIcon from "@mui/icons-material/Storefront";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import ApartmentIcon from "@mui/icons-material/Apartment";

function Footer() {
    return (
        <Box
            sx={{
                backgroundColor: primaryColor,
                color: "#ffffff",
                padding: "40px 20px",
                textAlign: "center",
            }}
        >
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                        Quick Links
                    </Typography>
                    <Link href="/" color="inherit" underline="none" sx={{ display: "block", mb: 1 }}>
                        홈
                    </Link>
                    <Link href="/ranking" color="inherit" underline="none" sx={{ display: "block", mb: 1 }}>
                        이주의 순위
                    </Link>
                    <Link href="/board" color="inherit" underline="none" sx={{ display: "block", mb: 1 }}>
                        게시판
                    </Link>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                        Contact Us
                    </Typography>
                    <Typography variant="body2">alogatoz0310@gmail.com</Typography>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                        Other Sites
                    </Typography>
                    <Box>
                        <IconButton
                            href="https://www.facebook.com/marketplace/"
                            target="_blank"
                            sx={{ color: secondaryColor }}
                        >
                            <StorefrontIcon />
                        </IconButton>

                        {/* Flatmates.com.au */}
                        <IconButton
                            href="https://www.flatmates.com.au/"
                            target="_blank"
                            sx={{ color: secondaryColor }}
                        >
                            <HomeWorkIcon />
                        </IconButton>

                        {/* Domain (Real Estate) */}
                        <IconButton
                            href="https://www.domain.com.au/"
                            target="_blank"
                            sx={{ color: secondaryColor }}
                        >
                            <ApartmentIcon />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>

            <Typography variant="body2" sx={{ marginTop: "20px", color: "rgba(255, 255, 255, 0.7)" }}>
                &copy; {new Date().getFullYear()} 호주로그
            </Typography>
        </Box>
    );
}

export default Footer;