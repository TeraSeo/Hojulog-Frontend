import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import WorldCupTitleText from "../../../texts/WorldCupTitleText";
import RoundBox from "./RoundBox";
import WorldCupWinnerBox from "./\bWorldCupWinnerBox";

const WorldCupDetailBox = ({ title, candidateDtoList = [], worldCupPostData }) => {
    const [winnerList, setWinnerList] = useState([]);
    const [candidateList, setCandidateList] = useState([]);
    const [currentRound, setCurrentRound] = useState(0);
    const [selectedWinner, setSelectedWinner] = useState(null);
    const [losingCandidate, setLosingCandidate] = useState(null);
    const [isSelecting, setIsSelecting] = useState(false);

    useEffect(() => {
        if (candidateDtoList.length > 0) {
            setCandidateList(candidateDtoList);
            setWinnerList([]);
            setCurrentRound(0);
        }
    }, [candidateDtoList]);

    const handleSelectWinner = (winner, loser) => {
        if (isSelecting) return; 
        setIsSelecting(true); 
        setSelectedWinner(winner);
        setLosingCandidate(loser);

        setTimeout(() => {
            setWinnerList((prevWinners) => [...prevWinners, winner]);

            if (winnerList.length + 1 === candidateList.length / 2) {
                setCandidateList([...winnerList, winner]); 
                setWinnerList([]); 
                setCurrentRound(0); 
            } else {
                setCurrentRound((prevRound) => prevRound + 1); 
            }

            setSelectedWinner(null);
            setLosingCandidate(null);
            setIsSelecting(false); 
        }, 1000); 
    };

    if (candidateList.length === 1) {
        return (
            <WorldCupWinnerBox winner={candidateList[0]} worldCupPostData={worldCupPostData} />
        );
    }

    const candidate1 = candidateList[currentRound * 2];
    const candidate2 = candidateList[currentRound * 2 + 1];

    return (
        <Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <WorldCupTitleText title={`${title} - ${candidateList.length}강`} postId />
            </Box>

            {candidate1 && candidate2 ? (
                <RoundBox
                    candidate1={candidate1}
                    candidate2={candidate2}
                    onSelectWinner={(winner) =>
                        handleSelectWinner(winner, winner === candidate1 ? candidate2 : candidate1)
                    }
                    selectedWinner={selectedWinner}
                    losingCandidate={losingCandidate}
                />
            ) : (
                <WorldCupTitleText title="대진 데이터를 불러오는 중..." />
            )}
        </Box>
    );
};

export default WorldCupDetailBox;