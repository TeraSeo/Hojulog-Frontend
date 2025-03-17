import heic2any from "heic2any";

async function convertHEICtoJPEG(file) {
    if (file.type === "image/heic" || file.type === "image/heif") {
        console.log("🔄 Converting HEIC to JPEG...");
        
        try {
            const blob = await heic2any({
                blob: file,
                toType: "image/jpeg",
                quality: 0.9,
            });

            const convertedFile = new File([blob], file.name.replace(/\.[^/.]+$/, ".jpg"), {
                type: "image/jpeg",
            });

            console.log("✅ Conversion successful:", convertedFile);
            return convertedFile;
        } catch (error) {
            console.error("❌ HEIC conversion failed:", error);
            return file; // Return the original file if conversion fails
        }
    } else {
        console.log("✅ File is already a supported format:", file.type);
        return file; // Return original file if it's not HEIC
    }
}

const checkIsValidImageType = (file) => {
    if (!file) return false; // No file selected

    // Allowed image extensions
    const allowedExtensions = ["jpg", "jpeg", "png", "gif", "webp", "heic", "heif", "avif"];
    const fileExtension = file.name.split(".").pop().toLowerCase();

    console.log(`📢 File Selected: ${file.name}, Type: ${file.type}`);

    // Validate file type and extension
    if (!file.type.startsWith("image/") || !allowedExtensions.includes(fileExtension)) {
        alert("이미지만 가능합니다")
        return false; // Invalid file type
    }

    return true; // Valid image
};


export { convertHEICtoJPEG, checkIsValidImageType };