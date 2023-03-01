import React, {FC} from 'react';
import styleMain from './Project.module.scss'


export const Project: FC<ProjectPropsType> = ({title, description, style}) => {
    return (
        <div className={styleMain.project}>
            <div className={styleMain.img} style={style}>
                <a className={styleMain.button}>Смотреть</a>
            </div>
            <h3 className={styleMain.title}>{title}</h3>
            <span className={styleMain.description}>{description}</span>
        </div>
    );
};

// types
type ProjectPropsType = {
    title: string
    description: string
    style: any
}