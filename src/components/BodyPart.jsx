import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Gym from "../assets/images/gym.png";


const BodyPart = ({ bodyPart}) => {
    console.log(bodyPart)

  return (
    <Stack direction="row" gap={4}
    justifyContent="center"
    mt="80px"
    >
      { bodyPart.map((part) => (
        <Box
            key={part}
            className="bodypart-card"
        >
            <img src={Gym}  width="80" alt="gym icon" />
            <Typography ml={1} fontWeight="700" mt="4px" color="gray">
              { part }
            </Typography>
        </Box>
      ))}
    </Stack>
  )
}

export default BodyPart
