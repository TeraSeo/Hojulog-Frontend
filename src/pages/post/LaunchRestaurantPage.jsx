import React, { useState } from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ImageIcon from "@mui/icons-material/Image";
import GroupIcon from "@mui/icons-material/Group";
import SidebarNavigation from "../../components/bar/SidebarNavigation";
import ImagesAndMediaForm from "../../components/forms/post/ImagesAndMediaForm";
import OwnerInfoForm from "../../components/forms/post/OwnerInfoForm";
import { postRestaurant } from "../../service/PostService";
import RestaurantMainInfoForm from "../../components/forms/post/RestuarantMainInfoForm";

const visibilities = ["PUBLIC", "PRIVATE"];

function LaunchRestaurantPage() {
    const [step, setStep] = useState(1);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [isLocationValid, setLocationValid] = useState(false);
    const [visibility, setVisibility] = useState("PUBLIC");
    const [selectedImages, setSelectedImages] = useState([]);
    const [selectedVideos, setSelectedVideos] = useState([]);
    const [logoImage, setLogoImage] = useState(null); // State for the logo image
    const [isOwnWork, setIsOwnWork] = useState(false);
    const [ownerInfo, setOwnerInfo] = useState("");
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    // Validation Logic
    const isMainInfoValid = title && description && visibility && isLocationValid;
    const isFilesValid = logoImage && (selectedImages.length > 0 || selectedVideos.length > 0);
    const isMakerInfoValid = true;

    // Section Details
    const sections = [
        { id: 1, label: "Main Info", icon: <RocketLaunchIcon />, isValid: isMainInfoValid, color: "#F0E68C" },
        { id: 2, label: "Images and Media", icon: <ImageIcon />, isValid: isFilesValid, color: "#ADD8E6" },
        { id: 3, label: "Owner", icon: <GroupIcon />, isValid: isMakerInfoValid, color: "#DDA0DD" },
    ];

    const handleNextStep = () => setStep((prevStep) => Math.min(prevStep + 1, sections.length));
    const handlePreviousStep = () => setStep((prevStep) => Math.max(prevStep - 1, 1));

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("location", location);
        formData.append("visibility", visibility);
        formData.append("isOwnWork", isOwnWork);
        formData.append("ownerInfo", ownerInfo);

        if (logoImage) formData.append("logoImage", logoImage); // Add logo to form data

        tags.forEach((tag, index) => formData.append(`tags[${index}]`, tag));

        selectedImages.forEach((file, index) => formData.append(`images`, file));
        selectedVideos.forEach((file, index) => formData.append(`videos`, file));

        postRestaurant(formData);
    };

    return (
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, maxWidth: "900px", margin: "auto", padding: "20px" }}>
            <Box sx={{ width: { xs: "100%", sm: "200px" }, mb: { xs: 2, sm: 0 }, mr: { sm: 4 } }}>
                <SidebarNavigation sections={sections} step={step} setStep={setStep} />
            </Box>

            <Box sx={{ flexGrow: 1 }}>
                <Paper elevation={4} sx={{ padding: { xs: "20px", sm: "30px" }, borderRadius: "12px" }}>
                    <Typography variant="h4" textAlign="center" mb={4} fontWeight="bold" color="primary">
                        Launch Your Restaurant
                    </Typography>

                    {step === 1 && (
                        <RestaurantMainInfoForm
                            title={title}
                            setTitle={setTitle}
                            description={description}
                            setDescription={setDescription}
                            location={location}
                            setLocation={setLocation}
                            setLocationValid={setLocationValid} // Pass validation callback
                            visibility={visibility}
                            setVisibility={setVisibility}
                            visibilities={visibilities}
                        />
                    )}
                    {step === 2 && (
                        <ImagesAndMediaForm
                            selectedImages={selectedImages}
                            setSelectedImages={setSelectedImages}
                            selectedVideos={selectedVideos}
                            setSelectedVideos={setSelectedVideos}
                            logoImage={logoImage} // Pass logoImage state
                            setLogoImage={setLogoImage} // Pass setLogoImage state
                        />
                    )}
                    {step === 3 && (
                        <OwnerInfoForm
                            isOwnWork={isOwnWork}
                            setIsOwnWork={setIsOwnWork}
                            ownerInfo={ownerInfo}
                            setOwnerInfo={setOwnerInfo}
                            newTag={newTag}
                            setNewTag={setNewTag}
                            tags={tags}
                            handleAddTag={() => setTags([...tags, newTag])}
                            handleRemoveTag={(index) => setTags(tags.filter((_, i) => i !== index))}
                        />
                    )}
                </Paper>

                <Box display="flex" justifyContent="space-between" mt={3}>
                    {step > 1 && (
                        <Button variant="outlined" onClick={handlePreviousStep}>
                            Previous
                        </Button>
                    )}
                    {step < sections.length ? (
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNextStep}
                            disabled={(step === 1 && !isMainInfoValid) || (step === 2 && !isFilesValid)}
                        >
                            Next Step
                        </Button>
                    ) : (
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                            disabled={!isMainInfoValid || !isFilesValid}
                        >
                            Post
                        </Button>
                    )}
                </Box>
            </Box>
        </Box>
    );
}

export default LaunchRestaurantPage;