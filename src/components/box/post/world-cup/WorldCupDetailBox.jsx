import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import WorldCupTitleText from "../../../texts/WorldCupTitleText";
import RoundBox from "./RoundBox";

const WorldCupDetailBox = ({ title, candidateDtoList = [] }) => {
    const [winnerList, setWinnerList] = useState([]);
    const [candidateList, setCandidateList] = useState([]);
    const [currentRound, setCurrentRound] = useState(0);
    const [selectedWinner, setSelectedWinner] = useState(null);
    const [losingCandidate, setLosingCandidate] = useState(null);

    useEffect(() => {
        if (candidateDtoList.length > 0) {
            setCandidateList(candidateDtoList);
            setWinnerList([]);
            setCurrentRound(0);
        }
    }, [candidateDtoList]);

    const handleSelectWinner = (winner, loser) => {
        setSelectedWinner(winner);
        setLosingCandidate(loser);

        // Wait for animation before updating the round
        setTimeout(() => {
            setWinnerList((prevWinners) => [...prevWinners, winner]);

            if (winnerList.length + 1 === candidateList.length / 2) {
                setCandidateList([...winnerList, winner]); // Move winners to the next round
                setWinnerList([]); // Reset winners for the next round
                setCurrentRound(0); // Reset round index
            } else {
                setCurrentRound((prevRound) => prevRound + 1); // Move to next match
            }

            setSelectedWinner(null);
            setLosingCandidate(null);
        }, 1000); // Wait 1 second for animations before transitioning
    };

    if (candidateList.length === 1) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
                <WorldCupTitleText title={`🏆 최종 우승: ${candidateList[0].title} 🏆`} />
            </Box>
        );
    }

    const candidate1 = candidateList[currentRound * 2];
    const candidate2 = candidateList[currentRound * 2 + 1];

    return (
        <Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <WorldCupTitleText title={`${title} - ${candidateList.length}강`} />
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
