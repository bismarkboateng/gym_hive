import React from "react";
import { Stack } from "@mui/material";
import Equip from "../assets/images/equipment.png";

const Footer = () => {
  return (
    <Stack
      sx={{ 
        display: "flex", 
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f2f3ed",
        padding: "10px"
      }}
      gap={2}
    >
      <img src={Equip} alt="gold image" />
      <p>Made with Biscode😍</p>
    </Stack>
  )
}

export default Footer
