import React from 'react';
import classes from "./ButtonAppointment.module.css"

const ButtonAppointment = ({children, ...props}) => {
    return (
        <button {...props} className={classes.buttonAppointment}>{children}</button>
    );
};

export default ButtonAppointment;