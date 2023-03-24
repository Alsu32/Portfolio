import React from 'react';
import style from './Projects.module.scss'
import {Project} from "./project/Project";
import {Title} from "../common/title/Title";
import social from "../img/social.avif"
import todo from "../img/todo.png"

export const Projects = () => {

    const socialNetwork = {
        backgroundImage: `url(${social})`
    }
    const todolist = {
        backgroundImage: `url(${todo})`
    }
    const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium aut consequuntur corporis deserunt dignissimos exercitationem fuga illo incidunt ' +
        'ipsum maxime minus natus necessitatibus, nobis rerum vel velit vero! Non.'


    return (
        <div className={style.projectsBlock}>
            <div className={style.projectsContainer}>
                <Title title="PROJECT"/>
                <div className={style.projects}>
                    <Project style={todolist} title={'Todolist'} description={text}/>
                    <Project style={socialNetwork} title={'Social network'} description={text}/>
                </div>
            </div>
        </div>
    );
};

