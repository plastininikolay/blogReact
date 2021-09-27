import React from "react";
import styles from "./Post.module.sass";

function EmptyPost() {
    return (
        <div className={styles.post}>
            <div className={styles.post__h2}></div>
            <div className={styles.post__empty_date}>

            </div>
            <div className={styles.post__empty_img}>

            </div>
            <div className={styles.post__h4}></div>
        </div>
    )
}

export default EmptyPost;