import React from 'react';
import classes from "./ModalBox.module.css";
import {setModalVisible} from "../../../store/slices/ModalVisibleSlice";
import {useDispatch, useSelector} from "react-redux";
import {setChoice} from "../../../store/slices/ChoiceSlice";

const ModalBox = ({text, children}) => {

    const choice = useSelector(state => state.choice.value)
    const modalVisible = useSelector(state => state.modal.value)

    const classList = [classes.wrapper];

    const btnClassList = [classes.btnWrapper]

    if (modalVisible) {
        classList.push(classes.active);
    }

    if (choice === "main") {
        btnClassList.push(classes.main)
    }

    const dispatch = useDispatch()

    const exit = () => {
        dispatch(setModalVisible(false))
        dispatch(setChoice("main"))
    }

    return (
        <div className={classList.join(" ")} onClick={() => exit()}>
            <div className={classes.contentWrapper} onClick={e => e.stopPropagation()}>
                <div className={classes.content}>
                    <div className={btnClassList.join(" ")}>
                        {choice !== "main" &&
                            <button className={classes.closeBtn} onClick={() => dispatch(setChoice("main"))}>
                                <svg className={classes.closeSvg} width="25px" height="25px" fill="#fff" id="left-arrow-backward-sign" version="1.1" viewBox="0 0 15.699 8.707" ><polygon points="15.699,3.854 1.914,3.854 5.061,0.707 4.354,0 0,4.354 4.354,8.707 5.061,8 1.914,4.854 15.699,4.854 "/></svg>
                            </button>
                        }
                        <button className={classes.closeBtn} onClick={() => exit()}>
                            <svg className={classes.closeSvg} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="25px" height="25px"><path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z"/></svg>
                        </button>
                    </div>
                    <div className={classes.text}>
                        {text}
                    </div>
                    <div className={classes.form}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalBox;