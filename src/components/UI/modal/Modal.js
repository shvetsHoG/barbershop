import React, {useState} from 'react';
import ChooseButton from "../chooseButton/ChooseButton";
import url from "../../../resources/properties.json"
import PostService from "../../../API/PostService";
import ModalBox from "./ModalBox";
import ButtonAppointment from "../buttons/appointment/ButtonAppointment";
import {useDispatch, useSelector} from "react-redux";
import {setChoice} from "../../../store/slices/ChoiceSlice";
import {store} from "../../../store";

const Modal = () => {

    const arrayServices = [
        "Любой специалист",
        "Амаяк",
        "Молодой мастер",
        "Андрей"
    ]

    const dispatch = useDispatch()

    const choice = useSelector(state => state.choice.value)

    const getModalMain = () =>
        <ModalBox text="ОНЛАЙН-ЗАПИСЬ">
            <ChooseButton text={"Выбрать специалиста"} onClick={() => dispatch(setChoice("specialists"))}>
                <svg width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs></defs><title/><g data-name="Layer 2" id="Layer_2"><path d="M16,29A13,13,0,1,1,29,16,13,13,0,0,1,16,29ZM16,5A11,11,0,1,0,27,16,11,11,0,0,0,16,5Z"/><path d="M16,17a5,5,0,1,1,5-5A5,5,0,0,1,16,17Zm0-8a3,3,0,1,0,3,3A3,3,0,0,0,16,9Z"/><path d="M25.55,24a1,1,0,0,1-.74-.32A11.35,11.35,0,0,0,16.46,20h-.92a11.27,11.27,0,0,0-7.85,3.16,1,1,0,0,1-1.38-1.44A13.24,13.24,0,0,1,15.54,18h.92a13.39,13.39,0,0,1,9.82,4.32A1,1,0,0,1,25.55,24Z"/></g><g id="frame"><rect fill="none" className="cls-1" height="32" width="32"/></g></svg>
            </ChooseButton>
            <ChooseButton text={"Выбрать дату и время"} onClick={() => dispatch(setChoice("specialists"))}>
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="20px" height="20px"><path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24.984375 6.9863281 A 1.0001 1.0001 0 0 0 24 8 L 24 22.173828 A 3 3 0 0 0 22 25 A 3 3 0 0 0 22.294922 26.291016 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 23.708984 27.705078 A 3 3 0 0 0 25 28 A 3 3 0 0 0 28 25 A 3 3 0 0 0 26 22.175781 L 26 8 A 1.0001 1.0001 0 0 0 24.984375 6.9863281 z"/></svg>
            </ChooseButton>
            <ChooseButton text={"Выбрать услуги"} onClick={() => dispatch(setChoice("services"))}>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="mdi-format-list-bulleted" width="20" height="20" viewBox="0 0 24 24"><path d="M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z" /></svg>
            </ChooseButton>
        </ModalBox>


    const getModalMasters = () =>
        <ModalBox text="Выбрать специалиста">
            {arrayServices.map(
                service => <ChooseButton onClick={(e) => console.log(e)}
                                         text={service} ></ChooseButton>
            )}
            <ButtonAppointment>Выбрать услугу</ButtonAppointment>
        </ModalBox>

    const getModalServices = () =>
        <ModalBox text="Выбрать услугу">
            {arrayServices.map(
                service => <ChooseButton onClick={(e) => console.log(e.target)}
                                         text={"Стрижка"} ></ChooseButton>
            )}
            <ButtonAppointment>Выбрать специалиста</ButtonAppointment>
        </ModalBox>


    const renderModal = () => {
        switch (choice) {
            case "specialists" : return getModalMasters()
                break;
            case "main": return getModalMain()
                break;
            case "services" : return getModalServices()
                break;
        }
    }

    return (renderModal());
};

export default Modal;