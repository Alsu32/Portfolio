import React from 'react';
import './App.module.scss';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {Contacts} from "./contacts/Contacts.";
import menu from "./img/menu.svg"
import style from "./App.module.scss"



function App() {

    return (
        <div className={style.app}>
            <div className={style.menu} style={{backgroundImage: `url(${menu})`}}></div>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
        </div>
    );
}

export default App;
