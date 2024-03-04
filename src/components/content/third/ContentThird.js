import React from 'react';
import Sider from "../../UI/sider/Sider";
import classes from "./ContentThird.module.css";

const ContentThird = () => {
    return (
        <div className={classes.contentWrapper}>
            <Sider/>
            <div className={classes.content}>
                <div className={classes.text}>
                    <span >ЭТО СТРИЖКИ </span>
                    <span className={classes.coloredText}>НАШИХ КЛИЕНТОВ</span>
                </div>
            </div>
        </div>
    );
};

export default ContentThird;