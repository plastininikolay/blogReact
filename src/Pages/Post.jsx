import React from "react";
import { useParams } from "react-router";
import FooterLinks from "../Components/FooterLinks/FooterLinks";
import itemImg from '../assets/images/NewItemImg1.png'
import avatarImg from '../assets/images/avatarImg.png'
import styles from './Post.module.sass'

function Post() {
React.useEffect(()=>{window.scrollTo(0, 0)},[])
    const Lock = useParams()
    console.log(Lock)
    return (
        <>
            <div className={styles.post}>
                <h1>How to be more productive?</h1>
                <div className={styles.post__date}>
                    19 May 2021
                </div>
                <div className={styles.post__img}>
                    <img src={itemImg} alt="news img" />
                </div>
                <div className={styles.post__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>
            <FooterLinks/>
            <div className={styles.comments}>
                <h3>Что вы думаете?</h3>
                <form>
                    <textarea rows="5" cols="33"></textarea>
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
export default Post;