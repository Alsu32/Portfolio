import React from 'react';
import style from './Skills.module.scss'
import Skill from "./skill/Skill";
import {Title} from "../common/title/Title";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={style.skillsContainer}>
                <Title title="SKILLS"/>
                <div className={style.skills}>
                    <Skill title={'REACT'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                        'Cum, dolore ducimus magnam minus quae quaerat rerum voluptates.'}/>
                    <Skill title={'REDUX'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                        'Cum, dolore ducimus magnam minus quae quaerat rerum voluptates.'}/>
                    <Skill title={'JS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                        'Cum, dolore ducimus magnam minus quae quaerat rerum voluptates.'}/>
                    <Skill title={'TypeScript'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                        'Cum, dolore ducimus magnam minus quae quaerat rerum voluptates.'}/>
                    {/*<Skill title={'HTML'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                        'Cum, dolore ducimus magnam minus quae quaerat rerum voluptates.'}/>
                    <Skill title={'CSS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                        'Cum, dolore ducimus magnam minus quae quaerat rerum voluptates.'}/>*/}
                    <Skill title={'RestAPI'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                        'Cum, dolore ducimus magnam minus quae quaerat rerum voluptates.'}/>
                    <Skill title={'Material UI'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                        'Cum, dolore ducimus magnam minus quae quaerat rerum voluptates.'}/>
                    <Skill title={'Storybook'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                        'Cum, dolore ducimus magnam minus quae quaerat rerum voluptates.'}/>

                </div>
            </div>
        </div>
    );
};
