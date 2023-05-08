import React, { useEffect, useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { fetchData, exerciseDBoptions } from "../utils/fetchData";
import BodyPart from "./BodyPart";


const SearchExercise = () => {
  const [search, setSearch] = useState("");
  const [bodyPart, setBodyPart] = useState([]);

  useEffect(() => {
    const fetchBodyParts = async () => {
      const bodyPartsData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", exerciseDBoptions);
      setBodyPart(bodyPartsData);
    }
    
    fetchBodyParts();

  }, []);

  const handleSearch = () => {
    console.log(search);

    setSearch(" ");
  }

  return (
    <Box
      sx={{ background: "linear-gradient(90deg, rgba(175,170,170,1) 0%, rgba(191,185,185,1) 26%, rgba(186,181,181,1) 56%, rgba(208,201,201,1) 96%)",
          display: "flex", justifyContent: "center", flexDirection: "column",
          alignItems: "center", padding: "50px", paddingBottom: "60px"
        }}
    
    >
      <Typography variant="h3" fontWeight="700" color="gray" margin="auto"
        sx={{ padding: "20px", marginBottom: "10px"}}
      >Awesome Exercises You <br />Should Know</Typography>
      
      <Box sx={{ display: "flex"}}>
        <TextField 
          sx={{width: { xs: "320px", lg: "1000px"} }}
          placeholder="Search Exercises"
          onChange={(e)=> setSearch(e.target.value)}
        />
        <Button variant="contained" color="error"
         sx={{ padding: "0 30px"}}
         onClick={handleSearch}
        >Search</Button>
      </Box>

      <BodyPart bodyPart={bodyPart} />
    </Box>
  )
}

export default SearchExercise
