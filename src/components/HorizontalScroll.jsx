import React,  { useContext} from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu/dist/types";
import BodyPart from "./BodyPart";
import { Box, Typography } from "@mui/material";
import LeftArrow from "../assets/icons/left-arrow.png";
import RightArrow from "../assets/icons/right-arrow.png";



const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollPrev()} >
            <img src={LeftArrow} alt="left arrow" />
        </Typography>
    )
}


const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollNext()} >
            <img src={RightArrow} alt="right arrow" />
        </Typography>
    )
    
}

const HorizontalScroll = () => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        <Box>
         <BodyPart />
        </Box>
 
    </ScrollMenu>
  )
}

export default HorizontalScroll
