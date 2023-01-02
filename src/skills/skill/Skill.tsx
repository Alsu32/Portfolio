import React from 'react';
import style from './Skill.module.css'

type SkillPropsType = {
    title: string
}

const Skill = ({title}:SkillPropsType) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}>

            </div>
            <h3>{title}</h3>
        </div>
    );
};

export default Skill;