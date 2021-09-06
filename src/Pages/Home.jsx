import React from "react";
import NewsItem from "../Components/News-item/NewsItem";
import styles from './Home.module.sass'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {fetchNews} from '../Store/Actions/ShortNews';


function Home() {
    const dispatch = useDispatch();
    const news = useSelector((state)=>state.ShortNews.items);
    const isLoaded = useSelector((state)=>state.ShortNews.isLoaded);

    React.useEffect(()=>{
        dispatch(fetchNews());
    },[dispatch])
    console.log( isLoaded)
    return (
        <div className={styles.items_wrapper}>
            {news.map((item, idx)=><Link key={idx} className={styles.item__link} to={`/post/${item.id}`}><NewsItem {...item}/></Link>)}
      
        </div>
    )
}
export default Home;