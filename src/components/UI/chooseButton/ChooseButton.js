import React from 'react';
import classes from "./ChooseButton.module.css";

const ChooseButton = ({focused, text, children, ...props}) => {

    const classList = [classes.btn]

    if (focused) {
        classList.push(classes.chosen)
    }

    return (
        <div className={classList.join(" ")} {...props}>
            {children}
            <div className="">{text}</div>
        </div>
    );
};

export default ChooseButton;