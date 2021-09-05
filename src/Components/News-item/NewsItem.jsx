import React from "react";
import itemImg from '../../assets/images/NewItemImg1.png'

import styles from './NewsItem.module.sass'

function NewsItem() {
    return(
        <div className={styles.item}>
            <div className={styles.item__img}>
                <img alt="item img" src={itemImg}/>
            </div>
            <div className={styles.item__text_wrapper}>
                <div className={styles.item__header}>
                    How to be more productive?
                </div>
                <div className={styles.item__date}>
                    19 May 2021, 3 comments
                </div>
                <div className={styles.item__descr}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..
                </div>
            </div>
        </div>
    )
}
export default NewsItem;