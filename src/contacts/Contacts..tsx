import React from 'react';
import style from './Skills.module.css'
import stylesContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${stylesContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'HTML'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                        'Cum, dolore ducimus magnam minus quae quaerat rerum voluptates.'}/>
                    <Skill title={'CSS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                        'Cum, dolore ducimus magnam minus quae quaerat rerum voluptates.'}/>
                    <Skill title={'JS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                        'Cum, dolore ducimus magnam minus quae quaerat rerum voluptates.'}/>
                    <Skill title={'React'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                        'Cum, dolore ducimus magnam minus quae quaerat rerum voluptates.'}/>
                    <Skill title={'Storybook'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                        'Cum, dolore ducimus magnam minus quae quaerat rerum voluptates.'}/>
                    <Skill title={'GitHub'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                        'Cum, dolore ducimus magnam minus quae quaerat rerum voluptates.'}/>
                </div>
            </div>

        </div>
    );
};

export default Skills;