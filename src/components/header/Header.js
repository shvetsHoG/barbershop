import React from 'react';
import ButtonAppointment from "../UI/buttons/appointment/ButtonAppointment";
import HeaderLinks from "./HeaderLinks";
import classes from "./Header.module.css";

const Header = ({img}) => {
    return (
        <div className={classes.appHeaderWrapper}>
            <div className={classes.appHeader}>
                <div className={classes.appHeaderImg}></div>
                <HeaderLinks />
                <ButtonAppointment>ОНЛАЙН-ЗАПИСЬ</ButtonAppointment>
            </div>
        </div>
    );
};

export default Header;