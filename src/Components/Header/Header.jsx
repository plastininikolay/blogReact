import React from "react";
import styles from './Header.module.sass'
import userSvg from '../../assets/icons/user-avatar.svg'
import { Link } from "react-router-dom";

function Header({setOpenMenu, openMenu, setOpenModal, setOpenContact, IconRef, buttonRef}) {

    const setToggleHandlerMenu = () => {setOpenMenu(!openMenu); setOpenContact(false)};

    
    return(
        <header className={styles.header}>
            <div className={styles.header__wrapper}>
                <button ref={buttonRef} onClick={setToggleHandlerMenu} className={openMenu === false ? styles.burger__menu : styles.burger__menu + ' ' + styles.burger__menu_opened}></button>
                <Link to="/" className={styles.header__logo}>BlogX</Link>
                <button ref={IconRef} onClick={() => setOpenModal(true)} className={styles.header__icon}>
                    <img src={userSvg} alt="user icon"/>
                </button>
            </div>
        </header>
    )
}
export default Header;
