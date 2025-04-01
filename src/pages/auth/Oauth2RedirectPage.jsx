import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getIsLocked } from "../../service/UserService";

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

            getIsLocked().then((value) => {
                if (value) {
                    alert("비활성화된 계정입니다");
                    navigate("/login")
                }
                else {
                    navigate("/home")
                }
            });
        } else {
            alert("Failed to login.");
            navigate("/login")
        }
    }, [location, navigate]);

    return <div>Logging in...</div>;
}

export default Oauth2RedirectPage;