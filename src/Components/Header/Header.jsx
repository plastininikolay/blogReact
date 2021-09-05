import React from "react";
import styles from './Header.module.sass'
import userSvg from '../../assets/icons/user-avatar.svg'

function Header({setOpenMenu, openMenu, setOpenModal, IconRef}) {

    const buttonRef = React.useRef(null);
    const setToggleHandlerMenu = () => setOpenMenu(!openMenu);
     const outSideClickHandlerMenu = (event) => {
         const path = event.path || (event.composedPath && event.composedPath());
         if (!path.includes(buttonRef.current)){ 
             setOpenMenu(false);
         }
     };


     React.useEffect(()=> {document.body.addEventListener('click', outSideClickHandlerMenu)},[]);

    
    return(
        <header className={styles.header}>
            <div className={styles.header__wrapper}>
                <div ref={buttonRef} onClick={setToggleHandlerMenu} className={openMenu === false ? styles.burger__menu : styles.burger__menu + ' ' + styles.burger__menu_opened}></div>
                <div className={styles.header__logo}>BlogX</div>
                <div onClick={() => setOpenModal(true)} className={styles.header__icon}>
                    <img  ref={IconRef} src={userSvg}/>
                </div>
            </div>
        </header>
    )
}
export default Header;
