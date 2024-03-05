import React from 'react';
import classes from "./Box.module.css";
import ButtonAppointment from "../buttons/appointment/ButtonAppointment";
import {setModalVisible} from "../../../store/slices/ModalVisibleSlice";
import {useDispatch} from "react-redux";

const Box = ({child1Up, child1Down, child2}) => {

    const dispatch = useDispatch();

    return (
        <div className={classes.box}>
            <div className={classes.wrapper}>
                <div className={classes.spans}>
                    <span>{child1Up}</span>
                    <span style={{color:"#b452ff"}}>{child1Down}</span>
                </div>
                <ButtonAppointment onClick={() => dispatch(setModalVisible(true))}>{child2}</ButtonAppointment>
            </div>
        </div>
    );
};

export default Box;