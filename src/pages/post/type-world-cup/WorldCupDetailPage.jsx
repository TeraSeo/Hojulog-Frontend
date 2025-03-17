import React, { useEffect, useState } from "react";
import { getSpecificWorldCupPost } from "../../../service/PostService";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { CommonPagePaddingXSize } from "../../../constant/PaddingResponsiveSize";
import WorldCupDetailBox from "../../../components/box/post/world-cup/WorldCupDetailBox";

const WorldCupDetailPage = () => {
    const { postId } = useParams();
    const [worldCupPostData, setWorldCupPostData] = useState();

    useEffect(() => {
        fetchPostData(postId);
      }, []);
    
      const fetchPostData = (postId) => {
        getSpecificWorldCupPost(postId)
          .then((data) => {
            setWorldCupPostData(data);
          })
          .catch((error) => console.error("Error fetching posts:", error));
      };
    
      if (!worldCupPostData) {
        return <div>Loading...</div>;
    }

    return <Box sx={{  px: CommonPagePaddingXSize }}>
          <WorldCupDetailBox title={worldCupPostData.title} candidateDtoList={worldCupPostData.candidateDtoList} worldCupPostData={worldCupPostData} />
      </Box>;
}

export default WorldCupDetailPage;