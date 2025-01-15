import { Box, Pagination } from "@mui/material";
import { primaryColor } from "../../../constant/Color";

const PostPaginationBox = ({ totalPage, currentPage, handlePageChange }) => {
    return <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Pagination
            count={totalPage}
            page={currentPage}
            onChange={handlePageChange}
            siblingCount={1}
            boundaryCount={1} 
            color="primary"
            shape="rounded"
            showFirstButton
            showLastButton
            sx={{
                ".MuiPaginationItem-root": {
                    fontSize: { md: "12px", sm: "10px", xs: "8px" }, 
                    minWidth: { md: "28px", sm: "24px", xs: "20px" }, 
                    height: { md: "28px", sm: "24px", xs: "20px" },
                    "&.Mui-selected": {
                        backgroundColor: primaryColor,
                        color: "#fff",
                        fontWeight: "600",
                    },
                },
            }}
        />
    </Box>;
}

export default PostPaginationBox;