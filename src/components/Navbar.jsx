import React from "react";
import { Box, Stack, Typography } from "@mui/material";


const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" alignItems="center"
      sx={{background: "linear-gradient(90deg, rgba(27,26,26,0.8715861344537815) 0%, rgba(38,32,38,0.9416141456582633) 17%, rgba(48,46,46,0.9640231092436975) 30%, rgba(41,39,39,0.908000700280112) 44%, rgba(73,65,65,1) 60%, rgba(186,44,44,1) 100%)",
        paddingTop: "20px", paddingBottom: "20px", color: "#fff",
        fontWeight: "700"
      }}
    >
      <Box sx={{ border: "2px solid #fff", padding: "10px 20px"}}>
         FITNESS<br /> CLUB <span style={{fontWeight: "700", color: "red"}}>.</span>
      </Box>

      <Stack direction="row" gap={3}>
        <Typography color="red" className="link-hover"> Home </Typography>
        <Typography className="link-hover"> About us </Typography>
        <Typography className="link-hover"> Gallery </Typography>
        <Typography className="link-hover"> Blog </Typography>
        <Typography className="link-hover"> Contact us </Typography>
      </Stack>
    </Stack>
  )
}

export default Navbar;