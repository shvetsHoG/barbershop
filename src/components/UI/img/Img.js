import React from 'react';
import classes from "./Img.module.css";

const Img = ({url}) => {
    return (
        <div className={classes.content}>
            <img src={url} alt=""/>
        </div>
    );
};

export default Img;