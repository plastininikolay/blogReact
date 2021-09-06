import React from "react";

import styles from './NewsItem.module.sass'

function NewsItem({name, date, img, short_text}) {
    return(
        <div className={styles.item}>
            <div className={styles.item__img}>
                <img alt="item img" src={img}/>
            </div>
            <div className={styles.item__text_wrapper}>
                <div className={styles.item__header}>
                    {name}
                </div>
                <div className={styles.item__date}>
                    {date}
                </div>
                <div className={styles.item__descr}>
                    {short_text}
                </div>
            </div>
        </div>
    )
}
export default NewsItem;