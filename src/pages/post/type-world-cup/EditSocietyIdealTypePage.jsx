import React, { useState, useEffect } from "react";
import { Paper, Typography, Grid, Box, Button } from "@mui/material";
import { primaryColor } from "../../../constant/Color";
import TitleField from "../../../components/textfields/TitleField";
import WorldCupKeyWordField from "../../../components/textfields/WorldCupKeyWorldField";
import { getSpecificUpdateWorldCupPost, updateWorldCup } from "../../../service/PostService";
import CommentAvailabilityField from "../../../components/textfields/CommentAvailabilityField";
import { useNavigate, useParams } from "react-router-dom";
import { worldCupSocietyKeyWords } from "../../../constant/Keywords";
import UpdateWorldCupImageCoverUploader from "../../../components/media/UpdateWorldCupImageCoverUploader";
import EditSingleWorldCupForm from "../../../components/forms/post/world-cup/EditSingleWorldCupForm";
import { convertHEICtoJPEG } from "../../../service/ImageService";

const EditSocietyIdealTypePage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const [groups, setGroups] = useState([]);
  const [mainTitle, setMainTitle] = useState("");
  const [isCommentAllowed, setIsCommentAllowed] = useState(true);
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [mainTitleError, setMainTitleError] = useState("");
  const [groupErrors, setGroupErrors] = useState([]);
  const [keywordError, setKeywordError] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [coverImageUrl, setCoverImageUrl] = useState("");
  const [worldCupPostData, setWorldCupPostData] = useState();

  const fetchPostData = (postId) => {
    getSpecificUpdateWorldCupPost(postId)
      .then((data) => {
        setWorldCupPostData(data);
        setMainTitle(data.title)
        setIsCommentAllowed(data.isCommentAllowed)
        setSelectedKeywords(data.keywords);
        setCoverImageUrl(data.coverImageUrl || "");

        const initialGroups = data.candidateDtoList.map((candidate) => ({
            title: candidate.title,
            image: null,
            imageUrl: candidate.imageUrl || "",
        }));

        setGroups(initialGroups);
      })
      .catch((error) => navigate("/"));
  };

  useEffect(() => {
        fetchPostData(postId);
  }, []);

  useEffect(() => {
    const isMainTitleValid = mainTitle.trim() !== "";
    const areGroupTitlesValid = groups.every((group) => (group?.title ?? "").trim() !== "");
    const areKeywordsValid = selectedKeywords.length <= 12;

    setMainTitleError(isMainTitleValid ? "" : "이상형 월드컵의 제목을 입력해주세요.");
    setGroupErrors(groups.map((group) => (group.title.trim() ? "" : "각 조의 제목을 입력해주세요.")));
    setKeywordError(areKeywordsValid ? "" : "키워드는 최대 12개까지 입력할 수 있습니다.");

    setIsValid(isMainTitleValid && areGroupTitlesValid && areKeywordsValid);
  }, [mainTitle, groups, selectedKeywords]);

  const handleSubmit = async () => {
    if (!isValid) return;

    setIsLoading(true);

    const userId = localStorage.getItem("userId") || "";
    const worldCupPostDto = {
      postId: postId,
      userId: userId,
      worldCupTitle: mainTitle,
      isCommentAllowed: isCommentAllowed,
      selectedKeywords: selectedKeywords,
      candidateTitleList: groups.map((group) => group.title),
      imageUrlList: groups.map((group) => (group.imageUrl || "")),
      coverImageUrl: coverImageUrl,
    };

    const formData = new FormData();
    formData.append("updateWorldCupPostDto", new Blob([JSON.stringify(worldCupPostDto)], { type: "application/json" }));
    groups.forEach((group) => {
      if (group.image) {
        formData.append("images", group.image);
      }
    });
    if (coverImage) {
      formData.append("coverImage", coverImage);
    }

    const isCreated = await updateWorldCup(formData);
    if (isCreated) {
      navigate("/");
    } else {
      setError("제출에 실패했습니다. 다시 제출 해주세요.");
      setIsLoading(false);
    }
  };

  if (!worldCupPostData) {
    return <div>Loading...</div>;
  }

  return (
    <Paper elevation={3} sx={{ padding: 4, margin: 4, maxWidth: 800, mx: "auto", backgroundColor: "#f7f9fc" }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ color: primaryColor }}>
        이상형 월드컵 만들기
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TitleField value={mainTitle} error={mainTitleError} onChange={setMainTitle} />
        <CommentAvailabilityField value={isCommentAllowed} onChange={setIsCommentAllowed} />
        <UpdateWorldCupImageCoverUploader coverImageUrl={coverImageUrl} setCoverImage={setCoverImage} setCoverImageUrl={setCoverImageUrl} originalImageUrl={worldCupPostData?.coverImageUrl} />

        <WorldCupKeyWordField
                selectedKeywords={selectedKeywords}
                error={keywordError}
                onChange={setSelectedKeywords}
                availableKeywords={worldCupSocietyKeyWords}
            />
      </Box>

      <Grid container spacing={2} justifyContent="center" sx={{ mt: 1 }}>
        {groups.map((group, index) => (
          <Grid item xs={6} key={index}>
            <EditSingleWorldCupForm index={index} data={group} onTitleChange={(idx, val) => {
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

export default EditSocietyIdealTypePage;