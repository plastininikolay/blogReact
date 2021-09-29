import React from "react";

import styles from './EmptyItem.module.sass'

function EmptyItem() {
    return(
        <div className={styles.item}>
            <div className={styles.item__img}>

            </div>
            <div className={styles.item__text_wrapper}>
                <div className={styles.item__header}>
                   
                </div>
                <div className={styles.item__date}>
                    
                </div>
                <div className={styles.item__descr}>
                  
                </div>
            </div>
        </div>
    )
}
export default EmptyItem;