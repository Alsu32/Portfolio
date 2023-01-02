import React from 'react';
import style from './Projects.module.css'
import stylesContainer from '../common/styles/Container.module.css'


const Projects = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${stylesContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>My projects</h2>
                <div className={style.projects}>

                </div>
            </div>

        </div>
    );
};

export default Projects;