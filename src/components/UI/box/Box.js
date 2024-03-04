import React from 'react';
import classes from "./Box.module.css";
import ButtonAppointment from "../buttons/appointment/ButtonAppointment";

const Box = ({child1Up, child1Down, child2, setModalVisible}) => {
    return (
        <div className={classes.box}>
            <div className={classes.wrapper}>
                <div className={classes.spans}>
                    <span>{child1Up}</span>
                    <span style={{color:"#b452ff"}}>{child1Down}</span>
                </div>
                <ButtonAppointment onClick={() => setModalVisible(true)}>{child2}</ButtonAppointment>
            </div>
        </div>
    );
};

export default Box;