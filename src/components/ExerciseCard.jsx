import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";





const ExerciseCard = ({ exercise }) => {
  const { bodyPart, equipment, id, gifUrl, name, target } = exercise;
  // console.log(bodyPart, equipment);
  return (
    <Link to={`/exercise/${id}`} style={{ textDecoration: "none" }}>
      <Stack
        sx={{ background: "#fff", borderTop: "4px solid tomato",
            margin: "10px", padding: "10px", borderRadius: "20px"
          }}
          justifyContent="center" alignItems="center"
      > 
        <img src={gifUrl} alt="exercise Image" />
        <Box
          ml="5px"
        >
          <button className="card-btn"> { bodyPart} </button>
          <button className="card-btn-left"> { target } </button>
        </Box>
        <Typography variant="h5"
          fontWeight={700} color="black" mt="10px"
        >
          { name.slice(0,30) }
        </Typography>
      </Stack>
    </Link>
  )
}

export default ExerciseCard
