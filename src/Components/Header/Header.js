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
                {window.innerWidth === 360 ?
                <div></div> :
                 <div className={s.headerMenu}>
                    <p><a href="#aboutMe">About me</a></p>
                    <p><a href="#relationships">Relationships</a></p>
                    <p><a href="#requirements">Requirements</a></p>
                    <p><a href="#users">Users</a></p>
                    <p><a href="#signUp">Sign Up</a></p>
                </div>}
            </div>
        </div>
    )
}

export default Header;