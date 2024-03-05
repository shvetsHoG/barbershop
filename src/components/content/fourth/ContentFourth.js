import React from 'react';
import Img from "../../UI/img/Img";
import image from "../../../images/fourthImg.jpg"
import classes from "./ContentFourth.module.css";
import Box from "../../UI/box/Box";

const ContentFourth = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.holder}>
                <Img url={image}/>
                <Img url={image}/>
                <Img url={image}/>
                <Img url={image}/>
                <Img url={image}/>
                <div className={classes.boxWrapper}>
                    <Box child1Up={"ХОЧЕШЬ"} child1Down={"ТАК ЖЕ?"} child2={"ОНЛАЙН-ЗАПИСЬ"}/>
                </div>
            </div>
        </div>
    );
};

export default ContentFourth;