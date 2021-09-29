import React from "react";
import style from "./SelectedPosts.module.sass"
import icon from "../../../assets/icons/selected.svg"
import SelectedPost from "./SelectedPost";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

function SelectedPosts() {
    const news = useSelector((state)=>state.ShortNews.items);
    return(
        <section className={style.selectedPosts}>
            <img className={style.selectedPosts__icon} src={icon} alt="selected_posts"/>
            <h2 className={style.selectedPosts__title}>Ваши избранные посты</h2>
            <div className={style.selectedPosts__grid}>
                {
                    news.map((item, idx)=><Link key={idx} className={style.post} to={`/post/${item.id}`}><SelectedPost {...item}/></Link>)
                }
            </div>
        </section>
    )
}
export default SelectedPosts;