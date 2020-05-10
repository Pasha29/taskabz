import React, { useState } from 'react';
import s from './RegisterForm.module.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import NewField from './NewField';
// import NewField from './NewField';
// import { getData } from './../../Api/api';

let RegisterForm = ({arrayOfRadioData, addNewUserTC}) => {
    let [fileName, setFileName] = useState('Upload your photo');
    
    return (
    <div className={s.container} id="signUp">
        <div className={s.wrapper}>
        <div className={s.headerContainer}>
            <p className={s.mainHeader} id='formAnchor'>Register to get a work</p>
            <p className={s.secondaryHeader}>
                Attention! After successful registration and alert, update the list of users in the block from the top
            </p>
        </div>
        <div className={s.registerFormWrapper}>
            <Formik initialValues={{ email: '', name: '', phone: '', position: '', image: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    }
                    if (!values.name) {
                        errors.name = 'Required';
                    }
                    if (!/^\+380[0-9]{9}$/i.test(values.phone)) {
                        errors.phone = 'not correct';
                    }
                    if (!values.phone) {
                        errors.phone = 'Required';
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
                onSubmit={(values) => { 
                    // getData.getToken();
                    console.log('values');
                    console.log(values);
                    addNewUserTC(values);
                 }}
                 render={({ setFieldValue }) => {
                    return (
                    <Form className={s.formClass}>

                        {NewField('Name', 'name', 'Your name')}
                        {NewField('Email', 'email', 'Your email')}
                        {NewField('Phone number', 'phone', '+380 XX XXX XX XX')}
                        
                        <div className={s.inputWrapper}>
                            <div className={s.checkBoxWrapper}>
                                <p className={s.textForCheckBox}>Select your position</p>
                                {arrayOfRadioData.map( item => 
                                    <div className={s.eachCheckbox} key={item.id}>
                                        <Field type='radio' name='position' id={item.id} value={`${item.id}`} className={s.checkBox} />
                                        <label htmlFor={item.id}>{item.name}</label>
                                    </div>
                                )}
                                <ErrorMessage name='position' component='div' className={s.error}/>
                            </div>
                        </div>

                        <div className={s.inputWrapper}>
                            <div className={s.fileWrapper}>
                                <p className={s.textForField}>Photo</p>
                                <div className={s.uploadPhotoWrapper}>
                                    <Field type='file' name='photo' id='file' className={s.input} 
                                     onChange={(event) => {
                                         setFieldValue("image", event.currentTarget.files[0]);
                                         setFileName(event.target.files[0].name);
                                    }}/>
                                    <p className={s.fileplaceholder}>{fileName}</p>
                                    <label className={s.buttonFile} htmlFor="file">Browse</label>
                                    <ErrorMessage name='image' component='div' className={s.error}/>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className={s.btnSingUp}>Sing up now</button>
                    </Form>)
                 }
                 }>
                {/* {() => (
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
                                 {arrayOfRadioData.map( item => 
                                     <div className={s.eachCheckbox} key={item.id}>
                                         <Field type='radio' name='position' id={item.id} value={`${item.id}`} className={s.checkBox} />
                                         <label htmlFor={item.id}>{item.name}</label>
                                         <ErrorMessage name='position' component='div' />
                                     </div>
                                 )}
                             </div>
                         </div>

                         <div className={s.inputWrapper}>
                             <div className={s.fileWrapper}>
                                 <p className={s.textForField}>Photo</p>
                                 <div className={s.uploadPhotoWrapper}>
                                     <Field type='file' name='photo' id='file' className={s.input} 
                                      onChange={(event) => { setFieldValue("file", event.currentTarget.files[0]); }}
                                     //  onChange={(event) => { getPhotoFile(event) }}
                                     />
                                     <p className={s.fileplaceholder}>{fileName}</p>
                                     <label className={s.buttonFile} htmlFor="file">Browse</label>
                                     <ErrorMessage name='photo' component='div' />
                                 </div>
                             </div>
                         </div>
                         <button type="submit" className={s.btnSingUp}>Sing up now</button>
                     </Form>
                 )} */}
            </Formik>
        </div>
      </div>
    </div>
    )
}

export default RegisterForm;