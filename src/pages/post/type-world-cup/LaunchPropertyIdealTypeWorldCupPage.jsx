import React, { useState, useEffect } from "react";
import { Paper, Typography, Grid, Box, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import SingleWorldCupForm from "../../../components/forms/post/world-cup/SingleWorldCupForm";
import { primaryColor } from "../../../constant/Color";
import TitleField from "../../../components/textfields/TitleField";
import WorldCupKeyWordField from "../../../components/textfields/WorldCupKeyWorldField";
import { postWorldCup } from "../../../service/PostService";
import CommentAvailabilityField from "../../../components/textfields/CommentAvailabilityField";
import { useNavigate } from "react-router-dom";
import WorldCupImageCoverUploader from "../../../components/media/WorldCupImageCoverUploader";
import { worldCupPropertyKeyWords } from "../../../constant/Keywords";
import { convertHEICtoJPEG } from "../../../service/ImageService";

const candidateOptions = [2, 4, 8, 16];

const LaunchPropertyIdealTypeWorldCupPage = () => {
  const navigate = useNavigate();

  const [candidateCount, setCandidateCount] = useState(2);
  const [groups, setGroups] = useState([]);
  const [mainTitle, setMainTitle] = useState("");
  const [isCommentAllowed, setIsCommentAllowed] = useState(true);
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [mainTitleError, setMainTitleError] = useState("Aussie Choice의 제목을 입력해주세요.");
  const [groupErrors, setGroupErrors] = useState([]);
  const [keywordError, setKeywordError] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [coverImageUrl, setCoverImageUrl] = useState("");

  useEffect(() => {
    setGroups(Array.from({ length: candidateCount }, () => ({ title: "", image: null, imageUrl: "" })));
    setGroupErrors(Array(candidateCount).fill("각 조의 제목을 입력해주세요."));
  }, [candidateCount]);

  useEffect(() => {
    const isMainTitleValid = mainTitle.trim() !== "";
    const areGroupTitlesValid = groups.every((group) => (group?.title ?? "").trim() !== "");
    const areKeywordsValid = selectedKeywords.length <= 12;

    setMainTitleError(isMainTitleValid ? "" : "Aussie Choice의 제목을 입력해주세요.");
    setGroupErrors(groups.map((group) => (group.title.trim() ? "" : "각 조의 제목을 입력해주세요.")));
    setKeywordError(areKeywordsValid ? "" : "키워드는 최대 12개까지 입력할 수 있습니다.");

    setIsValid(isMainTitleValid && areGroupTitlesValid && areKeywordsValid);
  }, [mainTitle, groups, selectedKeywords]);

  const handleSubmit = async () => {
    if (!isValid) return;

    const confirmation = window.confirm("등록하려면 10 로그가 소모됩니다. 제출하시겠습니까?");
    if (!confirmation) return;

    setIsLoading(true);

    const userId = localStorage.getItem("userId") || "";
    const worldCupPostDto = {
      worldCupTitle: mainTitle,
      userId: userId,
      isCommentAllowed: isCommentAllowed,
      subCategory: "부동산",
      selectedKeywords: selectedKeywords,
      candidateTitleList: groups.map((group) => group.title),
      imageUrlList: groups.map((group) => (group.image === null ? "" : "exists")),
      coverImageUrl: coverImageUrl,
    };

    const formData = new FormData();
    formData.append("worldCupPostDto", new Blob([JSON.stringify(worldCupPostDto)], { type: "application/json" }));
    groups.forEach((group) => {
      if (group.image) {
        formData.append("images", group.image);
      }
    });
    if (coverImage) {
      formData.append("coverImage", coverImage);
    }

    const isCreated = await postWorldCup(formData);
    if (isCreated) {
      navigate("/");
    } else {
      setError("제출에 실패했습니다. 다시 제출 해주세요.");
      setIsLoading(false);
    }
  };

  return (
    <Paper elevation={3} sx={{ padding: 4, margin: 4, maxWidth: 800, mx: "auto", backgroundColor: "#f7f9fc" }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ color: primaryColor }}>
      Aussie Choice 만들기
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TitleField value={mainTitle} error={mainTitleError} onChange={setMainTitle} />
        <CommentAvailabilityField value={isCommentAllowed} onChange={setIsCommentAllowed} />
        <WorldCupImageCoverUploader coverImageUrl={coverImageUrl} setCoverImage={setCoverImage} setCoverImageUrl={setCoverImageUrl} />

        <WorldCupKeyWordField
                selectedKeywords={selectedKeywords}
                error={keywordError}
                onChange={setSelectedKeywords}
                availableKeywords={worldCupPropertyKeyWords}
            />
      </Box>

      <FormControl fullWidth sx={{ mt: 2 }}>
        <InputLabel>참가자 수</InputLabel>
        <Select value={candidateCount} onChange={(e) => setCandidateCount(e.target.value)}>
          {candidateOptions.map((option) => (
            <MenuItem key={option} value={option}>{option}강</MenuItem>
          ))}
        </Select>
      </FormControl>

      <Grid container spacing={2} justifyContent="center" sx={{ mt: 1 }}>
        {groups.map((group, index) => (
          <Grid item xs={6} key={index}>
            <SingleWorldCupForm index={index} data={group} onTitleChange={(idx, val) => {
              const updatedGroups = [...groups];
              updatedGroups[idx].title = val;
              setGroups(updatedGroups);
            }} onImageChange={async (idx, e) => {
              const file = e.target.files[0];
              if (file) {
                const convertedFile = await convertHEICtoJPEG(file);
                const updatedGroups = [...groups];
                updatedGroups[idx].image = convertedFile;
                updatedGroups[idx].imageUrl = URL.createObjectURL(convertedFile);
                setGroups(updatedGroups);
              }
            }} />

            {groupErrors[index] && (
                <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                {groupErrors[index]}
                </Typography>
            )}
          </Grid>
        ))}
      </Grid>

      <Box textAlign="center" sx={{ mt: 4 }}>
        <Button variant="contained" color="primary" onClick={handleSubmit} disabled={!isValid || isLoading}>
          {isLoading ? "제출중..." : "제출"}
        </Button>

        {error && (
            <Typography color="error" align="center" sx={{ my: 2 }}>
                {error}
            </Typography>
        )}
      </Box>
    </Paper>
  );
};

export default LaunchPropertyIdealTypeWorldCupPage;