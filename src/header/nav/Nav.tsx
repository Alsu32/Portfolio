import React from 'react';
import style from './Nav.module.scss'

const Nav = () => {
    return (
        <div className={style.nav}>
            <div className={style.nameContainer}>
                <div className={style.speciality}>FRONTEND DEVELOPER</div>
                <div className={style.name}>ALSU KIRILLOVA</div>
            </div>
            <div className={style.navPages}>
                <a href="src/header/nav/Nav">Главная</a>
                <a href="src/header/nav/Nav">Скиллы</a>
                <a href="src/header/nav/Nav">Проекты</a>
                <a href="src/header/nav/Nav">Контакты</a>
            </div>
        </div>
    );
};

export default Nav;