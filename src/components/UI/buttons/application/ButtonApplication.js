import React from 'react';
import classes from "../application/ButtonApplication.module.css";

const ButtonApplication = ({children}) => {
    return (
        <button className={classes.buttonApplication}>{children}</button>
    );
};

export default ButtonApplication;