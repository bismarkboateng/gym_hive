import React, { useEffect, useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { fetchData, exerciseDBoptions } from "../utils/fetchData";
import HorizontalScroll from "./HorizontalScroll";


const SearchExercise = ({ setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);


  useEffect(() => {
    const fetchBodyParts = async () => {
      const bodyPartsData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", exerciseDBoptions);
      setBodyParts(bodyPartsData);
    }

    const fetchExerciseData = async () => {
      const exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseDBoptions)
      setExercises(exercisesData.slice(0, 100));
    }
    
    fetchBodyParts();
    fetchExerciseData();

  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseDBoptions)
        const searchExercise = exercisesData.filter((item) => 
          item.bodyPart.toLowerCase().includes(search) || item.equipment.toLowerCase().includes(search)
          || item.name.toLowerCase().includes(search) || item.target.toLowerCase().includes(search)
        )
        setExercises(searchExercise);
    }
    setSearch("");
  }

  return (
    <Box
      sx={{backgroundColor: "#f2f3ed",
          display: "flex", justifyContent: "center", flexDirection: "column",
          alignItems: "center", padding: "50px", paddingBottom: "60px",
        }}
    
    >
      <Typography variant="h3" fontWeight="700" color="gray" margin="auto"
        sx={{ padding: "20px", marginBottom: "10px"}}
      >Awesome Exercises You <br />Should Know</Typography>
      
      <Box sx={{ display: "flex"}}>
        <TextField 
          sx={{width: { xs: "320px", lg: "1000px"} }}
          value={search}
          placeholder="Search Exercises"
          onChange={e => setSearch(e.target.value.toLowerCase())}
        />
        <Button variant="contained" color="error"
         sx={{ padding: "0 30px"}}
         onClick={handleSearch}
        >Search</Button>
      </Box>

      <Box sx={{
        marginTop:"100px",
        width: "100%",
        overflowX: "hidden",
        position: "relative"
      }}>
        <HorizontalScroll bodyPart={bodyPart} setBodyPart={setBodyPart} data={bodyParts} /> 
      </Box>
    </Box>
  )
}

export default SearchExercise
