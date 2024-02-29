import React from 'react';
import classes from "./ContentLast.module.css";
import Sider from "../../UI/sider/Sider";

const ContentLast = () => {
    return (
        <div className={classes.wrapper}>
            <Sider/>
            <div className={classes.content}>
                <span className={classes.alert}>ВНИМАНИЕ!</span>
                <p className={classes.miniAlert}>Это - учебный проект, не предназначенный для коммерческого использования.
                    Если вы считаете, что ваши права нарушены, напишите нам на почту, в тг, или позвоните,
                    все контактные данные ниже.
                </p>
                <div className={classes.box}>
                    <span className={classes.item}>tg: @phenx</span>
                    <span className={classes.item}>+7(904)299-79-42</span>
                    <span className={classes.item}>steamk44@gmail.com</span>
                    <span className={classes.item}>steamkl44@yandex.ru</span>
                </div>
            </div>
        </div>
    );
};

export default ContentLast;