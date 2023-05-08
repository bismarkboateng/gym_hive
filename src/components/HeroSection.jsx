import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import Trainer from "../assets/images/new_image.png";




const HeroSection = () => {
  return (
    <Stack
      sx={{background: "linear-gradient(90deg, rgba(27,26,26,0.8715861344537815) 0%, rgba(38,32,38,0.9416141456582633) 17%, rgba(48,46,46,0.9640231092436975) 30%, rgba(41,39,39,0.908000700280112) 44%, rgba(73,65,65,1) 60%, rgba(186,44,44,1) 100%)",
          paddingTop: "300px"
      }}
      direction="row" alignContent="center" justifyContent="space-around"

    >
      <Box sx={{ marginLeft: "90px"}}>
        <Typography variant="h1" color="#fff" fontWeight={700} mb="20px">FITNESS CLUB</Typography>
        <Typography variant="h6" fontWeight={300} color="#fff">NO PAIN .. NO GAIN</Typography>
        
        <Typography variant="body1" color="gray"
          fontWeight={600} sx={{ marginTop: "30px"}}
        >check out the most effective exercises</Typography>
        
        <Button variant="contained" className="explore-btn"
          sx={{ background: "gray", marginTop: "30px",padding: "10px 20px"}}
        >Explore Exercises</Button>
      </Box>

      <Box>
        <img width={450} height={500} src={Trainer} alt="trainer logo" />
      </Box>
    </Stack>
  )
}

export default HeroSection
