import React from 'react';
import s from './Header.module.scss';
import logo from './../../CommonFiles/Assets/logo.svg';

let Header = () => {
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <div className={s.logoBlock}>
                    <img className={s.imageLogo} src={logo} alt="" />
                </div>
                <div className={s.headerMenu}>
                    <p>About me</p>
                    <p>Relationships</p>
                    <p>Requirements</p>
                    <p>Users</p>
                    <p>Sign Up</p>
                </div>
            </div>
        </div>
    )
}

export default Header;