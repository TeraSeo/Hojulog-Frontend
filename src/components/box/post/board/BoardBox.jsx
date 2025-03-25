import { TableCell, TableRow } from "@mui/material";
import React from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { BoardResponsiveFont } from "../../../../constant/FontSizeResponsive";
import { useNavigate } from "react-router-dom";

dayjs.extend(utc);
dayjs.extend(timezone);

const BoardBox = ({ boardData, index }) => {
    const navigate = useNavigate();

    const formattedDate = dayjs(boardData.createdAt)
        .tz("Australia/Sydney")
        .format("YYYY-MM-DD HH:mm");


    return (
        <TableRow key={index}>
            <TableCell sx={{ fontSize: BoardResponsiveFont, p: { xs: 1, sm: 2 } }} >{index + 1}</TableCell>
            <TableCell onClick={() => { navigate(`/post/게시글/detail/${boardData.postId}`); }} sx={{ fontSize: BoardResponsiveFont, p: { xs: 1, sm: 2 }, cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>{boardData.title}</TableCell>
            <TableCell sx={{ fontSize: BoardResponsiveFont, p: { xs: 1, sm: 2 } }}>{boardData.username}</TableCell>
            <TableCell sx={{ fontSize: BoardResponsiveFont, p: { xs: 1, sm: 2 } }}>{formattedDate}</TableCell>
            <TableCell sx={{ fontSize: BoardResponsiveFont, p: { xs: 1, sm: 2 } }}>{boardData.viewCounts}</TableCell>
        </TableRow>
    );
};

export default BoardBox;
