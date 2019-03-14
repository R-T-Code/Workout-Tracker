import React from 'react';
import style from './index.module.scss';

const Welcome = (props) => {
    return (
        <div className={style.welcome}>
            <h1 className={style.heading}>Welcome to LifTrack</h1>
            <p>Please start by creating Your first workout.</p>
        </div>
    );
};

export default Welcome;