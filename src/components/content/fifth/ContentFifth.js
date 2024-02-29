import React from 'react';
import classes from "./ContentFifth.module.css";
import Promotion from "../../UI/promotion/Promotion";

const ContentFifth = () => {
    return (
        <div className={classes.content}>
            <Promotion />
        </div>
    );
};

export default ContentFifth;