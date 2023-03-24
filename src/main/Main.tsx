import React from 'react';
import style from './Main.module.scss'
import photo from "../img/photo3.jpg"

export const Main = () => {
    return (
        <div className={style.main}>
            <div className={style.container}>
                <h1 className={style.greeting}>Hello, <br/>I'm <span>Alsu<br/>Kirillova</span></h1>
                <img className={style.photo} src={photo}/>
            </div>
        </div>
    );
};
