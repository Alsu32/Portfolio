import React from 'react';
import style from './Footer.module.scss'


const Footer = () => {
    return (
        <div>
            <div className={style.footerContainer}>
                <div className={style.box}></div>
                <div className={style.box}>git</div>
                <div className={style.box}>in</div>
                <div className={style.box}></div>
            </div>
        </div>
    );
};

export default Footer;