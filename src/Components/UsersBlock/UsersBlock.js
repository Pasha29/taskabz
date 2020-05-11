import React, { useState } from 'react';
import s from './UsersBlock.module.scss';
// import photo from './../../CommonFiles/Assets/photo-cover.png';

let UsersBlock = ({arrayOfUsers, getUsersFromApiTC, totalUsersCount}) => {
    // hook for show more users
    let [getMoreUsers, setgetMoreUsers] = useState(12);

    //get more users
    let getNewPageData = () => {
        getUsersFromApiTC(getMoreUsers);
        setgetMoreUsers(getMoreUsers + 6)
    }
    return (
        <div className={s.container} id="users">
            <div className={s.wrapper}>
                <div className={s.headerContainer}>
                    <p className={s.mainHeader}>Our cheerful users</p>
                    <p className={s.secondaryHeader}>Attention! Sorting users by registration date</p>
                </div>

                <div className={s.usersWrapper}>
                {arrayOfUsers.map( item =>
                    <div className={s.userBlock} key={item.id}>
                        <div className={s.imgWrapper}>
                            <img className={s.userImg} src={item.photo} alt="" />
                        </div>
                        <div className={s.infoWrapper}>
                            <p className={s.name}>{item.name}</p>
                            <p className={s.position}>{item.position}</p>
                            <div className={s.emailWrapper}>
                                <p className={s.email}>{item.email}</p>
                                <p className={s.tooltipEmail}>{item.email}</p>
                            </div>
                            <p className={s.number}>{item.phone}</p>
                        </div>
                    </div>
                    )}
                </div>
                <div className={s.btnWrapper}>
                     {totalUsersCount < getMoreUsers ? <div className={s.nobtn}></div> : <button className={s.btnShowMore} onClick={ getNewPageData }>Show more</button>}
                </div>
            </div>
        </div>
    )
}

export default UsersBlock;
