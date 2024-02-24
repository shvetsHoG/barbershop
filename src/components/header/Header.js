import React from 'react';
import ButtonAppointment from "../UI/buttons/appointment/ButtonAppointment";
import HeaderLinks from "./HeaderLinks";

const Header = ({img}) => {
    return (
        <div className="app_header_wrapper">
            <div className="app_header">
                <div className="app_header_img">
                    <img className="app_header_img" src={img} alt="Барбершоп"/>
                </div>
                <HeaderLinks />
                <ButtonAppointment>ОНЛАЙН-ЗАПИСЬ</ButtonAppointment>
            </div>
        </div>
    );
};

export default Header;