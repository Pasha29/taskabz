import React from 'react';
import s from './RegisterForm.module.scss';

const SuccessRegisterWindow = ({hideModal}) => {
    return (
        <div className={s.successModalWindow}>
            <div className={s.firstBlock}>
                <p>Congratulation</p>
                <button onClick={() => { hideModal(false) }}>&#10006;</button>
            </div>
            <div className={s.borderBlock}></div>
            
            <div className={s.secondBlock}>
                <p>You have successfully passed the registration</p>
            </div>
            <div className={s.borderBlock}></div>

            <div className={s.thirdBlock}>
                <button onClick={() => { hideModal(false) }}>Great</button>
            </div>
        </div>
    )
}

export default SuccessRegisterWindow;