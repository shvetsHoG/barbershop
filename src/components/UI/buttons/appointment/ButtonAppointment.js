import React from 'react';
import classes from "./ButtonAppointment.module.css"

const ButtonAppointment = ({children}) => {
    return (
        <button className={classes.buttonAppointment}>{children}</button>
    );
};

export default ButtonAppointment;