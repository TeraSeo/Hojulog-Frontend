import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useDropzone } from "react-dropzone";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { convertHEICtoJPEG } from "../../../service/ImageService";
import DescriptionBlockWithInitial from "./DescriptionBlockWithInitial";
import ImageBlockWithInitial from "./ImageBlockWithInitial";

const ContentBlockManagerWithInitialValue = ({ onChange, blogContents }) => {
  const [contentBlocks, setContentBlocks] = useState(blogContents || []);

  const handleAddDescription = () => {
    const updatedBlocks = [
      ...contentBlocks,
      { type: "description", content: "", fontSize: 16, fontWeight: 400, fontFamily: "프리텐다드" },
    ];
    setContentBlocks(updatedBlocks);
    onChange(updatedBlocks);
  };

  const handleAddImage = async (files) => {
    const convertedFiles = await Promise.all(files.map((file) => convertHEICtoJPEG(file)));
    const validImages = convertedFiles.filter(
      (file) => file.type.startsWith("image/") && !file.type.startsWith("video/")
    );
    if (validImages.length === 0) {
      alert("Only image files are allowed.");
      return;
    }
    const imageBlocks = validImages.map((file) => ({
      type: "image",
      content: URL.createObjectURL(file),
      file,
    }));
    const updatedBlocks = [...contentBlocks, ...imageBlocks];
    setContentBlocks(updatedBlocks);
    onChange(updatedBlocks);
  };

  const handleContentChange = (index, newContent) => {
    const updatedBlocks = [...contentBlocks];
    updatedBlocks[index].content = newContent;
    setContentBlocks(updatedBlocks);
    onChange(updatedBlocks);
  };

  const handleRemoveBlock = (index) => {
    const updatedBlocks = contentBlocks.filter((_, i) => i !== index);
    setContentBlocks(updatedBlocks);
    onChange(updatedBlocks);
  };

  const handleFontSizeChange = (index, increment) => {
    const updatedBlocks = [...contentBlocks];
    updatedBlocks[index].fontSize = Math.max(
      10,
      Number(updatedBlocks[index].fontSize) + increment
    );
    setContentBlocks(updatedBlocks);
    onChange(updatedBlocks);
  };

  const handleFontWeightChange = (index, increment) => {
    const updatedBlocks = [...contentBlocks];
    updatedBlocks[index].fontWeight = Math.min(
      900,
      Math.max(100, Number(updatedBlocks[index].fontWeight) + increment)
    );
    setContentBlocks(updatedBlocks);
    onChange(updatedBlocks);
  };

  const handleFontFamilyChange = (index, fontFamily) => {
    const updatedBlocks = [...contentBlocks];
    updatedBlocks[index].fontFamily = fontFamily;
    setContentBlocks(updatedBlocks);
    onChange(updatedBlocks);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedBlocks = Array.from(contentBlocks);
    const [movedBlock] = reorderedBlocks.splice(result.source.index, 1);
    reorderedBlocks.splice(result.destination.index, 0, movedBlock);
    setContentBlocks(reorderedBlocks);
    onChange(reorderedBlocks);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleAddImage,
    accept: "image/*",
  });

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        이미지, 설명 입력
      </Typography>

      <Box textAlign="start" sx={{ marginBottom: 3 }}>
        <Button variant="contained" sx={{ marginRight: 2 }} onClick={handleAddDescription}>
          설명 추가
        </Button>
        <Button variant="outlined" {...getRootProps()}>
          <input {...getInputProps()} />
          이미지 추가
        </Button>
      </Box>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="content-blocks">
          {(provided) => (
            <Box
              ref={provided.innerRef}
              {...provided.droppableProps}
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              {contentBlocks.map((block, index) => (
                <Draggable key={index} draggableId={`block-${index}`} index={index}>
                  {(provided) => (
                    <Box
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      sx={{
                        border: "1px solid #ccc",
                        borderRadius: 2,
                        padding: 2,
                        backgroundColor: "#f9f9f9",
                      }}
                    >
                      {block.type === "description" ? (
                        <DescriptionBlockWithInitial
                          block={block}
                          index={index}
                          onChange={handleContentChange}
                          onRemove={handleRemoveBlock}
                          onFontSizeChange={handleFontSizeChange}
                          onFontWeightChange={handleFontWeightChange}
                          onFontFamilyChange={handleFontFamilyChange}
                        />
                      ) : block.type === "image" ? (
                        <ImageBlockWithInitial
                          block={block}
                          index={index}
                          onRemove={handleRemoveBlock}
                        />
                      ) : null}
                    </Box>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </DragDropContext>
    </Box>
  );
};

export default ContentBlockManagerWithInitialValue;
