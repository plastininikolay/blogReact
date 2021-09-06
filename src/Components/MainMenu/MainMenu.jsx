import React from "react";

import styles from './MainMenu.module.sass'

function MainMenu({openMenu, setOpenMenu, setOpenContact, buttonRef, contactRef}) {
    const menuRef = React.useRef(null);

    React.useEffect(()=> {
        const outSideClickHandlerMenu = (event) => {
            const path = event.path || (event.composedPath && event.composedPath());
            if (!path.includes(buttonRef.current) && !path.includes(menuRef.current) && !path.includes(contactRef.current)){ 
                setOpenMenu(false);
                setOpenContact(false);
            }
            
        };
        document.body.addEventListener('click', outSideClickHandlerMenu)
    },[buttonRef, contactRef, setOpenContact, setOpenMenu]);
    
    return(
            <div ref={menuRef} className={openMenu === false ? styles.menu : styles.menu + ' ' + styles.menu_opened}>
                <ul>
                    <li><a href="https://www.google.ru/">Категории</a></li>
                    <li><a href="https://www.google.ru/">О нас</a></li>
                    <li><button onClick={() => setOpenContact(true)}>Контакты</button></li>
                </ul>
            </div>
    )
}
export default MainMenu;