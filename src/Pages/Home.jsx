import React from "react";
import NewsItem from "../Components/News-item/NewsItem";
import EmptyItem from "../Components/Empty-item/EmtyItem";
import styles from './Home.module.sass'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {fetchNews} from '../Store/Actions/ShortNews';


function Home() {
    const dispatch = useDispatch();
    const news = useSelector((state)=>state.ShortNews.items);
    const isLoaded = useSelector((state)=>state.ShortNews.isLoaded);

    const emptyArr = [1, 2, 3, 4]

    React.useEffect(()=>{
        dispatch(fetchNews());
    },[dispatch])
    return (
        <div className={styles.items_wrapper}>
            {
                isLoaded === false ? emptyArr.map((item, idx)=><EmptyItem key={idx}/>) :
                news.map((item, idx)=><Link key={idx} className={styles.item__link} to={`/post/${item.id}`}><NewsItem {...item}/></Link>)
            }
      
        </div>
    )
}
export default Home;