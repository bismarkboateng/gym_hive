import React, { useState } from "react";
import ExerciseCard from "./ExerciseCard";
import { Box, Stack } from "@mui/material";




const Exercise = ({ exercises, bodyPart }) => {
  return (
    <Stack direction="row" flexWrap="wrap" 
      sx={{
        background: "linear-gradient(90deg, rgba(175,170,170,1) 0%, rgba(191,185,185,1) 26%, rgba(186,181,181,1) 56%, rgba(208,201,201,1) 96%)",
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
