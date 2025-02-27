import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const RegisterFailedPage = () => {
    const [searchParams] = useSearchParams();
    const error = searchParams.get("error");
    const navigate = useNavigate();

    useEffect(() => {
        if (error) {
            alert(decodeURIComponent(error));
        }
        navigate("/login");
    }, [error, navigate]);

    return <Box></Box>;
};

export default RegisterFailedPage;
