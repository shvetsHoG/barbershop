import React from 'react';
import classes from "./ContentSixth.module.css";
import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps';

const ContentSixth = () => {

    const width = 760;
    const height = 440;

    return (
        <YMaps>
            <div className={classes.wrapper}>
                <div className={classes.content}>
                    <div className={classes.text}>
                        <div className={classes.find}>КАК НАС <br/> НАЙТИ</div>
                        <div className={classes.adress}>Москва, Оршанская ул., 3</div>
                        <div className={classes.phone}>+7 (904) 299-79-42</div>
                        <div className={classes.time}>09:00 - 19:45</div>
                    </div>
                    <Map width={width} height={height} defaultState={{ center: [55.73983148027906,37.40803125150202], zoom: 16 }} >
                        <Placemark geometry={[55.739861743845864,37.407923963141414]} />
                    </Map>
                </div>
            </div>
        </YMaps>
    );
};

export default ContentSixth;