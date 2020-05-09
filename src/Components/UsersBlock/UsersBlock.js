import React from 'react';
import s from './UsersBlock.module.scss';
import photo from './../../CommonFiles/Assets/photo-cover.png';

let UsersBlock = () => {
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <div className={s.headerContainer}>
                    <p className={s.mainHeader}>Our cheerful users</p>
                    <p className={s.secondaryHeader}>Attention! Sorting users by registration date</p>
                </div>

                <div className={s.usersWrapper}>
                    <div className={s.userBlock}>
                        <div className={s.imgWrapper}>
                            <img className={s.userImg} src={photo} alt="" />
                        </div>
                        <div className={s.infoWrapper}>
                            <p className={s.name}>Maximillian</p>
                            <p className={s.position}>Leading specialist of the Control Department</p>
                            <p className={s.email}>controldepartment@gmail</p>
                            <p className={s.number}>+380 50 678 03 24</p>
                        </div>
                    </div>

                    <div className={s.userBlock}>
                        <div className={s.imgWrapper}>
                            <img className={s.userImg} src={photo} alt="" />
                        </div>
                        <div className={s.infoWrapper}>
                            <p className={s.name}>Adolph Blaine Charles David Earl Matthew Matthew</p>
                            <p className={s.position}>Contextual advertising specialist</p>
                            <p className={s.email}>adolph.blainecharles@...</p>
                            <p className={s.number}>+380 50 678 03 24</p>
                        </div>
                    </div>

                    <div className={s.userBlock}>
                        <div className={s.imgWrapper}>
                            <img className={s.userImg} src={photo} alt="" />
                        </div>
                        <div className={s.infoWrapper}>
                            <p className={s.name}>Elizabeth</p>
                            <p className={s.position}>Frontend developer</p>
                            <p className={s.email}>elisabet.front@gmail.com</p>
                            <p className={s.number}>+380 50 678 03 24</p>
                        </div>
                    </div>





                    <div className={s.userBlock}>
                        <div className={s.imgWrapper}>
                            <img className={s.userImg} src={photo} alt="" />
                        </div>
                        <div className={s.infoWrapper}>
                            <p className={s.name}>Alexander Jayden</p>
                            <p className={s.position}>Backend developer</p>
                            <p className={s.email}>alexander.back@gmail.com</p>
                            <p className={s.number}>+380 50 678 03 24</p>
                        </div>
                    </div>

                    <div className={s.userBlock}>
                        <div className={s.imgWrapper}>
                            <img className={s.userImg} src={photo} alt="" />
                        </div>
                        <div className={s.infoWrapper}>
                            <p className={s.name}>Noah</p>
                            <p className={s.position}>QA</p>
                            <p className={s.email}>noah1998@gmail.com</p>
                            <p className={s.number}>+380 50 678 03 24</p>
                        </div>
                    </div>

                    <div className={s.userBlock}>
                        <div className={s.imgWrapper}>
                            <img className={s.userImg} src={photo} alt="" />
                        </div>
                        <div className={s.infoWrapper}>
                            <p className={s.name}>Liamgrievescasey Smith Wiam</p>
                            <p className={s.position}>Lead designer</p>
                            <p className={s.email}>liamgrievescasey.smith@...</p>
                            <p className={s.number}>+380 50 678 03 24</p>
                        </div>
                    </div>





                </div>
                <div className={s.btnWrapper}>
                    <button className={s.btnShowMore}>Show more</button>
                </div>
            </div>
        </div>
    )
}

export default UsersBlock;
