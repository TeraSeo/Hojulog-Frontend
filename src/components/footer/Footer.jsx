import React from "react";
import { Box, Typography, Link, Grid, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import { primaryColor, secondaryColor } from "../../constant/Color";

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
                        Home
                    </Link>
                    <Link href="/about" color="inherit" underline="none" sx={{ display: "block", mb: 1 }}>
                        About
                    </Link>
                    <Link href="/contact" color="inherit" underline="none" sx={{ display: "block", mb: 1 }}>
                        Contact
                    </Link>
                    <Link href="/advertise" color="inherit" underline="none" sx={{ display: "block" }}>
                        Advertise
                    </Link>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                        Contact Us
                    </Typography>
                    <Typography variant="body2">1234 Street Address</Typography>
                    <Typography variant="body2">City, State, ZIP</Typography>
                    <Typography variant="body2">Email: info@example.com</Typography>
                    <Typography variant="body2">Phone: (123) 456-7890</Typography>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                        Follow Us
                    </Typography>
                    <Box>
                        <IconButton
                            href="https://facebook.com"
                            target="_blank"
                            sx={{ color: secondaryColor }}
                        >
                            <Facebook />
                        </IconButton>
                        <IconButton
                            href="https://twitter.com"
                            target="_blank"
                            sx={{ color: secondaryColor }}
                        >
                            <Twitter />
                        </IconButton>
                        <IconButton
                            href="https://instagram.com"
                            target="_blank"
                            sx={{ color: secondaryColor }}
                        >
                            <Instagram />
                        </IconButton>
                        <IconButton
                            href="https://linkedin.com"
                            target="_blank"
                            sx={{ color: secondaryColor }}
                        >
                            <LinkedIn />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>

            <Typography variant="body2" sx={{ marginTop: "20px", color: "rgba(255, 255, 255, 0.7)" }}>
                &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
            </Typography>
        </Box>
    );
}

export default Footer;