import React from 'react';
import ButtonAppointment from "../../UI/buttons/appointment/ButtonAppointment";
import ButtonApplication from "../../UI/buttons/application/ButtonApplication";
import classes from "./ContentFirst.module.css";

const ContentFirst = ({setModalVisible}) => {
    return (
        <div className={classes.contentWrapper}>
            <div className={classes.content}>
                <div className={classes.contentFirst}>
                    <div className={classes.contentFirstText}>
                        <span style={{fontSize:"20px", color:"white", fontWeight:"900", lineHeight:"25px"}}>КАЧЕСТВЕННЫЕ МУЖСКИЕ</span>
                        <span style={{fontSize:"56px", color:"white", fontWeight:"900", fontStyle:"italic"}}>СТРИЖКИ</span>
                        <span style={{fontSize:"56px", color:"#470087", fontWeight:"900", fontStyle:"italic"}}>ЗА 30 МИНУТ</span>
                        <span style={{fontSize:"56px", color:"#470087", fontWeight:"900", fontStyle:"italic"}}>700 РУБЛЕЙ</span>
                    </div>
                    <div className={classes.btns}>
                        <ButtonAppointment onClick={() => setModalVisible(true)}>ОНЛАЙН-ЗАПИСЬ</ButtonAppointment>
                        <ButtonApplication>ОСТАВИТЬ ЗАЯВКУ</ButtonApplication>
                    </div>
                </div>
                <div className={classes.contentSecond}>
                    <div className={classes.img}></div>
                    <div className={classes.contentSecondText}>
                        <span style={{fontSize:"18px", color:"white", fontWeight:"bold"}}>Для тех, кто</span>
                        <span style={{fontSize:"18px", color:"#470087", fontWeight:"bold"}}>ценит время</span>
                        <span style={{fontSize:"18px", color:"#470087", fontWeight:"bold"}}>и деньги</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentFirst;