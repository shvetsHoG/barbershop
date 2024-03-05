import React from 'react';
import ContentFirst from "./first/ContentFirst";
import ContentSecond from "./second/ContentSecond";
import classes from "./Content.module.css";
import ContentThird from "./third/ContentThird";
import ContentFourth from "./fourth/ContentFourth";
import ContentFifth from "./fifth/ContentFifth";
import ContentSixth from "./sixth/ContentSixth";
import ContentLast from "./last/ContentLast";
import Modal from "../UI/modal/Modal";

const Content = ({secondImg, thirdImg}) => {

    return (
        <div className={classes.ContentWrapper}>
            <div className={classes.Content}>
                <ContentFirst/>
                <Modal />
                <ContentSecond secondImg={secondImg} thirdImg={thirdImg}/>
                <ContentThird />
                <ContentFourth />
                <ContentFifth />
                <ContentSixth />
                <ContentLast />
            </div>
        </div>
    );
};

export default Content;