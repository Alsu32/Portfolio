import React from 'react';
import style from './Skill.module.scss'

type SkillPropsType = {
    title: string
    description: string
}

const Skill = ({title, description}:SkillPropsType) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}>

            </div>
            <h3>{title}</h3>
            <span className={style.description}>{description}</span>
        </div>
    );
};

export default Skill;