import React from 'react';
import style from './Header.module.scss'
import Nav from "./nav/Nav";
import Footer from "../footer/Footer";

export const Header = () => {
    return (
        <div className={style.header}>
            <Nav/>
            <Footer/>
        </div>
    );
};
