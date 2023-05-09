import React from "react";
import {Box, Button, Stack, Typography } from "@mui/material";
import Gym from "../assets/images/gym.png";


const BodyPart = ({ data, bodyPart, setBodyPart }) => {
  
  if(bodyPart) {
    console.log(bodyPart);
  }
  
  return (
    <Box
      sx={{ display: "flex"}}
    >
      {
        data.map((item, idx) => (
        <Button
          key={idx}
          sx={{ 
              borderTop: bodyPart == item ? "1px solid red" : "",
              backgroundColor: "#fff", margin: "10px",
              padding: "60px 80px", borderRadius:"20px",
              display: "flex", flexDirection: "column",
              alignItems: "center",
          }}
          onClick={() => setBodyPart(item)}
          className="bodyPart-card"
        >
          <Box mb="30px">
             <img src={Gym} alt="gym icon" className="gym-icon" />
          </Box>

          <Typography
            fontWeight={700}
            variant="h5"
          >
              { item }
          </Typography>
        </Button>

        ))
      }

    </Box>
  )
}

export default BodyPart
