import React, { useState } from "react";
import { IconButton } from "@mui/material";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import { primaryColor, secondaryColor } from "../../constant/Color";
import { LocationButtonResponsiveSize as RankingButtonResponsiveSize } from "../../constant/ComponentSizeResponsive";
import { LocationIconResponsiveSize as RankingIconResponsiveSize } from "../../constant/IconSizeResponsive";
import { getSpecificCandidateDtoList } from "../../service/PostService";
import RankingDialog from "../dialog/RankingDialog";

const RankingButton = ({ worldCupPostId }) => {
  const [candidateDtoList, setCandidateDtoList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleRankingClick = async () => {
    setLoading(true);
    setOpen(true); // Open the dialog while loading data

    try {
      const data = await getSpecificCandidateDtoList(worldCupPostId);
      setCandidateDtoList(data);
    } catch (error) {
      console.error("Error fetching ranking data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Ranking Button */}
      <IconButton
        onClick={handleRankingClick}
        sx={{
          color: "#fff",
          backgroundColor: primaryColor,
          width: RankingButtonResponsiveSize,
          height: RankingButtonResponsiveSize,
          padding: "6px",
          borderRadius: { md: "12px", sm: "10px", xs: "8px" },
          "&:hover": {
            backgroundColor: secondaryColor,
          },
        }}
      >
        <LeaderboardIcon fontSize="small" sx={{ width: RankingIconResponsiveSize, height: RankingIconResponsiveSize }} />
      </IconButton>

      {open && (
        <RankingDialog
          candidateDtoList={candidateDtoList || []}
          loading={loading}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default RankingButton;