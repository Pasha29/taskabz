import React from 'react';
import s from './AcquaintedBlock.module.scss';
import imageManLaptop from './../../CommonFiles/Assets/man-laptop-v1.svg';

let AcquaintedBlock = () => {
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <div className={s.headerWrapper}>
                    <p className={s.mainHeader}>Let's get acquainted</p>
                </div>
                <div className={s.infoWrapper}>
                    <div className={s.imageWrapper}>
                        <img className={s.image} src={imageManLaptop} alt=""/>
                    </div>
                    <div className={s.textWrapper}>
                        <p className={s.secondaryHeader}>
                            I am cool frontend developer
                        </p>
                        <p className={s.secondaryText}>
                            We will evaluate how clean your approach to writing CSS and Javascript code is.
                            You can use any CSS and Javascript 3rd party libraries without any restriction.
                        </p>
                        <p className={s.secondaryText}>
                        If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get bonus points.
                        If you use any task runner (gulp/webpack) you will get bonus points as well.
                         Slice service directory page P​SD mockup​ into HTML5/CSS3. 
                        </p>
                        <button className={s.btnSingUp}>Sing up now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AcquaintedBlock;