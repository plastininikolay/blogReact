import React from "react";
import styles from "./Post.module.sass"
import FooterLinks from "../FooterLinks/FooterLinks";

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
                    {news.comments.map((comment, idx) =>
                        <div key={idx} className={styles.comments__item}>
                            <img src={comment.avatar}  alt="avatar icon"/>
                            <div className={styles.comments__item_wrapper}>
                                <div className={styles.comments__item_text}>{comment.comment}</div>
                                <div className={styles.comments__item_date}>{comment.date}</div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </>

    )
}

export default PostContent;