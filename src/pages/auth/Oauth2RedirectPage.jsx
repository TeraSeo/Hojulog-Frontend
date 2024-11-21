import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Oauth2RedirectPage() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const accessToken = params.get("accessToken");
        const refreshToken = params.get("refreshToken");

        if (accessToken && refreshToken) {
            localStorage.setItem('accessToken', accessToken); 
            localStorage.setItem('refreshToken', refreshToken);
            navigate("/home")
        } else {
            alert("Failed to login.");
            navigate("/login")
        }
    });

    return <div></div>;
}

export default Oauth2RedirectPage;
