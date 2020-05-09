import React from 'react';
import s from './Footer.module.scss';

let Footer = () => {
    return (
        <div className={s.container}>
            {/* <hr/> */}
            <p className={s.txtFooter}>© abz.agency specially for the test task</p>
        </div>
    )
}

export default Footer;