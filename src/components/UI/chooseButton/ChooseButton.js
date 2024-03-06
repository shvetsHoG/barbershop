import React, {useEffect, useState} from 'react';
import classes from "./ChooseButton.module.css";
import {setAllFalse, setTrueById} from "../../../store/slices/ClassListSlice";
import {useDispatch} from "react-redux";

const ChooseButton = ({focus, id, text, children, ...props}) => {

    const dispatch = useDispatch();

    const [classList, setClassList] = useState([classes.btn])

    useEffect(() => {
        if (focus) {
            setClassList([classes.btn, classes.chosen])
        } else {
            setClassList([classes.btn])
        }
    }, [focus]);

    const toggle = (id) => {
        if (!focus) {
            dispatch(setAllFalse())
            dispatch(setTrueById(id))
            setClassList([...classList, classes.chosen])
        } else {
            dispatch(setAllFalse())
            setClassList([classes.btn])
        }
    }

    return (
        <div className={classList.join(" ")} onClick={() => toggle(id)} {...props}>
            {children}
            <div className="">{text}</div>
        </div>
    );
};

export default ChooseButton;