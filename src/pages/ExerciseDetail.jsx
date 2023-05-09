import React, { useState, useEffect } from "react";
import { Navbar } from "../components";
import { useParams } from "react-router-dom";
import { Stack, Box, Typography } from "@mui/material";
import { fetchData, exerciseDBoptions } from "../utils/fetchData";




const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState([]);
  const { bodyPart, equipment, gifUrl, name, target} = exerciseDetail;
  const { id } = useParams();


  useEffect(() => {
    const fetchExerciseDetail = async () => {
     const Detail = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, exerciseDBoptions)
     setExerciseDetail(Detail);
    }

    fetchExerciseDetail();

  }, [id]);


  return (
    <Box>
      <Navbar />
      <Stack direction="row" justifyContent="space-around" alignItems="flex-start" pt={20} pb={20}
        sx={{background: "linear-gradient(90deg, rgba(175,170,170,1) 0%, rgba(191,185,185,1) 26%, rgba(186,181,181,1) 56%, rgba(208,201,201,1) 96%)",
          }}
      >
        <Box
          sx={{ background: "#fff", borderRadius: "20px"}}
        >
          <img src={gifUrl} alt="exercise image" width="700px" height="800px" />
        </Box>

        <Box
          sx={{ mt: "100px", border: "1px solid red"}}
        >
          <Typography variant="h4" mb={3} fontSize={50}>{ name }</Typography> <br />
          <Typography variant="subtitle1">
          Exercises keep you strong. { name } is one of <br />
          the best exercises to target your {target}. It will help you improve your mood and gain energy.
          </Typography>

        </Box>
      </Stack>

    </Box>
  )
}

export default ExerciseDetail
