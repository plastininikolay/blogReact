import React from "react";
import style from "./SelectedPosts.module.sass"

function SelectedPost({name, date, img, short_text}) {
    const bacStyle = {backgroundImage: `url(${img})`}
    return (
            <div className={style.post__layer} >
                <div className={style.post__background} style={bacStyle}></div>
                <div className={style.post__title}>{name}</div>
                <div className={style.post__date}>{date}</div>
                <div className={style.post__text}>{short_text}</div>
            </div>
    )
}
export default SelectedPost;