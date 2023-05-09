import React,  { useContext} from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import BodyPart from "./BodyPart";
import {Typography } from "@mui/material";
import leftArrow from "../assets/icons/left-arrow.png";
import rightArrow from "../assets/icons/right-arrow.png";



const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollPrev()} >
            <img src={leftArrow} alt="left arrow" className="left-arrow" />
        </Typography>
    )
}


const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollNext()} >
            <img src={rightArrow} alt="right arrow" className="right-arrow" />
        </Typography>
    )
    
}

const HorizontalScroll = ({ data, bodyPart, setBodyPart }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
         <BodyPart bodyPart={bodyPart} setBodyPart={setBodyPart} data={data} /> 
    </ScrollMenu>
  )
}

export default HorizontalScroll
