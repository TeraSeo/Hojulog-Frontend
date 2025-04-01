import { Button } from "@mui/material";
import React from "react";
import { ButtonWidthSize1 } from "../../constant/WidthHeightResponsive";
import { ButtonResponsiveFontSize1 } from "../../constant/FontSizeResponsive";
import { deactivate } from "../../service/UserService";
import { useNavigate } from "react-router-dom";

const RemoveAccountButton = () => {
    const navigate = useNavigate();

    const deactivateAccount = async () => {
        const isDeactivated = await deactivate();
        if (isDeactivated) {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            localStorage.removeItem("userId");
            navigate("/login");
        }
        else {
            alert("계정 삭제에 실패했습니다!");
        }
    };

    return (
        <Button
            onClick={() => { 
                const confirmDelete = window.confirm("계정을 삭제하시겠습니까?");
                if (confirmDelete) {
                    deactivateAccount();
                }
            }}
            variant="contained"
            color="error"
            sx={{
                width: ButtonWidthSize1,
                fontSize: ButtonResponsiveFontSize1,
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
                flexShrink: 0
            }}
        >
            회원탈퇴
        </Button>
    );
}

export default RemoveAccountButton;