import React from "react";
import { Box } from "@mui/material";
import { Navbar, HeroSection, SearchExercise, Exercise, Footer } from "../components";



const Home = () => {
  return (
    <Box>
      <Navbar />
      <HeroSection />
      <SearchExercise />
      <Exercise />
      <Footer />
    </Box>
  )
}

export default Home
