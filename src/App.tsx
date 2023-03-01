import React from 'react';
import './App.scss';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contacts from "./contacts/Contacts.";
import Footer from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <div className="menu">Menu</div>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
        </div>
    );
}

export default App;
