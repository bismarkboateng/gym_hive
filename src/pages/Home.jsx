import React, { useState } from "react";
import { Box } from "@mui/material";
import { Navbar, HeroSection, SearchExercise, Exercise, Footer } from "../components";



const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("");


  return (
    <Box>
      <Navbar />
      <HeroSection />
      <SearchExercise exercises={exercises} setExercises={setExercises}
          setBodyPart={setBodyPart}
      />
      <Exercise boydPart={bodyPart} exercises={exercises} />
      <Footer />
    </Box>
  )
}

export default Home
