import React, {FC} from 'react';
import style from "./Title.module.scss";

export const Title: FC<TitlePropsType> = ({title}) => {
    return (
        <div>
            <h2 className={style.title}>{title}</h2>
        </div>
    );
};

// types
type TitlePropsType = {
    title: string
}
