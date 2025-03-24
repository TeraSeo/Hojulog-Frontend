import { Box, Button } from "@mui/material";
import React from "react";
import { ButtonResponsiveFontSize1 } from "../../constant/FontSizeResponsive";
import { ButtonWidthSize1 } from "../../constant/WidthHeightResponsive";
import { updateAttendance } from "../../service/UserService";

const AttendanceCheckButton = ({ userId, lastAttendanceTime }) => {
    const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Australia/Sydney" }));
    const lastAttendanceDate = lastAttendanceTime ? new Date(lastAttendanceTime) : null;
    
    const formatDate = (date) => date.toISOString().split("T")[0];
    const today = formatDate(now);
    const lastDate = lastAttendanceDate ? formatDate(lastAttendanceDate) : null;
    
    const isClickable = lastDate === null || lastDate !== today; 

    const handleClick = async () => {
        if (window.confirm("출석 체크 하시겠습니까? 10로그가 지급됩니다")) {
            const isAttended = await updateAttendance(userId);
            if (isAttended) {
                window.location.reload();
            }
            else {
                alert("출석체크에 실패했습니다!");
            }
        }
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
                variant="contained"
                color="primary"
                disabled={!isClickable}
                sx={{
                    mt: 1,
                    width: ButtonWidthSize1,
                    fontSize: ButtonResponsiveFontSize1,
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    flexShrink: 0,
                }}
                onClick={handleClick}
            >
                출석 체크
            </Button>
        </Box>
    );
}

export default AttendanceCheckButton;
