import React from 'react';
import style from './Footer.module.scss'
import stylesContainer from "../common/styles/Container.module.css";


const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.footerContainer}>
                <div className={style.container}>
                    <div className={style.box}></div>
                    <div className={style.box}>git</div>
                    <div className={style.box}>in</div>
                    <div className={style.box}></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;