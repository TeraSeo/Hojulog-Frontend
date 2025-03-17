import React, { useEffect, useState } from "react";
import { getSpecificWorldCupPost } from "../../../service/PostService";
import { Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { CommonPagePaddingXSize } from "../../../constant/PaddingResponsiveSize";
import WorldCupDetailBox from "../../../components/box/post/world-cup/WorldCupDetailBox";
import UpdatePostButton from "../../../components/buttons/UpdatePostButton";
import RemovePostButton from "../../../components/buttons/RemovePostButton";

const OwnWorldCupPostDetailPage = () => {
    const navigate = useNavigate();
    const userId = localStorage.getItem('userId') || "";
    const { postId } = useParams();
    const [worldCupPostData, setWorldCupPostData] = useState();

    useEffect(() => {
        fetchPostData(postId);
      }, []);
    
      const fetchPostData = (postId) => {
        getSpecificWorldCupPost(postId)
          .then((data) => {
            setWorldCupPostData(data);
            if (userId !== data.userId) { navigate("/"); }
          })
          .catch((error) => console.error("Error fetching posts:", error));
      };
    
      if (!worldCupPostData) {
        return <div>Loading...</div>;
    }

    return <Box sx={{  px: CommonPagePaddingXSize }}>
          <WorldCupDetailBox title={worldCupPostData.title} candidateDtoList={worldCupPostData.candidateDtoList} worldCupPostData={worldCupPostData} />

          <Box sx={{ mt: 5, display: "flex", justifyContent: "end", gap: 1 }}>
                <UpdatePostButton postId={worldCupPostData.postId} />
                <RemovePostButton postId={worldCupPostData.postId} />
            </Box>
      </Box>;
}

export default OwnWorldCupPostDetailPage;