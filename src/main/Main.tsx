import React from 'react';
import style from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'

const Main = () => {
    return (
        <div className={style.main}>
            <div className={styleContainer.container}>
                <div className={style.greeting}>
                    <span>Hi There</span>
                    <h1>I am Alsu Kirillova</h1>
                    <span>Frontend Developer</span>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
};

export default Main;