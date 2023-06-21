import React, { useState } from "react";
import ExerciseCard from "./ExerciseCard";
import { Box, Stack } from "@mui/material";




const Exercise = ({ exercises, bodyPart }) => {
  return (
    <Stack direction="row" flexWrap="wrap" 
      sx={{
        backgroundColor: "#f2f3ed",
        padding: "120px"
      }}
    >
      { exercises.map((exercise) => (
        <ExerciseCard key={exercise.id} exercise={exercise} />
      ))}
      
    </Stack>
  )
}

export default Exercise;
