import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Stack, Box, Typography } from "@mui/material";
import { fetchData, exerciseDBoptions } from "../utils/fetchData";
import { Link } from "react-router-dom";
import Upper from "../assets/images/body.png";
import Target from "../assets/images/target.png";
import Equip from "../assets/images/equipment.png";
import ExerciseCard from "../components/ExerciseCard";



const Links = [
  {
    iconName: Upper,
    name: "Upper Legs"
  },
  {
    iconName: Target,
    name: "Quads"
  },
  {
    iconName: Equip,
    name: "Body Weight"
  },
]


const ExerciseDetail = ({ exercises }) => {
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
      <Stack direction="row" alignItems="flex-start" pt={20} pb={20}
        sx={{ backgroundColor: "#f2f3ed", display: "flex", justifyContent: "space-evenly"}}
      >
        <Box
          sx={{ background: "#fff", borderRadius: "20px", borderRadius: "20px"}}
        >
          <img src={gifUrl} alt="exercise image" width="500px" height="600px" style={{ borderRadius: "20px"}} />
        </Box>

        <Box sx={{ background: "#fff", borderRadius: "10px", padding: "15px"}}>
          <Typography variant="h4" mb={3} fontSize={50} sx={{ fontWeight: 600 }}>{ name }</Typography> <br />
          <Typography variant="subtitle1" sx={{ fontSize: "18px", marginBottom: "30px"}}>
            Exercises keep you strong. { name } is one of <br />
            the best exercises to target your {target}.<br />
            It will help you improve your mood and gain energy.
          </Typography>
          {
            Links.map((link) => (
              <Box key={link.iconName} sx={{ display: "flex",
                alignItems: "center",
                marginBottom: "10px",
                padding: "7px"

              }}
              >
                <img src={link.iconName} alt="icon name"
                />
                <p style={{ fontSize: "18px", marginLeft: "20px"}}>{link.name}</p>
              </Box>
            ))
          }
        </Box>
      </Stack>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          padding: "50px",
          borderRadius: "10px"
        }}
      >
        <Box sx={{ display: "blocK"}}>
          <Typography variant="h5">
            Similar <span style={{ color: "tomato"}}>exercises</span>
          </Typography> <br></br>
        </Box>

      {
        exercises.slice(0, 4).map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))
      }
      </Box>
    </Box>
  )
}

export default ExerciseDetail
