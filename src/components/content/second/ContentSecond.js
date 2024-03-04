import React from 'react';
import classes from "./ContentSecond.module.css";

const ContentSecond = () => {
    return (
        <div className={classes.contentWrapper}>
            <div className={classes.content}>
                <div className={classes.text}>
                    <span className={classes.coloredText}>
                        НИЧЕГО <br/>
                        ЛИШНЕГО
                    </span>
                </div>
                <div className={classes.img1}>
                    <div className={classes.spans}>
                        <div className={classes.span1}>
                            <span>СТРИЖКА</span>
                        </div>
                        <div className={classes.span2}>
                            <span>700</span>
                        </div>
                    </div>
                </div>
                <div className={classes.img2}>
                    <div className={classes.spans}>
                        <div className={classes.span1}>
                            <span>ОФОРМЛЕНИЕ БОРОДЫ</span>
                        </div>
                        <div className={classes.span2}>
                            <span>400</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentSecond;