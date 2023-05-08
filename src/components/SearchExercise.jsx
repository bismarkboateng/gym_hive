import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";




const SearchExercise = () => {
  return (
    <Box
      sx={{ background: "linear-gradient(90deg, rgba(175,170,170,1) 0%, rgba(191,185,185,1) 26%, rgba(186,181,181,1) 56%, rgba(208,201,201,1) 96%)",
          display: "flex", justifyContent: "center", flexDirection: "column",
          alignItems: "center", padding: "50px"
        }}
    
    >
      <Typography variant="h3" fontWeight="700" color="gray" margin="auto"
        sx={{ padding: "20px", marginBottom: "10px"}}
      >Awesome Exercises You <br />Should Know</Typography>
      
      <Box sx={{ display: "flex"}}>
        <TextField 
          sx={{width: { xs: "320px", lg: "1000px"} }}
          placeholder="Search Exercises"
        />
        <Button variant="contained" color="error" >Search</Button>
      </Box>

    </Box>
  )
}

export default SearchExercise
