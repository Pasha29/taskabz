import React from 'react';
import s from './RegisterForm.module.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import NewField from './NewField';

let RegisterForm = () => {
    return (
    <div className={s.container}>
        <div className={s.wrapper}>
        <div className={s.headerContainer}>
            <p className={s.mainHeader}>Register to get a work</p>
            <p className={s.secondaryHeader}>
                Attention! After successful registration and alert, update the list of users in the block from the top
            </p>
        </div>
        <div className={s.registerFormWrapper}>
            <Formik initialValues={{ email: '', name: '', phone: '', position: '', photo: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    }
                    if (!values.name) {
                        errors.name = 'Required';
                    }
                    if (!/^\+380[0-9]{9}$/i.test(values.phone) ) {
                        if(!(/^\+380\s[0-9]{2}\s[0-9]{3}\s[0-9]{2}\s[0-9]{2}$/i.test(values.phone)) ) {
                            errors.phone = 'not correct';
                        }
                    }
                    if (!values.position) {
                        errors.position = 'Required';
                    }
                    // else if (
                    //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    // ) {
                    //     errors.email = 'Invalid email address';
                    // }
                    return errors;
                }}
                onSubmit={(values) => {  }}>
                {() => (
                    <Form className={s.formClass}>

                        <div className={s.inputWrapper}>
                            <p className={s.textForField}>Name</p>
                            <Field type='name' placeholder='Your name' name='name' className={s.input} />
                            <ErrorMessage name='name' component='div' />
                        </div>

                        <div className={s.inputWrapper}>
                            <p className={s.textForField}>Email</p>
                            <Field type='email' placeholder='Your email' name='email' className={s.input} />
                            <ErrorMessage name='email' component='div' />
                        </div>

                        <div className={s.inputWrapper}>
                            <p className={s.textForField}>Phone number</p>
                            <Field type='phone' placeholder='+380 XX XXX XX XX' name='phone' className={s.input} />
                            <p className={s.textPhoneformat}>Enter phone number in open format</p>
                            <ErrorMessage name='phone' component='div' />
                        </div>

                        <div className={s.inputWrapper}>
                            <div className={s.checkBoxWrapper}>
                                <p className={s.textForCheckBox}>Select your position</p>
                                
                                <div className={s.eachCheckbox}>
                                    <Field type='radio' name='position' id="val11" value="11" className={s.checkBox} />
                                    <label htmlFor="val11">Frontend developer</label>
                                    <ErrorMessage name='position' component='div' />
                                </div>

                                <div className={s.eachCheckbox}>
                                    <Field type='radio' name='position' id="val12" value="12" className={s.checkBox} />
                                    <label htmlFor="val12">Backend developer</label>
                                    <ErrorMessage name='position' component='div' />
                                </div>

                                <div className={s.eachCheckbox}>
                                    <Field type='radio' name='position' id="val13" value="13" className={s.checkBox} />
                                    <label htmlFor="val13">Designer</label>
                                    <ErrorMessage name='position' component='div' />
                                </div>

                                <div className={s.eachCheckbox}>
                                    <Field type='radio' name='position' id="val14" value="14" className={s.checkBox} />
                                    <label htmlFor="val14">QA</label>
                                    <ErrorMessage name='position' component='div' />
                                </div>
                            </div>
                        </div>

                        <div className={s.inputWrapper}>
                            <div className={s.fileWrapper}>
                                <p className={s.textForField}>Photo</p>
                                <div className={s.uploadPhotoWrapper}>
                                    <Field type='file' name='photo' id='file' className={s.input} />
                                    <p className={s.fileplaceholder}>Upload your photo</p>
                                    <label className={s.buttonFile} htmlFor="file">Browse</label>
                                    <ErrorMessage name='photo' component='div' />
                                </div>
                            </div>
                        </div>

                        <button type="submit" className={s.btnSingUp}>Sing up now</button>
                    </Form>
                )}
            </Formik>
        </div>
      </div>
    </div>
    )
}

export default RegisterForm;