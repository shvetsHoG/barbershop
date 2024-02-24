import React from 'react';
import ButtonAppointment from "../UI/buttons/appointment/ButtonAppointment";
import ButtonApplication from "../UI/buttons/application/ButtonApplication";

const ContentFirst = ({mainImg}) => {
    return (
        <div className="content1_wrapper">
            <div className="content1">
                <div className="content1_text">
                    <div className="content1_text_wrapper">
                        <div className="content1_text-1">КАЧЕСТВЕННЫЕ МУЖСКИЕ</div>
                        <div className="content1_text-2">СТРИЖКИ</div>
                        <div className="content1_text-3">ЗА 30 МИНУТ</div>
                        <div className="content1_text-3">700 РУБЛЕЙ</div>
                    </div>
                    <div className="content1_text-btns">
                        <ButtonAppointment>ОНЛАЙН-ЗАПИСЬ</ButtonAppointment>
                        <ButtonApplication>ОСТАВИТЬ ЗАЯВКУ</ButtonApplication>
                    </div>
                </div>
                <div className="content1_img">
                    <img src={mainImg} alt="das"/>
                </div>
                <div className="content1_abbr">
                    <div className="content1_abbr-1">Для тех, кто</div>
                    <div className="content1_abbr-2">ценит время</div>
                    <div className="content1_abbr-2">и деньги</div>
                </div>
            </div>
        </div>
    );
};

export default ContentFirst;