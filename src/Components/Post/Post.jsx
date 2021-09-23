import React from "react";
import styles from "./Post.module.sass"
import FooterLinks from "../FooterLinks/FooterLinks";
import avatarImg from "../../assets/images/avatarImg.png";

function PostContent({news}) {
    return (
        <>
            <div className={styles.post}>
                <h2>{news.name}</h2>
                <div className={styles.post__date}>
                    {news.date}
                </div>
                <div className={styles.post__img}>
                    <img src={news.img} alt="news img" />
                </div>
                <h4 className={styles.post__text}>{news.text}</h4>
            </div>
            <FooterLinks/>
            <div className={styles.comments}>
                <h3>Что вы думаете?</h3>
                <form>
                    <textarea></textarea>
                    <input type="submit" value="добавить комментарий"/>
                </form>
                <div className={styles.comments__other}>

                    <div className={styles.comments__item}>
                        <img src={avatarImg}  alt="avatar icon"/>
                        <div className={styles.comments__item_wrapper}>
                            <div className={styles.comments__item_text}>Really nice post! I have applied those methods for daily.</div>
                            <div className={styles.comments__item_date}>2 hours ago</div>
                        </div>
                    </div>
                    <div className={styles.comments__item}>
                        <img src={avatarImg}  alt="avatar icon"/>
                        <div className={styles.comments__item_wrapper}>
                            <div className={styles.comments__item_text}>Really nice post! I have applied those methods for daily.</div>
                            <div className={styles.comments__item_date}>2 hours ago</div>
                        </div>
                    </div>
                    <div className={styles.comments__item}>
                        <img src={avatarImg}  alt="avatar icon"/>
                        <div className={styles.comments__item_wrapper}>
                            <div className={styles.comments__item_text}>Really nice post! I have applied those methods for daily.</div>
                            <div className={styles.comments__item_date}>2 hours ago</div>
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}

export default PostContent;