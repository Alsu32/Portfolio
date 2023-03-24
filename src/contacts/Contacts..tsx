import React from 'react';
import style from './Contacts.module.scss'
import {Title} from "../common/title/Title";


export const Contacts = () => {
    return (
        <div className={style.contactBlock}>
            <div className={style.contactsContainer}>
                <Title title="CONTACT"/>
                <div className={style.contact}>
                    <div>
                        <strong>FULL NAME:</strong> Alsu T.Kirillova<br/>
                        <strong>BIRTHDAY:</strong> 15. 01. 1988.<br/>
                        <strong>ADDRESS:</strong> Some Street Moscow, Russia
                    </div>
                    <div>
                        <strong>PHONE:</strong> +7(909)985 **** <br/>
                        <strong>EMAIL:</strong> sai-alsu@mail.ru<br/>
                        <strong>WEBSITE:</strong> ---
                    </div>
                </div>
                <div className={style.formContainer}>
                    <form className={style.form}>
                        <input type="text" placeholder="NAME" className={style.input}/>
                        <input type="text" placeholder="EMAIL" className={style.input}/>
                        <input type="text" placeholder="SUBJECT" className={style.input}/>
                        <textarea placeholder="MESSAGE" className={style.textarea}/>
                    </form>
                    <button type="submit" className={style.button}>Отправить</button>
                </div>
            </div>
        </div>
    )
}


