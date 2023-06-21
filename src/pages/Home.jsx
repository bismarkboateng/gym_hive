import React, { useState } from "react";
import { Box } from "@mui/material";
import { HeroSection, SearchExercise, Exercise, Footer } from "../components";



const Home = ({ HomeObject }) => {
  const {
    exercises,
    setExercises,
    bodyPart,
    setBodyPart
  } = HomeObject;


  return (
    <Box>
      <HeroSection />
      <SearchExercise exercises={exercises} setExercises={setExercises}
          setBodyPart={setBodyPart}
      />
      <Exercise boydPart={bodyPart} exercises={exercises} />

    </Box>
  )
}

export default Home
