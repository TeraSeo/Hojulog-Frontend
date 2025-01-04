import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useDropzone } from "react-dropzone";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const ContentBlockManager = ({ onChange }) => {
  const [contentBlocks, setContentBlocks] = useState([]);

  const handleAddDescription = () => {
    const updatedBlocks = [
      ...contentBlocks,
      { type: "description", content: "", fontSize: 16, fontWeight: 400 },
    ];
    setContentBlocks(updatedBlocks);
    onChange(updatedBlocks);
  };

  const handleAddImage = (files) => {
    const validImages = files.filter((file) => file.type.startsWith("image/"));
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
      updatedBlocks[index].fontSize + increment
    );
    setContentBlocks(updatedBlocks);
    onChange(updatedBlocks);
  };

  const handleFontWeightChange = (index, increment) => {
    const updatedBlocks = [...contentBlocks];
    updatedBlocks[index].fontWeight = Math.min(
      900,
      Math.max(100, updatedBlocks[index].fontWeight + increment)
    );
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
                        <Box>
                          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                            <Button
                              variant="outlined"
                              onClick={() => handleFontSizeChange(index, 2)}
                            >
                              Font Size +
                            </Button>
                            <Button
                              variant="outlined"
                              onClick={() => handleFontSizeChange(index, -2)}
                            >
                              Font Size -
                            </Button>
                            <Button
                              variant="outlined"
                              onClick={() => handleFontWeightChange(index, 100)}
                            >
                              Bold +
                            </Button>
                            <Button
                              variant="outlined"
                              onClick={() => handleFontWeightChange(index, -100)}
                            >
                              Bold -
                            </Button>
                          </Box>
                          <TextField
                            fullWidth
                            multiline
                            rows={4}
                            value={block.content}
                            onChange={(e) => {
                              const newValue = e.target.value.slice(0, 1000);
                              handleContentChange(index, newValue);
                            }}
                            placeholder="Enter description..."
                            inputProps={{
                              maxLength: 1000,
                              style: {
                                fontSize: `${block.fontSize}px`,
                                fontWeight: block.fontWeight,
                              },
                            }}
                            sx={{ marginBottom: 1 }}
                          />
                          <Typography variant="caption" display="block" textAlign="right" sx={{ marginBottom: 2 }}>
                            {block.content.length} / 1000 characters
                          </Typography>
                          <Button
                            variant="outlined"
                            color="error"
                            onClick={() => handleRemoveBlock(index)}
                            fullWidth
                          >
                            Remove
                          </Button>
                        </Box>
                      ) : block.type === "image" ? (
                        <Box>
                          <img
                            src={block.content}
                            alt="Uploaded"
                            style={{ width: "100%", height: "auto", marginBottom: 8 }}
                          />
                          <Button
                            variant="outlined"
                            color="error"
                            onClick={() => handleRemoveBlock(index)}
                            fullWidth
                          >
                            Remove
                          </Button>
                        </Box>
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

export default ContentBlockManager;
