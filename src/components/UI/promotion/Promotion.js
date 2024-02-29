import React from 'react';
import classes from "./Promotion.module.css";

const Promotion = () => {
    return (
        <div className={classes.box}>
            <div className={classes.span}>
                <span>АКЦИИ И ПРЕДЛОЖЕНИЯ</span>
            </div>
            <div className={classes.actions}>
                <div className={classes.block}>
                    <div className={classes.img}></div>
                    <div className={classes.text}>
                        <div className={classes.first}>ПЕРВАЯ СТРИЖКА</div>
                        <div className={classes.second}>
                            <span className={classes.mark}>560 РУБ.</span>
                            <span style={{color:"white", fontSize:"16px"}}>ВМЕСТО 700 РУБ.</span>
                        </div>
                    </div>
                </div>
                <div className={classes.block}>
                    <div className={classes.img}></div>
                    <div className={classes.text}>
                        <div className={classes.first}>ПЕРВАЯ СТРИЖКА</div>
                        <div className={classes.second}>
                            <span className={classes.mark}>720 РУБ.</span>
                            <span style={{color:"white", fontSize:"16px"}}>ВМЕСТО 900 РУБ. <br/> У ТОП МАСТЕРА</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Promotion;