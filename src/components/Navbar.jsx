import React from "react";
import { Box, Stack, Typography } from "@mui/material";


const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" alignItems="center"
      sx={{ mt: "5px", backgroundColor: ""}}
    >
      <Box sx={{ border: "2px solid #fff"}}>
          FitNess club
      </Box>

      <Stack direction="row" gap={3}>
        <Typography> Home </Typography>
        <Typography> About us </Typography>
        <Typography> Gallery </Typography>
        <Typography> Blog </Typography>
        <Typography> Contact us </Typography>
      </Stack>
    </Stack>
  )
}

export default Navbar;
