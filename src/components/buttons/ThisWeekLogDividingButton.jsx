import React from "react";
import { Button } from "@mui/material";
import { provideLogThisWeek } from "../../service/AdminService";

const ThisWeekLogDividingButton = () => {
    const provideLog = async () => {
        const confirmed = window.confirm("정말로 이번주 로그를 지급하시겠습니까?");
        if (confirmed) {
            const isProvided = await provideLogThisWeek();
            if (isProvided) {
                window.location.reload();
            }
        }
    };

    return (
        <Button
            variant="contained"
            color="primary"
            onClick={provideLog}
            sx={{
                fontWeight: "bold",
                fontSize: "12px",
                borderRadius: "8px"
            }}
        >
            이번주 로그 지급
        </Button>
    );
};

export default ThisWeekLogDividingButton;