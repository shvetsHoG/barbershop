import React from 'react';
import ButtonAppointment from "../UI/buttons/appointment/ButtonAppointment";
import HeaderLinks from "./HeaderLinks";
import image from "../../images/logo.png"
import classes from "./Header.module.css";

const Header = ({img, setModalVisible, modalVisible}) => {
    return (
        <div className={classes.appHeaderWrapper}>
            <div className={classes.appHeader}>
                <img className={classes.appHeaderImg} src={image} alt=""/>
                <HeaderLinks />
                <ButtonAppointment onClick={() => setModalVisible(true)}>ОНЛАЙН-ЗАПИСЬ</ButtonAppointment>
            </div>
        </div>
    );
};

export default Header;