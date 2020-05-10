import React from 'react';
import s from './MainBanner.module.scss';
import banner from './../../CommonFiles/Assets/banner-photo.jpg';

let MainBanner = () => {
    return (
        <div className={s.container} id="requirements">
            <div className={s.wrapper}>
               <div className={s.imgWrapper}>
                    <img src={banner} className={s.imgBanner} alt=""/>
                </div>
                <div className={s.infoWrapper}>
                    <p className={s.headerText}>TEST ASSIGNMENT FOR FRONTEND DEVELOPER POSITION</p>
                    <p className={s.mainText}>We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck! The photo has to scale in the banner area on the different screens</p>
                    <button className={s.btnSingUp}>
                        <a href="#formAnchor">Sing up now</a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MainBanner;