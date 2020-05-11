import React from 'react';
import { Field, ErrorMessage } from 'formik';
import s from './RegisterForm.module.scss';

const NewField = (headText, type, placeholder) => {
    return (
        // moved the duplicate code in other file
        <>
            <div className={s.inputWrapper}>
                <p className={s.textForField}>{headText}</p>
                <Field type={type} placeholder={placeholder} name={type} className={s.input} />
                {type === 'phone' && <p className={s.textPhoneformat}>Enter phone number in open format</p>}
                <ErrorMessage name={type} component='div' className={s.error}/>
            </div>
        </>
    )
}

export default NewField;