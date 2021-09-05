import React from "react";

import styles from './MainMenu.module.sass'

function MainMenu({openMenu}) {
    return(
            <div className={openMenu === false ? styles.menu : styles.menu + ' ' + styles.menu_opened}>
                <ul>
                    <li><a href="#">Категории</a></li>
                    <li><a href="#">О нас</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
            </div>
    )
}
export default MainMenu;