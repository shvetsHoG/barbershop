import React from 'react';
import classes from "./HeaderLinks.module.css";

const HeaderLinks = () => {
    return (
        <div className={classes.Links}>
            <div className={classes.LinksChild}>Франшиза</div>
            <div className={classes.LinksChild}>Адрес</div>
            <div className={classes.LinksChild}>+7(999) 999-99-99</div>
            <a className={classes.LinksChild} target="_blank" href="https://icons8.com">Icons by Icons8</a>
        </div>
    );
};

export default HeaderLinks;