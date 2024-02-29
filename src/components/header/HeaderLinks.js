import React from 'react';
import classes from "./HeaderLinks.module.css";

const HeaderLinks = () => {
    return (
        <div className={classes.Links}>
            <div className={classes.LinksChild}>Адрес</div>
            <div className={classes.LinksChild}>Франшиза</div>
            <div className={classes.LinksChild}>Адрес</div>
            <div className={classes.LinksChild}>+7(9999)999-999</div>
        </div>
    );
};

export default HeaderLinks;