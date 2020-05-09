import React from 'react';
import { Field, ErrorMessage } from 'formik';
import s from './RegisterForm.module.scss';

const NewField = (type, name, component, text, placeholder) => {
    return (
        <>
            <p className={s.textForField}>{text}</p>
            <Field type={type} placeholder={placeholder} name={name} className={s.input} />
            <ErrorMessage name={name} component={component} />
        </>
    )
}

export default NewField;